const express = require('express')
const app = express();

const path = require('path');
const fs = require('fs');

function readJsonFile(filePath) {
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');
      const jsonObj = JSON.parse(jsonString);
      return jsonObj;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

app.get('/', (req,res) => {
    res.send('MAIN PAGE');
})

app.get('/products', (req,res) => {
    var data = readJsonFile(path.join("express-server/data/db.json"));
    res.send(data);
})

app.listen(8080, () =>{
    console.log("SERVER STARTED ON PORT 8080");
});