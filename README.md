#  MovieTracker MongoDB Project

##  Общо описание

Проектът MovieTracker представлява MongoDB база данни за приложение за проследяване на филми и потребителска активност. Базата включва пет основни колекции: жанрове (genres), потребители (users), филми (movies), ревюта (reviews) и абонаменти (subscriptions). Целта е да се демонстрират CRUD операции (Create, Read, Update, Delete), както и агрегиращи заявки чрез MongoDB aggregate pipeline.

---

##  Колекции и структура на документите

### 1. Genres (Жанрове)
- `name` *(string)*: Име на жанра  
- `description` *(string)*: Описание  
- `popular` *(boolean)*: Дали жанрът е популярен  

### 2. Users (Потребители)
- `username` *(string)*: Потребителско име  
- `email` *(string)*: Имейл  
- `password` *(string)*: Хеширана парола  
- `favorites` *(array)*: Масив с ID-та на любими филми  
- `profile` *(object)*: Информация за потребителя  
  - `age` *(number)*  
  - `gender` *(string)*  
  - `country` *(string)*  

### 3. Movies (Филми)
- `_id` *(string)*: Уникален идентификатор на филма  
- `title` *(string)*: Заглавие  
- `genre` *(string)*: Жанр  
- `year` *(number)*: Година на излизане  
- `rating` *(number)*: Рейтинг  
- `cast` *(array)*: Актьори  
- `info` *(object)*: Допълнителна информация  
  - `duration` *(number)*: Продължителност в минути  
  - `language` *(string)*: Език  

### 4. Reviews (Ревюта)
- `movie_id` *(string)*: Идентификатор на филма  
- `user_id` *(string)*: Потребителско име  
- `rating` *(number)*: Оценка  
- `comment` *(string)*: Коментар  
- `date` *(date)*: Дата на ревюто  

### 5. Subscriptions (Абонаменти)
- `user_id` *(string)*: Потребителско име  
- `plan` *(string)*: План (напр. Basic, Premium)  
- `start_date` *(date)*: Начална дата  
- `end_date` *(date)*: Крайна дата  
- `active` *(boolean)*: Дали е активен  

---

##  Изисквания

- Node.js версия 14 или по-нова  
- MongoDB Atlas акаунт или локален MongoDB сървър  
- npm пакет: `mongodb`

---

##  CRUD операции

 **Create**: Вмъкнати са поне 10 документа във всяка колекция  
 **Read**: Извличане на всички документи, филтриране по едно и повече полета  
 **Update**: Актуализация на документи според условие  
 **Delete**: Изтриване на документи по зададен критерий

---

##  Агрегационни заявки (Aggregate)

-  **Групиране на филми по жанр** и изчисляване на среден рейтинг  
-  **Филтриране и сортиране на абонаменти**, активни по дата  
-  **Броене на ревюта** за всеки филм и сортиране по брой  

---

##  Инсталация и употреба

```bash
git clone 
cd moviestream-mongodb
npm install mongodb
node run.js
