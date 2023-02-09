const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use(express.json());

// Connect to MongoDB
async function connect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Could not connect to MongoDB");
        console.log(error);
    }
}

connect();

// Shows documentation at root directory
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerDocument));

// Routes
app.use("/books", require("./routes/books.routes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
