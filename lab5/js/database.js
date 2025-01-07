import mysql from "mysql2";
import dotenv from "dotenv";
import { response } from "express";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getAllRockets(
  query = "SELECT * FROM rockets WHERE 1=1",
  params = []
) {
  try {
    console.log("Executing query:", query, "with params:", params);
    const [rows] = await pool.query(query, params);
    return rows;
  } catch (error) {
    console.error("Error fetching rockets:", error);
    throw error;
  }
}

export async function getRocketById(id) {
  try {
    const [rows] = await pool.query(`SELECT * FROM rockets WHERE id = ?`, [id]);
    return rows[0];
  } catch (error) {
    console.error("Error fetching rocket by ID:", error);
    throw error;
  }
}

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

export async function deleteRocketById(id) {
  try {
    const [result] = await pool.query(`DELETE FROM rockets WHERE id = ?`, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting rocket:", error);
    throw error;
  }
}

const new_promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("true");
  } else {
    reject("false");
  }
});

async function random() {
  try {
    const arr = await pool.new_promise();
  } catch (error) {
    console.log("you have error");
  } finally {
    console.log("you function are work");
  }
}

new_promise()
  .then((response) => response.json)
  .catch((error) => console.log("error"));

const rocket10 = {
  name: "falcon",
  manufacturer: "spasex",
  count_mission: "10",
  about_rocket: "sdfghjkl",
};

const { name, manufacturer, count_mission, about_rocket } = rocket10;
console.log(name);
console.log(manufacturer);
console.log(count_mission);
