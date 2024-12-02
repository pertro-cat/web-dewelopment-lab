// server/database.js

import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// MySQL connection pool
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// Get all rockets
async function getAllRockets(
  query = "SELECT id, name, price_of_launch, availability_of_launch, image_url, manufacturer, country, count_mission, about_rocket, rocket_block FROM rockets WHERE 1=1",
  params = []
) {
  try {
    const [rows] = await pool.query(query, params);

    // Parse JSON in variants field if available
    rows.forEach((rocket) => {
      if (rocket.variants) {
        rocket.variants = JSON.parse(rocket.variants); // Convert JSON string to array
      }
      if (rocket.rocket_block) {
        rocket.rocket_block = JSON.parse(rocket.rocket_block); // Parsing rocket_block if it's a JSON string
      }
    });

    return rows;
  } catch (error) {
    console.error("Error fetching rockets:", error);
    throw error;
  }
}

// Get rocket by ID (with rocket_block field)
async function getRocketById(id) {
  try {
    const [rows] = await pool.query("SELECT * FROM rockets WHERE id = ?", [id]);
    const rocket = rows[0];

    // Parse JSON in variants and rocket_block fields
    if (rocket) {
      if (rocket.variants) {
        rocket.variants = JSON.parse(rocket.variants);
      }
      if (rocket.rocket_block) {
        rocket.rocket_block = JSON.parse(rocket.rocket_block); // Parsing rocket_block if it's a JSON string
      }
    }

    return rocket;
  } catch (error) {
    console.error("Error fetching rocket by ID:", error);
    throw error;
  }
}

// Exports
export { getAllRockets, getRocketById };
