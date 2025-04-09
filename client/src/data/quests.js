// src/data/quests.js
export const quests = [
  {
    id: 1,
    era: "Древняя Русь",
    title: "Основание Киева",
    description:
      "Получите названия всех поселений, основанных до 900 года нашей эры.",
    queryHint: "SELECT name FROM settlements WHERE year_founded < 900;",
    steps: [
      {
        stepId: 1,
        title: "Шаг 1: Базовый запрос",
        description: "Найдите все поселения, основанные до 900 года нашей эры.",
        queryHint: "SELECT name FROM settlements WHERE year_founded < 900;",
      },
      {
        stepId: 2,
        title: "Шаг 2: Фильтрация по региону",
        description: "Отфильтруйте эти поселения по региону 'Киев'.",
        queryHint:
          "SELECT name FROM settlements WHERE region = 'Киев' AND year_founded < 900;",
      },
      {
        stepId: 3,
        title: "Шаг 3: Сортировка по году основания",
        description: "Отсортируйте результаты по возрастанию года основания.",
        queryHint:
          "SELECT name FROM settlements WHERE region = 'Киев' AND year_founded < 900 ORDER BY year_founded ASC;",
      },
      {
        stepId: 4,
        title: "Шаг 4: Дополнительные данные",
        description: "Добавьте в выборку год основания каждого поселения.",
        queryHint:
          "SELECT name, year_founded FROM settlements WHERE region = 'Киев' AND year_founded < 900 ORDER BY year_founded ASC;",
      },
    ],
  },
  {
    id: 2,
    era: "Царство Русское",
    title: "Иван Грозный",
    description:
      "Найдите все сражения, возглавляемые Иваном IV между 1547 и 1584 годами.",
    queryHint: "SELECT battle_name FROM battles WHERE leader = 'Иван IV';",
    steps: [
      {
        stepId: 1,
        title: "Шаг 1: Все сражения Ивана IV",
        description:
          "Составьте список всех сражений, где лидером был 'Иван IV'.",
        queryHint: "SELECT battle_name FROM battles WHERE leader = 'Иван IV';",
      },
      {
        stepId: 2,
        title: "Шаг 2: Узкий временной диапазон",
        description:
          "Покажите только сражения, произошедшие между 1547 и 1584 годами.",
        queryHint:
          "SELECT battle_name FROM battles WHERE leader = 'Иван IV' AND year BETWEEN 1547 AND 1584;",
      },
      {
        stepId: 3,
        title: "Шаг 3: Добавление места сражения",
        description: "Добавьте в выборку место проведения каждого сражения.",
        queryHint:
          "SELECT battle_name, location FROM battles WHERE leader = 'Иван IV' AND year BETWEEN 1547 AND 1584;",
      },
      {
        stepId: 4,
        title: "Шаг 4: Подсчет количества сражений",
        description:
          "Подсчитайте общее количество сражений за указанный период.",
        queryHint:
          "SELECT COUNT(*) AS total_battles FROM battles WHERE leader = 'Иван IV' AND year BETWEEN 1547 AND 1584;",
      },
    ],
  },
];
