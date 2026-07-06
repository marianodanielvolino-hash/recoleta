// ============================================================
// COMMUNITIES.JS — Datos de Comunidades del Portal Recoleta
// [DATOS SIMULADOS] — Reemplazar con API/backend en producción.
// Última actualización: Julio 2026
// ============================================================

const RECOLETA_COMMUNITIES = [

  // ── VIDA ACTIVA Y BIENESTAR ──────────────────────────────
  {
    id: 'running-recoleta',
    name: 'Running Recoleta',
    category: 'bienestar',
    categoryLabel: 'Vida activa y bienestar',
    icon: '🏃',
    description: 'Vecinos que salen a correr por Plaza Francia, Facultad de Derecho, Libertador y circuitos cercanos.',
    longDescription: 'Para vecinos que corren o quieren empezar a moverse por los circuitos del barrio. Todos los niveles bienvenidos. Salidas grupales los fines de semana.',
    members: 147,
    lastActivity: 'Hace 2 horas',
    badge: 'popular',
    featured: true,
    posts: [
      { author: 'Martín V.', time: 'Hace 2h', type: 'Evento', text: 'Sábado 9:30 salimos desde Plaza Francia, ritmo tranquilo. Todos bienvenidos.' },
      { author: 'Lucía G.', time: 'Hace 5h', type: 'Consulta', text: '¿Alguien recomienda circuito iluminado para correr después de las 19hs?' },
      { author: 'Grupo Admin', time: 'Ayer', type: 'Aviso', text: 'Sumamos grupo inicial para quienes recién arrancan. Sin presión de ritmo.' }
    ],
    events: [
      { title: 'Trote suave de sábado', date: 'Sábado 9:30 hs', place: 'Plaza Francia' },
      { title: 'Caminata + running para principiantes', date: 'Domingo 8:00 hs', place: 'Av. del Libertador' }
    ],
    rules: ['Cuidar el tono en los mensajes.', 'No publicar datos personales sensibles.', 'No vender servicios de forma invasiva.', 'Respetar ritmos y convivencia barrial.']
  },
  {
    id: 'caminatas-saludables',
    name: 'Caminatas Saludables',
    category: 'bienestar',
    categoryLabel: 'Vida activa y bienestar',
    icon: '🚶',
    description: 'Caminatas suaves, adultos mayores, pausas activas y recorridos urbanos sin apuro.',
    longDescription: 'Espacio para caminatas grupales sin apuro, especialmente pensado para adultos mayores y personas que disfrutan recorrer Recoleta con calma.',
    members: 89,
    lastActivity: 'Hace 1 día',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Elena P.', time: 'Ayer', type: 'Evento', text: 'Domingo al mediodía, caminata tranquila por Plaza Vicente López. Punto de encuentro en la entrada.' },
      { author: 'Roberto M.', time: 'Hace 2 días', type: 'Recomendación', text: 'El recorrido por Alvear hacia Libertador al atardecer es muy tranquilo y hermoso.' }
    ],
    events: [{ title: 'Caminata dominical', date: 'Domingo 12:00 hs', place: 'Plaza Vicente López' }],
    rules: ['Ritmo accesible para todos.', 'Respeto y acompañamiento mutuo.', 'Sin condicionamientos físicos para unirse.']
  },
  {
    id: 'yoga-bienestar',
    name: 'Yoga y Bienestar',
    category: 'bienestar',
    categoryLabel: 'Vida activa y bienestar',
    icon: '🧘',
    description: 'Yoga, meditación, respiración y actividades de bienestar en plazas y espacios del barrio.',
    longDescription: 'Comunidad de yoga, meditación y bienestar integral. Clases en plazas, recomendaciones de profesores y charlas sobre salud integrativa.',
    members: 73,
    lastActivity: 'Hace 3 horas',
    badge: 'new',
    featured: false,
    posts: [
      { author: 'Sofía R.', time: 'Hace 3h', type: 'Evento', text: 'Jueves a las 18hs, yoga en Plaza Francia (zona lateral). Traer alfombra.' },
      { author: 'Valeria C.', time: 'Ayer', type: 'Recomendación', text: 'Recomiendo el espacio de meditación del Centro Cultural, gratis los miércoles.' }
    ],
    events: [{ title: 'Yoga en Plaza Francia', date: 'Jueves 18:00 hs', place: 'Plaza Francia' }],
    rules: ['Espacio de respeto y no competencia.', 'No publicitar servicios sin mención.', 'Bienvenidos todos los niveles.']
  },
  {
    id: 'bicicleta-urbana',
    name: 'Bicicleta Urbana',
    category: 'bienestar',
    categoryLabel: 'Vida activa y bienestar',
    icon: '🚲',
    description: 'Recorridos, bicicleteros, seguridad vial y movilidad sustentable por Recoleta.',
    longDescription: 'Para ciclistas urbanos de Recoleta: recorridos, bicicleteros seguros, noticias de ciclovías, consejos de seguridad y movilidad en bici.',
    members: 112,
    lastActivity: 'Hace 4 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Diego F.', time: 'Hace 4h', type: 'Consulta', text: '¿Hay algún bicicletero techado cerca de la Facultad de Derecho?' },
      { author: 'Ana M.', time: 'Ayer', type: 'Recomendación', text: 'El recorrido por Libertador hacia Palermo está muy bien habilitado.' }
    ],
    events: [{ title: 'Bicicleteada vecinal', date: 'Sábado 10:00 hs', place: 'Plaza de las Naciones Unidas' }],
    rules: ['Información de buena fe.', 'No publicar sin verificar.', 'Respetar señalización vial.']
  },

  // ── SALUD Y PROFESIONALES ────────────────────────────────
  {
    id: 'medicos-recoleta',
    name: 'Médicos de Recoleta',
    category: 'salud',
    categoryLabel: 'Salud y profesionales',
    icon: '🏥',
    description: 'Red de profesionales de salud, consultorios y recomendaciones responsables del barrio.',
    longDescription: 'Espacio para médicos, kinesiólogos, psicólogos, nutricionistas, dentistas y vecinos que buscan recomendaciones responsables de profesionales.',
    members: 208,
    lastActivity: 'Hace 1 hora',
    badge: 'popular',
    featured: true,
    posts: [
      { author: 'Dr. García', time: 'Hace 1h', type: 'Aviso', text: 'El CeSAC 22 tiene nueva guardia pediátrica los lunes. Difundir.' },
      { author: 'Vecina anónima', time: 'Hace 6h', type: 'Consulta', text: '¿Alguien recomienda traumatólogo de adultos en la zona?' }
    ],
    events: [{ title: 'Campaña de vacunación antigripal', date: 'Jueves y viernes', place: 'CeSAC N°22, Uriburu 1018' }],
    rules: ['Solo recomendaciones de profesionales verificados.', 'No dar diagnósticos online.', 'Las urgencias: llamar al 107.', 'No publicar datos médicos de terceros.']
  },
  {
    id: 'turnos-salud',
    name: 'Turnos y Salud Barrial',
    category: 'salud',
    categoryLabel: 'Salud y profesionales',
    icon: '📋',
    description: 'Hospitales, centros de salud, vacunación, campañas y orientación para vecinos.',
    longDescription: 'Información sobre el sistema de salud del barrio: hospitales públicos, centros de salud, campañas, vacunación y orientación para vecinos.',
    members: 165,
    lastActivity: 'Hace 2 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Mariela H.', time: 'Hace 2h', type: 'Aviso', text: 'Hospital Fernández tiene guardia oftalmológica espontánea los miércoles de mañana.' },
      { author: 'Carlos B.', time: 'Ayer', type: 'Consulta', text: '¿Dónde conviene sacar turno de odontología pública cerca de Plaza Houssay?' }
    ],
    events: [],
    rules: ['Información verificada antes de publicar.', 'No diagnósticos online.', 'Urgencias: canales oficiales.']
  },
  {
    id: 'cuidadores-adultos-mayores',
    name: 'Cuidadores y Adultos Mayores',
    category: 'salud',
    categoryLabel: 'Salud y profesionales',
    icon: '🤝',
    description: 'Red de apoyo, acompañamiento y servicios para personas mayores y sus familias.',
    longDescription: 'Red de cuidadores, acompañantes terapéuticos, familiares y profesionales vinculados al cuidado de adultos mayores en Recoleta.',
    members: 94,
    lastActivity: 'Hace 5 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Patricia L.', time: 'Hace 5h', type: 'Consulta', text: '¿Alguien recomienda acompañante terapéutico con experiencia en demencias leves?' },
      { author: 'Susana M.', time: 'Ayer', type: 'Aviso', text: 'El PAMI tiene programa de visitas domiciliarias. Llamar al 0800-222-7264.' }
    ],
    events: [],
    rules: ['Tono empático y respetuoso.', 'No publicar datos de terceros.', 'Las recomendaciones deben ser de buena fe.']
  },

  // ── VIVIENDA Y VIDA COTIDIANA ────────────────────────────
  {
    id: 'alquileres-recoleta',
    name: 'Alquileres en Recoleta',
    category: 'vivienda',
    categoryLabel: 'Vivienda y vida cotidiana',
    icon: '🏠',
    description: 'Precios reales, condiciones, inmobiliarias y experiencias sobre alquilar en el barrio.',
    longDescription: 'Espacio para vecinos que buscan o alquilan en Recoleta: precios reales, condiciones, consejos legales generales y experiencias.',
    members: 341,
    lastActivity: 'Hace 30 minutos',
    badge: 'popular',
    featured: true,
    posts: [
      { author: 'Tomás R.', time: 'Hace 30min', type: 'Consulta', text: '¿Cuánto están los monoambientes en la zona de Santa Fe y Pueyrredón?' },
      { author: 'Florencia C.', time: 'Hace 3h', type: 'Recomendación', text: 'Buena experiencia con inmobiliaria en Callao al 1400, muy claros con las condiciones.' },
      { author: 'Vecino anón.', time: 'Ayer', type: 'Aviso', text: 'Ojo con contratos sin indexación clara. Revisar bien antes de firmar.' }
    ],
    events: [],
    rules: ['No publicar estafas ni datos falsos.', 'No repetir el mismo aviso más de una vez por día.', 'Identificar si sos propietario, inquilino o inmobiliaria.']
  },
  {
    id: 'consorcios-encargados',
    name: 'Consorcios y Encargados',
    category: 'vivienda',
    categoryLabel: 'Vivienda y vida cotidiana',
    icon: '🏢',
    description: 'Edificios, expensas, administración, mantenimiento y convivencia entre vecinos.',
    longDescription: 'Para propietarios, inquilinos, encargados y administradores de edificios en Recoleta. Expensas, reparaciones y convivencia.',
    members: 128,
    lastActivity: 'Hace 1 día',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Jorge P.', time: 'Ayer', type: 'Consulta', text: '¿Cómo se tramita la renovación del libro de actas de consorcio?' },
      { author: 'Inés V.', time: 'Hace 2 días', type: 'Aviso', text: 'Encargado recomendado para edificios sin encargado fijo: contacto en DM.' }
    ],
    events: [],
    rules: ['No mencionar datos de personas específicas.', 'Consultar temas legales con profesional.', 'Tono respetuoso.']
  },
  {
    id: 'objetos-perdidos',
    name: 'Objetos Perdidos y Encontrados',
    category: 'vivienda',
    categoryLabel: 'Vivienda y vida cotidiana',
    icon: '🔑',
    description: 'Llaves, documentos, mascotas, bicicletas y objetos extraviados en el barrio.',
    longDescription: 'Comunidad de ayuda mutua para reportar y encontrar objetos perdidos o encontrados en Recoleta.',
    members: 256,
    lastActivity: 'Hace 45 minutos',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Cecilia F.', time: 'Hace 45min', type: 'Aviso', text: 'Encontré cartera marrón con documentos en Plaza Francia. Escribir para coordinar.' },
      { author: 'Pablo M.', time: 'Hace 3h', type: 'Pedido de ayuda', text: 'Perdí llaves con llavero azul en zona Pueyrredón y Las Heras. Por favor avisar.' }
    ],
    events: [],
    rules: ['Describir el objeto claramente.', 'No publicar datos completos de documentos.', 'Coordinar entrega en lugar público.']
  },
  {
    id: 'recomendaciones-vecinales',
    name: 'Recomendaciones Vecinales',
    category: 'vivienda',
    categoryLabel: 'Vivienda y vida cotidiana',
    icon: '⭐',
    description: 'Plomeros, electricistas, cerrajeros, técnicos y oficios confiables del barrio.',
    longDescription: 'El boca a boca del barrio. Recomendaciones de plomeros, electricistas, gasistas, pintores, cerrajeros y cualquier oficio probado en Recoleta.',
    members: 489,
    lastActivity: 'Hace 20 minutos',
    badge: 'popular',
    featured: false,
    posts: [
      { author: 'Andrea S.', time: 'Hace 20min', type: 'Recomendación', text: 'Muy buen gasista para service de calefacción: atiende bien y precios justos.' },
      { author: 'Fernando K.', time: 'Hace 2h', type: 'Consulta', text: '¿Alguien tiene un buen electricista para instalación nueva en departamento?' }
    ],
    events: [],
    rules: ['Ser honesto con las recomendaciones.', 'No recomendar servicios propios sin aclararlo.', 'Evitar datos personales completos.']
  },

  // ── CULTURA, IDENTIDAD Y ENCUENTRO ──────────────────────
  {
    id: 'penyas-folklore',
    name: 'Peñas y Folklore',
    category: 'cultura',
    categoryLabel: 'Cultura, identidad y encuentro',
    icon: '🎵',
    description: 'Guitarreadas, folklore, danza, comidas regionales y encuentros culturales.',
    longDescription: 'Para amantes del folklore, la música criolla, las peñas, el tango y las danzas regionales. Encuentros en el barrio.',
    members: 134,
    lastActivity: 'Hace 6 horas',
    badge: 'active',
    featured: true,
    posts: [
      { author: 'Horacio B.', time: 'Hace 6h', type: 'Evento', text: 'Guitarreada informal el viernes 20hs en zona Las Heras. Avisar si vienen.' },
      { author: 'Mercedes T.', time: 'Ayer', type: 'Consulta', text: '¿Alguien sabe de peña estable con buena comida regional en la zona?' }
    ],
    events: [{ title: 'Guitarreada vecinal', date: 'Viernes 20:00 hs', place: 'Zona Las Heras (confirmar)' }],
    rules: ['Espíritu festivo y de encuentro.', 'Respetar horarios de vecinos.', 'No promociones comerciales sin mencionarlo.']
  },
  {
    id: 'club-lectura',
    name: 'Club de Lectura Recoleta',
    category: 'cultura',
    categoryLabel: 'Cultura, identidad y encuentro',
    icon: '📚',
    description: 'Libros, cafés literarios, Biblioteca Nacional y encuentros de lectura compartida.',
    longDescription: 'Club de lectores del barrio. Encuentros en cafés, la Biblioteca Nacional y el Ateneo. Recomendaciones y lecturas grupales.',
    members: 167,
    lastActivity: 'Hace 4 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Inés R.', time: 'Hace 4h', type: 'Evento', text: 'Próximo encuentro: "La Uruguaya" de Pedro Mairal. Sábado en el café frente a la Biblioteca Nacional.' },
      { author: 'Andrés C.', time: 'Ayer', type: 'Recomendación', text: '¿Alguien leyó "Los años" de Annie Ernaux? Lo propongo para el próximo encuentro.' }
    ],
    events: [{ title: 'Encuentro mensual de lectura', date: 'Sábado 17:00 hs', place: 'Café frente a Biblioteca Nacional' }],
    rules: ['Respetar el ritmo de lectura de cada uno.', 'No spoilers sin aviso.', 'Tono de diálogo y escucha.']
  },
  {
    id: 'historia-memoria',
    name: 'Historia y Memoria Barrial',
    category: 'cultura',
    categoryLabel: 'Cultura, identidad y encuentro',
    icon: '📸',
    description: 'Fotos antiguas, relatos familiares, edificios históricos y archivo comunitario de Recoleta.',
    longDescription: 'Archivo vivo de la memoria de Recoleta. Fotos antiguas, relatos de vecinos históricos, edificios que ya no están y documentación del patrimonio barrial.',
    members: 298,
    lastActivity: 'Hace 2 horas',
    badge: 'popular',
    featured: true,
    posts: [
      { author: 'Carlos F.', time: 'Hace 2h', type: 'Historia', text: 'Foto de la Av. Alvear en 1940: ¿alguien reconoce el edificio de la derecha?' },
      { author: 'Nora B.', time: 'Ayer', type: 'Historia', text: 'Mi abuela vivió en el barrio desde 1960. Comparto fotos de la Feria en los 70s.' }
    ],
    events: [],
    rules: ['Respetar los recuerdos de los vecinos.', 'Citar fuentes de fotos si es posible.', 'No modificar imágenes históricas.']
  },
  {
    id: 'fotografia-urbana',
    name: 'Fotografía Urbana',
    category: 'cultura',
    categoryLabel: 'Cultura, identidad y encuentro',
    icon: '📷',
    description: 'Arquitectura, plazas, fachadas, cementerio y vida cotidiana de Recoleta para sacar fotos.',
    longDescription: 'Comunidad para fotógrafos urbanos. Compartir fotos de arquitectura, plazas, detalles olvidados y la vida cotidiana de Recoleta.',
    members: 215,
    lastActivity: 'Hace 3 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Luciana M.', time: 'Hace 3h', type: 'Evento', text: 'Salida fotográfica el domingo 9hs por el pasaje Bollini. Todos los niveles bienvenidos.' },
      { author: 'Pablo V.', time: 'Ayer', type: 'Historia', text: 'Detalle de reja olvidado en pasaje Ciro de Andrea. Arquitectura que pocos ven.' }
    ],
    events: [{ title: 'Salida fotográfica', date: 'Domingo 9:00 hs', place: 'Pasaje Bollini' }],
    rules: ['No fotografiar personas sin consentimiento.', 'Respetar sitios privados.', 'Crédito a las fotos propias.']
  },
  {
    id: 'cine-teatro-muestras',
    name: 'Cine, Teatro y Muestras',
    category: 'cultura',
    categoryLabel: 'Cultura, identidad y encuentro',
    icon: '🎭',
    description: 'Agenda cultural comentada: Bellas Artes, CCR, salas y espacios del barrio.',
    longDescription: 'Recomendaciones de muestras en Bellas Artes, funciones en el CCR, cine, teatro y espectáculos del barrio.',
    members: 183,
    lastActivity: 'Hace 1 hora',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Camila O.', time: 'Hace 1h', type: 'Recomendación', text: 'La muestra de fotografía en Palais de Glace está muy bien curada. Vale la visita.' },
      { author: 'Hernán D.', time: 'Ayer', type: 'Evento', text: 'Esta semana en el CCR hay obra de teatro experimental gratis, jueves a las 19.' }
    ],
    events: [],
    rules: ['Tono de recomendación genuina.', 'No publicitar espectáculos propios sin aclararlo.']
  },

  // ── FAMILIA, ESTUDIANTES Y EDUCACIÓN ────────────────────
  {
    id: 'familias-recoleta',
    name: 'Familias de Recoleta',
    category: 'educacion',
    categoryLabel: 'Familia, estudiantes y educación',
    icon: '👨‍👩‍👧',
    description: 'Actividades con chicos, plazas, colegios, vacaciones y recomendaciones para familias.',
    longDescription: 'Comunidad para familias del barrio: actividades con chicos, colegios, eventos para niños, vacaciones y todo sobre la vida familiar en Recoleta.',
    members: 276,
    lastActivity: 'Hace 1 hora',
    badge: 'popular',
    featured: false,
    posts: [
      { author: 'Marcela V.', time: 'Hace 1h', type: 'Consulta', text: '¿Dónde hacen buenos cumpleaños infantiles en la zona? Nena de 6 años.' },
      { author: 'Grupo Admin', time: 'Ayer', type: 'Aviso', text: 'El CCR tiene taller gratuito de títeres para chicos de 5 a 10 años estas vacaciones.' }
    ],
    events: [{ title: 'Tarde en Plaza Francia con chicos', date: 'Sábado 15:00 hs', place: 'Plaza Francia' }],
    rules: ['Proteger la privacidad de los menores.', 'No publicar fotos de niños ajenos.', 'Información verificada sobre actividades.']
  },
  {
    id: 'estudiantes-uba',
    name: 'Estudiantes UBA y Universidades',
    category: 'educacion',
    categoryLabel: 'Familia, estudiantes y educación',
    icon: '🎓',
    description: 'Derecho, Medicina, apuntes, cafés de estudio, alquileres y vida universitaria.',
    longDescription: 'Comunidad para estudiantes de Derecho, Medicina, Odontología y otras facultades cercanas. Apuntes, cafés de estudio y vida universitaria en Recoleta.',
    members: 412,
    lastActivity: 'Hace 20 minutos',
    badge: 'popular',
    featured: false,
    posts: [
      { author: 'Juan P.', time: 'Hace 20min', type: 'Consulta', text: '¿Cuál es el mejor café para estudiar con WiFi bueno cerca de Derecho?' },
      { author: 'Lara M.', time: 'Hace 2h', type: 'Aviso', text: 'Mesa de estudio grupal esta tarde en la Biblioteca Nacional, sala libre.' }
    ],
    events: [],
    rules: ['Respeto entre estudiantes de todas las carreras.', 'No vender apuntes copiados.', 'Información verificada.']
  },
  {
    id: 'apoyo-escolar',
    name: 'Apoyo Escolar y Clases Particulares',
    category: 'educacion',
    categoryLabel: 'Familia, estudiantes y educación',
    icon: '✏️',
    description: 'Red de docentes, profesores particulares y familias buscando apoyo educativo.',
    longDescription: 'Red de docentes y profesores particulares del barrio. Matemáticas, lengua, inglés, ciencias y materias universitarias.',
    members: 157,
    lastActivity: 'Hace 2 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Beatriz L.', time: 'Hace 2h', type: 'Oferta', text: 'Profesora de Matemáticas para secundaria y CBC. Zona Recoleta/Barrio Norte. (Oferta propia identificada)' },
      { author: 'Miguel F.', time: 'Ayer', type: 'Consulta', text: '¿Alguien recomienda profe de inglés para chico de 10 años?' }
    ],
    events: [],
    rules: ['Docentes deben identificarse como oferta comercial.', 'No publicar información académica falsa.', 'Buen trato.']
  },

  // ── GASTRONOMÍA, COMERCIO Y TRABAJO ─────────────────────
  {
    id: 'comercios-barrio',
    name: 'Comercios del Barrio',
    category: 'comercio',
    categoryLabel: 'Gastronomía, comercio y trabajo',
    icon: '🛍️',
    description: 'Locales, emprendedores, novedades y el directorio vivo del comercio local de Recoleta.',
    longDescription: 'Comunidad para comercios, emprendedores y locales del barrio. Novedades, aperturas, promociones responsables y directorio del comercio local.',
    members: 198,
    lastActivity: 'Hace 3 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Librería Guido', time: 'Hace 3h', type: 'Oferta', text: '20% en libros de arquitectura esta semana. Guido 1885. (Oferta comercial identificada)' },
      { author: 'Fernanda R.', time: 'Ayer', type: 'Consulta', text: '¿Alguien conoce ferretería bien surtida que no sea Sodimac en la zona?' }
    ],
    events: [],
    rules: ['Los contenidos comerciales deben identificarse.', 'No publicitar más de una vez por día.', 'Sin información falsa sobre productos.']
  },
  {
    id: 'cafes-bares',
    name: 'Cafés y Bares de Recoleta',
    category: 'comercio',
    categoryLabel: 'Gastronomía, comercio y trabajo',
    icon: '☕',
    description: 'Recomendaciones, nuevas aperturas, cafés clásicos y meriendas en Recoleta.',
    longDescription: 'Guía viva de cafés y bares del barrio. Recomendaciones de clásicos, nuevas aperturas y las mejores opciones para estudiar o trabajar.',
    members: 334,
    lastActivity: 'Hace 1 hora',
    badge: 'popular',
    featured: false,
    posts: [
      { author: 'Gabriela T.', time: 'Hace 1h', type: 'Consulta', text: '¿Cafés con buena WiFi y enchufes para trabajar? Zona Callao - Santa Fe.' },
      { author: 'Rodrigo M.', time: 'Hace 4h', type: 'Aviso', text: 'Abrió local de especialidad en Guido al 1800, muy buen café y espacio para estudiar.' }
    ],
    events: [],
    rules: ['Recomendaciones honestas.', 'Si trabajás en el local, identificarlo.', 'Respeto a dueños y empleados.']
  },
  {
    id: 'bolsa-trabajo',
    name: 'Bolsa de Trabajo Local',
    category: 'comercio',
    categoryLabel: 'Gastronomía, comercio y trabajo',
    icon: '📌',
    description: 'Búsquedas laborales, changas, oficios y oportunidades en Recoleta.',
    longDescription: 'Bolsa de trabajo barrial. Comercios buscando personal, vecinos ofreciendo servicios y oportunidades laborales en Recoleta.',
    members: 287,
    lastActivity: 'Hace 1 hora',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Café Tabac', time: 'Hace 1h', type: 'Oferta', text: 'Buscamos mozo/moza con experiencia para turno tarde. Zona Recoleta. (Oferta identificada)' },
      { author: 'Lucas H.', time: 'Hace 3h', type: 'Aviso', text: 'Ofrezco servicio de pintura de departamentos, presupuesto sin cargo.' }
    ],
    events: [],
    rules: ['Identificar si es búsqueda o servicio propio.', 'No publicar datos personales completos.', 'Una publicación por oferta.']
  },

  // ── COMUNIDAD Y CUIDADO ──────────────────────────────────
  {
    id: 'mascotas-recoleta',
    name: 'Mascotas Recoleta',
    category: 'comunidad',
    categoryLabel: 'Comunidad y cuidado',
    icon: '🐾',
    description: 'Paseadores, veterinarias, adopciones, mascotas perdidas y convivencia responsable.',
    longDescription: 'Comunidad para quienes tienen mascotas en Recoleta. Recomendaciones de veterinarias, paseadores, adopciones y mascotas perdidas.',
    members: 378,
    lastActivity: 'Hace 45 minutos',
    badge: 'popular',
    featured: true,
    posts: [
      { author: 'Carolina B.', time: 'Hace 45min', type: 'Aviso', text: 'Perdida gata atigrada blanca y gris en Plaza Rodríguez Peña. Muy amigable. Por favor avisar.' },
      { author: 'Vet. Recoleta', time: 'Hace 3h', type: 'Aviso', text: 'Campaña de vacunación antirrábica gratuita este sábado en Plaza Vicente López de 10 a 14hs.' }
    ],
    events: [{ title: 'Vacunación gratuita mascotas', date: 'Sábado 10:00-14:00 hs', place: 'Plaza Vicente López' }],
    rules: ['No publicar fotos de dueños sin permiso.', 'Identificar al dueño o paseador.', 'Respeto en espacios compartidos.']
  },
  {
    id: 'voluntariado-solidaridad',
    name: 'Voluntariado y Solidaridad',
    category: 'comunidad',
    categoryLabel: 'Comunidad y cuidado',
    icon: '🌱',
    description: 'Campañas, donaciones, comedores, acompañamiento y acciones comunitarias.',
    longDescription: 'Espacio para conectar con iniciativas solidarias en y alrededor de Recoleta. Donaciones, voluntariado y acompañamiento.',
    members: 145,
    lastActivity: 'Hace 6 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Grupo Solidario', time: 'Hace 6h', type: 'Aviso', text: 'Colecta de abrigos sábado en Plaza Francia de 10 a 14hs. Traer ropa limpia en buen estado.' },
      { author: 'Pilar G.', time: 'Ayer', type: 'Consulta', text: '¿Hay comedor o espacio de donación de alimentos no perecederos cerca de Callao?' }
    ],
    events: [{ title: 'Colecta de abrigos', date: 'Sábado 10:00-14:00 hs', place: 'Plaza Francia' }],
    rules: ['Verificar antes de publicar colectas.', 'No solicitar dinero sin identificación clara.', 'Transparencia en las acciones.']
  },
  {
    id: 'seguridad-convivencia',
    name: 'Seguridad y Convivencia',
    category: 'comunidad',
    categoryLabel: 'Comunidad y cuidado',
    icon: '🔒',
    description: 'Alertas vecinales responsables, prevención y cuidado del espacio público.',
    longDescription: 'Alertas vecinales responsables, consejos de prevención y convivencia nocturna. Sin escraches ni identificación de personas sin verificar.',
    members: 423,
    lastActivity: 'Hace 30 minutos',
    badge: 'popular',
    featured: false,
    posts: [
      { author: 'Vecino anón.', time: 'Hace 30min', type: 'Aviso', text: 'Alerta: bicicletas robadas en zona Las Heras y Pueyrredón. Cuidado con el cierre.' },
      { author: 'Moderación', time: 'Ayer', type: 'Aviso', text: 'Recordatorio: no publicar fotos de personas sin verificar. Urgencias: llamar al 911.' }
    ],
    events: [],
    rules: ['Sin escraches ni acusaciones sin pruebas.', 'Urgencias: llamar al 911.', 'Tono preventivo, no alarmista.', 'No publicar datos personales de sospechosos.']
  },
  {
    id: 'ambiente-reciclaje',
    name: 'Ambiente y Reciclaje',
    category: 'comunidad',
    categoryLabel: 'Comunidad y cuidado',
    icon: '♻️',
    description: 'Puntos verdes, separación de residuos, compost y acciones sustentables del barrio.',
    longDescription: 'Comunidad ambiental de Recoleta. Puntos verdes, reciclaje, compostera, limpieza de plazas y movilidad sustentable.',
    members: 167,
    lastActivity: 'Hace 2 horas',
    badge: 'active',
    featured: false,
    posts: [
      { author: 'Eco Recoleta', time: 'Hace 2h', type: 'Aviso', text: 'Mapa actualizado de Puntos Verdes en Recoleta. 5 puntos nuevos esta semana.' },
      { author: 'Valentina F.', time: 'Ayer', type: 'Consulta', text: '¿Dónde llevar electrónica vieja para reciclar en la zona?' }
    ],
    events: [{ title: 'Limpieza de Plaza Vicente López', date: 'Domingo 9:00 hs', place: 'Plaza Vicente López' }],
    rules: ['Información de buena fe.', 'Verificar ubicaciones antes de compartir.', 'Tono constructivo.']
  }
];

// ── Categorías para filtros ──────────────────────────────
const COMMUNITY_CATEGORIES = [
  { id: 'all',       label: 'Todas',        icon: '🏙️' },
  { id: 'bienestar', label: 'Vida activa',  icon: '🏃' },
  { id: 'salud',     label: 'Salud',        icon: '🏥' },
  { id: 'vivienda',  label: 'Vivienda',     icon: '🏠' },
  { id: 'cultura',   label: 'Cultura',      icon: '🎭' },
  { id: 'educacion', label: 'Educación',    icon: '🎓' },
  { id: 'comercio',  label: 'Comercio',     icon: '🛍️' },
  { id: 'comunidad', label: 'Comunidad',    icon: '🤝' }
];
