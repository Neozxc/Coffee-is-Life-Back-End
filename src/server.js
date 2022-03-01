
// Imports
require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/userRoutes");
const shopRouter = require("./coffeeShops/shopRoutes");

// Setup
const app = express();
const port = process.env.PORT || 5002;

// For test
app.get("/", (req, res) => res.send("Hello this is a test"));

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(shopRouter);

// Run
app.listen(port, () => {
    console.log(`Listening to port: ${port}`);
});