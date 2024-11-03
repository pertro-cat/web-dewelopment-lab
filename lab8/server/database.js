import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// Отримання ракети за ID
export async function getRocketById(id) {
  try {
    const [rows] = await pool.query(`SELECT * FROM rockets WHERE id = ?`, [id]);
    return rows[0];
  } catch (error) {
    console.error("Error fetching rocket by ID:", error);
    throw error;
  }
}

// Отримання всіх ракет (без фільтрації та сортування)
export async function getAllRockets() {
  try {
    const [rows] = await pool.query("SELECT * FROM rockets");
    return rows;
  } catch (error) {
    console.error("Error fetching rockets:", error);
    throw error;
  }
}

// Створення нової ракети
export async function createRocket(
  name,
  video_url,
  image,
  manufacturer,
  country,
  count_mission,
  about_rocket,
  mission_title,
  mission_description
) {
  try {
    const [result] = await pool.query(
      `
      INSERT INTO rockets (
        name, video_url, image, manufacturer, country, count_mission, about_rocket, mission_title, mission_description
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        name,
        video_url,
        image,
        manufacturer,
        country,
        count_mission,
        about_rocket,
        mission_title,
        mission_description,
      ]
    );
    const id = result.insertId;
    return getRocketById(id);
  } catch (error) {
    console.error("Error creating rocket:", error);
    throw error;
  }
}

// Оновлення ракети за ID
export async function updateRocketById(
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
) {
  try {
    const [result] = await pool.query(
      `
      UPDATE rockets
      SET name = ?, video_url = ?, image = ?, manufacturer = ?, country = ?, count_mission = ?, about_rocket = ?, mission_title = ?, mission_description = ?
      WHERE id = ?
      `,
      [
        name,
        video_url,
        image,
        manufacturer,
        country,
        count_mission,
        about_rocket,
        mission_title,
        mission_description,
        id,
      ]
    );
    return getRocketById(id);
  } catch (error) {
    console.error("Error updating rocket:", error);
    throw error;
  }
}

// Видалення ракети за ID
export async function deleteRocketById(id) {
  try {
    const [result] = await pool.query(`DELETE FROM rockets WHERE id = ?`, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting rocket:", error);
    throw error;
  }
}
