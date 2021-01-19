const express = require('express');
const speakeasy = require('speakeasy');
const uuid = require('uuid');
const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

const app = express();

const PORT = process.env.PORT || 5000;

const db = new JsonDB(new Config("myDataBase", true, false, '/'));

// register user & create temporary secret 
app.post('/api/register', (req, res) => {
    const id = uuid.v4();

    try {
        const path = `/user/${id}`
        const temp_secret = speakeasy.generateSecret();
        db.push(path, { id, temp_secret });
        res.json({ id, secret: temp_secret })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error generating the secret '});
    }
});

app.get('/api', (req, res) => res.json({ message: ' Welcome to the two-factor authentication example'}));


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));