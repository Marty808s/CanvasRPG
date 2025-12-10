require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // servování statických souborů z public složky

// testovací route
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Backend běží 🚀" });
});

// index route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// tady pak přidáš /api/register, /api/login, /api/save ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server běží na http://localhost:" + PORT);
});
