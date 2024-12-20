import { db } from './db/connection.js'
import { getRandomData } from './utils/random.js'

// Fungsi untuk mengirim data ke PostgreSQL
const sendDataToDatabase = async () => {
    const data = getRandomData();
    const query = `
    INSERT INTO power_data (active_power, reactive_power, power_factor, created_at)
    VALUES ($1, $2, $3, NOW())
  `;
    const values = [data.active_power, data.reactive_power, data.power_factor];

    try {
        await db.query(query, values);
        console.log('Data sent to database:', data);
    } catch (err) {
        console.error('Error inserting data:', err);
    }
};

// Mengirim data setiap detik
setInterval(sendDataToDatabase, 1000);

