const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

const articlesInfo = {
    "MongoDB": {
        comments: [],
    },
    "Express.js": {
        comments: [],
    },
    "React.js": {
        comments: [],
    },
    "Node.js": {
        comments: [],
    },
};

// Initialize middleware
// we used to have to install body parser but now it is built in middleware
// function of express. If parses incoming JSON payload
app.use(express.json({ extended: false }));

// // Just a test route for now
// app.get('/', (req, res) => res.send("Hello Jason!"));
// app.post('/', (req, res) => res.send(`Hello ${req.body.name}`));
// app.get("/hello/:name", (req, res) => res.send(`Hello ${req.params.name}`));

app.post('/api/articles/:name/add-comments', (req, res) => {
    const {username, text} = req.body;
    const articleName = req.params.name;
    articlesInfo[articleName].comments.push({username, text});
    res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

