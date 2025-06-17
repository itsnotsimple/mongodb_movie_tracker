#  MovieTracker — MongoDB CRUD & Aggregation проект

## 🧾 Описание

MovieTracker е MongoDB база данни за онлайн кино платформа. Проектът включва основни CRUD операции и заявки с агрегиране. Данните представят потребители, филми, жанрове, актьори и ревюта.

---

##  Колекции и структура

- `users` — `{ username, email, age }`
- `movies` — `{ title, year, genre, actors[], rating }`
- `genres` — `{ name [, description] }`
- `actors` — `{ name, age, nationality }`
- `reviews` — `{ user, movie, rating, comment }`

---

##  Инсталация и стартиране

1. Стартирай MongoDB (локално или през MongoDB Atlas)
2. Изпълни:
   - `insert.js` за въвеждане на данни
   - `queries.js` за заявки и агрегации

---

##  Файлова структура
movie-tracker/
├── insert.js  // Вмъкване на документи с коментари
├── queries.js // Всички заявки: CRUD + aggregate
└── README.md  // Описание и инструкции
