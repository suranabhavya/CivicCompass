import { db } from "./database/database";

export async function getViolations(lat, lon) {
  try {
    const query = `
      WITH distance_calc AS (
        SELECT
            *,
            6371 * 2 * ASIN(SQRT(POWER(SIN(RADIANS((latitude - ${lat}) / 2)), 2) + COS(RADIANS(${lat})) * COS(RADIANS(latitude)) * POWER(SIN(RADIANS((longitude - ${lon}) / 2)), 2))) AS distance
        FROM "table"
      )
      SELECT *
      FROM distance_calc      
      WHERE distance < 1
      ORDER BY distance ASC  
      LIMIT 500    
    `;
    const rows = await new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });

    return rows;
  } catch (error) {
    console.error("Error running query:", error);
    throw error;
  }
}