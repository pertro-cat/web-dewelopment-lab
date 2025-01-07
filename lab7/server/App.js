import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import {
  getAllRockets,
  getRocketById,
  createRocket,
  updateRocketById,
  deleteRocketById,
} from "./database.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/rockets", async (req, res) => {
  const { name, country, manufacturer, launchMin, launchMax, sortOrder } =
    req.query;

  let query = "SELECT * FROM rockets WHERE 1=1";
  const params = [];

  if (name) {
    query += " AND name LIKE ?";
    params.push(`%${name}%`);
  }
  if (country) {
    query += " AND country LIKE ?";
    params.push(`%${country}%`);
  }
  if (manufacturer) {
    query += " AND manufacturer LIKE ?";
    params.push(`%${manufacturer}%`);
  }
  if (launchMin) {
    query += " AND count_mission >= ?";
    params.push(launchMin);
  }
  if (launchMax) {
    query += " AND count_mission <= ?";
    params.push(launchMax);
  }
  if (sortOrder) {
    query += ` ORDER BY count_mission ${sortOrder === "asc" ? "ASC" : "DESC"}`;
  }

  console.log("SQL Query:", query);
  console.log("SQL Params:", params);

  try {
    const rockets = await getAllRockets(query, params);
    res.json(rockets);
  } catch (error) {
    console.error("Error fetching rockets:", error);
    res.status(500).send("Помилка отримання ракет");
  }
});

app.get("/rockets/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const rocket = await getRocketById(id);
    res.json(rocket);
  } catch (error) {
    res.status(500).send("Помилка отримання ракети");
  }
});

app.post("/rockets", async (req, res) => {
  const {
    name,
    video_url,
    image,
    manufacturer,
    country,
    count_mission,
    about_rocket,
    mission_title,
    mission_description,
  } = req.body;

  console.log("Received rocket data:", req.body);

  try {
    const newRocket = await createRocket(
      name,
      video_url,
      image,
      manufacturer,
      country,
      count_mission,
      about_rocket,
      mission_title,
      mission_description
    );
    res.status(201).json(newRocket);
  } catch (error) {
    console.error("Error creating rocket:", error);
    res.status(500).send("Помилка створення ракети");
  }
});

app.put("/rockets/:id", async (req, res) => {
  const id = req.params.id;
  const {
    name,
    video_url,
    image,
    manufacturer,
    country,
    count_mission,
    about_rocket,
    mission_title,
    mission_description,
  } = req.body;

  try {
    const updatedRocket = await updateRocketById(
      id,
      name,
      video_url,
      image,
      manufacturer,
      country,
      count_mission,
      about_rocket,
      mission_title,
      mission_description
    );
    res.json(updatedRocket);
  } catch (error) {
    console.error("Error updating rocket:", error);
    res.status(500).send("Error updating rocket");
  }
});

app.delete("/rockets/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await deleteRocketById(id);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).send("Ракету не знайдено");
    }
  } catch (error) {
    console.error("Error deleting rocket:", error);
    res.status(500).send("Помилка видалення ракети");
  }
});

app.listen(8080, () => {
  console.log("Сервер працює на http://localhost:8080");
});
