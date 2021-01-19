const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => res.json({ message: ' Welcome to the two-factor authentication example'}));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));