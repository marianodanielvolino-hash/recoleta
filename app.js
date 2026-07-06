document.addEventListener('DOMContentLoaded', () => {
  // 1. DICCIONARIO DE TRADUCCIONES
  const translations = {
    es: {
      nav_inicio: "Inicio",
      nav_noticias: "Noticias",
      nav_agenda: "Agenda",
      nav_turismo: "Turismo",
      nav_historia: "Historia",
      nav_tramites: "Trámites",
      nav_mapa: "Mapa",
      nav_participar: "Participar",
      nav_enviar_novedad: "Enviar novedad",
      hero_btn_map: "Explorar Mapa",
      hero_tag: "Corazón de Buenos Aires",
      hero_title: "Elegancia, cultura e historia viviente",
      hero_desc: "Explorá las últimas novedades del barrio más distinguido de la ciudad. Conocé su rica arquitectura, sus icónicos gomeros y la voz de sus vecinos.",
      hero_btn_news: "Noticias y Entrevistas",
      hero_btn_history: "Descubrir Historia",
      section_news_sub: "Actualidad y Testimonios",
      section_news_title: "Noticias y Entrevistas",
      filter_all: "Todo",
      filter_news: "Noticias",
      filter_interviews: "Entrevistas",
      filter_culture: "Cultura",
      read_more: "Leer más",
      agenda_title: "Agenda Recoleta",
      agenda_item1: "<strong>Feria de Artesanos:</strong> Sábados y domingos de 11:00 a 20:00 hs. en Plaza Francia.",
      agenda_item2: "<strong>Museo de Bellas Artes:</strong> Entrada libre y gratuita de martes a domingos.",
      section_history_sub: "Patrimonio Histórico",
      section_history_title: "El Recorrido del Tiempo",
      history_title_text: "Un barrio con alma propia",
      history_p1: "El barrio debe su nombre a los padres recoletos de la Orden de los Franciscanos Descalzos, quienes a comienzos del siglo XVIII se establecieron en la zona fundando un convento y la iglesia de Nuestra Señora del Pilar, la cual aún hoy se yergue esplendorosa.",
      history_p2: "Con la epidemia de fiebre amarilla de 1871, las familias más acaudaladas migraron desde el sur de la ciudad hacia el norte, eligiendo Recoleta por su altura y salubridad. Construyeron magníficos palacios de inspiración francesa, muchos de ellos hoy embajadas, hoteles de gran lujo o monumentos históricos.",
      history_btn_gallery: "Explorar Galería Completa",
      sponsor_title: "Comercios Locales que nos apoyan",
      section_map_sub: "Explorá el Barrio",
      section_map_title: "Mapa de la Comuna 2",
      map_caption: "Comuna 2: Puntos destacados de Universidades, Embajadas, Cultura y Gastronomía.",
      section_comunidad_sub: "Voz Vecinal",
      section_comunidad_title: "¿Tenés una historia o novedad sobre Recoleta?",
      comunidad_desc: "Este espacio digital es construido por y para los vecinos. Si presenciaste un evento, tenés fotos históricas guardadas o querés dar a conocer un comercio local, compartilo con la comunidad.",
      comunidad_benefit_1: "Publicación en nuestra sección de novedades",
      comunidad_benefit_2: "Difusión a miles de vecinos del barrio",
      comunidad_benefit_3: "Ayuda a preservar la memoria e identidad de Recoleta",
      form_name_label: "Tu nombre / Vecino",
      form_title_label: "Título del Contenido",
      form_cat_label: "Categoría",
      form_cat_placeholder: "Selecciona una opción",
      form_cat_noticia: "Noticia / Actualidad",
      form_cat_entrevista: "Entrevista / Testimonio",
      form_cat_cultura: "Cultura / Agenda",
      form_msg_label: "Mensaje / Detalle de la Noticia",
      form_submit: "Enviar Propuesta",
      footer_desc: "Una plataforma comunitaria para difundir el patrimonio cultural, arquitectónico y las novedades cotidianas del barrio de Recoleta, Ciudad Autónoma de Buenos Aires.",
      footer_links_title: "Enlaces Rápidos",
      footer_newsletter_title: "Boletín Vecinal",
      footer_newsletter_desc: "Suscribite para recibir un resumen semanal de novedades directo en tu mail.",
      footer_newsletter_btn: "Unirse",
      footer_copyright: "&copy; 2026 Recoleta. Creado con fines ilustrativos y comunitarios.",
      connecting_rss: "Conectando...",
      ad_text: "Publicidad",
      ad_partner: "Patrocinado",
      ad_btn_visit: "Reservar",
      ad_btn_rates: "Ver Menú",
      alert_success_form: "¡Gracias Vecino! Tu contenido ha sido recibido y previsualizado en el feed en memoria.",
      alert_success_newsletter: "¡Gracias por suscribirte! Recibirás las novedades semanales de Recoleta.",
      ad_sidebar1_desc: "Viví una experiencia de cinco estrellas con té de la tarde tradicional en Av. Alvear 1661.",
      ad_sidebar2_desc: "Las empanadas criollas más famosas y tradicionales del barrio en Posadas 1515.",
      slide1_title: "Facultad de Derecho",
      slide1_desc: "El monumental edificio neoclásico inaugurado en 1949, un emblema de la educación y el civismo nacional.",
      slide2_title: "Floralis Genérica",
      slide2_desc: "La escultura metálica gigante que abre y cierra sus pétalos con la luz solar, símbolo de la vanguardia barrial.",
      slide3_title: "El Gomero de la Recoleta",
      slide3_desc: "Plantados en el siglo XIX, sus ramas gigantescas y raíces esculpen el paisaje verde del barrio.",
      slide4_title: "La \"París de Sudamérica\"",
      slide4_desc: "Esquinas y palacetes aristocráticos que recrean la arquitectura clásica francesa del siglo XIX.",
      rss_multi_title: "Canales de Novedades",
      rss_tab_gastro: "Recetas",
      rss_tab_tech: "Tecno",
      rss_tab_travel: "Viajes",
      weather_title: "Clima en Recoleta",
      weather_loading: "Cargando clima...",
      process_section_title: "Cómo participar del portal de Recoleta",
      process_step1_title: "1. Informate y leé",
      process_step1_desc: "Recibí las noticias locales y entrevistas del barrio en tiempo real y enterate de todo.",
      process_step2_title: "2. Proponé novedades",
      process_step2_desc: "Enviá tus propias historias, fotos o anuncios de comercios para que se publiquen en el portal.",
      process_step3_title: "3. Explorá el mapa",
      process_step3_desc: "Navegá las 100 ubicaciones estratégicas de la comuna 2 y descubrí su cultura y gastronomía.",
      process_step4_title: "4. Sumate al boletín",
      process_step4_desc: "Suscribite con tu correo electrónico para recibir resúmenes semanales directamente en tu casilla.",
      library_subtitle: "Conocimiento y Guías",
      library_title: "Biblioteca de Notas de Recoleta",
      library_filter_label: "Seleccionar Categoría:",
      library_article_label: "Seleccionar Artículo:",
      library_cat_all: "Todas las notas (61)",
      library_cat_comuna: "Trámites y Comuna 2",
      library_cat_cultura: "Agenda Cultural y Eventos",
      library_cat_historia: "Patrimonio e Historia",
      library_cat_guias: "Guías de Paseos y Turismo",
      local_news: [
        { category: "cultura", categoryLabel: "Cultura", image: "ccr_cultural_center.jpg", date: "Julio 5, 2026", title: "El Centro Cultural Recoleta suma propuestas para disfrutar julio", desc: "El espacio cultural de Junín 1930 mantiene activa su agenda de invierno con muestras, cine, música y salas participativas abiertas al público con ingreso libre para residentes." },
        { category: "entrevistas", categoryLabel: "Entrevista", image: "plaza_francia_fair.jpg", date: "Julio 4, 2026", title: "La Feria de Plaza Francia: una postal viva del barrio", desc: "Los sábados, domingos y feriados de 10 a 20 hs, artesanos locales exhiben piezas únicas de plata, cuero, metal y vidrio frente al Cementerio." },
        { category: "noticias", categoryLabel: "Noticia", image: "children_book_fair.jpg", date: "Julio 2, 2026", title: "La 34° Feria del Libro Infantil llega al Centro de Convenciones", desc: "Del 11 de julio al 2 de agosto en Figueroa Alcorta y Pueyrredón, con entrada libre y gratuita para disfrutar de más de 70 stands editoriales y espectáculos." },
        { category: "entrevistas", categoryLabel: "Entrevista", image: "borges_exhibition.jpg", date: "Junio 28, 2026", title: "Exposición 'Borges, ecos de un nombre' en la Sala Cronopios", desc: "Un recorrido íntimo por la vida y obra del escritor a través de manuscritos, primeras ediciones y objetos personales en colaboración con la Biblioteca Nacional." },
        { category: "noticias", categoryLabel: "Noticia", image: "museo_jose_hernandez.jpg", date: "Junio 24, 2026", title: "Palpitando el Mundial: figuritas y memoria en el Museo José Hernández", desc: "Jornada de intercambio de figuritas, trivias y exhibición de camisetas y objetos históricos de mundiales en Avenida del Libertador 2373." },
        { category: "entrevistas", categoryLabel: "Entrevista", image: "sede_comuna_recoleta.jpg", date: "Junio 20, 2026", title: "Trámites comunales en Recoleta: sedes Uriburu y Vicente López", desc: "La Sede Comunal 2 de Uriburu 1022 y la Subsede de Vicente López 2050 resuelven trámites clave de licencias, arbolado y reciclaje en Puntos Verdes." }
      ]
    },
    en: {
      nav_inicio: "Home",
      nav_noticias: "News",
      nav_agenda: "Events",
      nav_turismo: "Tourism",
      nav_historia: "History",
      nav_tramites: "Services",
      nav_mapa: "Map",
      nav_participar: "Participate",
      nav_enviar_novedad: "Submit news",
      hero_btn_map: "Explore Map",
      hero_tag: "Heart of Buenos Aires",
      hero_title: "Elegance, culture, and living history",
      hero_desc: "Explore the latest news from the most distinguished neighborhood in the city. Discover its rich architecture, iconic rubber trees, and the voice of its neighbors.",
      hero_btn_news: "News & Interviews",
      hero_btn_history: "Discover History",
      section_news_sub: "Current Affairs & Testimonials",
      section_news_title: "News and Interviews",
      filter_all: "All",
      filter_news: "News",
      filter_interviews: "Interviews",
      filter_culture: "Culture",
      read_more: "Read more",
      agenda_title: "Recoleta Events",
      agenda_item1: "<strong>Artisans Fair:</strong> Saturdays and Sundays from 11:00 AM to 8:00 PM at Plaza Francia.",
      agenda_item2: "<strong>Museum of Fine Arts:</strong> Free admission from Tuesday to Sunday.",
      section_history_sub: "Historical Heritage",
      section_history_title: "The Flow of Time",
      history_title_text: "A neighborhood with its own soul",
      history_p1: "The neighborhood owes its name to the Recolet fathers of the Order of Franciscan Recollects, who settled in the area at the beginning of the 18th century, founding a convent and the church of Nuestra Señora del Pilar, which still stands splendidly today.",
      history_p2: "With the yellow fever epidemic of 1871, the wealthiest families migrated from the south of the city to the north, choosing Recoleta for its height and cleanliness. They built magnificent French-inspired palaces, many of which are now embassies, luxury hotels, or historical monuments.",
      history_btn_gallery: "Explore Full Gallery",
      sponsor_title: "Local Businesses Supporting Us",
      section_map_sub: "Explore the Neighborhood",
      section_map_title: "Map of Comuna 2",
      map_caption: "Comuna 2: Highlights of Universities, Embassies, Culture, and Gastronomy.",
      section_comunidad_sub: "Neighbors' Voice",
      section_comunidad_title: "Do you have a story or news about Recoleta?",
      comunidad_desc: "This digital space is built by and for the neighbors. If you witnessed an event, have historical photos saved, or want to showcase a local shop, share it with the community.",
      comunidad_benefit_1: "Publication in our news feed section",
      comunidad_benefit_2: "Reach thousands of neighbors in the area",
      comunidad_benefit_3: "Help preserve the memory and identity of Recoleta",
      form_name_label: "Your Name / Neighbor",
      form_title_label: "Content Title",
      form_cat_label: "Category",
      form_cat_placeholder: "Select an option",
      form_cat_noticia: "News / Current Affairs",
      form_cat_entrevista: "Interview / Testimonial",
      form_cat_cultura: "Culture / Events",
      form_msg_label: "Message / Detail of the News",
      form_submit: "Send Proposal",
      footer_desc: "A community platform to promote the cultural, architectural heritage, and everyday news of the Recoleta neighborhood, Autonomous City of Buenos Aires.",
      footer_links_title: "Quick Links",
      footer_newsletter_title: "Neighborhood Newsletter",
      footer_newsletter_desc: "Subscribe to receive a weekly summary of news directly in your email.",
      footer_newsletter_btn: "Join",
      footer_copyright: "&copy; 2026 Recoleta. Created for illustrative and community purposes.",
      connecting_rss: "Connecting...",
      ad_text: "Advertisement",
      ad_partner: "Sponsored",
      ad_btn_visit: "Book Now",
      ad_btn_rates: "View Menu",
      alert_success_form: "Thank you! Your content has been received and previewed in the live memory feed.",
      alert_success_newsletter: "Thank you for subscribing! You will receive the weekly Recoleta news.",
      ad_sidebar1_desc: "Enjoy a five-star experience with traditional afternoon tea at Av. Alvear 1661.",
      ad_sidebar2_desc: "The most famous and traditional Argentine empanadas in the neighborhood at Posadas 1515.",
      slide1_title: "Faculty of Law",
      slide1_desc: "The monumental neoclassical building opened in 1949, an emblem of national education and citizenship.",
      slide2_title: "Floralis Genérica",
      slide2_desc: "The giant steel flower sculpture that opens and closes its petals with sunlight, a symbol of local avant-garde.",
      slide3_title: "The Recoleta Rubber Tree",
      slide3_desc: "Planted in the 19th century, its gigantic branches and roots shape the green landscape of the neighborhood.",
      slide4_title: "The \"Paris of South America\"",
      slide4_desc: "Aristocratic corners and palaces that recreate the 19th-century classical French architecture.",
      rss_multi_title: "News Channels",
      rss_tab_gastro: "Recipes",
      rss_tab_tech: "Tech",
      rss_tab_travel: "Travel",
      weather_title: "Weather in Recoleta",
      weather_loading: "Loading weather...",
      process_section_title: "How to participate in the Recoleta portal",
      process_step1_title: "1. Read & Stay Informed",
      process_step1_desc: "Receive local news and neighborhood interviews in real time and stay updated.",
      process_step2_title: "2. Propose Stories",
      process_step2_desc: "Submit your own stories, photos, or business ads to be published on the portal.",
      process_step3_title: "3. Explore the Map",
      process_step3_desc: "Browse 100 strategic locations in Comuna 2 and discover its culture and gastronomy.",
      process_step4_title: "4. Join the Newsletter",
      process_step4_desc: "Subscribe with your email to receive weekly summaries directly in your inbox.",
      library_subtitle: "Knowledge & Guides",
      library_title: "Recoleta Article Library",
      library_filter_label: "Select Category:",
      library_article_label: "Select Article:",
      library_cat_all: "All notes (61)",
      library_cat_comuna: "Procedures & Comuna 2",
      library_cat_cultura: "Cultural Agenda & Events",
      library_cat_historia: "Heritage & History",
      library_cat_guias: "Tours & Sightseeing Guides",
      local_news: [
        { category: "cultura", categoryLabel: "Culture", image: "ccr_cultural_center.jpg", date: "July 5, 2026", title: "Recoleta Cultural Center adds proposals for July", desc: "The cultural center keeps its winter agenda active with exhibitions, cinema, music, and interactive rooms open to the public with free admission for residents." },
        { category: "entrevistas", categoryLabel: "Interview", image: "plaza_francia_fair.jpg", date: "July 4, 2026", title: "Plaza Francia Artisans Fair: a living postcard of the neighborhood", desc: "On Saturdays, Sundays, and holidays from 10 AM to 8 PM, local artisans showcase unique pieces of silver, leather, metal, and glass in front of the Cemetery." },
        { category: "noticias", categoryLabel: "News", image: "children_book_fair.jpg", date: "July 2, 2026", title: "The 34th Children's Book Fair arrives at the Convention Center", desc: "From July 11 to August 2 at Figueroa Alcorta and Pueyrredón, with free admission to enjoy editorial stands and permanent shows." },
        { category: "entrevistas", categoryLabel: "Interview", image: "borges_exhibition.jpg", date: "June 28, 2026", title: "Exhibition 'Borges, echoes of a name' at Sala Cronopios", desc: "An intimate journey through the writer's life and work through manuscripts, first editions, and personal objects in collaboration with the National Library." },
        { category: "noticias", categoryLabel: "News", image: "museo_jose_hernandez.jpg", date: "June 24, 2026", title: "Feeling the World Cup: cards exchange and history at José Hernández Museum", desc: "Card exchanging sessions, trivia, and an exhibition of historic jerseys at Avenida del Libertador 2373 alongside collectors." },
        { category: "entrevistas", categoryLabel: "Interview", image: "sede_comuna_recoleta.jpg", date: "June 20, 2026", title: "Local paperwork in Recoleta: Uriburu and Vicente López offices", desc: "The main office at Uriburu 1022 and the branch at Vicente López 2050 handle daily citizen services, driving licenses, and Green Points recycling." }
      ]
    },
    pt: {
      nav_inicio: "Início",
      nav_noticias: "Notícias",
      nav_agenda: "Agenda",
      nav_turismo: "Turismo",
      nav_historia: "História",
      nav_tramites: "Serviços",
      nav_mapa: "Mapa",
      nav_participar: "Participar",
      nav_enviar_novedad: "Enviar novidade",
      hero_btn_map: "Explorar Mapa",
      hero_tag: "Coração de Buenos Aires",
      hero_title: "Elegância, cultura e história viva",
      hero_desc: "Explore as últimas novidades do bairro mais distinto da cidade. Conheça sua rica arquitetura, seus icônicos seringais e a voz de seus vizinhos.",
      hero_btn_news: "Notícias e Entrevistas",
      hero_btn_history: "Descubra a História",
      section_news_sub: "Atualidades e Depoimentos",
      section_news_title: "Notícias e Entrevistas",
      filter_all: "Tudo",
      filter_news: "Notícias",
      filter_interviews: "Entrevistas",
      filter_culture: "Cultura",
      read_more: "Leia mais",
      agenda_title: "Agenda Recoleta",
      agenda_item1: "<strong>Feira de Artesãos:</strong> Sábados e domingos das 11:00 às 20:00 hs. na Plaza Francia.",
      agenda_item2: "<strong>Museu de Bellas Artes:</strong> Entrada livre e gratuita de terça a domingo.",
      section_history_sub: "Patrimônio Histórico",
      section_history_title: "O Fluxo do Tempo",
      history_title_text: "Um bairro com alma própria",
      history_p1: "O bairro deve o seu nome aos padres recoletos da Ordem dos Franciscanos Descalzos, que se estabeleceram na zona no início do século XVIII, fundando um convento e a igreja de Nuestra Señora del Pilar, que ainda hoje se ergue esplendidamente.",
      history_p2: "Com a epidemia de febre amarela de 1871, as famílias mais ricas migraram do sul da cidade para o norte, escolhendo a Recoleta por sua altura e salubridade. Construíram magníficos palácios de inspiração francesa, muitos dos quais hoje são embaixadas, hotéis de luxo ou monumentos históricos.",
      history_btn_gallery: "Explorar Galería Completa",
      sponsor_title: "Comércio Local que nos Apoia",
      section_map_sub: "Explore o Bairro",
      section_map_title: "Mapa da Comuna 2",
      map_caption: "Comuna 2: Destaques de Universidades, Embaixadas, Cultura e Gastronomia.",
      section_comunidad_sub: "Voz dos Vizinhos",
      section_comunidad_title: "Você tem uma história ou notícia sobre a Recoleta?",
      comunidad_desc: "Este espaço digital é construído por e para os vizinhos. Se presenciou um evento, tem fotos históricas salvas ou deseja divulgar um comércio local, compartilhe com a comunidade.",
      comunidad_benefit_1: "Publicação na nossa seção de novidades",
      comunidad_benefit_2: "Divulgação para milhares de vizinhos no bairro",
      comunidad_benefit_3: "Ajuda a preservar a memória e a identidade da Recoleta",
      form_name_label: "Seu Nome / Vizinho",
      form_title_label: "Título do Conteúdo",
      form_cat_label: "Categoria",
      form_cat_placeholder: "Selecione uma opção",
      form_cat_noticia: "Notícia / Atualidade",
      form_cat_entrevista: "Entrevista / Depoimento",
      form_cat_cultura: "Cultura / Agenda",
      form_msg_label: "Mensagem / Detalhe da Notícia",
      form_submit: "Enviar Proposta",
      footer_desc: "Uma plataforma comunitária para difundir o patrimônio cultural, arquitectónico y as novidades cotidianas do bairro da Recoleta, Cidade Autónoma de Buenos Aires.",
      footer_links_title: "Links Rápidos",
      footer_newsletter_title: "Boletim de Vizinhos",
      footer_newsletter_desc: "Inscreva-se para receber um resumo semanal de novidades direto no seu e-mail.",
      footer_newsletter_btn: "Inscrever-se",
      footer_copyright: "&copy; 2026 Recoleta. Criado para fins ilustrativos e comunitários.",
      connecting_rss: "Conectando...",
      ad_text: "Publicidade",
      ad_partner: "Patrocinado",
      ad_btn_visit: "Reservar",
      ad_btn_rates: "Ver Cardápio",
      ad_sidebar1_desc: "Viva uma experiência de cinco estrelas com chá da tarde tradicional na Av. Alvear 1661.",
      ad_sidebar2_desc: "As empanadas crioulas mais famosas e tradicionais do bairro na Posadas 1515.",
      slide1_title: "Faculdade de Direito",
      slide1_desc: "O monumental edifício neoclássico inaugurado em 1949, um emblema da educação e do civismo nacional.",
      slide2_title: "Floralis Genérica",
      slide2_desc: "A escultura de metal gigante que abre e fecha as suas pétalas com a luz solar, símbolo da vanguarda local.",
      slide3_title: "O Seringal da Recoleta",
      slide3_desc: "Plantada no século XIX, seus ramos gigantescos e raízes esculpem a paisagem verde do bairro.",
      slide4_title: "A \"Paris da América do Sul\"",
      slide4_desc: "Esquinas e palacetes aristocráticos que recriam a arquitetura clássica francesa do século XIX.",
      alert_success_form: "Obrigado! Seu conteúdo foi recebido e visualizado no feed de memória.",
      alert_success_newsletter: "Obrigado por se inscrever! Você receberá as novidades semanais da Recoleta.",
      rss_multi_title: "Canais de Notícias",
      rss_tab_gastro: "Receitas",
      rss_tab_tech: "Tecno",
      rss_tab_travel: "Viagens",
      weather_title: "Clima na Recoleta",
      weather_loading: "Carregando clima...",
      process_section_title: "Como participar do portal da Recoleta",
      process_step1_title: "1. Informe-se e leia",
      process_step1_desc: "Receba as notícias locais e entrevistas do bairro em tempo real e fique por dentro de tudo.",
      process_step2_title: "2. Proponha novidades",
      process_step2_desc: "Envie suas próprias histórias, fotos ou anúncios de comércio para que sejam publicados no portal.",
      process_step3_title: "3. Explore o mapa",
      process_step3_desc: "Navegue pelas 100 localizações estratégicas da comuna 2 e descubra sua cultura e gastronomia.",
      process_step4_title: "4. Junte-se ao boletim",
      process_step4_desc: "Inscreva-se com seu e-mail para receber resumos semanais diretamente na sua caixa de entrada.",
      library_subtitle: "Conhecimento e Guias",
      library_title: "Biblioteca de Artigos da Recoleta",
      library_filter_label: "Selecionar Categoria:",
      library_article_label: "Selecionar Artigo:",
      library_cat_all: "Todas as notas (61)",
      library_cat_comuna: "Trâmites e Comuna 2",
      library_cat_cultura: "Agenda Cultural e Eventos",
      library_cat_historia: "Patrimônio e História",
      library_cat_guias: "Guias de Passeios e Turismo",
      local_news: [
        { category: "cultura", categoryLabel: "Cultura", image: "ccr_cultural_center.jpg", date: "Julho 5, 2026", title: "Centro Cultural Recoleta soma propostas para desfrutar de julho", desc: "O espaço cultural de Junín 1930 mantém ativa sua agenda de inverno com mostras, cinema, música e salas abertas de participação livre para residentes." },
        { category: "entrevistas", categoryLabel: "Entrevista", image: "plaza_francia_fair.jpg", date: "Julho 4, 2026", title: "Feira da Plaza Francia: um cartão postal vivo do bairro", desc: "Aos sábados, domingos e feriados das 10h às 20h, artesãos locais exibem peças exclusivas de prata, couro, metal e vidro em frente ao Cemitério." },
        { category: "noticias", categoryLabel: "Notícia", image: "children_book_fair.jpg", date: "Julho 2, 2026", title: "A 34ª Feira do Livro Infantil chega ao Centro de Convenções", desc: "De 11 de julho a 2 de agosto em Figueroa Alcorta e Pueyrredón, com entrada gratuita para desfrutar de mais de 70 estandes editoriais e shows." },
        { category: "entrevistas", categoryLabel: "Entrevista", image: "borges_exhibition.jpg", date: "Junho 28, 2026", title: "Exposição 'Borges, ecos de um nome' na Sala Cronopios", desc: "Um percurso íntimo pela vida e obra do escritor por meio de manuscritos, primeiras edições e objetos pessoais no Centro Cultural Recoleta." },
        { category: "noticias", categoryLabel: "Notícia", image: "museo_jose_hernandez.jpg", date: "Junho 24, 2026", title: "Palpitando o Mundial: figurinhas e memórias no Museu José Hernández", desc: "Jornada de troca de figurinhas, trívia e exibição de camisas históricas na Avenida del Libertador 2373 junto a colecionadores." },
        { category: "entrevistas", categoryLabel: "Entrevista", image: "sede_comuna_recoleta.jpg", date: "Junho 20, 2026", title: "Trâmites comunitários na Recoleta: sedes Uriburu e Vicente López", desc: "A Sede em Uriburu 1022 e a Subsede em Vicente López 2050 resolvem consultas cotidianas, reclamações de calçadas, arborização e pontos verdes de reciclagem." }
      ]
    }
  };

  // 2. DETECCIÓN DE IDIOMA INICIAL
  let currentLang = localStorage.getItem('recoleta_lang') || 'es';
  if (currentLang !== 'es' && currentLang !== 'en' && currentLang !== 'pt') {
    currentLang = 'es';
  }

  // 3. MENÚ MÓVIL TOGGLER
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('open');
      
      if (mainNav.classList.contains('active')) {
        mainNav.style.display = 'block';
        mainNav.style.position = 'absolute';
        mainNav.style.top = '80px';
        mainNav.style.left = '0';
        mainNav.style.width = '100%';
        mainNav.style.backgroundColor = 'var(--bg-glass)';
        mainNav.style.borderBottom = '1px solid var(--border-color)';
        mainNav.style.padding = '1.5rem';
        
        const navLinks = mainNav.querySelector('.nav-links');
        if (navLinks) {
          navLinks.style.flexDirection = 'column';
          navLinks.style.gap = '1.5rem';
        }
      } else {
        resetMobileMenuStyles();
      }
    });
  }

  function resetMobileMenuStyles() {
    if (!mainNav) return;
    mainNav.style.display = '';
    mainNav.style.position = '';
    mainNav.style.top = '';
    mainNav.style.left = '';
    mainNav.style.width = '';
    mainNav.style.backgroundColor = '';
    mainNav.style.borderBottom = '';
    mainNav.style.padding = '';
    const navLinks = mainNav.querySelector('.nav-links');
    if (navLinks) {
      navLinks.style.flexDirection = '';
      navLinks.style.gap = '';
    }
  }

  // Cerrar menú móvil al hacer click en el botón Comunidad de nav-actions
  const comunidadBtn = document.querySelector('.nav-actions a[data-i18n="nav_comunidad"]');
  if (comunidadBtn) {
    comunidadBtn.addEventListener('click', () => {
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');
        resetMobileMenuStyles();
      }
    });
  }

  // 4. LÓGICA DE TRADUCCIÓN DINÁMICA
  function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('recoleta_lang', lang);

    // Actualizar atributo lang del HTML para SEO y accesibilidad
    document.documentElement.setAttribute('lang', lang);

    // Actualizar botones selectores
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Traducir elementos estáticos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key] !== undefined) {
        element.innerHTML = translations[lang][key];
      }
    });

    // Traducir placeholders de formulario
    const nameInput = document.getElementById('contrib-name');
    const titleInput = document.getElementById('contrib-title');
    const textInput = document.getElementById('contrib-text');
    const emailInput = document.querySelector('.newsletter-form input');
    const libSearch = document.getElementById('library-search');

    if (nameInput) nameInput.placeholder = lang === 'es' ? 'Ej. Juan Pérez' : (lang === 'en' ? 'e.g. John Smith' : 'Ex. João Silva');
    if (titleInput) titleInput.placeholder = lang === 'es' ? '¿De qué trata?' : (lang === 'en' ? 'What is it about?' : 'Sobre o que é?');
    if (textInput) textInput.placeholder = lang === 'es' ? 'Contanos en detalle...' : (lang === 'en' ? 'Tell us in detail...' : 'Conte-nos em detalhes...');
    if (emailInput) emailInput.placeholder = lang === 'es' ? 'Tu correo electrónico' : (lang === 'en' ? 'Your email address' : 'Seu endereço de e-mail');
    if (libSearch) libSearch.placeholder = lang === 'es' ? 'Buscar artículo...' : (lang === 'en' ? 'Search article...' : 'Buscar artigo...');

    // Traducir Noticias Locales
    renderLocalNews(lang);

    // Recargar noticias RSS y Clima con el idioma activo
    fetchRSSNews(currentFeed);
    fetchWeather();
    initComunaMap();
  }

  // Manejar clics de cambio de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });

  // 5. RENDERIZACIÓN DINÁMICA DE NOTICIAS LOCALES
  function renderLocalNews(lang) {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;

    newsContainer.innerHTML = '';
    const cards = translations[lang].local_news;

    cards.forEach(card => {
      const newCard = document.createElement('article');
      newCard.className = 'news-card';
      newCard.setAttribute('data-category', card.category);

      const badgeClass = `badge-${card.category}`;

      newCard.innerHTML = `
        <div class="news-img-wrapper">
          <span class="news-category ${badgeClass}">${card.categoryLabel}</span>
          <img src="${card.image}" alt="${card.title}">
        </div>
        <div class="news-info">
          <span class="news-date">${card.date}</span>
          <h3 class="news-card-title"><a href="#">${card.title}</a></h3>
          <p class="news-excerpt">${card.desc}</p>
          <a href="#" class="news-more"><span>${translations[lang].read_more}</span> <i data-feather="arrow-right"></i></a>
        </div>
      `;
      newsContainer.appendChild(newCard);
    });

    if (typeof feather !== 'undefined') {
      feather.replace();
    }

    // Re-aplicar filtros si hay un filtro seleccionado activo
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    if (activeFilterBtn) {
      const filterValue = activeFilterBtn.getAttribute('data-filter');
      applyNewsFilter(filterValue);
    }
  }

  // Filtros de Noticias
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      applyNewsFilter(filterValue);
    });
  });

  function applyNewsFilter(filterValue) {
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filterValue === 'all' || category === filterValue) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Sincronizar links de navegación con filtros de noticias y cerrar menú móvil
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('open');
        resetMobileMenuStyles();
      }

      const isEntrevistas = link.getAttribute('data-i18n') === 'nav_entrevistas';
      const isNoticias = link.getAttribute('data-i18n') === 'nav_noticias';
      const isInicio = link.getAttribute('data-i18n') === 'nav_inicio';

      if (isEntrevistas || isNoticias || isInicio) {
        const filterVal = isEntrevistas ? 'entrevistas' : (isNoticias ? 'noticias' : 'all');
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${filterVal}"]`);
        if (targetBtn) {
          // Desactivar transiciones temporales si es scroll automático
          targetBtn.click();
        }
      }
    });
  });

  // 6. SLIDER HISTORIA (con Dots)
  const sliderContainer = document.getElementById('slider-container');
  const slides = document.querySelectorAll('.slide-item');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  const sliderDots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  const totalSlides = slides.length;

  function updateSlider() {
    if (sliderContainer) {
      sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    sliderDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  if (prevBtn && nextBtn && totalSlides > 0) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    });

    sliderDots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.getAttribute('data-slide'));
        updateSlider();
      });
    });

    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }, 6000);
  }

  // 7. ROTACIÓN DE PUBLICIDAD
  const topAd = document.getElementById('top-ad');
  const adsData = [
    { title: "La Biela", desc_es: "Disfrutá del café de los poetas frente a Plaza Francia. 10% de descuento presentando este portal.", desc_en: "Enjoy the poets' coffee in front of Plaza Francia. 10% off presenting this portal.", desc_pt: "Desfrute do café dos poetas em frente à Plaza Francia. 10% de desconto apresentando este portal.", btn_es: "Ver Menú", btn_en: "View Menu", btn_pt: "Ver Cardápio", link: "#" },
    { title: "Parrilla Fervor", desc_es: "Cortes de carne y pescados a las brasas con el clásico sabor porteño en Posadas 1519.", desc_en: "Grilled beef cuts and seafood with the classic Buenos Aires taste at Posadas 1519.", desc_pt: "Cortes de carne e frutos do mar grelhados com o sabor clássico portenho na Posadas 1519.", btn_es: "Reservar Mesa", btn_en: "Book a Table", btn_pt: "Reservar Mesa", link: "#" },
    { title: "Ateneo Grand Splendid", desc_es: "Elegida la librería más hermosa del mundo. Un teatro de libros en Av. Santa Fe 1860.", desc_en: "Voted the most beautiful bookstore in the world. A theater of books at Av. Santa Fe 1860.", desc_pt: "Votada a livraria mais bonita do mundo. Um teatro de livros na Av. Santa Fe 1860.", btn_es: "Cómo Llegar", btn_en: "Get Directions", btn_pt: "Como Chegar", link: "#" }
  ];
  let currentAdIndex = 0;

  function rotateAd() {
    if (!topAd) return;
    currentAdIndex = (currentAdIndex + 1) % adsData.length;
    const ad = adsData[currentAdIndex];
    
    topAd.style.opacity = '0';
    setTimeout(() => {
      const desc = ad[`desc_${currentLang}`] || ad.desc_es;
      const btnText = ad[`btn_${currentLang}`] || ad.btn_es;
      const tagText = translations[currentLang].ad_text;

      topAd.innerHTML = `
        <span class="ad-tag">${tagText}</span>
        <div class="ad-content">
          <span class="ad-title">${ad.title}</span>
          <span class="ad-desc">${desc}</span>
        </div>
        <a href="${ad.link}" class="btn btn-accent ad-btn" style="padding: 0.5rem 1.25rem; font-size: 0.85rem;">${btnText}</a>
      `;
      topAd.style.opacity = '1';
    }, 300);
  }

  if (topAd) {
    topAd.style.transition = 'opacity 0.3s ease';
    setInterval(rotateAd, 9000);
  }

  // 8. CLIMA EN RECOLETA (Open-Meteo API — Compact Dashboard)
  function fetchWeather() {
    const tempEl = document.getElementById('weather-temp-compact');
    const statusEl = document.getElementById('weather-status-compact');
    const iconWrapper = document.getElementById('weather-icon-wrapper-compact');

    if (!tempEl || !statusEl) return;

    // Recoleta Coords: Lat -34.5880, Lon -58.3910
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=-34.5880&longitude=-58.3910&current_weather=true&timezone=America/Argentina/Buenos_Aires';

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Error de clima');
        return res.json();
      })
      .then(data => {
        if (data && data.current_weather) {
          const current = data.current_weather;
          const temp = Math.round(current.temperature);
          const code = current.weathercode;

          const weatherTextMap = {
            es: { clear: "Cielo Despejado", cloudy: "Nublado", foggy: "Neblina", drizzle: "Llovizna", rain: "Lluvioso", snow: "Nieve", storm: "Tormenta" },
            en: { clear: "Clear Sky", cloudy: "Cloudy", foggy: "Foggy", drizzle: "Drizzle", rain: "Rainy", snow: "Snow", storm: "Thunderstorm" },
            pt: { clear: "Céu Limpo", cloudy: "Nublado", foggy: "Nevoeiro", drizzle: "Chuvisco", rain: "Chuva", snow: "Neve", storm: "Tempestade" }
          };

          const langMap = weatherTextMap[currentLang] || weatherTextMap.es;

          let statusText = langMap.cloudy;
          let iconName = "cloud";

          if (code === 0) {
            statusText = langMap.clear;
            iconName = "sun";
          } else if (code >= 1 && code <= 3) {
            statusText = langMap.cloudy;
            iconName = "cloud-sun";
          } else if (code === 45 || code === 48) {
            statusText = langMap.foggy;
            iconName = "wind";
          } else if (code >= 51 && code <= 57) {
            statusText = langMap.drizzle;
            iconName = "cloud-drizzle";
          } else if (code >= 61 && code <= 67) {
            statusText = langMap.rain;
            iconName = "cloud-rain";
          } else if (code >= 80 && code <= 82) {
            statusText = langMap.rain;
            iconName = "cloud-rain";
          } else if (code >= 95 && code <= 99) {
            statusText = langMap.storm;
            iconName = "cloud-lightning";
          }

          tempEl.innerText = `${temp}°C`;
          statusEl.innerText = statusText;

          if (iconWrapper) {
            iconWrapper.innerHTML = `<i data-feather="${iconName}" style="width: 24px; height: 24px; color: var(--primary-color);"></i>`;
            if (typeof feather !== 'undefined') {
              feather.replace();
            }
          }
        }
      })
      .catch(err => {
        console.error('Error fetching weather (using fallback):', err);
        const fallbackData = {
          es: { temp: "16°C", status: "Parcialmente Nublado", icon: "cloud-sun" },
          en: { temp: "16°C", status: "Partly Cloudy", icon: "cloud-sun" },
          pt: { temp: "16°C", status: "Parcialmente Nublado", icon: "cloud-sun" }
        };
        const fallback = fallbackData[currentLang] || fallbackData.es;
        tempEl.innerText = fallback.temp;
        statusEl.innerText = fallback.status;
        if (iconWrapper) {
          iconWrapper.innerHTML = `<i data-feather="${fallback.icon}" style="width: 24px; height: 24px; color: var(--primary-color);"></i>`;
          if (typeof feather !== 'undefined') {
            feather.replace();
          }
        }
      });
  }

  // 9. CANALES DE NOVEDADES LOCALES (contenido interno — sin APIs externas)
  let currentFeed = 'all';

  const feedCategoryLabels = {
    all:      { es: 'RECOLETA', en: 'RECOLETA', pt: 'RECOLETA' },
    cultura:  { es: 'CULTURA',  en: 'CULTURE',  pt: 'CULTURA'  },
    historia: { es: 'HISTORIA', en: 'HISTORY',  pt: 'HISTÓRIA' },
    comuna:   { es: 'SERVICIOS',en: 'SERVICES', pt: 'SERVIÇOS' },
    guias:    { es: 'GUÍAS',    en: 'GUIDES',   pt: 'GUIAS'    }
  };

  function fetchRSSNews(feed) {
    currentFeed = feed || 'all';
    const rssContainer = document.getElementById('rss-container');
    if (!rssContainer) return;

    if (typeof RECOLETA_ARTICLES === 'undefined') {
      rssContainer.innerHTML = '<div style="padding:1.5rem 0;color:var(--text-muted);text-align:center;">Cargando contenido local...</div>';
      return;
    }

    const catLabel = (feedCategoryLabels[currentFeed] || feedCategoryLabels.all)[currentLang] || 'RECOLETA';
    const filtered = currentFeed === 'all'
      ? RECOLETA_ARTICLES
      : RECOLETA_ARTICLES.filter(a => a.category === currentFeed);

    const articles = filtered.slice(0, 5);
    rssContainer.innerHTML = '';

    if (articles.length === 0) {
      rssContainer.innerHTML = '<div style="padding:1rem;color:var(--text-muted);font-size:0.9rem;">No hay artículos en esta categoría.</div>';
      return;
    }

    articles.forEach(art => {
      const item = document.createElement('div');
      item.className = 'rss-item';
      const preview = art.content && art.content.length > 0
        ? art.content.find(p => p.trim() && !p.startsWith('**')) || art.content[0]
        : '';
      const cleanPreview = preview.replace(/\*\*(.*?)\*\*/g, '$1').substring(0, 105) + '...';

      item.innerHTML = `
        <div class="rss-meta">
          <span class="rss-source" style="color:var(--primary-color);">${catLabel}</span>
          <span>Portal Recoleta</span>
        </div>
        <h4 class="rss-title" style="cursor:pointer;" onclick="(function(){document.getElementById('biblioteca-notas').scrollIntoView({behavior:'smooth'});setTimeout(function(){document.querySelectorAll('.library-article-item').forEach(function(el){if(el.textContent.trim().substring(0,40)==='${art.title.substring(0,40).replace(/'/g,"\\'")}'){el.click();}});},700);})()">
          ${art.title}
        </h4>
        <p class="rss-desc">${cleanPreview}</p>
      `;
      rssContainer.appendChild(item);
    });
  }

  // Escuchadores de pestañas — Canales Locales
  const rssTabBtns = document.querySelectorAll('.rss-tab-btn');
  rssTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      rssTabBtns.forEach(b => {
        b.classList.remove('active');
        b.style.backgroundColor = 'transparent';
        b.style.color = 'var(--text-muted)';
        b.style.fontWeight = '600';
      });

      btn.classList.add('active');
      btn.style.backgroundColor = 'var(--primary-color)';
      btn.style.color = '#fff';
      btn.style.fontWeight = '700';

      const feed = btn.getAttribute('data-feed');
      fetchRSSNews(feed);
    });
  });

  // 10. MAPA INTERACTIVO LEAFLET.JS
  let mapInstance = null;
  let markersLayer = null;

  function initComunaMap() {
    const mapContainer = document.getElementById('mapa-comunal');
    if (!mapContainer || typeof L === 'undefined') return;

    if (mapInstance !== null) {
      displayMapMarkers(currentLang);
      return;
    }

    mapInstance = L.map('mapa-comunal', { scrollWheelZoom: false }).setView([-34.5880, -58.3910], 14);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapInstance);

    markersLayer = L.layerGroup().addTo(mapInstance);

    displayMapMarkers(currentLang);

    const mapFilterBtns = document.querySelectorAll('.map-filter-btn');
    mapFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        mapFilterBtns.forEach(b => {
          b.classList.remove('active');
          b.style.backgroundColor = 'transparent';
          b.style.color = 'var(--primary-color)';
          b.style.borderColor = 'var(--border-color)';
        });

        btn.classList.add('active');
        btn.style.backgroundColor = 'var(--primary-color)';
        btn.style.color = '#fff';
        btn.style.borderColor = 'var(--primary-color)';

        const filterValue = btn.getAttribute('data-map-filter');
        displayMapMarkers(currentLang, filterValue);
      });
    });
  }

  function displayMapMarkers(lang, activeFilter = 'all') {
    if (!markersLayer) return;
    markersLayer.clearLayers();

    const categoryLabels = {
      es: { educacion: 'Educación / Universidad', embajada: 'Embajada / Palacio', cultura: 'Cultura / Templo', plazas: 'Plaza / Monumento', gastronomia: 'Gastronomía', salud: 'Salud / Hospital', compras: 'Paseo / Hotel' },
      en: { educacion: 'Education / University', embajada: 'Embassy / Palace', cultura: 'Culture / Temple', plazas: 'Plaza / Monument', gastronomia: 'Gastronomy', salud: 'Health / Hospital', compras: 'Passage / Hotel' },
      pt: { educacion: 'Educação / Universidade', embajada: 'Embaixada / Palácio', cultura: 'Cultura / Templo', plazas: 'Praça / Monumento', gastronomia: 'Gastronomia', salud: 'Saúde / Hospital', compras: 'Passeio / Hotel' }
    };

    const pointsData = [
      // 1. Educación (15)
      { name: "Facultad de Derecho UBA", category: "educacion", desc_es: "Monumento nacional de estilo neoclásico, inaugurada en 1949.", desc_en: "National monument of neoclassical style, inaugurated in 1949.", desc_pt: "Monumento nacional de estilo neoclássico, inaugurado em 1949.", coords: [-34.5828, -58.3904] },
      { name: "Facultad de Medicina UBA", category: "educacion", desc_es: "Una de las sedes académicas más grandes y prestigiosas del país.", desc_en: "One of the largest and most prestigious academic campuses in the country.", desc_pt: "Uma das maiores e mais prestigiadas sedes acadêmicas do país.", coords: [-34.5996, -58.3995] },
      { name: "Facultad de Odontología UBA", category: "educacion", desc_es: "Centro de salud y formación universitaria odontológica.", desc_en: "Dental health center and university academic facility.", desc_pt: "Centro de saúde e formação universitária odontológica.", coords: [-34.5988, -58.3991] },
      { name: "Facultad de Farmacia y Bioquímica UBA", category: "educacion", desc_es: "Sede dedicada a la investigación científica de la salud.", desc_en: "Campus dedicated to scientific health research.", desc_pt: "Sede dedicada à pesquisa científica de saúde.", coords: [-34.5982, -58.3999] },
      { name: "Escuela Pellegrini", category: "educacion", desc_es: "Prestigioso colegio secundario dependiente de la UBA.", desc_en: "Prestigious secondary school dependent on UBA.", desc_pt: "Prestigiada escola secundária dependente da UBA.", coords: [-34.5976, -58.3952] },
      { name: "Colegio del Salvador", category: "educacion", desc_es: "Tradicional colegio jesuita fundado en el siglo XIX.", desc_en: "Traditional Jesuit school founded in the 19th century.", desc_pt: "Tradicional colégio jesuíta fundado no século XIX.", coords: [-34.5980, -58.3930] },
      { name: "Colegio Champagnat", category: "educacion", desc_es: "Establecimiento marista con gran historia en el barrio.", desc_en: "Marist school with a great history in the neighborhood.", desc_pt: "Estabelecimentos maristas com grande história no bairro.", coords: [-34.5970, -58.3915] },
      { name: "Colegio Mallinckrodt", category: "educacion", desc_es: "Institución educativa confesional femenina tradicional.", desc_en: "Confessional female educational institution.", desc_pt: "Instituição educativa confessional feminina tradicional.", coords: [-34.5855, -58.3970] },
      { name: "Colegio San Martín de Tours", category: "educacion", desc_es: "Colegio católico situado en la zona de embajadas.", desc_en: "Catholic school situated in the embassies area.", desc_pt: "Colégio católico situado na área das embaixadas.", coords: [-34.5795, -58.4035] },
      { name: "Colegio San Agustín", category: "educacion", desc_es: "Reconocido colegio de la orden agustiniana.", desc_en: "Recognized school of the Augustinian order.", desc_pt: "Reconhecido colégio da ordem agostiniana.", coords: [-34.5815, -58.4058] },
      { name: "IES en Lenguas Vivas 'J. R. Fernández'", category: "educacion", desc_es: "Histórico instituto público de lenguas extranjeras.", desc_en: "Historic public foreign languages institute.", desc_pt: "Histórico instituto público de línguas estrangeiras.", coords: [-34.5940, -58.3848] },
      { name: "Colegio Jesús María", category: "educacion", desc_es: "Institución tradicional del norte de la comuna.", desc_en: "Traditional institution in the north of the district.", desc_pt: "Instituição tradicional do norte da comuna.", coords: [-34.5898, -58.3850] },
      { name: "Universidad del Salvador (Sede)", category: "educacion", desc_es: "Sede de ciencias jurídicas de esta universidad.", desc_en: "Law school campus of this private university.", desc_pt: "Sede de ciências jurídicas desta universidade.", coords: [-34.5990, -58.3920] },
      { name: "Escuela Normal Sarmiento", category: "educacion", desc_es: "Primer escuela normal de profesoras de Buenos Aires.", desc_en: "First normal school for female teachers in Buenos Aires.", desc_pt: "Primeira escola normal de professoras de Buenos Aires.", coords: [-34.5960, -58.3902] },
      { name: "Colegio de la Santa Unión", category: "educacion", desc_es: "Institución educativa con más de un siglo en Recoleta.", desc_en: "Educational institution with more than a century in Recoleta.", desc_pt: "Instituição educativa com mais de um século na Recoleta.", coords: [-34.5868, -58.3980] },

      // 2. Embajadas (20)
      { name: "Embajada de Francia", category: "embajada", desc_es: "Palacio Ortiz Basualdo, joya de la arquitectura del siglo XIX.", desc_en: "Ortiz Basualdo Palace, architectural jewel of the 19th century.", desc_pt: "Palácio Ortiz Basualdo, joia da arquitetura do século XIX.", coords: [-34.5907, -58.3817] },
      { name: "Embajada de Brasil", category: "embajada", desc_es: "Palacio Pereda, réplica inspirada en residencias clásicas parisinas.", desc_en: "Pereda Palace, replica inspired by classical Parisian residences.", desc_pt: "Palácio Pereda, réplica inspirada em residências parisienses clássicas.", coords: [-34.5903, -58.3833] },
      { name: "Embajada de Italia", category: "embajada", desc_es: "Palacio de Alvear, suntuosa propiedad rodeada de hermosos jardines.", desc_en: "Alvear Palace, sumptuous property surrounded by beautiful gardens.", desc_pt: "Palácio de Alvear, suntuosa propriedade cercada por belos jardins.", coords: [-34.5815, -58.3980] },
      { name: "Embajada del Reino Unido (Residencia)", category: "embajada", desc_es: "Palacio Madero Unzué, rodeado por una gran arboleda.", desc_en: "Madero Unzué Palace, surrounded by a large grove of trees.", desc_pt: "Palácio Madero Unzué, cercado por um grande arvoredo.", coords: [-34.5854, -58.3990] },
      { name: "Embajada de España (Cancillería)", category: "embajada", desc_es: "Sede diplomática del Reino de España.", desc_en: "Diplomatic headquarters of the Kingdom of Spain.", desc_pt: "Sede diplomática do Reino da Espanha.", coords: [-34.5772, -58.4095] },
      { name: "Embajada de Uruguay", category: "embajada", desc_es: "Representación diplomática del país vecino.", desc_en: "Diplomatic representation of the neighboring country.", desc_pt: "Representação diplomática do país vizinho.", coords: [-34.5898, -58.3892] },
      { name: "Embajada de Grecia", category: "embajada", desc_es: "Residencia y oficinas de la diplomacia helénica.", desc_en: "Residence and offices of the Hellenic diplomacy.", desc_pt: "Residência e escritórios da diplomacia helênica.", coords: [-34.5910, -58.3860] },
      { name: "Embajada de Austria", category: "embajada", desc_es: "Sede diplomática en la elegante calle French.", desc_en: "Diplomatic headquarters on the elegant French Street.", desc_pt: "Sede diplomática na elegante rua French.", coords: [-34.5822, -58.4005] },
      { name: "Embajada de Polonia", category: "embajada", desc_es: "Representación diplomática en el corazón del barrio.", desc_en: "Diplomatic representation in the heart of the neighborhood.", desc_pt: "Representação diplomática no coração do bairro.", coords: [-34.5802, -58.4020] },
      { name: "Embajada de Rumania", category: "embajada", desc_es: "Edificio diplomático de arquitectura europea.", desc_en: "Diplomatic building of European architecture.", desc_pt: "Edifício diplomático de arquitetura europeia.", coords: [-34.5892, -58.3855] },
      { name: "Embajada de la República Checa", category: "embajada", desc_es: "Oficinas diplomáticas sobre la calle Junín.", desc_en: "Diplomatic offices on Junín street.", desc_pt: "Escritórios diplomáticos na rua Junín.", coords: [-34.5808, -58.4018] },
      { name: "Embajada de Suiza", category: "embajada", desc_es: "Representación diplomática helvética.", desc_en: "Swiss diplomatic representation.", desc_pt: "Representação diplomática suíça.", coords: [-34.5888, -58.3865] },
      { name: "Embajada de Paraguay", category: "embajada", desc_es: "Delegación paraguaya en la calle Las Heras.", desc_en: "Paraguayan delegation on Las Heras street.", desc_pt: "Delegação paraguaia na rua Las Heras.", coords: [-34.5945, -58.3875] },
      { name: "Embajada del Perú", category: "embajada", desc_es: "Sede diplomática de la República del Perú.", desc_en: "Diplomatic headquarters of the Republic of Peru.", desc_pt: "Sede diplomática da República do Peru.", coords: [-34.5800, -58.4010] },
      { name: "Consulado General de España", category: "embajada", desc_es: "Atención consular española sobre calle Guido.", desc_en: "Spanish consular services on Guido street.", desc_pt: "Atendimento consular espanhol na rua Guido.", coords: [-34.5925, -58.3920] },
      { name: "Palacio Errázuriz (Museo)", category: "embajada", desc_es: "Excepcional mansión francesa, hoy Museo de Arte Decorativo.", desc_en: "Exceptional French mansion, now Decorative Art Museum.", desc_pt: "Excepcional mansão francesa, hoje Museu de Arte Decorativa.", coords: [-34.5812, -58.4008] },
      { name: "Palacio Duhau", category: "embajada", desc_es: "Palacio neoclásico del siglo XX, hoy hotel de superlujo.", desc_en: "Neoclassical palace of the 20th century, now luxury hotel.", desc_pt: "Palácio neoclássico do século XX, hoje hotel de luxo.", coords: [-34.5895, -58.3888] },
      { name: "Palacio Casey", category: "embajada", desc_es: "Palacete de estilo victoriano de gran valor patrimonial.", desc_en: "Victorian style palace of great heritage value.", desc_pt: "Palacete de estilo vitoriano de grande valor patrimonial.", coords: [-34.5912, -58.3828] },
      { name: "Palacio de los Patos", category: "embajada", desc_es: "Famoso complejo residencial histórico de gran escala.", desc_en: "Famous large-scale historic residential complex.", desc_pt: "Famoso complexo residencial histórico de grande escala.", coords: [-34.5830, -58.4080] },
      { name: "Palacio Álzaga Unzué", category: "embajada", desc_es: "Residencia señorial hoy parte del Four Seasons.", desc_en: "Stately residence today integrated into the Four Seasons hotel.", desc_pt: "Residência senhorial hoje incorporada ao Four Seasons.", coords: [-34.5910, -58.3800] },

      // 3. Cultura y Templos (20)
      { name: "Centro Cultural Recoleta", category: "cultura", desc_es: "Faro del arte joven y multidisciplinario de la ciudad.", desc_en: "Beacon of young and multidisciplinary art in the city.", desc_pt: "Farol da arte jovem e multidisciplinar da cidade.", coords: [-34.5861, -58.3930] },
      { name: "Museo Nacional de Bellas Artes", category: "cultura", desc_es: "Alberga la colección de arte público más grande del país.", desc_en: "Houses the largest public art collection in the country.", desc_pt: "Abriga a maior coleção de arte pública do país.", coords: [-34.5838, -58.3930] },
      { name: "Biblioteca Nacional", category: "cultura", desc_es: "Obra maestra del brutalismo arquitectónico por Clorindo Testa.", desc_en: "Masterpiece of architectural brutalism by Clorindo Testa.", desc_pt: "Obra-prima do brutalismo arquitetônico de Clorindo Testa.", coords: [-34.5843, -58.3986] },
      { name: "Palais de Glace", category: "cultura", desc_es: "Histórica pista de hielo reconvertida en sala de exposiciones.", desc_en: "Historic ice rink converted into exhibition halls.", desc_pt: "Histórica pista de gelo convertida em sala de exposições.", coords: [-34.5832, -58.3912] },
      { name: "Cementerio de la Recoleta", category: "cultura", desc_es: "Museo a cielo abierto con bóvedas de gran valor artístico.", desc_en: "Open-air museum with tombs of high artistic value.", desc_pt: "Museu a céu aberto com túmulos de grande valor artístico.", coords: [-34.5875, -58.3931] },
      { name: "Basílica de Nuestra Señora del Pilar", category: "cultura", desc_es: "Templo colonial de 1732, muy bien conservado.", desc_en: "Colonial temple from 1732, beautifully preserved.", desc_pt: "Templo colonial de 1732, muito bem conservado.", coords: [-34.5869, -58.3927] },
      { name: "Basílica de San Nicolás de Bari", category: "cultura", desc_es: "Gran templo de estilo ecléctico en Avenida Santa Fe.", desc_en: "Large eclectic style temple on Santa Fe Avenue.", desc_pt: "Grande templo de estilo eclético na Avenida Santa Fe.", coords: [-34.5955, -58.3918] },
      { name: "Parroquia San Agustín", category: "cultura", desc_es: "Templo gótico imponente inaugurado en 1910.", desc_en: "Imposing Gothic temple opened in 1910.", desc_pt: "Imponente templo gótico inaugurado em 1910.", coords: [-34.5818, -58.4068] },
      { name: "Parroquia del Patrocinio de San José", category: "cultura", desc_es: "Iglesia neogótica clásica sobre calle Ayacucho.", desc_en: "Classic neo-Gothic church on Ayacucho Street.", desc_pt: "Igreja neogótica clássica na rua Ayacucho.", coords: [-34.5992, -58.3942] },
      { name: "Iglesia del Salvador", category: "cultura", desc_es: "Templo jesuita con una notable cúpula visible.", desc_en: "Jesuit temple with a notable visible dome.", desc_pt: "Templo jesuíta com uma notável cúpula visível.", coords: [-34.5982, -58.3932] },
      { name: "Museo del Libro y de la Lengua", category: "cultura", desc_es: "Espacio cultural contiguo a la Biblioteca Nacional.", desc_en: "Cultural space adjacent to the National Library.", desc_pt: "Espaço cultural adjacente à Biblioteca Nacional.", coords: [-34.5849, -58.3980] },
      { name: "Museo Roca", category: "cultura", desc_es: "Investigación histórica sobre el siglo XIX.", desc_en: "Historical research about the 19th century.", desc_pt: "Pesquisa histórica sobre o século XIX.", coords: [-34.5829, -58.4015] },
      { name: "Museo del Holocausto", category: "cultura", desc_es: "Espacio que preserva la memoria de la Shoá.", desc_en: "Space that preserves the memory of the Shoah.", desc_pt: "Espaço que preserva a memória da Shoá.", coords: [-34.5962, -58.4012] },
      { name: "Casa de las Academias Nacionales", category: "cultura", desc_es: "Sede de prestigiosas instituciones de la Nación.", desc_en: "Headquarters of prestigious national institutions.", desc_pt: "Sede de prestigiadas instituições intelectuais da Nação.", coords: [-34.5942, -58.3922] },
      { name: "Librería Ateneo Grand Splendid", category: "cultura", desc_es: "Espectacular librería en un teatro histórico.", desc_en: "Spectacular bookstore inside a historic theater.", desc_pt: "Espetacular livraria dentro de um teatro histórico.", coords: [-34.5960, -58.4036] },
      { name: "Librería Clásica y Moderna", category: "cultura", desc_es: "Mítico café literario fundado en 1938.", desc_en: "Mythical literary cafe founded in 1938.", desc_pt: "Mítico café literário fundado em 1938.", coords: [-34.5988, -58.3928] },
      { name: "Centro Cultural de España (CCEBA)", category: "cultura", desc_es: "Espacio de intercambio cultural hispano-argentino.", desc_en: "Hispano-Argentine cultural exchange space.", desc_pt: "Espaço de intercâmbio cultural hispano-argentino.", coords: [-34.5920, -58.3890] },
      { name: "Istituto Italiano di Cultura", category: "cultura", desc_es: "Promoción de la lengua y el arte de Italia.", desc_en: "Promotion of Italian language and art.", desc_pt: "Promoção da língua e da arte da Itália.", coords: [-34.5908, -58.3842] },
      { name: "ICANA", category: "cultura", desc_es: "Instituto cultural norteamericano.", desc_en: "American-Argentine cultural institute.", desc_pt: "Instituto cultural norte-americano.", coords: [-34.5968, -58.3878] },
      { name: "Academia Nacional de Medicina", category: "cultura", desc_es: "Promueve el progreso de las ciencias médicas.", desc_en: "Promotes progress in medical sciences.", desc_pt: "Promove o progresso das ciências médicas.", coords: [-34.5804, -58.4062] },

      // 4. Plazas y Monumentos (20)
      { name: "Plaza Francia", category: "plazas", desc_es: "Diseñada por Carlos Thays, famosa por su feria.", desc_en: "Designed by Carlos Thays, famous for its craft fair.", desc_pt: "Projetada por Carlos Thays, famosa por sua feira.", coords: [-34.5850, -58.3920] },
      { name: "Plaza Intendente Alvear", category: "plazas", desc_es: "Frecuentada plaza frente al cementerio.", desc_en: "Popular square located in front of the cemetery.", desc_pt: "Praça popular localizada em frente ao cemitério.", coords: [-34.5865, -58.3925] },
      { name: "Plaza de las Naciones Unidas", category: "plazas", desc_es: "Gran parque donde se ubica la Floralis Genérica.", desc_en: "Large park home of the Floralis Generica sculpture.", desc_pt: "Grande parque onde fica a Floralis Genérica.", coords: [-34.5822, -58.3965] },
      { name: "Plaza Vicente López", category: "plazas", desc_es: "Hermosa plaza en pozo con gomeros gigantes.", desc_en: "Beautiful sunken square with giant rubber trees.", desc_pt: "Bela praça em vale com seringais gigantes.", coords: [-34.5930, -58.3912] },
      { name: "Plaza Rodríguez Peña", category: "plazas", desc_es: "Frente al Ministerio de Educación, remanso arbolado.", desc_en: "In front of the Education Ministry, a green oasis.", desc_pt: "Em frente ao Ministério da Educação, um oásis verde.", coords: [-34.5978, -58.3918] },
      { name: "Plaza Bernardo Houssay", category: "plazas", desc_es: "Polo estudiantil renovado rodeado de facultades.", coords: [-34.5996, -58.3995] },
      { name: "Plaza Mitre", category: "plazas", desc_es: "Ubicada en una loma con excelente vista.", desc_en: "Located on a hill with an excellent view of the area.", desc_pt: "Localizada em uma colina com excelente vista da área.", coords: [-34.5835, -58.3955] },
      { name: "Plaza Monseñor de Andrea", category: "plazas", desc_es: "Espacio verde muy activo para los vecinos.", desc_en: "Very active green space for local neighbors.", desc_pt: "Espaço verde muito ativo para os vizinhos locais.", coords: [-34.5998, -58.4065] },
      { name: "Plaza Tte. Gral. Emilio Mitre", category: "plazas", desc_es: "Plaza con juegos infantiles y frondosos árboles.", coords: [-34.5878, -58.4025] },
      { name: "Floralis Genérica", category: "plazas", desc_es: "Escultura gigante de metal que se abre con el sol.", desc_en: "Giant steel flower that opens and closes with daylight.", desc_pt: "Escultura de metal gigante que se abre com o sol.", coords: [-34.5818, -58.3954] },
      { name: "Monumento a Bartolomé Mitre", category: "plazas", desc_es: "Imponente grupo escultórico de mármol y bronce.", desc_en: "Imposing sculpture group made of marble and bronze.", desc_pt: "Imponente grupo de esculturas de mármore e bronze.", coords: [-34.5832, -58.3950] },
      { name: "Monumento a Carlos Thays", category: "plazas", desc_es: "Homenaje al paisajista de la ciudad.", desc_en: "Tribute to the city's main landscape architect.", desc_pt: "Homenagem ao paisagista da cidade.", coords: [-34.5825, -58.3942] },
      { name: "Monumento a Alvear", category: "plazas", desc_es: "Estatua ecuestre obra de Antoine Bourdelle.", desc_en: "Equestrian statue created by Antoine Bourdelle.", desc_pt: "Estátua equestre criada por Antoine Bourdelle.", coords: [-34.5842, -58.3938] },
      { name: "Monumento a Francia", category: "plazas", desc_es: "Hermoso monumento, regalo de la colectividad francesa.", desc_en: "Beautiful monument, gift from the French community.", desc_pt: "Belo monumento, presente da comunidade francesa.", coords: [-34.5848, -58.3915] },
      { name: "Gomero Histórico (1781)", category: "plazas", desc_es: "El árbol más antiguo de la zona, plantado por recoletos.", desc_en: "The oldest tree in the area, planted by Recollects.", desc_pt: "A árvore mais antiga da área, plantada por recoletos.", coords: [-34.5872, -58.3922] },
      { name: "Gomero de Plaza Alvear", category: "plazas", desc_es: "Árbol monumental de raíces expuestas artísticas.", desc_en: "Monumental rubber tree with artistic exposed roots.", desc_pt: "Árvore monumental com raízes expostas artísticas.", coords: [-34.5862, -58.3920] },
      { name: "Paseo de la Recoleta", category: "plazas", desc_es: "Paseo peatonal arbolado contiguo a la feria.", desc_en: "Wooded pedestrian path adjacent to the fair.", desc_pt: "Caminho de pedestres arborizado ao lado da feira.", coords: [-34.5858, -58.3910] },
      { name: "Plaza República de Chile", category: "plazas", desc_es: "Plaza semicircular en la Avenida Libertador.", desc_en: "Semicircular square on Libertador Avenue.", desc_pt: "Praça semicircular na Avenida Libertador.", coords: [-34.5790, -58.4018] },
      { name: "Plaza Uruguay", category: "plazas", desc_es: "Ubicada al lado de la TV Pública, recreativa.", desc_en: "Located next to public TV, great for relaxing.", desc_pt: "Localizada ao lado da TV Pública, recreativa.", coords: [-34.5850, -58.3995] },
      { name: "Plazoleta Ciro de Andrea", category: "plazas", desc_es: "Pequeño islote verde en la división de avenidas.", desc_en: "Small green islet dividing avenues.", desc_pt: "Pequeno ilhéu verde dividindo avenidas.", coords: [-34.5938, -58.3888] },

      // 5. Gastronomía (15)
      { name: "Café La Biela", category: "gastronomia", desc_es: "Punto de encuentro de automovilistas y escritores clásicos.", desc_en: "Legendary meeting point for writers and racing drivers.", desc_pt: "Ponto de encontro lendário de escritores e pilotos.", coords: [-34.5872, -58.3918] },
      { name: "La Rambla Café", category: "gastronomia", desc_es: "Clásico café notable en la esquina de Posadas y Ayacucho.", desc_en: "Classic notable cafe on Ayacucho and Posadas corner.", desc_pt: "Clássico café notável na esquina de Posadas e Ayacucho.", coords: [-34.5888, -58.3860] },
      { name: "Café Tabac", category: "gastronomia", desc_es: "Famoso café notable en el límite norte de la comuna.", desc_en: "Famous notable cafe on the northern border of the district.", desc_pt: "Famoso café notável na divisa norte da comuna.", coords: [-34.5792, -58.4072] },
      { name: "El Sanjuanino", category: "gastronomia", desc_es: "Legendario local de empanadas norteñas tradicionales.", desc_en: "Legendary place for traditional northern empanadas.", desc_pt: "Lugar lendário para empanadas tradicionais do norte.", coords: [-34.5878, -58.3908] },
      { name: "Fervor Parrilla", category: "gastronomia", desc_es: "Restaurante clásico de carnes a las brasas y mariscos.", desc_en: "Classic restaurant for charcoal-grilled steaks and seafood.", desc_pt: "Restaurante clássico de carnes grelhadas e frutos do mar.", coords: [-34.5888, -58.3878] },
      { name: "Buller Brewing Co", category: "gastronomia", desc_es: "Cervecería artesanal pionera frente a Plaza Francia.", coords: [-34.5868, -58.3912] },
      { name: "Rapanui Recoleta", category: "gastronomia", desc_es: "Chocolates y helados patagónicos en un gran local clásico.", coords: [-34.5908, -58.3912] },
      { name: "Freddo Recoleta (Origen)", category: "gastronomia", desc_es: "La esquina fundacional de la heladería premium del barrio.", coords: [-34.5870, -58.3925] },
      { name: "Persicco Recoleta", category: "gastronomia", desc_es: "Tradicional heladería artesanal en zona residencial.", coords: [-34.5882, -58.3880] },
      { name: "Croque Madame Palacio", category: "gastronomia", desc_es: "Café y restó ubicado en las cocheras del Palacio Errázuriz.", coords: [-34.5810, -58.4005] },
      { name: "Unalome Patisserie", category: "gastronomia", desc_es: "Pastelería de alta escuela de estilo europeo refinado.", coords: [-34.5922, -58.3882] },
      { name: "Restaurante Oviedo", category: "gastronomia", desc_es: "Gastronomía mediterránea de altísima gama en el barrio.", coords: [-34.5962, -58.4018] },
      { name: "Le Caravelle", category: "gastronomia", desc_es: "Café de estilo italiano clásico para tomar al paso.", coords: [-34.5928, -58.3902] },
      { name: "Café Martínez Quintana", category: "gastronomia", desc_es: "Tradicional franquicia con excelente vista panorámica.", coords: [-34.5878, -58.3916] },
      { name: "Hard Rock Café (Ex Sede)", category: "gastronomia", desc_es: "Recordada locación del restaurante temático internacional.", coords: [-34.5858, -58.3928] },

      // 6. Salud (10)
      { name: "Hospital de Clínicas", category: "salud", desc_es: "Hospital escuela insignia de la Universidad de Buenos Aires.", coords: [-34.5985, -58.4005] },
      { name: "Hospital Alemán", category: "salud", desc_es: "Centro de salud de gran trayectoria y prestigio internacional.", coords: [-34.5912, -58.4055] },
      { name: "Hospital de Niños Ricardo Gutiérrez", category: "salud", desc_es: "Referente nacional de pediatría de alta complejidad.", coords: [-34.5958, -58.4112] },
      { name: "Sanatorio Anchorena", category: "salud", desc_es: "Moderno sanatorio médico en calle Anchorena.", coords: [-34.5978, -58.4068] },
      { name: "Sanatorio Otamendi", category: "salud", desc_es: "Institución privada de internación de referencia.", coords: [-34.5968, -58.4015] },
      { name: "CEMIC Recoleta", category: "salud", desc_es: "Sede universitaria y hospitalaria privada.", coords: [-34.5882, -58.3995] },
      { name: "Policlínica del Docente", category: "salud", desc_es: "Sanatorio destinado a la atención gremial docente.", coords: [-34.5955, -58.4058] },
      { name: "Centro Odontológico Comunal", category: "salud", desc_es: "Sede de salud pública comunal para atención dental.", coords: [-34.5910, -58.4012] },
      { name: "Swiss Medical Recoleta", category: "salud", desc_es: "Clínica privada en el centro comercial de Recoleta.", coords: [-34.5928, -58.3965] },
      { name: "Hospital Rivadavia", category: "salud", desc_es: "Gran hospital público fundado a fines del siglo XIX.", coords: [-34.5835, -58.4038] },

      // 7. Pasajes, Hoteles y Paseos (10)
      { name: "Pasaje Bollini", category: "compras", desc_es: "Encantadora calle de adoquines cargada de literatura e historia bohemia.", coords: [-34.5882, -58.4052] },
      { name: "Pasaje del Correo", category: "compras", desc_es: "Bello pasaje residencial peatonal con entrada por calle Guido.", coords: [-34.5902, -58.3915] },
      { name: "Pasaje Rue des Artisans", category: "compras", desc_es: "Exclusivo rincón de anticuarios y moda en la calle Arenales.", coords: [-34.5915, -58.3838] },
      { name: "Alvear Palace Hotel", category: "compras", desc_es: "El hotel más lujoso e histórico de la Ciudad de Buenos Aires.", coords: [-34.5884, -58.3886] },
      { name: "Recoleta Urban Mall", category: "compras", desc_es: "Centro de compras moderno con salas de cine 3D.", coords: [-34.5878, -58.3935] },
      { name: "Paseo Alcorta (Límite)", category: "compras", desc_es: "Centro comercial de alta moda en Avenida Alcorta.", coords: [-34.5765, -58.4020] },
      { name: "Hotel Four Seasons", category: "compras", desc_es: "Torre moderna combinada con mansión histórica del siglo XX.", coords: [-34.5908, -58.3808] },
      { name: "Loi Suites Recoleta", category: "compras", desc_es: "Hotel boutique con un espectacular jardín de invierno.", coords: [-34.5890, -58.3908] },
      { name: "Galerías Guido", category: "compras", desc_es: "Histórica galería comercial del barrio de Recoleta.", coords: [-34.5918, -58.3918] },
      { name: "Pasaje del Temple", category: "compras", desc_es: "Pasaje adoquinado escondido entre edificios residenciales.", coords: [-34.5985, -58.3948] }
    ];

    const categoryColors = {
      educacion: '#2563eb',
      embajada: '#d97706',
      cultura: '#7c3aed',
      plazas: '#059669',
      gastronomia: '#dc2626',
      salud: '#0891b2',
      compras: '#c29b00'
    };

    pointsData.forEach(point => {
      if (activeFilter === 'all' || point.category === activeFilter) {
        const markerColor = categoryColors[point.category] || '#c29b00';
        const circleMarker = L.circleMarker(point.coords, {
          radius: 8,
          fillColor: markerColor,
          color: '#1c1917',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.9
        });

        const catLabel = categoryLabels[lang][point.category] || point.category;
        const desc = point[`desc_${lang}`] || point.desc_es;

        const popupContent = `
          <div class="map-popup-title" style="font-weight:700;margin-bottom:2px;">${point.name}</div>
          <span class="map-popup-category" style="font-size:0.7rem;text-transform:uppercase;color:${markerColor};font-weight:700;">${catLabel}</span>
        `;

        circleMarker.bindPopup(popupContent);
        
        // Clic en marcador para rellenar la ficha lateral
        circleMarker.on('click', () => {
          const emptyState = document.getElementById('map-sidebar-empty-state');
          const contentState = document.getElementById('map-sidebar-content-state');
          const titleEl = document.getElementById('sidebar-point-title');
          const catEl = document.getElementById('sidebar-point-category');
          const descEl = document.getElementById('sidebar-point-desc');
          const directionsBtn = document.getElementById('sidebar-point-directions');

          if (emptyState) emptyState.style.display = 'none';
          if (contentState) contentState.style.display = 'block';

          if (titleEl) titleEl.innerText = point.name;
          if (catEl) {
            catEl.innerText = catLabel;
            catEl.style.backgroundColor = markerColor;
            catEl.style.color = '#fff';
          }
          if (descEl) descEl.innerText = desc;
          if (directionsBtn) {
            directionsBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${point.coords[0]},${point.coords[1]}`;
          }
        });

        markersLayer.addLayer(circleMarker);
      }
    });

    // Guardar los datos de puntos globalmente para los itinerarios
    window.mapPointsData = pointsData;
    window.mapCategoryLabels = categoryLabels;
  }

  // 11. FORMULARIO DE ENVÍO DE CONTENIDO VECINAL (Novedades en vivo)
  const contribForm = document.getElementById('contrib-form');
  if (contribForm) {
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
      contribForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contrib-name').value;
      const title = document.getElementById('contrib-title').value;
      const category = document.getElementById('contrib-category').value;
      const text = document.getElementById('contrib-text').value;

      const images = ['Recoleta 2.jpg', 'Recoleta 3.jpg', 'Recoleta 5.jpg', 'Recoleta 6.jpg', 'Arboles.jpg'];
      const randomImage = images[Math.floor(Math.random() * images.length)];

      const rawDate = new Date();
      const formattedDate = rawDate.toLocaleDateString(currentLang === 'en' ? 'en-US' : (currentLang === 'pt' ? 'pt-BR' : 'es-AR'), {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      const newCard = document.createElement('article');
      newCard.className = 'news-card';
      newCard.setAttribute('data-category', category);
      newCard.style.animation = 'fadeInUp 0.6s ease forwards';

      const categoryLabels = {
        cultura: currentLang === 'en' ? 'Culture' : 'Cultura',
        noticias: currentLang === 'en' ? 'News' : (currentLang === 'pt' ? 'Notícia' : 'Noticia'),
        entrevistas: currentLang === 'en' ? 'Interview' : (currentLang === 'pt' ? 'Entrevista' : 'Entrevista')
      };
      const catLabel = categoryLabels[category] || 'General';

      const badgeBg = category === 'entrevistas' ? 'background-color: var(--primary-color);' : '';

      newCard.innerHTML = `
        <div class="news-img-wrapper">
          <span class="news-category" style="${badgeBg}">${catLabel}</span>
          <img src="${randomImage}" alt="${title}">
        </div>
        <div class="news-info">
          <span class="news-date">${formattedDate} (Por: ${name})</span>
          <h3 class="news-card-title"><a href="#">${title}</a></h3>
          <p class="news-excerpt">${text.substring(0, 150)}${text.length > 150 ? '...' : ''}</p>
          <a href="#" class="news-more"><span>${translations[currentLang].read_more}</span> <i data-feather="arrow-right"></i></a>
        </div>
      `;

      newsContainer.insertBefore(newCard, newsContainer.firstChild);

      if (typeof feather !== 'undefined') {
        feather.replace();
      }

      document.getElementById('noticias-entrevistas').scrollIntoView({ behavior: 'smooth' });

      alert(translations[currentLang].alert_success_form);
      contribForm.reset();
      });
    }
  }

  // 12. BOLETÍN NEWSLETTER
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(translations[currentLang].alert_success_newsletter);
      newsletterForm.reset();
    });
  }

  // 13. BIBLIOTECA DE NOTAS — NUEVO DISEÑO DOS PANELES
  (function initLibrary() {
    if (typeof RECOLETA_ARTICLES === 'undefined') return;

    const listEl       = document.getElementById('library-article-list');
    const titleEl      = document.getElementById('library-article-title');
    const bodyEl       = document.getElementById('library-article-body');
    const searchInput  = document.getElementById('library-search');
    const catTabs      = document.querySelectorAll('.library-cat-tab');
    const btnRandom    = document.getElementById('lib-btn-random');
    const btnShare     = document.getElementById('lib-btn-share');

    if (!listEl || !titleEl || !bodyEl) return;

    let currentLibCat = 'all';
    let currentArticle = null;

    // Poblar badges con conteos
    const cats = ['all', 'comuna', 'cultura', 'historia', 'guias'];
    cats.forEach(cat => {
      const badge = document.getElementById('badge-' + cat);
      if (badge) {
        const count = cat === 'all' ? RECOLETA_ARTICLES.length :
          RECOLETA_ARTICLES.filter(a => a.category === cat).length;
        badge.textContent = count;
      }
    });

    function renderArticleContent(article) {
      if (!article) return;
      currentArticle = article;
      titleEl.textContent = article.title;

      // Calcular metadata periodística
      const words = article.content.join(' ').split(' ').length;
      const mins = Math.ceil(words / 180);
      
      let sourceName = "Portal Recoleta";
      if (article.category === 'comuna') sourceName = "Sede Comunal 2 & GCBA";
      else if (article.category === 'cultura') sourceName = "Centro Cultural Recoleta";
      else if (article.category === 'historia') sourceName = "Archivo Histórico Nacional";
      else if (article.category === 'guias') sourceName = "Ente de Turismo GCBA";

      const metaBar = document.getElementById('library-article-meta');
      const metaAuthor = document.getElementById('lib-meta-author');
      const metaDate = document.getElementById('lib-meta-date');
      const metaTime = document.getElementById('lib-meta-time');
      const metaSource = document.getElementById('lib-meta-source');
      const libFooter = document.getElementById('library-article-footer');

      if (metaBar) metaBar.style.display = 'flex';
      if (metaAuthor) metaAuthor.textContent = "Redacción Recoleta";
      if (metaDate) metaDate.textContent = "Julio 2026";
      if (metaTime) metaTime.textContent = `${mins} min`;
      if (metaSource) metaSource.textContent = sourceName;
      if (libFooter) libFooter.style.display = 'flex';

      bodyEl.innerHTML = '<div class="library-article-content">' +
        article.content.map(para => {
          if (!para.trim()) return '';
          if (para.startsWith('##')) {
            return '<h3 style="font-family: var(--font-title); font-size: 1.3rem; margin-top: 1.5rem; margin-bottom: 0.75rem; color: var(--accent-color);">' + para.replace('##', '').trim() + '</h3>';
          }
          if (para.startsWith('**') && para.endsWith('**')) {
            return '<p><strong>' + para.replace(/\*\*/g, '') + '</strong></p>';
          } else if (para.includes('**')) {
            return '<p>' + para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') + '</p>';
          }
          return '<p>' + para + '</p>';
        }).join('') +
      '</div>';

      // Configurar enlace de corrección
      const btnCorrection = document.getElementById('lib-btn-correction');
      if (btnCorrection) {
        btnCorrection.href = `#/participar?report=true&title=${encodeURIComponent(article.title)}`;
      }

      if (typeof feather !== 'undefined') feather.replace();
    }

    function renderList(query) {
      const q = (query || '').toLowerCase().trim();
      const filtered = RECOLETA_ARTICLES.filter(a => {
        const catMatch = currentLibCat === 'all' || a.category === currentLibCat;
        const searchMatch = !q ||
          a.title.toLowerCase().includes(q) ||
          a.content.join(' ').toLowerCase().includes(q);
        return catMatch && searchMatch;
      });

      listEl.innerHTML = '';
      if (filtered.length === 0) {
        listEl.innerHTML = '<div style="padding:1rem;color:rgba(255,255,255,0.5);font-size:0.8rem;">Sin resultados</div>';
        return;
      }

      filtered.forEach((art, i) => {
        const item = document.createElement('div');
        item.className = 'library-article-item' + (i === 0 && !currentArticle ? ' active' : '');
        if (currentArticle && art.title === currentArticle.title) item.classList.add('active');
        
        const preview = art.content && art.content.length > 0
          ? art.content[0].substring(0, 80) + '...'
          : '';
        const catLabels = { comuna: 'Comuna 2', cultura: 'Cultura', historia: 'Historia', guias: 'Turismo' };
        const catText = catLabels[art.category] || 'General';

        item.innerHTML = `
          <div style="font-size: 0.65rem; text-transform: uppercase; font-weight: 700; color: var(--primary-color); margin-bottom: 0.25rem;">${catText}</div>
          <div style="font-weight: 700; font-size: 0.85rem; margin-bottom: 0.25rem; line-height: 1.3; color: #fff;">${art.title}</div>
          <div style="font-size: 0.72rem; color: rgba(255,255,255,0.6); line-height: 1.4;">${preview}</div>
        `;

        item.addEventListener('click', () => {
          document.querySelectorAll('.library-article-item').forEach(el => el.classList.remove('active'));
          item.classList.add('active');
          renderArticleContent(art);
          
          // Desplazar lector a la vista en mobile
          const rightPanel = document.getElementById('library-right-panel');
          if (rightPanel && window.innerWidth <= 768) {
            rightPanel.scrollIntoView({ behavior: 'smooth' });
          }
        });
        listEl.appendChild(item);
      });

      // Mostrar primer artículo si no hay uno seleccionado
      if (!currentArticle && filtered.length > 0) renderArticleContent(filtered[0]);
    }

    // Tabs de categoría
    catTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        catTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentLibCat = tab.getAttribute('data-lib-cat');
        currentArticle = null;
        renderList(searchInput ? searchInput.value : '');
      });
    });

    // Buscador en tiempo real
    if (searchInput) {
      searchInput.addEventListener('input', () => renderList(searchInput.value));
    }

    // Botón aleatorio
    if (btnRandom) {
      btnRandom.addEventListener('click', () => {
        const pool = currentLibCat === 'all' ? RECOLETA_ARTICLES :
          RECOLETA_ARTICLES.filter(a => a.category === currentLibCat);
        if (pool.length === 0) return;
        const random = pool[Math.floor(Math.random() * pool.length)];
        renderArticleContent(random);
        // Marcar ítem activo en la lista
        document.querySelectorAll('.library-article-item').forEach(el => {
          el.classList.toggle('active', el.textContent === random.title);
        });
      });
    }

    // Botón compartir
    if (btnShare) {
      btnShare.addEventListener('click', () => {
        if (!currentArticle) return;
        const shareText = currentArticle.title + ' — Portal Recoleta';
        if (navigator.share) {
          navigator.share({ title: shareText, url: window.location.href + '#biblioteca-notas' });
        } else {
          navigator.clipboard.writeText(window.location.href + '#biblioteca-notas')
            .then(() => alert('¡Enlace copiado al portapapeles!'));
        }
      });
    }

    // Carga inicial
    renderList('');
  })();

  // 14. ARTÍCULO DEL DÍA en el Hero
  (function initArticleOfDay() {
    if (typeof RECOLETA_ARTICLES === 'undefined') return;
    const widget = document.getElementById('hero-article-day');
    const titleEl = document.getElementById('hero-day-title');
    if (!widget || !titleEl) return;

    // Usar fecha actual para seleccionar un artículo consistente del día
    const dayIndex = new Date().getDate() % RECOLETA_ARTICLES.length;
    const article = RECOLETA_ARTICLES[dayIndex];
    if (article) {
      titleEl.textContent = article.title.length > 80
        ? article.title.substring(0, 80) + '...'
        : article.title;
      widget.style.display = 'block';
      const linkEl = document.getElementById('hero-day-link');
      if (linkEl) {
        linkEl.addEventListener('click', (e) => {
          e.preventDefault();
          document.getElementById('biblioteca-notas').scrollIntoView({ behavior: 'smooth' });
          // Buscar y activar el artículo
          setTimeout(() => {
            const items = document.querySelectorAll('.library-article-item');
            items.forEach(item => {
              if (item.textContent === article.title) item.click();
            });
          }, 600);
        });
      }
      if (typeof feather !== 'undefined') feather.replace();
    }
  })();

  // 15. BOTÓN BACK TO TOP
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 16. ITINERARIOS TURÍSTICOS CON POLILÍNEAS EN LEAFLET MAP
  let activePolyline = null;

  function selectMapItinerary(itineraryName) {
    if (!mapInstance || !window.mapPointsData) return;

    // Quitar polilínea anterior si existía
    if (activePolyline) {
      mapInstance.removeLayer(activePolyline);
      activePolyline = null;
    }

    const itineraryPoints = {
      historico: ["Cementerio de la Recoleta", "Basílica de Nuestra Señora del Pilar", "La Biela"],
      cultural: ["El Gomero de la Recoleta", "Centro Cultural Recoleta", "Museo Nacional de Bellas Artes"],
      chicos: ["Plaza Intendente Alvear", "Centro Cultural Recoleta", "Heladería Persicco"],
      gratis: ["Facultad de Derecho UBA", "Floralis Genérica", "Parque Thays"]
    };

    const targetNames = itineraryPoints[itineraryName];
    if (!targetNames) return;

    const filtered = window.mapPointsData.filter(p => targetNames.includes(p.name));
    // Ordenar de acuerdo a la secuencia del recorrido
    filtered.sort((a, b) => targetNames.indexOf(a.name) - targetNames.indexOf(b.name));

    if (filtered.length === 0) return;

    const latlngs = filtered.map(p => p.coords);

    // Dibujar la polilínea con estilo dorado y trazos discontinuos
    activePolyline = L.polyline(latlngs, {
      color: 'var(--primary-color)',
      weight: 4,
      opacity: 0.85,
      dashArray: '8, 8'
    }).addTo(mapInstance);

    // Encuadrar el mapa para mostrar toda la polilínea
    mapInstance.fitBounds(activePolyline.getBounds(), { padding: [40, 40] });

    // Rellenar automáticamente la ficha lateral con el primer punto del recorrido
    const firstPoint = filtered[0];
    const catLabel = window.mapCategoryLabels[currentLang][firstPoint.category] || firstPoint.category;
    const desc = firstPoint[`desc_${currentLang}`] || firstPoint.desc_es;

    const emptyState = document.getElementById('map-sidebar-empty-state');
    const contentState = document.getElementById('map-sidebar-content-state');
    const titleEl = document.getElementById('sidebar-point-title');
    const catEl = document.getElementById('sidebar-point-category');
    const descEl = document.getElementById('sidebar-point-desc');
    const directionsBtn = document.getElementById('sidebar-point-directions');

    if (emptyState) emptyState.style.display = 'none';
    if (contentState) contentState.style.display = 'block';

    if (titleEl) titleEl.innerText = firstPoint.name;
    if (catEl) {
      catEl.innerText = catLabel;
      catEl.style.backgroundColor = 'var(--primary-color)';
      catEl.style.color = '#fff';
    }
    if (descEl) descEl.innerText = desc;
    if (directionsBtn) {
      directionsBtn.href = `https://www.google.com/maps/dir/?api=1&destination=${firstPoint.coords[0]},${firstPoint.coords[1]}`;
    }
  }

  function clearMapItinerary() {
    if (!mapInstance) return;
    if (activePolyline) {
      mapInstance.removeLayer(activePolyline);
      activePolyline = null;
    }
    // Centrar en Recoleta
    mapInstance.setView([-34.5880, -58.3910], 14);
    
    // Resetear ficha lateral
    const emptyState = document.getElementById('map-sidebar-empty-state');
    const contentState = document.getElementById('map-sidebar-content-state');
    if (emptyState) emptyState.style.display = 'flex';
    if (contentState) contentState.style.display = 'none';
  }

  window.selectMapItinerary = selectMapItinerary;
  window.clearMapItinerary = clearMapItinerary;

  // 17. RENDERIZAR NOTA EDITORIAL PRINCIPAL (Hero / Inicio)
  function renderFeaturedDayNote() {
    const container = document.getElementById('featured-day-note-container');
    if (!container || typeof RECOLETA_ARTICLES === 'undefined' || RECOLETA_ARTICLES.length === 0) return;

    // Primer artículo en articles.js
    const article = RECOLETA_ARTICLES[0];
    const preview = article.content && article.content.length > 0
      ? article.content[0].substring(0, 180) + '...'
      : '';
    const words = article.content.join(' ').split(' ').length;
    const mins = Math.ceil(words / 180);

    container.innerHTML = `
      <div class="featured-note-grid">
        <div class="featured-note-img-wrapper">
          <img src="ccr_cultural_center.jpg" alt="${article.title}" class="featured-note-img">
        </div>
        <div class="featured-note-content">
          <div class="featured-note-meta">
            <span style="background-color: var(--primary-color); color: var(--accent-color); padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.65rem; text-transform: uppercase;">Cultura</span>
            <span>·</span>
            <span>Redacción Recoleta</span>
            <span>·</span>
            <span>${mins} min de lectura</span>
          </div>
          <h3 class="featured-note-title" style="margin-top:0.5rem; margin-bottom: 0.75rem; font-family: var(--font-title);">${article.title}</h3>
          <p class="featured-note-excerpt" style="font-size:0.92rem; line-height:1.6; color:var(--text-dark); margin-bottom:1.5rem;">${preview}</p>
          <a href="#/noticias" class="btn btn-primary" onclick="setTimeout(() => { selectLibraryArticle('${encodeURIComponent(article.title)}'); }, 400);">Leer nota completa</a>
        </div>
      </div>
    `;
    if (typeof feather !== 'undefined') feather.replace();
  }

  // Helper para buscar y hacer clic en una nota de la biblioteca
  window.selectLibraryArticle = function(title) {
    const decoded = decodeURIComponent(title);
    const items = document.querySelectorAll('.library-article-item');
    let found = false;
    items.forEach(el => {
      if (el.querySelector('div:nth-child(2)').textContent.trim() === decoded.trim()) {
        el.click();
        found = true;
      }
    });
    if (!found) {
      const article = RECOLETA_ARTICLES.find(a => a.title.trim() === decoded.trim());
      if (article) {
        const tab = document.querySelector(`.library-cat-tab[data-lib-cat="${article.category}"]`);
        if (tab) {
          tab.click();
          setTimeout(() => {
            document.querySelectorAll('.library-article-item').forEach(el => {
              if (el.querySelector('div:nth-child(2)').textContent.trim() === decoded.trim()) {
                el.click();
              }
            });
          }, 150);
        }
      }
    }
  };

  // 18. ENRUTADOR CLIENT-SIDE SPA (Rutas Temáticas y SEO)
  function handleRouting() {
    let hash = window.location.hash || '#/inicio';
    
    // Quitar barra final si la hubiera
    if (hash.endsWith('/')) {
      hash = hash.slice(0, -1);
    }
    
    const validRoutes = ['#/inicio', '#/noticias', '#/agenda', '#/turismo', '#/historia', '#/tramites', '#/mapa', '#/participar'];
    let route = hash;
    
    // Soporte para parámetros de correcciones
    if (hash.startsWith('#/participar?')) {
      route = '#/participar';
    }
    
    if (!validRoutes.includes(route)) {
      route = '#/inicio';
    }
    
    const routeName = route.replace('#/', '');
    
    // Toglear clase del body para visualización mediante CSS
    document.body.className = '';
    document.body.classList.add(`route-${routeName}`);
    
    // Actualizar nav links activos
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === route) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    // Actualizar botón del nav CTA
    const ctaBtn = document.querySelector('.nav-actions .btn-primary');
    if (ctaBtn) {
      if (route === '#/participar') {
        ctaBtn.classList.add('active');
      } else {
        ctaBtn.classList.remove('active');
      }
    }
    
    // Actualizar SEO Titles
    const seoTitles = {
      es: {
        inicio: "Recoleta | Noticias, Agenda y Comunidad",
        noticias: "Recoleta | Noticias y Biblioteca de Artículos",
        agenda: "Recoleta | Agenda Cultural del Barrio",
        turismo: "Recoleta | Recorridos e Itinerarios Turísticos",
        historia: "Recoleta | Historia y Patrimonio del Barrio",
        tramites: "Recoleta | Servicios y Trámites de la Comuna 2",
        mapa: "Recoleta | Mapa Interactivo de la Comuna 2",
        participar: "Recoleta | Participación Vecinal y Novedades"
      },
      en: {
        inicio: "Recoleta | News, Events and Community",
        noticias: "Recoleta | News & Article Library",
        agenda: "Recoleta | District Cultural Events",
        turismo: "Recoleta | Guided Walks and Itineraries",
        historia: "Recoleta | History and Heritage",
        tramites: "Recoleta | Citizen Services & Procedures",
        mapa: "Recoleta | Interactive Commune Map",
        participar: "Recoleta | Get Involved & Submit Stories"
      },
      pt: {
        inicio: "Recoleta | Notícias, Agenda e Comunidade",
        noticias: "Recoleta | Biblioteca de Artigos",
        agenda: "Recoleta | Agenda de Eventos Culturais",
        turismo: "Recoleta | Roteiros e Caminhadas Guiadas",
        historia: "Recoleta | História e Patrimônio do Bairro",
        tramites: "Recoleta | Serviços ao Cidadão e Comuna 2",
        mapa: "Recoleta | Mapa Interativo do Bairro",
        participar: "Recoleta | Participe e Envie Novedades"
      }
    };
    
    const titleVal = seoTitles[currentLang] && seoTitles[currentLang][routeName]
      ? seoTitles[currentLang][routeName]
      : "Recoleta | Portal Comunitario";
      
    document.title = titleVal;
    
    // Ir arriba
    window.scrollTo({ top: 0 });
    
    // Trigger especial de Leaflet al activar el mapa
    if (routeName === 'mapa') {
      setTimeout(() => {
        if (mapInstance) {
          mapInstance.invalidateSize();
        }
      }, 300);
    }
    
    // Rellenar correcciones si viene de la biblioteca
    if (routeName === 'participar' && hash.includes('?report=true')) {
      const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
      const reportTitle = urlParams.get('title');
      const titleInput = document.getElementById('contrib-title');
      const textInput = document.getElementById('contrib-text');
      const catInput = document.getElementById('contrib-category');
      
      if (titleInput) titleInput.value = `Corrección: ${reportTitle}`;
      if (catInput) catInput.value = 'noticias';
      if (textInput) textInput.value = `Vecino, detecté el siguiente error en la nota "${reportTitle}":\n\n[Detalla aquí la corrección]`;
    }
  }

  window.addEventListener('hashchange', handleRouting);

  // 19. FORMULARIO DE PARTICIPACIÓN MEJORADO (WhatsApp + Simulación)
  const contribFormNew = document.getElementById('contrib-form');
  const formSuccess = document.getElementById('form-success');
  const wsDirectBtn = document.getElementById('whatsapp-direct-btn');

  if (contribFormNew && formSuccess) {
    // Reemplazar submit listener anterior
    const newForm = contribFormNew.cloneNode(true);
    contribFormNew.parentNode.replaceChild(newForm, contribFormNew);

    newForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('form-submit-btn');
      if (submitBtn) {
        submitBtn.textContent = '⏳ Enviando propuesta...';
        submitBtn.disabled = true;
      }

      // Simulación de carga (feedback visual premium)
      setTimeout(() => {
        newForm.style.display = 'none';
        formSuccess.classList.add('visible');
        if (submitBtn) {
          submitBtn.textContent = 'Enviar Propuesta';
          submitBtn.disabled = false;
        }
        if (typeof feather !== 'undefined') feather.replace();
      }, 1200);
    });
  }

  // Redirección directa por WhatsApp
  if (wsDirectBtn) {
    wsDirectBtn.addEventListener('click', () => {
      const nameVal = document.getElementById('contrib-name')?.value || 'Vecino';
      const titleVal = document.getElementById('contrib-title')?.value || '';
      const textVal = document.getElementById('contrib-text')?.value || '';
      const locVal = document.getElementById('contrib-location')?.value || '';

      const msg = `Hola Redacción Recoleta, soy ${nameVal}. Quería enviar una propuesta para el portal:\n\n*Título:* ${titleVal}\n*Lugar:* ${locVal}\n*Detalle:* ${textVal}`;
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }

  // 20. ESTADOS INICIALES AL CARGAR LA PÁGINA
  changeLanguage(currentLang);
  renderFeaturedDayNote();
  setTimeout(handleRouting, 100);
});
