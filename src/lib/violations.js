import { db } from "./database/database";

export async function getViolations(lat, lon) {
  try {
    const query = `
      WITH distance_calc AS (
        SELECT
            *,
            6371 * 2 * ASIN(
                SQRT(
                    POWER(SIN(RADIANS((latitude - ${lat}) / 2)), 2) +
                    COS(RADIANS(${lat})) * COS(RADIANS(latitude)) *
                    POWER(SIN(RADIANS((longitude - ${lon}) / 2)), 2)
                )
            ) AS distance
        FROM "table"
      )
      SELECT *
      FROM distance_calc
      WHERE distance <= 0.5
      ORDER BY distance ASC;
    `;
    const result = await db.all(query, (err, rows) => {
      if (err) {
        console.error("Error running query:", err);
        throw err;
      }
      return rows;
    });
    // const result = await violationsDB.query(query, params);
    // return result.rows;
  } catch (error) {
    console.error("Error running query:", error);
    throw error;
  }
}