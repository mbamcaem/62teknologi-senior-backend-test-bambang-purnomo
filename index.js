const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()

app.use(express.json({ extended: false }));
app.use(cors());
app.options("*", cors());

const indexRoutes = require('./routes/index')
const bussinessRoutes = require('./routes/bussiness')

app.use("", indexRoutes)
app.use("/bussiness", bussinessRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
