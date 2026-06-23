import logoImage from '../assets/images/alianza-progreso-logo.png'
import headerPortraitImage from '../assets/images/IMG_6837-header.png'
import portraitImage from '../assets/images/IMG_6837.JPG.jpeg'
import candidateImage from '../assets/images/IMG_6705.JPG.jpeg'
import valleyImage from '../assets/images/IMG_6706.JPG.jpeg'
import bridgeImage from '../assets/images/IMG_7546.JPG.jpeg'
import communityImage from '../assets/images/IMG_7559.JPG.jpeg'

export const siteRoutes = [
  { path: '/', label: 'Inicio' },
  { path: '/propuestas', label: 'Propuestas específicas' },
  { path: '/repositorio', label: 'Fotos y videos' },
] as const

export const candidate = {
  name: 'Sacha',
  district: 'Huancán',
  party: 'Alianza para el Progreso',
  primaryPhrase: 'Soy tu amigo Sacha',
  slogan: 'Planificación, seguridad y trabajo para Huancán',
  supportPhrase: 'Un distrito ordenado, saludable y con oportunidades.',
  tiktokUrl: 'https://vt.tiktok.com/ZSQUWNjR6/',
  logo: {
    src: logoImage,
    alt: 'Logo de Alianza para el Progreso sin fondo',
  },
  headerPortrait: {
    src: headerPortraitImage,
    alt: 'Retrato de Sacha sin fondo',
  },
}

export const heroVisual = {
  src: valleyImage,
  alt: 'Sacha observando el valle de Huancán',
}

export const candidatePhoto = {
  src: candidateImage,
  alt: 'Sacha en Miravalle con paisaje de Huancán',
}

export const profileVisual = {
  src: portraitImage,
  alt: 'Retrato de Sacha',
}

export const credentials = [
  'Licenciado en Administración de Empresas',
  'Maestría en Planificación y Proyectos de Inversión',
  'Estudiante de doctorado en la UNCP',
  'Ex Policía Nacional, egresado con segundo puesto de promoción y brigadier general',
  'Formación escolar en Auray, con diplomas de reconocimiento cada año',
]

export const companies = [
  'ESPECTRACOLOR Publicidad y Marketing',
  'TAYTA Restaurante Turístico',
  'KATTRINA, venta de productos de belleza',
]

export const publicService = [
  {
    period: '2021 - 2022',
    role: 'Gerente de Seguridad Ciudadana de la provincia de Huancayo',
  },
]

export type ProposalIcon =
  | 'water'
  | 'economy'
  | 'security'
  | 'health'
  | 'commerce'
  | 'sports'

export type Proposal = {
  id: string
  number: string
  title: string
  summary: string
  details: string[]
  icon: ProposalIcon
}

export const proposals: Proposal[] = [
  {
    id: 'agua-desague',
    number: '01',
    title: 'Agua y desagüe para todos',
    summary: 'Servicio de agua durante 3 horas diarias y avance del sistema de desagüe.',
    details: [
      'Gestión prioritaria para ampliar el acceso al agua en hogares y barrios.',
      'Plan de trabajo por sectores para ordenar la ejecución del desagüe.',
      'Seguimiento público de metas para que la población conozca el avance.',
    ],
    icon: 'water',
  },
  {
    id: 'reactivacion-economica',
    number: '02',
    title: 'Reactivación económica',
    summary:
      'Alameda del río Chanchas, Miravalle en Tambo Huari, parques zonales y formalización empresarial.',
    details: [
      'Creación de la alameda del río Chanchas como eje turístico y comercial.',
      'Impulso de Miravalle en Tambo Huari y parques zonales en la franja del río Mantaro.',
      'Formalización de empresas pequeñas y grandes para generar empleo local.',
    ],
    icon: 'economy',
  },
  {
    id: 'seguridad-ciudadana',
    number: '03',
    title: 'Seguridad ciudadana integrada',
    summary:
      'Comisaría integrada con serenazgo, central de monitoreo y pantalla LED en la plaza de Huancán.',
    details: [
      'Articulación operativa entre comisaría, serenazgo y monitoreo del distrito.',
      'Central de cámaras para prevención, respuesta y transparencia ciudadana.',
      'Pantalla LED gigante para que la población vea incidencias relevantes del distrito.',
    ],
    icon: 'security',
  },
  {
    id: 'centro-salud',
    number: '04',
    title: 'Centro de salud tipo I-4',
    summary: 'Creación de un centro de salud tipo I-4 para fortalecer la atención local.',
    details: [
      'Gestión técnica y presupuestal para elevar la capacidad de atención.',
      'Servicios de salud más cercanos para familias, adultos mayores y niños.',
      'Mejor coordinación preventiva entre salud, barrios e instituciones.',
    ],
    icon: 'health',
  },
  {
    id: 'centro-comercial',
    number: '05',
    title: 'Centro comercial moderno',
    summary:
      'Nuevo centro comercial de 4 pisos en el antiguo palacio municipal, con servicios, comida, tiendas y cine.',
    details: [
      'Primer piso: agencias bancarias y locales de consumo masivo.',
      'Segundo piso: patio de comidas.',
      'Tercer piso: tiendas de belleza, ropa y productos especializados.',
      'Cuarto piso: cine para entretenimiento y dinamización comercial.',
    ],
    icon: 'commerce',
  },
  {
    id: 'espacios-publicos',
    number: '06',
    title: 'Espacios públicos y deporte',
    summary:
      'Recuperación de complejos deportivos de cada barrio con cercos, césped sintético y reflectores.',
    details: [
      'Cercado y mejoramiento de complejos deportivos y espacios públicos.',
      'Instalación de césped sintético y reflectores para uso seguro.',
      'Modelo autosostenible con administración organizada de cada barrio.',
    ],
    icon: 'sports',
  },
]

