import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const books = [
  { id: 1, title: "1984", author: "George Orwell" },
  {
    id: 2,
    title: "Brave New World",
    author: "Aldous Huxley",
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
];

app.get("/books", async (req, res) => {
  res.json({ port, books });
});

app.listen(port, () => {
  console.log(`Book Service running at http://localhost:${port}`);
});
