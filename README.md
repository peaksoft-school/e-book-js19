# 🎓 School Project — E-book (Vite + React + TypeScript)

This is an educational project developed as part of a course. The main focus is practicing modern React development using TypeScript, Redux Toolkit, TailwindCSS, shadcn/ui, and Feature-Sliced Design architecture.

## 🚀 Tech Stack

- **React** + TypeScript — main UI library
- **Vite** — fast build tool and development server
- **Redux Toolkit** — global state management & API logic
- **React Router v6** — routing
- **TailwindCSS** — utility-first styling
- **shadcn/ui** — modern and customizable UI components
- **Architecture**: Feature-Sliced Design (FSD)

---

## ⚙️ Installation & Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will be available at: `http://localhost:5173`

---

## 🏁 Production Build

```bash
npm run build
```

The output will be generated in the `dist` folder — ready for deployment.

---

## 🌿 Git Branching Convention

| Branch Type | Purpose                     | Example                  |
| ----------- | --------------------------- | ------------------------ |
| `feature/`  | New feature                 | `feature/add-auth-page`  |
| `bugfix/`   | Bug fixes                   | `bugfix/fix-mobile-menu` |
| `refactor/` | Code refactoring            | `refactor/clean-header`  |
| `docs/`     | Documentation updates       | `docs/readme-update`     |
| `test/`     | Adding or updating tests    | `test/add-auth-tests`    |
| `release/`  | Preparing a release version | `release/v1.0.0`         |

> ✅ Use `kebab-case` and English descriptions.

---

## 📂 Project Structure (FSD)

```
src/
├── app/          # App entry, router, store, global styles
├── pages/        # Page components
├── widgets/      # Large UI blocks (Header, Layout, etc.)
├── features/     # User interactions and business logic
├── entities/     # Business entities (user, book, etc.)
├── shared/       # Reusable code
│   ├── ui/       # UI components (shadcn/ui)
│   ├── assets/   # Icons, images
│   ├── config/   # App configuration
│   ├── constants/
│   └── lib/
│       └── hooks/
└── vite-env.d.ts
```

---

## 🎨 UI Components (shadcn/ui + Tailwind)

The project uses:

- shadcn/ui components
- TailwindCSS utility classes
- Customizable styles via CSS variables

All UI elements are consistent, reusable, and follow modern design guidelines.

---

## 🔧 Code Quality

We use **ESLint** and **Prettier** to catch bugs early and keep code consistent across the team.

- ESLint with [Airbnb style guide](https://github.com/airbnb/javascript)
- Prettier for code formatting
- TypeScript strict mode

```bash
npm run lint        # check for errors
npm run lint:fix    # auto-fix errors
```

---

## ✍️ Authors
