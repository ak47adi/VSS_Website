# VSS Website - Vishwavidyalaya Shikshak Sangh

A fully responsive, bilingual (English/Hindi) website for VSS (Vishwavidyalaya Shikshak Sangh), a teachers' panel contesting DUTA elections. Built with React, TypeScript, Tailwind CSS, and modern web standards.

## 🌟 Features

- **Bilingual Support**: Complete English and Hindi language support with easy toggle
- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Government-Style Design**: Formal, professional design inspired by government websites
- **Accessibility**: WCAG 2.0 AA compliant with semantic HTML, ARIA roles, and keyboard navigation
- **Modern Tech Stack**: Built with React 18, TypeScript, Tailwind CSS, and Vite
- **Static Site**: No backend dependencies - perfect for hosting on any static hosting platform

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Noto Sans Devanagari, Hind)
- **UI Components**: Custom components following shadcn/ui patterns

---

**Built with ❤️ for VSS - Vishwavidyalaya Shikshak Sangh**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
