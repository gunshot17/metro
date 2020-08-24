const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const user = require("./routes/user");

const app = express();

app.use("/api/v1/user", user);

app.use(express.json());

const PORT = process.env.PORT || 5777;
app.listen(PORT, console.log("서버 가동"));