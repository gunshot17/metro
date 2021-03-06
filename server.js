const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const user = require("./routes/user");

const app = express();



app.use(express.json());

app.use("/api/v1/user", user);

const PORT = process.env.PORT || 5777;
app.listen(PORT, console.log("서버 가동"));