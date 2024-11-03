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

// Отримання всіх ракет (без фільтрації та сортування)
app.get("/rockets", async (req, res) => {
  try {
    const rockets = await getAllRockets(); // Завантажуємо всі дані
    res.json(rockets); // Повертаємо всі дані без фільтрів
  } catch (error) {
    console.error("Error fetching rockets:", error);
    res.status(500).send("Помилка отримання ракет");
  }
});

// Отримання ракети за ID
app.get("/rockets/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const rocket = await getRocketById(id);
    res.json(rocket);
  } catch (error) {
    res.status(500).send("Помилка отримання ракети");
  }
});

// Додавання нової ракети
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

// Оновлення ракети за ID
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

// Видалення ракети за ID
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
