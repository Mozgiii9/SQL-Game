// src/pages/Quests.jsx
import { Link } from "react-router-dom";
import { quests } from "../data/quests";

function Quests() {
  return (
    <div className="bg-primary-bg p-8 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-3xl font-bold text-text-primary relative">
          Квесты
          <span className="absolute bottom-[-8px] left-0 right-0 h-1 bg-accent rounded-full"></span>
        </h1>
      </div>

      <ul className="space-y-4">
        {quests.map((q) => (
          <li
            key={q.id}
            className="p-4 bg-secondary-bg border border-border-primary rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            <Link
              to={`/quest/${q.id}`}
              className="text-text-primary font-semibold hover:text-accent flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>
                {q.era}: {q.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quests;
