const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 8080

app.get('/restaurant', async (req, res) => {
  const response = await getData();

  res.send(response);
})

app.get('/', (req, res) => {})

app.listen(process.env.PORT || port, () => {

})

const getData = async () => {
  return await fetch("https://hotell.difi.no/api/json/mattilsynet/smilefjes/tilsyn?")
  .then(response => response.json())
  .then(json => filterData(json.entries));
}

const filterData = (json) => {
  return json.filter(j => j.total_karakter !== "0" && j.total_karakter !== "1");
}