const express = require('express');
const request = require('request');
const url = require('url');

const app = express();
const BASE_URL = 'http://countryapi.gear.host/v1/Country/getCountries';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/countries', (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const URL = `${BASE_URL}?pLimit=${queryObject.pLimit}&pPage=${queryObject.pPage}`;
  request(
    {
      url: URL,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error.message });
      }
      console.log('requested -> ', URL);
      res.json(JSON.parse(body));
    }
  );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
