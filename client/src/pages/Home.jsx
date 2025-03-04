// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-primary-bg p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-text-primary relative">
          Добро пожаловать в мир истории!
          <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-accent rounded-full"></span>
        </h1>
      </div>

      <div className="bg-secondary-bg p-6 rounded-lg shadow-md border border-border-primary max-w-2xl w-full">
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Правила игры:
        </h2>
        <ul className="space-y-2 text-text-primary">
          <li>• Каждый квест состоит из нескольких этапов.</li>
          <li>
            • На каждом этапе вам нужно выполнить задание или решить задачу.
          </li>
          <li>
            • Используйте свои знания и логику, чтобы продвигаться дальше.
          </li>
          <li>• За каждый успешный этап вы получаете награду!</li>
        </ul>
      </div>

      <Link
        to="/quests"
        className="mt-8 px-6 py-3 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-accent-hover transition-all duration-300"
      >
        Начать приключение
      </Link>
    </div>
  );
}

export default Home;