export const timeline = [
  {
    id: 'auray',
    label: 'AURAY',
    period: 'Formación escolar',
    badge: 'FORMACIÓN',
    title: 'Raíces educativas en Auray',
    description:
      'Estudió en la escuelita de Auray y recibió diplomas de reconocimiento durante todos sus años de formación.',
    position: 8,
    placement: 'top',
  },
  {
    id: 'policia',
    label: 'PNP',
    period: 'Servicio y disciplina',
    badge: 'SEGUNDO PUESTO',
    title: 'Disciplina en la Policía Nacional',
    description:
      'Egresó con el segundo puesto de su promoción y fue brigadier general, una etapa marcada por disciplina y vocación pública.',
    position: 30,
    placement: 'bottom',
  },
  {
    id: 'empresas',
    label: 'EMPRESA',
    period: 'Emprendimiento',
    badge: 'EMPRESAS FUNDADAS',
    title: 'Emprendimiento local',
    description:
      'Fundó empresas vinculadas a publicidad, turismo gastronómico y productos de belleza, conectadas con empleo y comercio.',
    position: 52,
    placement: 'top',
  },
  {
    id: 'huancayo',
    label: '2021 - 2022',
    period: 'Gestión pública',
    badge: 'SEGURIDAD CIUDADANA',
    title: 'Gestión en seguridad ciudadana',
    description:
      'Fue gerente de Seguridad Ciudadana de la provincia de Huancayo durante los periodos 2021 y 2022.',
    position: 73,
    placement: 'bottom',
  },
  {
    id: 'actualidad',
    label: 'HUANCÁN',
    period: 'Plan de desarrollo',
    badge: 'PROPUESTAS',
    title: 'Planificación para Huancán',
    description:
      'Integra administración, proyectos de inversión y experiencia en seguridad para proponer una gestión ordenada.',
    position: 92,
    placement: 'top',
  },
] satisfies Array<{
  id: string
  label: string
  period: string
  badge: string
  title: string
  description: string
  position: number
  placement: 'top' | 'bottom'
}>

export const timelineVisual = {
  year: '2026',
  background: valleyImage,
  backgroundAlt: 'Vista panorámica del valle de Huancán',
}

export const mediaRepository = [
  {
    id: 'puente',
    type: 'Actividad',
    title: 'Actividad en puente',
    description: 'Registro de trabajo y presencia en espacios públicos del distrito.',
    image: bridgeImage,
  },
  {
    id: 'comunidad',
    type: 'Actividad',
    title: 'Trabajo con vecinos',
    description: 'Registro de recorridos, reuniones y actividades en barrios de Huancán.',
    image: communityImage,
  },
  {
    id: 'miravalle',
    type: 'Territorio',
    title: 'Miravalle y desarrollo local',
    description: 'Imagen de referencia territorial para impulsar turismo, paisaje y economía.',
    image: candidatePhoto.src,
  },
  {
    id: 'valle',
    type: 'Territorio',
    title: 'Vista del valle',
    description: 'Paisaje de Huancán y el valle como punto de partida para planificar el distrito.',
    image: heroVisual.src,
  },
  {
    id: 'retrato',
    type: 'Perfil',
    title: 'Retrato del candidato',
    description: 'Imagen personal para piezas de presentación, perfil y difusión pública.',
    image: profileVisual.src,
  },
  {
    id: 'tiktok',
    type: 'Video',
    title: 'Contenido en TikTok',
    description: 'Repositorio externo con videos de actividades y mensajes públicos.',
    image: bridgeImage,
    url: candidate.tiktokUrl,
  },
]
