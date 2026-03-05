export const personal = {
  name: "Eduardo Marino",
  title: "Junior Developer",
  subtitle: "Crafting digital experiences with passion and precision.",
  bio: "Soy estudiante de último año de Ingeniería Informática y me apasiona la tecnología y el desarrollo de software. Estoy en constante aprendizaje de ReactJS, HTML, CSS, JavaScript, Java y Python, y tengo habilidades en Photoshop y Figma para crear marcas, logotipos y estructurar proyectos.",
  bio2: "Me caracterizo por mi curiosidad, mi capacidad para resolver problemas y mi rápida adaptación a nuevos entornos. Aunque no tengo experiencia formal en desarrollo, me motiva asumir retos y aprovechar cada oportunidad para crecer profesionalmente.",
  location: "Bogotá, Colombia",
  email: "eduardomarino1028@hotmail.com",
  available: true,
  stats: [
    { label: "Proyectos Web", value: "3+" },
    { label: "Juegos en Progreso", value: "1+" },
    { label: "Horas de Código", value: "A mil" },
    { label: "Ganas de aprender", value: "100%" },
  ],
  socials: {
    github: "https://github.com/EdwardCCB",
    linkedin: "https://www.linkedin.com/in/eduardo-s-marino/",
    twitter: "https://twitter.com",
    email: "mailto:eduardomarino1028@hotmail.com",
  },
};

export const skills = [
  // Frontend
  { name: "React / Next.js", level: 65, category: "Frontend" },
  { name: "Vue.js / Nuxt", level: 35, category: "Frontend" },
  { name: "TypeScript", level: 25, category: "Frontend" },
  { name: "JavaScript", level: 45, category: "Frontend" },
  { name: "CSS / Tailwind", level: 50, category: "Frontend" },
  // Backend
  { name: "Node.js / Express", level: 45, category: "Backend" },
  { name: "Python / Django", level: 40, category: "Backend" },
  { name: "GraphQL / REST", level: 35, category: "Backend" },
  { name: "PostgreSQL / MongoDB", level: 55, category: "Backend" },
  // DevOps & Tools
  { name: "Docker / Kubernetes", level: 65, category: "DevOps" },
  { name: "CI/CD / GitHub Actions", level: 70, category: "DevOps" },
  { name: "Git", level: 75, category: "DevOps" },
  //Game Development
  { name: "Unity", level: 35, category: "Game Development" },
  { name: "Godot", level: 45, category: "Game Development" },
];

export const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🌿" },
  { name: "Docker", icon: "🐳" },
  { name: "GraphQL", icon: "◈" },
  { name: "Next.js", icon: "▲" },
  { name: "Vue.js", icon: "💚" },
  { name: "Git", icon: "🔀" },
  { name: "Unity", icon: "🎮" },
  { name: "Godot", icon: "🤖" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos con Stripe, gestión de inventario y panel de administración en tiempo real.",
    tags: ["React.js", "JavaScript", "Vite", "Firebase"],
    category: "web",
    github: "https://github.com/EdwardCCB/E-commerce_project",
    live: null,
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    title: "Conversor de Moneda",
    description:
      "Este programa permite a los usuarios seleccionar una moneda de origen y una moneda de destino para realizar la conversión. Utiliza la API de ExchangeRate para obtener los tipos de cambio actualizados y calcular el monto convertido.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    github: "https://github.com/EdwardCCB/Conversor-de-Monedas",
    live: null,
    featured: false,
    gradient: "from-blue-600 to-sky-600",
  },
  {
    title: "Encriptador de texto",
    description:
      "Prácticando lógica de programación: Challenge Encriptador de texto.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    github: "https://github.com/EdwardCCB/Encriptador-de-texto",
    live: null,
    featured: false,
    gradient: "from-blue-600 to-sky-600",
  },
  {
    title: "Juego (En Desarrollo)",
    description: "Próximamente...",
    tags: ["Godot", "GDScript", "WIP"],
    category: "game",
    github: null,
    live: null,
    featured: true,
    gradient: "from-emerald-600 to-teal-600",
  },
];

export const experience = [
  {
    type: "work",
    role: "Auxiliar Administrativo",
    company: "Universidad de la Costa",
    period: "2021 – 2022",
    description:
      "• Digitalización y organización de expedientes y documentos de empleados. • Apoyo en la incorporación de nuevo personal a SICUC. • Soporte técnico básico para resolver problemas con los equipos informáticos del departamento.",
    tech: []
  },
  {
    type: "education",
    role: "Ingeniería en Informática",
    company: "Universidad Autónoma de Occidente",
    period: "2021 – Presente",
    description:
      "Titulo sobre algoritmos de optimización para sistemas distribuidos.",
    tech: ["Algoritmos", "Redes", "Bases de Datos"],
  },
  {
    type: "education",
    role: "Oracle Next Education",
    company: "Alura LATAM",
    period: "2024 – 2025",
    description:
      null,
    tech: ["Java", "Springboots", "HTML", "CSS"],
  },
];
