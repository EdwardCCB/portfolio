# 👨‍💻 Eduardo Marino | Portafolio Personal

Un portafolio web moderno, rápido y optimizado creado para mostrar mis proyectos, experiencia y habilidades como **Junior Developer y Game Developer**.

## ✨ Características

- 🚀 **Framework Principal:** [Astro 4](https://astro.build/) para generación de sitios estáticos increíblemente rápidos.
- ⚛️ **Interactividad:** [React](https://reactjs.org/) para islas interactivas (animaciones, formularios, efectos de escritura).
- ⚡ **Build Tool:** [Vite](https://vitejs.dev/) integrado por defecto con Astro.
- 🎨 **Estilizado:** Vanilla CSS con metodologías modernas (CSS variables, Flexbox/Grid, Glassmorphism).
- 🌙 **Diseño:** Tema oscuro nativo con glows interactivos, paleta de colores verdes cyberpunk y animaciones agradables en scroll.
- 📱 **Responsive:** Totalmente adaptable a móviles, tablets y escritorios.

## 📂 Estructura del Proyecto

```text
/
├── public/                 # Assets estáticos puros (imágenes, favicons)
├── src/
│   ├── components/         # Componentes UI de Astro
│   │   └── react/          # Componentes interactivos de React (Islas)
│   ├── data/               # Información centralizada (portfolio.ts) <- ¡Edita este archivo para actualizar tu info!
│   ├── layouts/            # Layout principal de la página con metadatos base
│   ├── pages/              # Páginas de la app (index.astro)
│   └── styles/             # CSS Global, variables y utilidades (global.css)
└── astro.config.mjs        # Configuración de Astro
```

## 🛠️ Tecnologías Usadas

- **Astro**
- **React**
- **TypeScript**
- **Vanilla CSS**

## 🚀 Cómo ejecutarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/EdwardCCB/portfolio.git
   ```

2. Entra al directorio del proyecto:
   ```bash
   cd portfolio
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Corre el entorno de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## 📝 Cómo personalizarlo

Toda la información personal, experiencia, proyectos y enlaces están centralizados en un único archivo. Para cambiar los datos, simplemente edita:

👉 `src/data/portfolio.ts`

Los colores e identidad visual se ajustan modificando las variables CSS en:

👉 `src/styles/global.css`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE). Si te sirve de inspiración, un crédito es apreciado pero no obligatorio.

---
Hecho con ❤️ y mucho ☕ por [Eduardo Marino](https://github.com/EdwardCCB).
