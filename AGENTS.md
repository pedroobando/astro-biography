# AGENTS.md

> Contexto y guía para agentes de IA trabajando en el proyecto de Biografía del Dr. Pedro Rafael Medina Millan

---

## 🏥 Proyecto: Biografía Dr. Pedro Rafael Medina Millan

Este proyecto es un sitio web profesional para presentar la biography del **Dr. Pedro Rafael Medina Millan** (Pediatra Puericultor, 60 años de trayectoria) y promover su libro **"Los Médicos del Estado Barinas"**.

### Objetivo

1. **Presentar la trayectoria profesional** del Dr. Pedro Rafael Medina Millan
2. **Promover el libro** "Los Médicos del Estado Barinas" (compendio de mini-biografías médicas)
3. **Facilitar el contacto** para consultas y adquisición del libro

---

## 🛠️ Stack Tecnológico

| Tecnología              | Versión            | Uso                                            |
| ----------------------- | ------------------ | ---------------------------------------------- |
| **Astro**               | 6.x                | Framework web                                  |
| **TypeScript**          | 5.x                | Tipado estático                                |
| **Tailwind CSS**        | 4.x                | Estilos utility-first                          |
| **Bun**                 | Latest             | Runtime y gestión de paquetes                  |
| **Content Collections** | Astro nativo       | Gestión de contenido con Zod                   |
| **View Transitions**    | `<ClientRouter />` | Navegación client-side con transiciones suaves |

### Patrones de desarrollo

- **Content Collections**: Datos estructurados con schemas Zod
- **View Transitions API**: Transiciones suaves entre páginas
- **Islands Architecture**: Hidratación selectiva de componentes interactivos

---

## 📄 Estructura del Sitio

| Ruta         | Descripción                                       |
| ------------ | ------------------------------------------------- |
| `/`          | Página de inicio con resumen                      |
| `/biografia` | Biografía completa del Dr. Pedro Rafael           |
| `/libro`     | Información sobre el libro y contacto para compra |
| `/contacto`  | Formulario de contacto                            |

---

## 🔄 View Transitions

El sitio utiliza **Astro View Transitions API** con `<ClientRouter />`:

```astro
import {ClientRouter} from 'astro:transitions';
```

### Directives disponibles

| Directive                    | Uso                                           |
| ---------------------------- | --------------------------------------------- |
| `transition:animate="fade"`  | Fundido suave en secciones                    |
| `transition:animate="slide"` | Deslizamiento en timeline                     |
| `transition:persist`         | Mantiene elementos entre páginas (ej: header) |

### Implementación

```astro
<!-- Header persistente -->
<header transition:persist>Navegación</header>

<!-- Timeline animado -->
<div transition:animate="slide">contenido</div>

<!-- Fallback para browsers antiguos -->
<ClientRouter fallback="animate" />
```

---

## 📂 Estructura del Proyecto

```
biography/
├── src/
│   ├── content/
│   │   ├── config.ts              ← Zod schemas
│   │   ├── biography/             ← Contenido de la biografía
│   │   │   └── dr-pedro-medina.md
│   │   └── book/                  ← Información del libro
│   │       └── los-medicos-de-barinas.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   ├── CommonHead.astro       ← ClientRouter + meta tags
│   │   ├── Header.astro            ← Navegación
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Timeline.astro
│   │   ├── BookCard.astro
│   │   ├── ContactForm.astro
│   │   └── Section.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── biografia.astro
│   │   ├── libro.astro
│   │   └── contacto.astro
│   └── styles/
│       └── global.css
├── public/
│   └── images/
│       ├── dr-placeholder.jpg
│       └── book-cover-placeholder.jpg
├── doc/
│   ├── bio-dr-pedro-medina.md      ← Fuente de contenido
│   └── biography.md               ← Template de biography
└── astro.config.mjs
```

---

## 🎨 Diseño Visual

| Elemento       | Valor                    |
| -------------- | ------------------------ |
| **Estilo**     | Moderno y profesional    |
| **Primary**    | Azul profundo `#1e3a5f`  |
| **Secondary**  | Dorado `#c9a227`         |
| **Background** | Blanco cálido `#fafafa`  |
| **Texto**      | Gris oscuro `#2d3748`    |
| **Títulos**    | Playfair Display (serif) |
| **Cuerpo**     | Inter (sans-serif)       |

---

## 👨‍⚕️ Datos del Médico

| Campo            | Valor                          |
| ---------------- | ------------------------------ |
| **Nombre**       | Dr. Pedro Rafael Medina Millan |
| **Especialidad** | Pediatra Puericultor           |
| **Experiencia**  | 60 años                        |
| **Edad**         | 87 años                        |
| **Estado**       | Jubilado                       |
| **Ubicación**    | Barcelona, Venezuela           |

### Formación

- Universidad Central de Venezuela (UCV) - Doctor en Ciencias Médicas (1976)
- Residencia en Hospital J.M. de los Ríos, Caracas (1977-1980)
- Subespecialidades: Neonatología, Infectología Pediátrica

### Trayectoria

- Hospitales públicos en Anzoátegui y Caracas
- Creador de UCIN en Hospital Razetti, Barcelona (1992)
- Profesor en Universidad de Oriente (UDO)
- Coordinador Nacional de Neonatología (2003-2007)

---

## 📚 Datos del Libro

| Campo           | Valor                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------- |
| **Título**      | Los Médicos del Estado Barinas                                                                |
| **Autor**       | Dr. Pedro Rafael Medina Millan                                                                |
| **Estado**      | En fase de corrección                                                                         |
| **Descripción** | Compendio de mini-biografías de médicos que aportaron al desarrollo de la medicina en Barinas |

---

## 📝 Convenciones de Código

### TypeScript

- **Strict mode** habilitado
- Tipos explícitos en funciones públicas
- Interfaces para objetos de datos
- `type` para unions/aliases

### Astro

- Componentes `.astro` para UI estática
- `<ClientRouter />` en CommonHead para View Transitions
- Islands con `client:*` directives para interactividad
- Content Collections con schemas Zod validados

### CSS/Tailwind

- CSS-first configuration (Tailwind v4)
- Variables CSS para theming
- Clases de utilidad en HTML

### Nomenclatura

- **Archivos**: kebab-case (`header.astro`, `contact-form.astro`)
- **Componentes**: PascalCase (`Header`, `Hero`, `Timeline`)
- **Funciones/Variables**: camelCase
- **Constantes**: UPPER_SNAKE_CASE

---

## ⚙️ Comandos de Desarrollo

```bash
# Instalar dependencias
bun install

# Servidor de desarrollo
bun dev

# Build para producción
bun build

# Preview de build
bun preview
```

---

## 🔍 SEO y Accesibilidad

- HTML semántico obligatorio
- Meta tags dinámicos por página
- Schema.org para datos estructurados (Person, Book)
- Alt text en imágenes
- Contraste de colores accesible
- Navegación por teclado

---

## ⚠️ Consideraciones Éticas Médicas

Todo agente trabajando en este proyecto debe conocer:

1. **No diagnosticar**: Solo médicos pueden diagnosticar
2. **No prescribir**: La prescripción requiere licencia médica
3. **No interpretar estudios**: Análisis de imágenes/lab es trabajo médico
4. **Escalación a humano**: Detectar palabras clave de emergencia

---

## 📞 Contacto y Contexto

- **Autor**: Pedro Obando
- **Proyecto**: Biography Medical Websites
- **Región**: Venezuela (Anzoátegui, Barcelona, Barinas)

---

> **Última actualización**: 2026-04-20
> **Versión**: 1.0
> **Estado**: En desarrollo
