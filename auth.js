/**
 * AUTH.JS — Módulo de Autenticación del Portal Recoleta
 *
 * MODO ACTUAL: Demo / localStorage
 * Los datos se guardan localmente en el navegador del usuario.
 * No se transmite información a ningún servidor externo.
 *
 * ──────────────────────────────────────────────────────────
 * PARA PRODUCCIÓN — reemplazar con uno de estos servicios:
 *   · Supabase Auth:  https://supabase.com/docs/guides/auth
 *   · Firebase Auth:  https://firebase.google.com/docs/auth
 *   · Clerk:          https://clerk.com/docs
 *   · Auth0:          https://auth0.com/docs
 *
 * Pasos de migración:
 *   1. Crear proyecto en el proveedor elegido
 *   2. Reemplazar RecoletaAuth.register() y login() con sus SDK
 *   3. Cambiar getUser() / isLoggedIn() a lectura de token JWT
 *   4. getUserCommunities() y savePost() pasan a lectura/escritura en DB
 * ──────────────────────────────────────────────────────────
 */

const RecoletaAuth = (() => {
  const STORAGE_KEY      = 'recoleta_user';
  const COMMUNITIES_KEY  = 'recoleta_user_communities';
  const POSTS_KEY        = 'recoleta_user_posts';

  // ── Leer usuario ────────────────────────────────────────
  function getUser() {
    try {
      const d = localStorage.getItem(STORAGE_KEY);
      return d ? JSON.parse(d) : null;
    } catch { return null; }
  }

  function isLoggedIn() { return getUser() !== null; }

  // ── Registrar usuario (demo, sin contraseña) ────────────
  function register({ name, email, zone, userType, interests }) {
    if (!name || !email) return { success: false, error: 'Nombre y email requeridos.' };
    const user = {
      id:        'user_' + Date.now(),
      name:      name.trim(),
      email:     email.trim().toLowerCase(),
      zone:      zone      || 'Otra zona',
      userType:  userType  || 'Vecino/a',
      interests: interests || [],
      joinedAt:  new Date().toISOString(),
      avatar:    name.trim().charAt(0).toUpperCase()
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      return { success: true, user };
    } catch { return { success: false, error: 'Error al guardar datos locales.' }; }
  }

  // ── Login demo (email + nombre, sin contraseña real) ────
  function login(email, name) {
    if (!email) return { success: false, error: 'Email requerido.' };
    const existing = getUser();
    if (existing && existing.email === email.trim().toLowerCase()) {
      return { success: true, user: existing };
    }
    return register({
      name:  name || email.split('@')[0],
      email,
      zone:  'Otra zona',
      userType: 'Vecino/a',
      interests: []
    });
  }

  // ── Cerrar sesión ───────────────────────────────────────
  function logout() { localStorage.removeItem(STORAGE_KEY); }

  // ── Actualizar perfil ───────────────────────────────────
  function updateProfile(updates) {
    const user = getUser();
    if (!user) return { success: false };
    const updated = { ...user, ...updates, avatar: (updates.name || user.name).charAt(0).toUpperCase() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return { success: true, user: updated };
  }

  // ── Comunidades ─────────────────────────────────────────
  function getUserCommunities() {
    try {
      const d = localStorage.getItem(COMMUNITIES_KEY);
      return d ? JSON.parse(d) : [];
    } catch { return []; }
  }

  function joinCommunity(communityId) {
    if (!isLoggedIn()) return { success: false, error: 'Debés iniciar sesión primero.' };
    const list = getUserCommunities();
    if (!list.includes(communityId)) {
      list.push(communityId);
      localStorage.setItem(COMMUNITIES_KEY, JSON.stringify(list));
    }
    return { success: true };
  }

  function leaveCommunity(communityId) {
    const list = getUserCommunities().filter(id => id !== communityId);
    localStorage.setItem(COMMUNITIES_KEY, JSON.stringify(list));
    return { success: true };
  }

  function isInCommunity(communityId) {
    return getUserCommunities().includes(communityId);
  }

  // ── Publicaciones locales ───────────────────────────────
  function getUserPosts() {
    try {
      const d = localStorage.getItem(POSTS_KEY);
      return d ? JSON.parse(d) : [];
    } catch { return []; }
  }

  function savePost({ communityId, postType, title, text, date, location }) {
    if (!isLoggedIn()) return { success: false, error: 'Debés iniciar sesión primero.' };
    const user = getUser();
    try {
      const posts = getUserPosts();
      const post = {
        id:          'post_' + Date.now(),
        communityId,
        postType:    postType  || 'Aviso',
        title:       title     || '',
        text,
        date:        date      || null,
        location:    location  || null,
        author:      user.name,
        createdAt:   new Date().toISOString()
      };
      posts.push(post);
      localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
      return { success: true, post };
    } catch { return { success: false, error: 'Error al guardar la publicación.' }; }
  }

  return {
    getUser, isLoggedIn,
    register, login, logout, updateProfile,
    getUserCommunities, joinCommunity, leaveCommunity, isInCommunity,
    getUserPosts, savePost
  };
})();
