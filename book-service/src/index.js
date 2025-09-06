import express from "express";

import Book from "./models/bookModel.js";
import dbStart from "./db/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

dbStart();

app.get("/books", async (req, res) => {
  const books = await Book.find({});
  res.json({ port, books });
});

app.listen(port, () => {
  console.log(`Book Service running at http://localhost:${port}`);
});
