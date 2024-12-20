import pkg from 'pg';
import { config } from '../config.js'

const { Pool } = pkg;

export const db = new Pool({
    user: config.DB_USER,
    host: config.DB_HOST,
    database: config.DB_DATABASE,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
});