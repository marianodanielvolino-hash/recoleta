/**
 * COMMUNITY.JS — Módulo de Comunidades del Portal Recoleta
 * Gestiona: listado, filtros, detalle, unirse/salir, publicar, auth UI.
 * Depende de: auth.js, communities.js
 */

const CommunityModule = (() => {

  // ── Estado ───────────────────────────────────────────────
  let activeCategory = 'all';
  let openCommunityId = null;

  // ── Utilidades ───────────────────────────────────────────
  function badgeLabel(badge) {
    if (badge === 'popular') return '<span class="cm-badge cm-badge--popular">Popular</span>';
    if (badge === 'new')     return '<span class="cm-badge cm-badge--new">Nuevo</span>';
    if (badge === 'active')  return '<span class="cm-badge cm-badge--active">Activo</span>';
    return '';
  }

  function getCommunityById(id) {
    return (typeof RECOLETA_COMMUNITIES !== 'undefined')
      ? RECOLETA_COMMUNITIES.find(c => c.id === id) || null
      : null;
  }

  function getFiltered(category) {
    if (typeof RECOLETA_COMMUNITIES === 'undefined') return [];
    return category === 'all'
      ? RECOLETA_COMMUNITIES
      : RECOLETA_COMMUNITIES.filter(c => c.category === category);
  }

  // ── Auth UI ──────────────────────────────────────────────
  function updateAuthUI() {
    const user = RecoletaAuth.getUser();
    const loginBtn   = document.getElementById('auth-login-btn');
    const userMenu   = document.getElementById('auth-user-menu');
    const userName   = document.getElementById('auth-user-name');
    const userAvatar = document.getElementById('auth-user-avatar');

    if (user) {
      if (loginBtn)   loginBtn.style.display   = 'none';
      if (userMenu)   userMenu.style.display   = 'flex';
      if (userName)   userName.textContent     = user.name.split(' ')[0];
      if (userAvatar) userAvatar.textContent   = user.avatar;
    } else {
      if (loginBtn)   loginBtn.style.display   = '';
      if (userMenu)   userMenu.style.display   = 'none';
    }

    // Actualizar botones de unirse en la sección abierta
    refreshJoinButtons();
  }

  function refreshJoinButtons() {
    document.querySelectorAll('[data-join-btn]').forEach(btn => {
      const cid = btn.dataset.joinBtn;
      const inCommunity = RecoletaAuth.isInCommunity(cid);
      if (inCommunity) {
        btn.textContent = '✓ Unido/a';
        btn.classList.add('btn--joined');
        btn.dataset.joined = 'true';
      } else {
        btn.textContent = 'Unirme';
        btn.classList.remove('btn--joined');
        btn.dataset.joined = 'false';
      }
    });
  }

  // ── Login Modal ──────────────────────────────────────────
  function openLoginModal() {
    const modal = document.getElementById('modal-auth');
    if (modal) {
      modal.classList.add('modal--open');
      document.body.classList.add('modal-open');
      const emailInput = modal.querySelector('#auth-email');
      if (emailInput) setTimeout(() => emailInput.focus(), 100);
    }
  }

  function closeLoginModal() {
    const modal = document.getElementById('modal-auth');
    if (modal) {
      modal.classList.remove('modal--open');
      document.body.classList.remove('modal-open');
      // Limpiar error
      const err = modal.querySelector('.auth-error');
      if (err) err.textContent = '';
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    const nameInput  = document.getElementById('auth-name');
    const emailInput = document.getElementById('auth-email');
    const errorEl    = document.querySelector('.auth-error');
    const name  = nameInput  ? nameInput.value.trim()  : '';
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email) {
      if (errorEl) errorEl.textContent = 'Por favor ingresá tu email.';
      return;
    }

    const result = RecoletaAuth.login(email, name);
    if (result.success) {
      closeLoginModal();
      updateAuthUI();
      showToast('¡Bienvenido/a, ' + result.user.name.split(' ')[0] + '!');
    } else {
      if (errorEl) errorEl.textContent = result.error || 'Error al ingresar.';
    }
  }

  function handleLogout() {
    RecoletaAuth.logout();
    updateAuthUI();
    showToast('Sesión cerrada.');
    // Si hay modal de perfil abierto, cerrarlo
    closeProfileModal();
  }

  // ── Profile Modal ────────────────────────────────────────
  function openProfileModal() {
    if (!RecoletaAuth.isLoggedIn()) { openLoginModal(); return; }
    const modal = document.getElementById('modal-profile');
    if (!modal) return;
    populateProfileModal();
    modal.classList.add('modal--open');
    document.body.classList.add('modal-open');
  }

  function closeProfileModal() {
    const modal = document.getElementById('modal-profile');
    if (modal) {
      modal.classList.remove('modal--open');
      document.body.classList.remove('modal-open');
    }
  }

  function populateProfileModal() {
    const user = RecoletaAuth.getUser();
    if (!user) return;
    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
    const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || ''; };

    setText('profile-avatar-big', user.avatar);
    setVal('profile-name',      user.name);
    setVal('profile-email',     user.email);
    setVal('profile-zone',      user.zone);
    setVal('profile-usertype',  user.userType);

    // Comunidades unidas
    const listEl = document.getElementById('profile-communities-list');
    if (listEl) {
      const joined = RecoletaAuth.getUserCommunities();
      if (joined.length === 0) {
        listEl.innerHTML = '<p class="profile-empty">Todavía no te uniste a ninguna comunidad.</p>';
      } else {
        listEl.innerHTML = joined.map(cid => {
          const c = getCommunityById(cid);
          return c ? `<span class="profile-community-tag">${c.icon} ${c.name}</span>` : '';
        }).join('');
      }
    }
  }

  function handleProfileSave(e) {
    e.preventDefault();
    const nameVal     = (document.getElementById('profile-name')     || {}).value || '';
    const zoneVal     = (document.getElementById('profile-zone')     || {}).value || '';
    const userTypeVal = (document.getElementById('profile-usertype') || {}).value || '';
    const result = RecoletaAuth.updateProfile({ name: nameVal, zone: zoneVal, userType: userTypeVal });
    if (result.success) {
      updateAuthUI();
      showToast('Perfil actualizado.');
      closeProfileModal();
    }
  }

  // ── Community Cards ──────────────────────────────────────
  function renderCommunityGrid() {
    const grid = document.getElementById('community-grid');
    if (!grid) return;
    const list = getFiltered(activeCategory);
    grid.innerHTML = list.map(c => renderCommunityCard(c)).join('');
    // Bind events
    grid.querySelectorAll('.cm-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const cid = card.dataset.communityId;
        if (e.target.closest('[data-join-btn]')) return; // handled below
        openCommunityDetail(cid);
      });
    });
    grid.querySelectorAll('[data-join-btn]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleJoinToggle(btn.dataset.joinBtn, btn);
      });
    });
    refreshJoinButtons();
  }

  function renderCommunityCard(c) {
    const inComm = RecoletaAuth.isInCommunity(c.id);
    return `
      <div class="cm-card" data-community-id="${c.id}" role="button" tabindex="0">
        <div class="cm-card__header">
          <span class="cm-card__icon">${c.icon}</span>
          <div class="cm-card__meta">
            <span class="cm-card__category">${c.categoryLabel}</span>
            ${badgeLabel(c.badge)}
          </div>
        </div>
        <h3 class="cm-card__name">${c.name}</h3>
        <p class="cm-card__desc">${c.description}</p>
        <div class="cm-card__footer">
          <span class="cm-card__members">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            ${c.members.toLocaleString('es-AR')} miembros
          </span>
          <button class="btn-join" data-join-btn="${c.id}" data-joined="${inComm}">
            ${inComm ? '✓ Unido/a' : 'Unirme'}
          </button>
        </div>
        <div class="cm-card__activity">Última actividad: ${c.lastActivity}</div>
      </div>`;
  }

  // ── Category Filters ─────────────────────────────────────
  function renderCategoryFilters() {
    const container = document.getElementById('community-filters');
    if (!container || typeof COMMUNITY_CATEGORIES === 'undefined') return;
    container.innerHTML = COMMUNITY_CATEGORIES.map(cat => `
      <button class="cm-filter-btn ${cat.id === activeCategory ? 'active' : ''}"
              data-category="${cat.id}">
        <span>${cat.icon}</span> ${cat.label}
      </button>`).join('');
    container.querySelectorAll('.cm-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeCategory = btn.dataset.category;
        container.querySelectorAll('.cm-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCommunityGrid();
      });
    });
  }

  // ── Join / Leave ─────────────────────────────────────────
  function handleJoinToggle(communityId, btn) {
    if (!RecoletaAuth.isLoggedIn()) {
      openLoginModal();
      return;
    }
    const inComm = RecoletaAuth.isInCommunity(communityId);
    if (inComm) {
      RecoletaAuth.leaveCommunity(communityId);
      showToast('Saliste de la comunidad.');
    } else {
      RecoletaAuth.joinCommunity(communityId);
      const c = getCommunityById(communityId);
      showToast('¡Te uniste a ' + (c ? c.name : 'la comunidad') + '!');
    }
    refreshJoinButtons();
    // Si estamos en detalle, actualizar el botón del detalle también
    refreshDetailJoinBtn(communityId);
  }

  function refreshDetailJoinBtn(communityId) {
    const btn = document.querySelector('#community-detail-join-btn');
    if (!btn || btn.dataset.communityId !== communityId) return;
    const inComm = RecoletaAuth.isInCommunity(communityId);
    btn.textContent = inComm ? '✓ Ya soy miembro' : 'Unirme a esta comunidad';
    btn.classList.toggle('btn--joined', inComm);
    const postBtn = document.getElementById('community-detail-post-btn');
    if (postBtn) postBtn.style.display = inComm ? '' : 'none';
  }

  // ── Community Detail Modal ───────────────────────────────
  function openCommunityDetail(communityId) {
    const c = getCommunityById(communityId);
    if (!c) return;
    openCommunityId = communityId;
    const modal = document.getElementById('modal-community');
    if (!modal) return;
    populateCommunityDetail(c);
    modal.classList.add('modal--open');
    document.body.classList.add('modal-open');
  }

  function closeCommunityDetail() {
    const modal = document.getElementById('modal-community');
    if (modal) {
      modal.classList.remove('modal--open');
      document.body.classList.remove('modal-open');
    }
    openCommunityId = null;
  }

  function populateCommunityDetail(c) {
    const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
    const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };

    setText('cd-name', c.name);
    setText('cd-desc', c.longDescription || c.description);
    set('cd-icon', c.icon);
    set('cd-category', `<span class="cm-badge cm-badge--cat">${c.categoryLabel}</span> ${badgeLabel(c.badge)}`);
    set('cd-members', `<strong>${c.members.toLocaleString('es-AR')}</strong> miembros · Última actividad: ${c.lastActivity}`);

    // Posts
    const postsEl = document.getElementById('cd-posts');
    if (postsEl) {
      const allPosts = [
        ...c.posts,
        ...RecoletaAuth.getUserPosts().filter(p => p.communityId === c.id).map(p => ({
          author: p.author,
          time: new Date(p.createdAt).toLocaleDateString('es-AR'),
          type: p.postType,
          text: p.text
        }))
      ];
      postsEl.innerHTML = allPosts.length
        ? allPosts.map(p => `
            <div class="cd-post">
              <div class="cd-post__header">
                <span class="cd-post__author">${p.author}</span>
                <span class="cd-post__type">${p.type}</span>
                <span class="cd-post__time">${p.time}</span>
              </div>
              <p class="cd-post__text">${p.text}</p>
            </div>`).join('')
        : '<p class="cd-empty">Todavía no hay publicaciones.</p>';
    }

    // Events
    const eventsEl = document.getElementById('cd-events');
    if (eventsEl) {
      eventsEl.innerHTML = c.events && c.events.length
        ? c.events.map(ev => `
            <div class="cd-event">
              <span class="cd-event__icon">📅</span>
              <div>
                <strong class="cd-event__title">${ev.title}</strong>
                <span class="cd-event__meta">${ev.date} · ${ev.place}</span>
              </div>
            </div>`).join('')
        : '<p class="cd-empty">No hay eventos programados.</p>';
    }

    // Rules
    const rulesEl = document.getElementById('cd-rules');
    if (rulesEl) {
      rulesEl.innerHTML = c.rules && c.rules.length
        ? '<ul>' + c.rules.map(r => `<li>${r}</li>`).join('') + '</ul>'
        : '<p class="cd-empty">Sin reglas específicas.</p>';
    }

    // Join button
    const joinBtn = document.getElementById('community-detail-join-btn');
    if (joinBtn) {
      joinBtn.dataset.communityId = c.id;
      const inComm = RecoletaAuth.isInCommunity(c.id);
      joinBtn.textContent = inComm ? '✓ Ya soy miembro' : 'Unirme a esta comunidad';
      joinBtn.classList.toggle('btn--joined', inComm);
      joinBtn.onclick = () => handleJoinToggle(c.id, joinBtn);
    }

    // Post button
    const postBtn = document.getElementById('community-detail-post-btn');
    if (postBtn) {
      postBtn.style.display = RecoletaAuth.isInCommunity(c.id) ? '' : 'none';
      postBtn.onclick = () => openPostModal(c.id);
    }
  }

  // ── Post Modal ───────────────────────────────────────────
  function openPostModal(communityId) {
    if (!RecoletaAuth.isLoggedIn()) { openLoginModal(); return; }
    const modal = document.getElementById('modal-post');
    if (!modal) return;
    modal.dataset.communityId = communityId;
    const c = getCommunityById(communityId);
    const titleEl = document.getElementById('post-modal-community-name');
    if (titleEl) titleEl.textContent = c ? c.name : '';
    // Limpiar form
    const form = document.getElementById('post-form');
    if (form) form.reset();
    const errEl = document.querySelector('.post-error');
    if (errEl) errEl.textContent = '';
    modal.classList.add('modal--open');
    document.body.classList.add('modal-open');
  }

  function closePostModal() {
    const modal = document.getElementById('modal-post');
    if (modal) {
      modal.classList.remove('modal--open');
      document.body.classList.remove('modal-open');
    }
  }

  function handlePostSubmit(e) {
    e.preventDefault();
    const modal = document.getElementById('modal-post');
    const communityId = modal ? modal.dataset.communityId : openCommunityId;
    const postType = (document.getElementById('post-type') || {}).value || 'Aviso';
    const text     = (document.getElementById('post-text') || {}).value || '';
    const errEl    = document.querySelector('.post-error');

    if (!text.trim()) {
      if (errEl) errEl.textContent = 'El texto no puede estar vacío.';
      return;
    }

    const result = RecoletaAuth.savePost({ communityId, postType, text: text.trim() });
    if (result.success) {
      closePostModal();
      showToast('¡Publicación enviada!');
      // Recargar detalle si está abierto
      if (openCommunityId === communityId) {
        const c = getCommunityById(communityId);
        if (c) populateCommunityDetail(c);
      }
    } else {
      if (errEl) errEl.textContent = result.error || 'Error al publicar.';
    }
  }

  // ── Home: Featured Communities ───────────────────────────
  function renderHomeCommunities() {
    const grid = document.getElementById('home-communities-grid');
    if (!grid || typeof RECOLETA_COMMUNITIES === 'undefined') return;
    const featured = RECOLETA_COMMUNITIES.filter(c => c.featured).slice(0, 6);
    grid.innerHTML = featured.map(c => `
      <div class="hcm-card" data-community-id="${c.id}" role="button" tabindex="0">
        <div class="hcm-card__icon">${c.icon}</div>
        <div class="hcm-card__body">
          <h4 class="hcm-card__name">${c.name}</h4>
          <p class="hcm-card__members">${c.members.toLocaleString('es-AR')} miembros</p>
        </div>
        <span class="hcm-card__arrow">→</span>
      </div>`).join('');
    grid.querySelectorAll('.hcm-card').forEach(card => {
      card.addEventListener('click', () => {
        window.location.hash = '#/comunidades';
        setTimeout(() => openCommunityDetail(card.dataset.communityId), 350);
      });
    });
  }

  // ── Toast ────────────────────────────────────────────────
  function showToast(msg) {
    let toast = document.getElementById('cm-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cm-toast';
      toast.className = 'cm-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('cm-toast--show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('cm-toast--show'), 3000);
  }

  // ── Bind all modal close buttons ─────────────────────────
  function bindModalClose() {
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.closeModal;
        if (target === 'modal-auth')      closeLoginModal();
        if (target === 'modal-profile')   closeProfileModal();
        if (target === 'modal-community') closeCommunityDetail();
        if (target === 'modal-post')      closePostModal();
      });
    });

    // Close on backdrop click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeLoginModal();
          closeProfileModal();
          closeCommunityDetail();
          closePostModal();
        }
      });
    });

    // ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLoginModal();
        closeProfileModal();
        closeCommunityDetail();
        closePostModal();
      }
    });
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    bindModalClose();
    updateAuthUI();
    renderHomeCommunities();

    // Auth form
    const authForm = document.getElementById('auth-form');
    if (authForm) authForm.addEventListener('submit', handleLogin);

    // Login btn
    const loginBtn = document.getElementById('auth-login-btn');
    if (loginBtn) loginBtn.addEventListener('click', openLoginModal);

    // Logout btn
    const logoutBtn = document.getElementById('auth-logout-btn');
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    // Profile btn
    const profileBtn = document.getElementById('auth-profile-btn');
    if (profileBtn) profileBtn.addEventListener('click', openProfileModal);

    // Profile form save
    const profileForm = document.getElementById('profile-form');
    if (profileForm) profileForm.addEventListener('submit', handleProfileSave);

    // Post form submit
    const postForm = document.getElementById('post-form');
    if (postForm) postForm.addEventListener('submit', handlePostSubmit);

    // Render communities section (if already on that route)
    if (window.location.hash === '#/comunidades') {
      renderCommunitySection();
    }
  }

  function renderCommunitySection() {
    renderCategoryFilters();
    renderCommunityGrid();
  }

  return {
    init,
    renderCommunitySection,
    renderHomeCommunities,
    openLoginModal,
    openCommunityDetail,
    updateAuthUI,
    showToast
  };
})();

// Auto-init cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  if (typeof RecoletaAuth !== 'undefined' && typeof RECOLETA_COMMUNITIES !== 'undefined') {
    CommunityModule.init();
  }
});
