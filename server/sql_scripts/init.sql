-- Таблица camp_logs
CREATE TABLE camp_logs (
    log_id SERIAL PRIMARY KEY,  -- Changed to SERIAL for auto-increment
    guard_name VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    shift VARCHAR(10) CHECK (shift IN ('day', 'night')),
    action VARCHAR(10) CHECK (action IN ('patrol', 'check', 'enter', 'exit')),
    time TIME NOT NULL,
    notes TEXT
);

INSERT INTO camp_logs (guard_name, date, shift, action, time, notes) VALUES  -- Removed log_id from columns
('Иван','1380-09-06','night','patrol','23:05:00','Обычный обход'),
('Борис','1380-09-06','night','check','23:20:00','Проверял шатёр со знаменем'),
('Лука','1380-09-06','night','patrol','23:45:00','Замечено странное движение'),
('Роман','1380-09-06','night','patrol','23:55:00','Ничего не замечено'),
('Дмитрий','1380-09-06','night','check','00:10:00','Все спокойно'),
('Алексей','1380-09-06','night','patrol','00:20:00','Легкий ветерок'),
('Игорь','1380-09-06','night','patrol','00:30:00','Темные тени у леса'),
('Константин','1380-09-06','night','check','00:45:00','Проверял внешнюю периметрию'),
('Фёдор','1380-09-06','night','patrol','01:00:00','Незнакомец вдалеке'),
('Михаил','1380-09-06','night','patrol','01:15:00','Слабый свет вдалеке'),
('Сергей','1380-09-06','night','patrol','01:30:00','Тихий шелест листвы'),
('Василий','1380-09-06','night','check','01:45:00','Рутинная проверка'),
('Пётр','1380-09-06','night','patrol','02:00:00','Звуки шагов за спиной'),
('Ефим','1380-09-06','night','patrol','02:15:00','Необычные звуки вдалеке'),
('Георгий','1380-09-06','night','check','02:30:00','Всё тихо'),
('Иван','1380-09-07','day','patrol','06:05:00','Обнаружено пропажу знамени'),
('Борис','1380-09-07','day','patrol','06:15:00','Паника среди стражей'),
('Лука','1380-09-07','day','check','06:25:00','Записи за ночь противоречивы'),
('Роман','1380-09-07','day','patrol','06:35:00','Нервное поведение'),
('Дмитрий','1380-09-07','day','check','06:45:00','Всё в норме'),
('Алексей','1380-09-07','day','exit','07:00:00','Покинул лагерь незаметно'),
('Игорь','1380-09-07','day','exit','07:05:00','Был замечен на окраине'),
('Константин','1380-09-07','day','enter','07:15:00','Вернулся после обхода'),
('Фёдор','1380-09-07','day','exit','07:25:00','В спешке покинул территорию'),
('Михаил','1380-09-07','day','patrol','07:35:00','Всё спокойно'),
('Сергей','1380-09-07','day','exit','07:45:00','Неожиданный выход'),
('Василий','1380-09-07','day','enter','07:55:00','Вернулся без замечаний'),
('Пётр','1380-09-07','day','exit','08:05:00','Покинул лагерь после обхода'),
('Ефим','1380-09-07','day','patrol','08:15:00','Нормальный обход'),
('Георгий','1380-09-07','day','exit','08:25:00','Срочно вышел за пределы стана'),
('Иван','1380-09-07','night','exit','00:30:00','Покинул лагерь после полуночи'),
('Борис','1380-09-07','night','exit','00:45:00','Незаметный выход'),
('Лука','1380-09-07','night','patrol','00:55:00','Тень в темноте'),
('Роман','1380-09-07','night','exit','01:05:00','Спешный выход'),
('Дмитрий','1380-09-07','night','patrol','01:15:00','Наблюдал за окрестностями'),
('Алексей','1380-09-07','night','exit','01:25:00','В спешке ушел'),
('Игорь','1380-09-07','night','patrol','01:35:00','Замечены шаги вдали'),
('Константин','1380-09-07','night','exit','01:45:00','Выход на север'),
('Фёдор','1380-09-07','night','patrol','01:55:00','Незначительные шумы'),
('Михаил','1380-09-07','night','exit','02:05:00','Быстрый выход'),
('Сергей','1380-09-07','night','exit','02:15:00','Спокойный выход'),
('Василий','1380-09-07','night','patrol','02:25:00','Наблюдал за звездами'),
('Пётр','1380-09-07','night','exit','02:35:00','Выход с тревогой'),
('Ефим','1380-09-07','night','patrol','02:45:00','Звуки неясного происхождения'),
('Георгий','1380-09-07','night','exit','02:55:00','Срочный выход'),
('Иван','1380-09-08','day','enter','06:10:00','Возвращение после ночи'),
('Борис','1380-09-08','day','patrol','06:20:00','Проверка внутреннего периметра'),
('Лука','1380-09-08','day','check','06:30:00','Записи ночи вызывают вопросы'),
('Роман','1380-09-08','day','patrol','06:40:00','Нервное поведение наблюдается'),
('Дмитрий','1380-09-08','day','patrol','06:50:00','Ситуация стабилизирована'),
('Алексей','1380-09-08','day','exit','07:00:00','Выход незамеченным'),
('Игорь','1380-09-08','day','enter','07:10:00','Возвращение после патруля'),
('Константин','1380-09-08','day','patrol','07:20:00','Рутинная проверка'),
('Фёдор','1380-09-08','day','exit','07:30:00','Смутное исчезновение'),
('Михаил','1380-09-08','day','enter','07:40:00','Возврат после обхода'),
('Сергей','1380-09-08','day','patrol','07:50:00','Наблюдения за лагерем'),
('Василий','1380-09-08','day','exit','08:00:00','Покинул лагерь незаметно'),
('Пётр','1380-09-08','day','patrol','08:10:00','Отмечены странности'),
('Ефим','1380-09-08','day','exit','08:20:00','Выход с тревогой'),
('Георгий','1380-09-08','day','check','08:30:00','Все записи подтверждены');


