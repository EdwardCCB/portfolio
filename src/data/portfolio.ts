export const personal = {
  name: "Eduardo Marino",
  title: "Junior Developer",
  subtitle: "Crafting digital experiences with passion and precision.",
  bio: "Soy un Junior Developer y Game Developer con una gran pasión por crear experiencias interactivas y videojuegos. Me encanta aprender nuevas tecnologías, resolver problemas complejos y dar vida a ideas creativas tanto en la web como en motores gráficos.",
  //bio2: "Cuando no estoy programando, me gusta explorar nuevas tecnologías, contribuir a proyectos open source y compartir conocimiento con la comunidad.",
  location: "Barranquilla, Colombia",
  email: "eduardomarino1028@hotmail.com",
  available: true,
  stats: [
    { label: "Proyectos Web", value: "10+" },
    { label: "Juegos Creados", value: "5+" },
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
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Vue.js / Nuxt", level: 78, category: "Frontend" },
  { name: "CSS / Tailwind", level: 92, category: "Frontend" },
  // Backend
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Python / Django", level: 80, category: "Backend" },
  { name: "GraphQL / REST", level: 85, category: "Backend" },
  { name: "PostgreSQL / MongoDB", level: 82, category: "Backend" },
  // DevOps & Tools
  { name: "Docker / Kubernetes", level: 72, category: "DevOps" },
  { name: "AWS / GCP", level: 68, category: "DevOps" },
  { name: "CI/CD / GitHub Actions", level: 80, category: "DevOps" },
  { name: "Git", level: 95, category: "DevOps" },
];

export const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MongoDB", icon: "🌿" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "GraphQL", icon: "◈" },
  { name: "Next.js", icon: "▲" },
  { name: "Vue.js", icon: "💚" },
  { name: "Git", icon: "🔀" },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pagos con Stripe, gestión de inventario y panel de administración en tiempo real.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    title: "Soon",
    description:
      "Soon",
    tags: [],
    github: null,
    live: null,
    featured: false,
    gradient: "from-blue-600 to-sky-600",
  },
];

export const experience = [
  {
    type: "work",
    role: "Auxiliar Administrativo",
    company: "Universidad de la Costa",
    period: "2021 – 2022",
    description:
      "Construí la interfaz de usuario de una app de finanzas personales desde cero. Optimicé el performance logrando un score Lighthouse de 98 y reduciendo el bundle size un 35%.",
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
];
