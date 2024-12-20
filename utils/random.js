export const getRandomData = () => {
    return {
        active_power: Math.random() * 100, // Angka acak antara 0 dan 100
        reactive_power: Math.random() * 50, // Angka acak antara 0 dan 50
        power_factor: Math.random().toFixed(2), // Angka acak antara 0 dan 1
    };
};