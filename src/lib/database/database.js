import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Open the SQLite database connection
export const db = new sqlite3.Database(path.join(__dirname,'violations.db'));

