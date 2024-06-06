const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/weather', async (req, res) => {
    const accessKey = '57cee70e-eef3-4a0a-bd92-2ab7ca67daa6';
    const url = `https://api.weather.yandex.ru/v2/forecast?lat=52.37125&lon=4.89388`;
    const headers = {
        'X-Yandex-Weather-Key': accessKey
    };

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});