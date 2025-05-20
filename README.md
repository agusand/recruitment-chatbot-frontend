# 💬 Recruitment Chatbot – Frontend

This is the frontend of an intelligent recruitment assistant. It simulates a chatbot that asks predefined questions to candidates and sends their responses to a backend API for scoring using OpenAI.

## ✨ Features

- Conversational chatbot UI for candidate interaction
- Dynamic rendering of interview questions from backend
- API integration for scoring candidate responses
- Responsive and accessible layout
- Modular codebase prepared for scaling and theming

## 🛠 Tech Stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast builds and dev server
- SCSS Modules for scoped styling
- ESLint + Prettier for code quality

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/recruitment-chatbot-frontend.git
cd recruitment-chatbot-frontend
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

## 🔌 Environment Variables

Create a `.env` file in the root with the following variables:

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

> You can adjust this depending on where your backend is hosted.

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── views/           # Page-level views or chat sections
├── hooks/           # Custom React hooks
├── services/        # API clients and utilities
├── styles/          # Global and modular styles
└── assets/          # Images, icons, etc.
```

## 📜 Scripts

| Script            | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Starts the Vite dev server    |
| `npm run build`   | Builds the app for production |
| `npm run preview` | Serves the built app locally  |
| `npm run lint`    | Runs ESLint for code linting  |
| `npm run format`  | Formats code with Prettier    |
| `npm run test`    | Runs unit tests with Vitest   |
| `npm run prepare` | Sets up Husky git hooks       |

## 🧪 TODO

- [ ] Implement unit tests with React Testing Library + Vitest or Jest
- [ ] Add error handling for failed API responses
- [ ] Implement CI via GitHub Actions
- [ ] Add support for loading indicators and message delays
- [ ] Add form to define role-based questions (future admin view)
- [ ] Improve accessibility and keyboard navigation
- [ ] Add user feedback / scoring summary screen

## 📸 Screenshots

_Add a screenshot of the chatbot UI here (e.g. `/public/chat-sample.png`)_

## 🧾 License

MIT
