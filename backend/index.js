const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let posts = [];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
