# Bookmark Landing Page

Landing page responsive y accesible para Bookmark Manager creada con HTML y CSS vanilla.

## Características

- Diseño mobile-first totalmente responsive
- Navegación interactiva sin JavaScript
- Tabs funcionales usando radio buttons y CSS puro
- Menú hamburguesa para móviles
- Sección de FAQ con acordeones nativos HTML
- Formulario de newsletter con validación
- **Accesibilidad WCAG 2.1 nivel AA**
- **Atributos ARIA implementados**
- **Optimizado para lectores de pantalla**
- **Navegación completa por teclado**

## Accesibilidad

Este proyecto cumple con los estándares de accesibilidad web modernos:

### Atributos ARIA

- `role` y `aria-label` en navegación y componentes interactivos
- `aria-selected`, `aria-controls` en sistema de tabs
- `aria-invalid`, `aria-required`, `aria-describedby` en formularios
- `aria-hidden` en elementos decorativos

### Semántica y Estructura

- HTML5 semántico con roles de landmark
- Textos alternativos descriptivos en todas las imágenes
- Labels accesibles para formularios
- Navegación por teclado con indicadores de foco visibles

### Características de Accesibilidad

- Compatible con lectores de pantalla (NVDA, JAWS, VoiceOver)
- Todos los elementos interactivos accesibles por teclado
- Mensajes de error con `role="alert"` para notificaciones en tiempo real
- Textos alternativos descriptivos vs decorativos apropiadamente marcados

## Tecnologías

- HTML5 semántico con ARIA
- CSS3 (Flexbox, Grid, Animations)

## Instalación

```bash
git clone https://github.com/sergio-416/bookmark-landing-page.git
cd bookmark-landing-page
Abre index.html en tu navegador o usa Live Server.
Estructura del Proyecto
bookmark-landing-page/
├── index.html
├── style.css
├── images/
│   ├── logo-bookmark.svg
│   ├── illustration-hero.svg
│   └── ...
└── README.md
Navegación por Teclado

Tab: Navega entre elementos interactivos
Enter/Space: Activa botones y enlaces
Arrow keys: Navega entre tabs (cuando están enfocadas)

Validación
El código HTML cumple con:

Estándares W3C HTML5
WCAG 2.1 nivel AA
Mejores prácticas de accesibilidad web

Compatibilidad

Navegadores modernos (Chrome, Firefox, Safari, Edge)
Lectores de pantalla (NVDA, JAWS, VoiceOver)
Dispositivos móviles y tablets

Autor
Sergio Morey - @sergio-416
Licencia
Este proyecto es de código abierto y está disponible bajo la licencia MIT.
```