-- Таблица finances
CREATE TABLE finances (
    trans_id SERIAL PRIMARY KEY,
    recipient_name VARCHAR(50) NOT NULL,
    amount INT CHECK (amount >= 0),
    transaction_date DATE NOT NULL
);

INSERT INTO finances (recipient_name, amount, transaction_date) VALUES
('Иван',20,'1380-09-06'),
('Борис',70,'1380-09-06'),
('Лука',10,'1380-09-07'),
('Роман',80,'1380-09-06'),
('Дмитрий',15,'1380-09-06'),
('Алексей',55,'1380-09-06'),
('Игорь',40,'1380-09-06'),
('Константин',65,'1380-09-06'),
('Фёдор',30,'1380-09-06'),
('Михаил',45,'1380-09-06'),
('Сергей',75,'1380-09-06'),
('Василий',25,'1380-09-06'),
('Пётр',60,'1380-09-06'),
('Ефим',35,'1380-09-06'),
('Георгий',90,'1380-09-06'),
('Иван',22,'1380-09-07'),
('Борис',85,'1380-09-07'),
('Лука',18,'1380-09-07'),
('Роман',95,'1380-09-07'),
('Дмитрий',40,'1380-09-07'),
('Алексей',65,'1380-09-07'),
('Игорь',50,'1380-09-07'),
('Константин',55,'1380-09-07'),
('Фёдор',45,'1380-09-07'),
('Михаил',70,'1380-09-07'),
('Сергей',80,'1380-09-07'),
('Василий',35,'1380-09-07'),
('Пётр',90,'1380-09-07'),
('Ефим',25,'1380-09-07'),
('Георгий',100,'1380-09-07'),
('Иван',30,'1380-09-08'),
('Борис',60,'1380-09-08'),
('Лука',20,'1380-09-08'),
('Роман',85,'1380-09-08'),
('Дмитрий',35,'1380-09-08'),
('Алексей',50,'1380-09-08'),
('Игорь',40,'1380-09-08'),
('Константин',75,'1380-09-08'),
('Фёдор',55,'1380-09-08'),
('Михаил',65,'1380-09-08'),
('Сергей',80,'1380-09-08'),
('Василий',30,'1380-09-08'),
('Пётр',90,'1380-09-08'),
('Ефим',45,'1380-09-08'),
('Георгий',95,'1380-09-08'),
('Иван',28,'1380-09-06'),
('Борис',77,'1380-09-06'),
('Лука',33,'1380-09-06'),
('Роман',88,'1380-09-06'),
('Дмитрий',42,'1380-09-06'),
('Алексей',53,'1380-09-06'),
('Игорь',37,'1380-09-06'),
('Константин',68,'1380-09-06'),
('Фёдор',49,'1380-09-06'),
('Михаил',62,'1380-09-06'),
('Сергей',81,'1380-09-06'),
('Василий',39,'1380-09-06'),
('Пётр',70,'1380-09-06'),
('Ефим',44,'1380-09-06'),
('Георгий',92,'1380-09-06');

