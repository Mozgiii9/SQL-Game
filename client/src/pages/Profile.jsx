// src/pages/Profile.jsx
function Profile() {
  const user = {
    name: "Иван Грозный",
    avatar: "/public/assets/illustrations/avatar2.png",
    level: 5,
    progress: 75,
    achievements: [
      { id: 1, title: "Первый шаг", description: "Завершите первый этап" },
      { id: 2, title: "Мастер истории", description: "Завершите 5 этапов" },
    ],
  };

  return (
    <div className="bg-primary-bg p-8 rounded-lg shadow-md space-y-6">
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-2 border-accent"
        />
        <div>
          <h1 className="text-2xl font-bold text-text-primary">{user.name}</h1>
          <p className="text-text-primary">Уровень: {user.level}</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Ваш прогресс:
        </h2>
        <div className="bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-4 bg-accent rounded-full"
            style={{ width: `${user.progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-text-primary mt-2">
          {user.progress}% завершено
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Ваши достижения:
        </h2>
        <ul className="space-y-2">
          {user.achievements.map((achievement) => (
            <li
              key={achievement.id}
              className="flex items-center space-x-2 bg-secondary-bg p-4 rounded-lg shadow-sm"
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="font-semibold text-text-primary">
                  {achievement.title}
                </p>
                <p className="text-sm text-gray-600">
                  {achievement.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
