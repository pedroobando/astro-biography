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
</p>

---

## 🏥 Sobre el Proyecto

Sitio web profesional para el **Dr. Pedro Rafael Medina Millan**, Pediatra Puericultor con 60 años de trayectoria médica en Venezuela.

**Objetivos:**
- Presentar la trayectoria profesional del Dr. Medina Millan
- Promover el libro *"Los Médicos del Estado Barinas"*
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

---

## 📚 El Libro

**"Los Médicos del Estado Barinas"**

Compendio de mini-biografías de médicos que aportaron al desarrollo de la medicina en Barinas, Venezuela.

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Astro** | 6.x | Framework web con output estático |
| **TypeScript** | 5.x | Tipado estricto |
| **Tailwind CSS** | 4.x | Estilos utility-first |
| **Bun** | Latest | Runtime y gestión de paquetes |

### Características

- **View Transitions**: Navegación suave con `<ClientRouter />`
- **Content Collections**: Datos estructurados con Zod
- **Build Estático**: Optimizado para cualquier hosting estático
- **SEO Ready**: Meta tags dinámicos y Schema.org

---

## 📄 Estructura del Sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio con resumen de trayectoria |
| `/biografia` | Biografía completa y detallada |
| `/libro` | Información del libro y contacto para compra |
| `/contacto` | Formulario de contacto directo |

---

## 🔄 View Transitions

El sitio utiliza **Astro View Transitions API** para navegación fluida:

```astro
import { ClientRouter } from 'astro:transitions';

<!-- Header persistente entre páginas -->
<header transition:persist>Navegación</header>

<!-- Contenido con animación de fundido -->
<div transition:animate="fade">Contenido</div>
```

---

## ⚙️ Comandos de Desarrollo

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun dev

# Build para producción (estático)
bun build

# Preview del build
bun preview
```

---

## 📁 Estructura del Proyecto

```
biography/
├── src/
│   ├── content/          # Colecciones de contenido (Zod)
│   ├── components/       # Componentes Astro
│   ├── layouts/          # Layouts de página
│   ├── pages/            # Rutas del sitio
│   └── styles/           # Estilos globales
├── public/               # Assets estáticos
├── dist/                 # Build de salida
└── AGENTS.md             # Guía para agentes IA
```

---

## 🚀 Deployment

El proyecto genera un **build estático** en `dist/` listo para:

- Cloudflare Pages
- GitHub Pages
- Netlify
- Vercel
- Cualquier hosting estático

```bash
bun build
# Desplegar contenido de dist/
```

---

## ⚠️ Consideraciones Éticas

Este proyecto trata sobre contenido médico profesional:

1. **No diagnosticar** - Solo médicos pueden diagnosticar
2. **No prescribir** - Requiere licencia médica válida
3. **No interpretar estudios** - Análisis médico exclusivo
4. **Escalar emergencias** - Detectar y derivar casos urgentes

---

## 📝 Convenciones

- **TypeScript**: Strict mode, tipos explícitos
- **Astro**: Componentes `.astro`, islands con `client:*`
- **Tailwind**: Utility-first, variables CSS para theming
- **Nomenclatura**: `kebab-case.astro`, `PascalCase` componentes

---

## 📞 Contacto

- **Autor del sitio**: Pedro Obando
- **Región**: Venezuela (Barcelona, Anzoátegui, Barinas)

---

> **Nota**: Ver `AGENTS.md` para guía completa de desarrollo y flujo de trabajo con herramientas MCP.

**Actualizado**: 2026-04-21
