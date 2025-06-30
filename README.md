# 🚀 Portfolio Profesional - Kenyi Ivan Vega Aliaga

Un portafolio web moderno y profesional desarrollado con **React 19**, **TypeScript**, **Tailwind CSS** y principios de **Clean Architecture**.

## ✨ Características

### 🎨 Diseño & UX
- **Diseño Moderno**: Paleta de colores marrones amelonados elegante
- **Responsive Design**: Optimizado para todos los dispositivos
- **Animaciones Fluidas**: Transiciones y efectos visuales profesionales
- **Accesibilidad**: Cumple con estándares de accesibilidad web

### 🛠️ Tecnologías

#### Frontend
- **React 19** - Biblioteca principal de UI
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework de utilidades para diseño
- **Lucide React** - Iconografía moderna y consistente

#### Arquitectura
- **Principios SOLID** - Código mantenible y escalable
- **Patrones de Diseño** - Factory, Observer, Strategy
- **Clean Architecture** - Separación clara de responsabilidades
- **Component-Based** - Componentes reutilizables y modulares

### 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/                    # Componentes base reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Icon.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   ├── layout/                # Componentes de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── sections/              # Secciones del portafolio
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── ProjectsSection.tsx
│       ├── EducationSection.tsx
│       ├── ContactSection.tsx
│       └── index.ts
├── constants/                 # Constantes y datos
│   ├── portfolio-data.ts
│   └── navigation.ts
├── types/                     # Definiciones de tipos
│   └── index.ts
├── services/                  # Servicios y utilidades
├── App.tsx                    # Componente principal
├── index.tsx                  # Punto de entrada
└── index.css                  # Estilos globales
```

## 🎯 Secciones del Portafolio

### 🏠 Hero Section
- Presentación personal con foto/avatar
- Llamadas a la acción principales
- Enlaces a redes sociales
- Indicador de scroll animado

### 👨‍💻 About Section
- Resumen profesional detallado
- Métricas de experiencia
- Áreas de especialización
- Información de contacto

### 🛠️ Skills Section
- Habilidades organizadas por categoría
- Niveles de experiencia visuales
- Tecnologías y herramientas
- Filosofía de desarrollo

### 💼 Experience Section
- Timeline de experiencia profesional
- Logros y responsabilidades detallados
- Tecnologías utilizadas por rol
- Métricas de impacto

### 🚀 Projects Section
- Proyectos destacados con descripciones
- Stack tecnológico por proyecto
- Enlaces a demos y repositorios
- Categorización por tipo

### 🎓 Education Section
- Formación académica
- Reconocimientos y becas
- Proyectos académicos relevantes

### 📞 Contact Section
- Formulario de contacto funcional
- Información de contacto directa
- Enlaces a redes sociales
- Estado de disponibilidad

## 🚀 Instalación y Uso

### Prerrequisitos
- **Node.js** (v18 o superior)
- **npm** o **yarn**

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/kenyi/portfolio_vega.git

# Navegar al directorio
cd portfolio_vega

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia el servidor de desarrollo

# Producción
npm run build          # Construye la aplicación para producción
npm run preview        # Vista previa de la build de producción

# Calidad de Código
npm test               # Ejecuta las pruebas
npm run lint           # Verifica el código con ESLint
npm run type-check     # Verifica tipos con TypeScript
```

## 🎨 Personalización

### Colores y Tema
Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Paleta de marrones amelonados
    50: '#fdf8f6',
    500: '#c27d84',
    900: '#5c2b30',
  }
}
```

### Datos del Portfolio
Actualiza tu información en `src/constants/portfolio-data.ts`:

```typescript
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Tu Nombre',
  title: 'Tu Título Profesional',
  email: 'tu@email.com',
  // ... más datos
};
```

## 🏗️ Principios de Arquitectura

### SOLID Principles
- **S** - Single Responsibility: Cada componente tiene una responsabilidad específica
- **O** - Open/Closed: Componentes extensibles sin modificación
- **L** - Liskov Substitution: Componentes intercambiables con interfaces comunes
- **I** - Interface Segregation: Interfaces específicas y no sobrecargadas
- **D** - Dependency Inversion: Dependencias por abstracción, no implementación

### Patrones de Diseño
- **Factory Pattern**: Creación de componentes dinámicos
- **Observer Pattern**: Manejo de estados reactivos
- **Strategy Pattern**: Variantes de componentes
- **Composite Pattern**: Estructura de componentes anidados

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado desde dispositivos móviles
- **Breakpoints**: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- **Touch Friendly**: Elementos interactivos optimizados para touch
- **Performance**: Carga rápida en conexiones lentas

## 🔧 Optimizaciones

### Performance
- **Code Splitting**: Carga lazy de componentes
- **Asset Optimization**: Imágenes optimizadas y comprimidas
- **Bundle Size**: Análisis y optimización del tamaño del bundle
- **Caching**: Estrategias de caché para recursos estáticos

### SEO
- **Meta Tags**: Configuración completa de metadatos
- **Schema Markup**: Datos estructurados para motores de búsqueda
- **Open Graph**: Optimización para redes sociales
- **Sitemap**: Generación automática de sitemap

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**Kenyi Ivan Vega Aliaga**
- 📧 Email: [kenyiva45@gmail.com](mailto:kenyiva45@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ivan-vega-aliaga](https://linkedin.com/in/ivan-vega-aliaga)
- 📍 Ubicación: Lima, Perú

---

⭐ **¡Dale una estrella si te gusta este proyecto!** ⭐
