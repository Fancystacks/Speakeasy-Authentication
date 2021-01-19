const express = require('express');
const speakeasy = require('speakeasy');
const uuid = require('uuid');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => res.json({ message: ' Welcome to the two-factor authentication example'}));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));