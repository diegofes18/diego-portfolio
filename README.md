# Portfolio DB — Data Engineer & Cloud Architect

Portfolio profesional construido con **Astro** + **TypeScript** + **Tailwind CSS**.

Replica la estructura y filosofía de diseño de [porfolio.dev](https://porfolio.dev) con una paleta propia (cian/violeta) y contenido específico de Data Engineering.

## 🚀 Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de compilación
npm run preview
```

El servidor estará disponible en `http://localhost:3000`

## 📋 TODOs Pendientes

### Avatar (Sección Hero)
- [ ] Reemplazar `/public/avatar.png` con tu avatar definitivo
  - **Recomendado:** 400x400px, fondo transparente
  - **Opciones:**
    1. Foto real recortada en círculo
    2. Memoji/Avatar 3D de [readyplayer.me](https://readyplayer.me)
    3. Avatar generado por IA (Midjourney/DALL-E)
  - **Placeholder actual:** Gradiente cian→violeta con iniciales "DB"

### Imágenes de Proyectos
- [ ] Crear `/public/projects/datalake.webp` (1200x675px)
  - DataLake Analytics Platform preview
- [ ] Crear `/public/projects/streaming.webp` (1200x675px)
  - Real-Time Streaming Pipeline preview
- [ ] Crear `/public/projects/featurestore.webp` (1200x675px)
  - ML Feature Store preview
- **Formato:** WebP para optimización
- **Placeholder actual:** Gradiente con nombre del proyecto

### URLs de Proyectos
- [ ] Actualizar `src/sections/ProjectsSection.astro`
  - Reemplazar `codeHref="#"` con URLs reales de GitHub
  - Reemplazar `previewHref="#"` con URLs de previews/demos

### Favicon
- [ ] Crear `/public/favicon.svg`
  - SVG simple con iniciales "DB" o un icono representativo

### SEO e Integración
- [ ] Actualizar `og:url` en `src/pages/index.astro` (tu dominio real)
- [ ] Crear `/public/og-image.png` (1200x630px) para previews sociales
- [ ] Configurar dominio en `astro.config.mjs` si es necesario

### Contenido (Opcional)
- [ ] Actualizar GitHub links en Footer
- [ ] Actualizar LinkedIn en Hero (ya está en el componente)
- [ ] Personalizar descripción de proyectos si es necesario
- [ ] Ajustar "Sobre mí" en `src/sections/AboutSection.astro`

## 🎨 Paleta de Colores

```
Background:      #0f0f12 (casi negro, azulado)
Surface:         #17171c (cards)
Texto principal: #f4f4f5
Texto secundario:#a1a1aa
Borders:         #2a2a32
Acento Cyan:     #06b6d4 (primario)
Acento Violeta:  #8b5cf6 (gradientes)
Verde "Activo":  #10b981 (con pulsante)
```

## 🏗️ Estructura de Carpetas

```
src/
├── components/      # Componentes reutilizables
│   ├── Avatar.astro
│   ├── Badge.astro
│   ├── Container.astro
│   ├── ExperienceItem.astro
│   ├── ProjectCard.astro
│   └── SocialPill.astro
├── sections/        # Secciones de página
│   ├── HeroSection.astro
│   ├── ExperienceSection.astro
│   ├── ProjectsSection.astro
│   ├── AboutSection.astro
│   └── FooterSection.astro
├── icons/          # Iconos SVG de tecnologías
│   └── TechIcons.ts
├── styles/         # Estilos globales
│   └── globals.css
├── layouts/        # Layouts base (si es necesario)
└── pages/          # Páginas Astro
    └── index.astro
public/
├── avatar.png      # TODO: Reemplazar
├── favicon.svg     # TODO: Crear
├── og-image.png    # TODO: Crear
└── projects/
    ├── datalake.webp     # TODO: Crear
    ├── streaming.webp    # TODO: Crear
    └── featurestore.webp # TODO: Crear
```

## 🔧 Stack Tecnológico

- **Framework:** [Astro](https://astro.build) v6
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Iconos:** SVG inline (Lucide)
- **Animaciones:** CSS + View Transitions API
- **Fuentes:** Onest (body), JetBrains Mono (código)

## ✨ Características

- ✅ Responsive design (mobile-first)
- ✅ Dark mode by default
- ✅ View transitions para navegación suave
- ✅ SEO optimizado (meta tags, Open Graph)
- ✅ Accesibilidad (contraste AA, ARIA labels)
- ✅ Performance optimizado (Astro static)
- ✅ Cero JavaScript en el cliente (Astro)

## 📧 Contacto

- **Email:** bermejodiego1@gmail.com
- **LinkedIn:** [linkedin.com/in/diego-bermejo-cabañas-75b61a292](https://linkedin.com/in/diego-bermejo-cabañas-75b61a292)
- **GitHub:** [github.com](https://github.com)

---

**Hecho con Astro y mucho ☕**
