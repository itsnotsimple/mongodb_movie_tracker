// ---------------------
// Колекция: genres
// ---------------------
db.genres.insertMany([
  { name: "Action" },
  { name: "Comedy" },
  { name: "Drama" },
  { name: "Sci-Fi" },
  { name: "Horror" },
  { name: "Romance" },
  { name: "Thriller" },
  { name: "Documentary" },
  { name: "Fantasy" },
  { name: "Animation" }
]);

// ---------------------
// Колекция: actors
// ---------------------
db.actors.insertMany([
  { name: "Tom Cruise", age: 61, nationality: "USA" },
  { name: "Scarlett Johansson", age: 39, nationality: "USA" },
  { name: "Jackie Chan", age: 70, nationality: "China" },
  { name: "Emma Watson", age: 34, nationality: "UK" },
  { name: "Leonardo DiCaprio", age: 49, nationality: "USA" },
  { name: "Natalie Portman", age: 42, nationality: "Israel" },
  { name: "Morgan Freeman", age: 87, nationality: "USA" },
  { name: "Chris Hemsworth", age: 41, nationality: "Australia" },
  { name: "Angelina Jolie", age: 49, nationality: "USA" },
  { name: "Daniel Radcliffe", age: 35, nationality: "UK" }
]);

// ---------------------
// Колекция: users
// ---------------------
db.users.insertMany([
  { username: "john_doe", email: "john@example.com", age: 28 },
  { username: "alice99", email: "alice@example.com", age: 24 },
  { username: "moviebuff", email: "buff@example.com", age: 35 },
  { username: "cinemalover", email: "cinema@example.com", age: 42 },
  { username: "geeky", email: "geek@example.com", age: 19 },
  { username: "tommy", email: "tommy@example.com", age: 22 },
  { username: "sarah", email: "sarah@example.com", age: 31 },
  { username: "bob", email: "bob@example.com", age: 29 },
  { username: "kat", email: "kat@example.com", age: 26 },
  { username: "zoro", email: "zoro@example.com", age: 33 }
]);

// ---------------------
// Колекция: movies
// ---------------------
db.movies.insertMany([
  { title: "Matrix", year: 1999, genre: "Sci-Fi", actors: ["Keanu Reeves"], rating: 8.7 },
  { title: "Titanic", year: 1997, genre: "Romance", actors: ["Leonardo DiCaprio"], rating: 7.8 },
  { title: "Avengers", year: 2012, genre: "Action", actors: ["Scarlett Johansson", "Chris Hemsworth"], rating: 8.0 },
  { title: "Inception", year: 2010, genre: "Sci-Fi", actors: ["Leonardo DiCaprio"], rating: 8.8 },
  { title: "Rush Hour", year: 1998, genre: "Comedy", actors: ["Jackie Chan"], rating: 7.0 },
  { title: "Harry Potter", year: 2001, genre: "Fantasy", actors: ["Emma Watson", "Daniel Radcliffe"], rating: 7.6 },
  { title: "Lucy", year: 2014, genre: "Action", actors: ["Scarlett Johansson"], rating: 6.4 },
  { title: "Se7en", year: 1995, genre: "Thriller", actors: ["Morgan Freeman"], rating: 8.6 },
  { title: "Salt", year: 2010, genre: "Action", actors: ["Angelina Jolie"], rating: 6.5 },
  { title: "Noah", year: 2014, genre: "Drama", actors: ["Emma Watson"], rating: 5.8 }
]);

// ---------------------
// Колекция: reviews
// ---------------------
db.reviews.insertMany([
  { user: "john_doe", movie: "Matrix", rating: 9, comment: "Legendary sci-fi." },
  { user: "alice99", movie: "Titanic", rating: 8, comment: "Emotional and timeless." },
  { user: "geeky", movie: "Avengers", rating: 9, comment: "Super fun!" },
  { user: "kat", movie: "Inception", rating: 10, comment: "Mind-blowing!" },
  { user: "bob", movie: "Rush Hour", rating: 7, comment: "Classic comedy." },
  { user: "zoro", movie: "Harry Potter", rating: 9, comment: "Magical!" },
  { user: "sarah", movie: "Lucy", rating: 6, comment: "Interesting idea." },
  { user: "tommy", movie: "Se7en", rating: 8, comment: "Dark and intense." },
  { user: "cinemalover", movie: "Salt", rating: 6, comment: "Decent action." },
  { user: "moviebuff", movie: "Noah", rating: 5, comment: "Not impressed." }
]);
