// server/App.js

import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { getAllRockets, getRocketById } from "./database.js";

const app = express();

// Define current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware configuration
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.get("/rockets", async (req, res) => {
  const { name, country, manufacturer, launchMin, launchMax, sortOrder } =
    req.query;

  let query = "SELECT * FROM rockets WHERE 1=1";
  const params = [];

  // Dynamic SQL query construction
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
    res.status(500).send("Error fetching rockets");
  }
});

app.get("/rockets/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const rocket = await getRocketById(id);
    if (rocket) {
      res.json(rocket);
    } else {
      res.status(404).send("Rocket not found");
    }
  } catch (error) {
    console.error("Error fetching rocket:", error);
    res.status(500).send("Error fetching rocket");
  }
});

// Server start
app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
