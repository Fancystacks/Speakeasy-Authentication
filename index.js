const express = require('express');
const speakeasy = require('speakeasy');
const uuid = require('uuid');
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

const app = express();

const db = new JsonDB(new Config("myDataBase", true, false, '/'));

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => res.json({ message: ' Welcome to the two-factor authentication example'}));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));