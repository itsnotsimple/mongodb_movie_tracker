// --- Всички документи ---
db.genres.find();
db.actors.find();
db.users.find();
db.movies.find();
db.reviews.find();

// --- Филтриране по поле ---
db.movies.find({ genre: "Sci-Fi" });
db.actors.find({ nationality: "USA" });
db.users.find({ age: { $gte: 30 } });

// --- Филтриране по няколко полета ---
db.movies.find({ genre: "Action", rating: { $gte: 7 } });
db.reviews.find({ rating: { $lt: 7 }, movie: "Lucy" });

// --- Актуализация ---
db.users.updateOne({ username: "john_doe" }, { $set: { age: 29 } });
db.movies.updateOne({ title: "Noah" }, { $set: { rating: 6.2 } });
db.actors.updateOne({ name: "Emma Watson" }, { $set: { nationality: "England" } });
db.genres.updateOne({ name: "Fantasy" }, { $set: { description: "Magical stories" } });
db.reviews.updateOne({ movie: "Lucy" }, { $set: { comment: "Creative but flawed." } });

// --- Изтриване ---
db.reviews.deleteOne({ user: "moviebuff" });
db.users.deleteOne({ username: "zoro" });
db.genres.deleteOne({ name: "Documentary" });
db.movies.deleteOne({ title: "Noah" });
db.actors.deleteOne({ name: "Jackie Chan" });

// --- Aggregation ---
db.movies.aggregate([
  { $group: { _id: "$genre", averageRating: { $avg: "$rating" } } }
]);

db.reviews.aggregate([
  { $group: { _id: "$movie", avgScore: { $avg: "$rating" }, total: { $sum: 1 } } },
  { $sort: { avgScore: -1 } }
]);

db.actors.aggregate([
  { $group: { _id: "$nationality", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: { _id: null, avgAge: { $avg: "$age" } } }
]);
