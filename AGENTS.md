# AGENTS.md

> Guía para agentes IA - Biografía Dr. Pedro Rafael Medina Millan

## 🏥 Proyecto

Sitio web profesional para el **Dr. Pedro Rafael Medina Millan** (Pediatra, 60 años de trayectoria) y su libro "Los Médicos del Estado Barinas".

**Objetivo**: Presentar trayectoria profesional, promover el libro, facilitar contacto.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| **Astro** 6.x | Framework web con output: 'static' |
| **TypeScript** 5.x | Tipado estricto |
| **Tailwind CSS** 4.x | Estilos utility-first |
| **Bun** | Runtime y paquetes |
| **View Transitions** | `<ClientRouter />` para navegación suave |

### View Transitions

```astro
import { ClientRouter } from 'astro:transitions';

<!-- Uso -->
<header transition:persist>Navegación</header>
<div transition:animate="fade">Contenido</div>
```

---

## 🤖 Herramientas MCP

### Siempre usar:

1. **MCP Astro** (`Astro_docs_search_astro_docs`)
   - Buscar en documentación oficial de Astro
   - Usar ANTES de escribir código Astro

2. **MCP Context7** (`context7_resolve-library-id`, `context7_query-docs`)
   - Para Astro, Tailwind, TypeScript
   - Resolver IDs y consultar documentación actualizada

3. **MCP Engram** (`engram_mem_search`, `engram_mem_save`)
   - Guardar decisiones técnicas importantes
   - Buscar contexto de sesiones anteriores

---

## 📋 Proceso de Trabajo

### 1. Antes de codificar
- Buscar en documentación MCP si no estás seguro
- Verificar memoria Engram por decisiones previas

### 2. Para cambios complejos (usar SDD)
Si el cambio involucra:
- Nueva funcionalidad > 3 archivos
- Cambios arquitectónicos
- Decisiones técnicas importantes

**Flujo SDD:**
1. `sdd-explore` - Investigar e idear
2. `sdd-propose` - Crear propuesta
3. `sdd-design` - Diseñar solución
4. `sdd-spec` - Especificar requisitos
5. `sdd-tasks` - Crear tareas
6. `sdd-apply` - Implementar
7. `sdd-verify` - Verificar

### 3. Delegación con Subagentes

Usar `delegate` o `task` cuando:
- Se necesita investigar múltiples archivos
- Tareas paralelas independientes
- Cambios en múltiples módulos

---

## 📄 Estructura del Sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio con resumen |
| `/biografia` | Biografía completa |
| `/libro` | Información del libro |
| `/contacto` | Formulario de contacto |

---

## 📝 Convenciones

### TypeScript
- Strict mode habilitado
- Tipos explícitos en funciones públicas
- Interfaces para objetos de datos

### Astro
- Componentes `.astro` para UI estática
- Islands con `client:*` para interactividad
- Content Collections con Zod

### Nomenclatura
- Archivos: `kebab-case.astro`
- Componentes: `PascalCase`
- Funciones: `camelCase`

---

## ⚙️ Comandos

```bash
bun install    # Dependencias
bun dev        # Desarrollo
bun build      # Build estático
bun preview    # Preview
```

---

## 🔍 SEO y Accesibilidad

- HTML semántico
- Meta tags dinámicos
- Schema.org (Person, Book)
- Alt text obligatorio
- Contraste accesible

---

## ⚠️ Consideraciones Éticas Médicas

1. **No diagnosticar** - Solo médicos pueden diagnosticar
2. **No prescribir** - Requiere licencia médica
3. **No interpretar estudios** - Trabajo médico exclusivo
4. **Escalar emergencias** - Detectar palabras clave de emergencia

---

## 📞 Contexto

- **Autor**: Pedro Obando
- **Región**: Venezuela (Barcelona, Anzoátegui, Barinas)
- **Actualizado**: 2026-04-21

> **Nota**: Usar MCPs antes de codificar. Aplicar SDD para cambios significativos.