-- Таблица movement_records
CREATE TABLE movement_records (
    move_id SERIAL PRIMARY KEY,
    main_person VARCHAR(50) NOT NULL,
    companion VARCHAR(50),
    route VARCHAR(50) CHECK (route IN ('Лесная тропа', 'Река', 'Окольная дорога')),
    date DATE NOT NULL,
    notes TEXT
);

INSERT INTO movement_records (main_person, companion, route, date, notes) VALUES
('Борис','Иван','Лесная тропа','1380-09-07','Видели у опушки леса'),
('Роман',NULL,'Река','1380-09-07','Замечен у брода Каменский'),
('Лука','Иван','Окольная дорога','1380-09-06','Следы на земле отсутствуют'),
('Дмитрий','Пётр','Лесная тропа','1380-09-07','След оставлен на мху'),
('Алексей','Сергей','Река','1380-09-07','Видели отражение в воде'),
('Игорь','Константин','Лесная тропа','1380-09-07','Незаметное передвижение'),
('Фёдор',NULL,'Река','1380-09-07','Шум воды и шагов'),
('Михаил','Василий','Окольная дорога','1380-09-07','Переход через узкий мост'),
('Сергей','Ефим','Лесная тропа','1380-09-07','Тихое перемещение'),
('Василий','Георгий','Река','1380-09-07','Наблюдали за отражениями'),
('Пётр','Борис','Окольная дорога','1380-09-06','Следы от сапог'),
('Ефим',NULL,'Река','1380-09-06','Ночное перекидывание через камни'),
('Георгий','Иван','Лесная тропа','1380-09-06','Мгновенный проход'),
('Иван','Пётр','Река','1380-09-06','Тихий переход через броды'),
('Борис','Сергей','Окольная дорога','1380-09-06','Следы на глине'),
('Роман','Игорь','Лесная тропа','1380-09-06','Погружение в темноту'),
('Лука','Константин','Река','1380-09-06','Шорох воды'),
('Дмитрий','Фёдор','Окольная дорога','1380-09-06','Следы на земле'),
('Алексей','Михаил','Лесная тропа','1380-09-06','Незаметный проход'),
('Игорь','Василий','Река','1380-09-06','Отражение в воде'),
('Константин','Пётр','Окольная дорога','1380-09-07','Мокрые следы'),
('Фёдор','Ефим','Лесная тропа','1380-09-07','Тихий шёпот ветра'),
('Михаил','Георгий','Река','1380-09-07','Шум воды вдалеке'),
('Сергей','Иван','Окольная дорога','1380-09-07','Следы на камне'),
('Василий','Борис','Лесная тропа','1380-09-07','Замечены тени'),
('Пётр','Сергей','Река','1380-09-07','Переход через мост'),
('Ефим','Лука','Лесная тропа','1380-09-07','Следы в росе'),
('Георгий','Дмитрий','Окольная дорога','1380-09-07','Мгновенные шаги'),
('Иван','Алексей','Река','1380-09-07','Наблюдались отражения'),
('Борис','Константин','Лесная тропа','1380-09-07','Слабый свет'),
('Роман','Пётр','Река','1380-09-07','Шорох у водоёма'),
('Лука','Иван','Окольная дорога','1380-09-07','Следы на глине'),
('Дмитрий','Борис','Лесная тропа','1380-09-07','Мгновенное перемещение'),
('Алексей','Сергей','Река','1380-09-07','Тихий звук воды'),
('Игорь','Пётр','Окольная дорога','1380-09-07','Следы в утренней росе'),
('Константин','Ефим','Лесная тропа','1380-09-07','Незаметный проход'),
('Фёдор','Лука','Река','1380-09-07','Шум перекидывания'),
('Михаил','Дмитрий','Окольная дорога','1380-09-07','Следы на мосту'),
('Сергей','Игорь','Лесная тропа','1380-09-07','Тихий переход'),
('Василий','Константин','Река','1380-09-07','Замечен бриз'),
('Пётр','Алексей','Окольная дорога','1380-09-07','Следы на камне'),
('Ефим','Михаил','Лесная тропа','1380-09-07','Шорох под ногами'),
('Георгий','Сергей','Река','1380-09-07','Отражение луны'),
('Иван','Василий','Окольная дорога','1380-09-07','Следы на песке'),
('Борис','Пётр','Лесная тропа','1380-09-07','Незаметное движение'),
('Роман','Ефим','Река','1380-09-07','Шорох воды и листвы'),
('Лука','Константин','Окольная дорога','1380-09-07','Следы от сапог'),
('Дмитрий','Иван','Лесная тропа','1380-09-07','Быстрый проход'),
('Алексей','Борис','Река','1380-09-07','Незаметный шорох'),
('Игорь','Сергей','Окольная дорога','1380-09-07','Мокрые следы');


