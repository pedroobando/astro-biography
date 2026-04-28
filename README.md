<p align="center">
  <strong>Dr. Pedro Rafael Medina Millan</strong>
</p>

<p align="center">
  Sitio web profesional - Pediatra Puericultor | 60 años de trayectoria
</p>

<p align="center">
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-6.x-bc52ee?logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white" alt="React" /></a>
</p>

---

## 🏥 Sobre el Proyecto

Sitio web profesional para el **Dr. Pedro Rafael Medina Millan**, Pediatra Puericultor con 60 años de trayectoria médica en Venezuela.

**Objetivos:**
- Presentar la trayectoria profesional del Dr. Medina Millan
- Promover el libro *"Los Médicos del Estado Barinas"*
- Publicar artículos médicos e históricos en el blog
- Facilitar el contacto para consultas y adquisición del libro

---

## 👨‍⚕️ Dr. Pedro Rafael Medina Millan

| Campo | Información |
|-------|-------------|
| **Nombre** | Dr. Pedro Rafael Medina Millan |
| **Especialidad** | Pediatra Puericultor |
| **Experiencia** | 60 años |
| **Ubicación** | Barcelona, Venezuela |

### Formación
- Universidad Central de Venezuela (UCV) - Doctor en Ciencias Médicas (1976)
- Residencia en Hospital J.M. de los Ríos, Caracas (1977-1980)
- Subespecialidades: Neonatología, Infectología Pediátrica

### Trayectoria Destacada
- Creador de UCIN en Hospital Razetti, Barcelona (1992)
- Profesor en Universidad de Oriente (UDO)
- Coordinador Nacional de Neonatología (2003-2007)
- Formador de más de 240 pediatras
- Autor del libro *"Los Médicos del Estado Barinas"* (2025)

---

## 📚 El Libro

**"Los Médicos del Estado Barinas"**

Compendio de mini-biografías de médicos que aportaron al desarrollo de la medicina en Barinas, Venezuela. Disponible en tapa dura o rústica.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Astro** | 6.1.8 | Framework web con output estático |
| **TypeScript** | 5.7.x | Tipado estricto |
| **Tailwind CSS** | 4.x | Estilos utility-first |
| **React** | 19.x | Islands interactivas |
| **MDX** | 5.0.3 | Contenido enriquecido |
| **pnpm** | Latest | Gestión de paquetes |

### Características Técnicas

- **Output Estático**: Optimizado para hosting estático (`output: 'static'`)
- **Content Collections**: Datos estructurados con Zod (biografía, blog, libro, proyectos)
- **Sitemap & RSS**: Generación automática para SEO
- **Schema.org**: Structured data (Person, Book, ProfessionalService)
- **Pagefind**: Búsqueda en el sitio
- **Multitema**: Sistema de themes con CSS variables (indigo, teal, emerald, etc.)
- **Design Tokens**: Tokens de color, espaciado y tipografía
- **Analytics**: Soporte para Google Analytics y Google Tag Manager
- **Contact Form**: Integración con Resend para envío de emails
- **PWA**: Web manifest para instalación

---

## 📄 Estructura del Sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio con hero del libro, stats, biografía resumida y blog |
| `/sobre-mi` | Biografía completa con timeline interactivo |
| `/sobre-mi/evento/:slug` | Detalle de eventos de la biografía |
| `/libro` | Información del libro y sus características |
| `/libro/comprar` | Formulario de compra del libro |
| `/blog` | Listado de artículos médicos e históricos |
| `/blog/:slug` | Artículo individual |
| `/contact` | Formulario de contacto directo |
| `/about` | Sobre el sitio |
| `/projects` | Proyectos relacionados |
| `/components` | Component library (documentación UI) |

### Blog

Artículos en español sobre temas médicos venezolanos:
- Autismo en Venezuela
- Pioneros de la pediatría en Venezuela
- Malformaciones congénitas
- Crisis de natalidad

---

## 📁 Estructura del Proyecto

