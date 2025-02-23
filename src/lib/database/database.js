import sqlite3 from 'sqlite3';

// Open the SQLite database connection
export const db = new sqlite3.Database('./violations.db');

