import express, { json } from "express";
import items from "./items";

const app = express();

app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/", async (_req, res) => {
  res.json({ status: true, message: "express node.js app works" });
});

app.get("/items", (_req, res) => {
  res.json({ status: true, message: "Items Index", data: items });
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