-- Таблица secret_negotiations
CREATE TABLE secret_negotiations (
    neg_id SERIAL PRIMARY KEY,
    person_name VARCHAR(50) NOT NULL,
    contact_type VARCHAR(10) CHECK (contact_type IN ('письмо', 'устно')),
    date DATE NOT NULL,
    details TEXT
);

INSERT INTO secret_negotiations (person_name, contact_type, date, details) VALUES
('Роман','письмо','1380-09-06','Передал свиток с указаниями'),
('Иван','устно','1380-09-07','Встречался у реки'),
('Лука','письмо','1380-09-07','Неясные переговоры'),
('Борис','устно','1380-09-06','Подозрительное обсуждение'),
('Дмитрий','письмо','1380-09-06','Непонятные инструкции'),
('Алексей','устно','1380-09-06','Встреча в сумерках'),
('Игорь','письмо','1380-09-06','Передача секретов'),
('Константин','устно','1380-09-06','Незначительное общение'),
('Фёдор','письмо','1380-09-06','Тайный документ'),
('Михаил','устно','1380-09-06','Сомнительная беседа'),
('Сергей','письмо','1380-09-06','Зашифрованное послание'),
('Василий','устно','1380-09-06','Краткая встреча'),
('Пётр','письмо','1380-09-06','Неясные переговоры'),
('Ефим','устно','1380-09-06','Шепот в темноте'),
('Георгий','письмо','1380-09-06','Передача важной информации'),
('Роман','устно','1380-09-07','Быстрая встреча у леса'),
('Иван','письмо','1380-09-07','Зашифрованное сообщение'),
('Лука','устно','1380-09-07','Наблюдение за окрестностями'),
('Борис','письмо','1380-09-07','Секретные указания'),
('Дмитрий','устно','1380-09-07','Краткий разговор'),
('Алексей','письмо','1380-09-07','Непонятный документ'),
('Игорь','устно','1380-09-07','Быстрая передача'),
('Константин','письмо','1380-09-07','Записка с инструкциями'),
('Фёдор','устно','1380-09-07','Сомнительное общение'),
('Михаил','письмо','1380-09-07','Передача секретной информации'),
('Сергей','устно','1380-09-07','Непонятная встреча'),
('Василий','письмо','1380-09-07','Шифрованное сообщение'),
('Пётр','устно','1380-09-07','Краткая встреча у реки'),
('Ефим','письмо','1380-09-07','Передача инструкций'),
('Георгий','устно','1380-09-07','Неясные переговоры'),
('Роман','письмо','1380-09-08','Секретное послание'),
('Иван','устно','1380-09-08','Быстрая встреча на рубеже'),
('Лука','письмо','1380-09-08','Шифрованное указание'),
('Борис','устно','1380-09-08','Непонятный разговор'),
('Дмитрий','письмо','1380-09-08','Передал тайное сообщение'),
('Алексей','устно','1380-09-08','Краткий разговор в тени'),
('Игорь','письмо','1380-09-08','Секретные документы'),
('Константин','устно','1380-09-08','Встреча без лишних слов'),
('Фёдор','письмо','1380-09-08','Запись таинственного контакта'),
('Михаил','устно','1380-09-08','Незначительный разговор'),
('Сергей','письмо','1380-09-08','Передача важного свитка'),
('Василий','устно','1380-09-08','Краткое устное сообщение'),
('Пётр','письмо','1380-09-08','Зашифрованные переговоры'),
('Ефим','устно','1380-09-08','Быстрая встреча в тени'),
('Георгий','письмо','1380-09-08','Передача секретной информации'),
('Роман','устно','1380-09-08','Последняя тайная встреча'),
('Иван','письмо','1380-09-08','Секретное послание в рукописи'),
('Лука','устно','1380-09-08','Незначительный контакт'),
('Борис','письмо','1380-09-08','Запись важного звонка'),
('Дмитрий','устно','1380-09-08','Краткое сообщение в суматохе');