```
biography/
├── src/
│   ├── components/       # Componentes Astro y React
│   │   ├── ui/           # Componentes UI (Button, Card, Badge, etc.)
│   │   ├── layout/       # Header, Footer, ThemeToggle, Analytics
│   │   ├── blog/         # BlogCard, ArticleHero, ShareButtons
│   │   ├── landing/      # Secciones de landing page
│   │   ├── hero/         # Componentes de hero
│   │   ├── seo/          # SEO, JsonLd, Breadcrumbs
│   │   └── patterns/     # ContactForm, NewsletterForm, StatCard
│   ├── layouts/          # Layouts de página
│   │   ├── BaseLayout.astro
│   │   ├── LandingLayout.astro
│   │   ├── BlogLayout.astro
│   │   ├── PageLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/            # Rutas del sitio
│   ├── content/          # Colecciones de contenido
│   │   ├── blog/         # Posts en ES y EN
│   │   ├── biography/    # Timeline y perfil
│   │   ├── projects/     # Proyectos
│   │   ├── stack/        # Stack tecnológico
│   │   └── faqs/         # Preguntas frecuentes
│   ├── styles/           # Estilos globales y themes
│   │   ├── global.css
│   │   ├── tokens/       # Design tokens (colors, spacing, typography)
│   │   └── themes/       # Themes disponibles (indigo, teal, etc.)
│   └── assets/           # Imágenes y assets
├── public/               # Assets estáticos
├── dist/                 # Build de salida
├── astro.config.mjs      # Configuración de Astro
├── wrangler.toml         # Configuración de Cloudflare Pages
└── AGENTS.md             # Guía para agentes IA
```

---

## ⚙️ Variables de Entorno

El proyecto utiliza el sistema de env de Astro 6.x:

| Variable | Contexto | Descripción |
|----------|----------|-------------|
| `SITE_URL` | server | URL del sitio |
| `PUBLIC_GA_MEASUREMENT_ID` | client | Google Analytics |
| `PUBLIC_GTM_ID` | client | Google Tag Manager |
| `RESEND_API_KEY` | server (secret) | API Key de Resend |
| `RESEND_FROM_EMAIL` | server (secret) | Email de envío |
| `GOOGLE_SITE_VERIFICATION` | server | Verificación Google |
| `BING_SITE_VERIFICATION` | server | Verificación Bing |

---

## ⚙️ Comandos de Desarrollo

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build para producción (estático)
pnpm build

# Preview del build
pnpm preview

# Linting
pnpm lint
pnpm lint:fix

# Formateo
pnpm format
pnpm format:check

# Validación completa
pnpm validate

# Tests
pnpm test
pnpm test:e2e
```

---

## 🚀 Deployment

El proyecto está configurado para **Cloudflare Pages** (`wrangler.toml`).

También compatible con cualquier hosting estático:
- Cloudflare Pages
- GitHub Pages
- Netlify
- Vercel

```bash
pnpm build
# Desplegar contenido de dist/
```

---

## 🎨 Sistema de Themes

El sitio incluye un sistema de themes basado en CSS variables:

- `indigo` (default)
- `blue`, `sky`, `cyan`
- `teal`, `emerald`, `green`
- `amber`, `orange`
- `purple`, `violet`, `magenta`
- `lime`

Cambio en tiempo real mediante `ThemeSelector` y `ThemeToggle`.

---

## 🔍 SEO y Accesibilidad

- HTML semántico
- Meta tags dinámicos por página
- Schema.org: Person, Book, ProfessionalService
- Sitemap.xml generado automáticamente
- RSS feed
- Open Graph y Twitter Cards
- Alt text obligatorio en imágenes
- Contraste accesible

---

## ⚠️ Consideraciones Éticas Médicas

Este proyecto trata sobre contenido médico profesional:

1. **No diagnosticar** - Solo médicos pueden diagnosticar
2. **No prescribir** - Requiere licencia médica válida
3. **No interpretar estudios** - Análisis médico exclusivo
4. **Escalar emergencias** - Detectar y derivar casos urgentes

---

## 📝 Convenciones

- **TypeScript**: Strict mode, tipos explícitos
- **Astro**: Componentes `.astro`, islands con `client:*`
- **React**: Solo para componentes interactivos
- **Tailwind**: Utility-first, variables CSS para theming
- **Nomenclatura**: `kebab-case.astro`, `PascalCase` componentes
- **Content**: MDX para contenido enriquecido, JSON para datos

---

## 📞 Contacto

- **Autor del sitio**: Pedro Obando
- **Región**: Venezuela (Barcelona, Anzoátegui, Barinas)

---

> **Nota**: Ver `AGENTS.md` para guía completa de desarrollo y flujo de trabajo con herramientas MCP.

**Actualizado**: 2026-04-22
