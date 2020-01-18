const express = require("express");
const app = express();
const mongoose = require('mongoose');
const PORT = 5000 || process.env.PORT;
const config = require('./config/key')

mongoose
    .connect(config.mongoURI,
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("💻 Mondodb Connected"))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("heloo")
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));