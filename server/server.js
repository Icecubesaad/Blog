const express = require("express");
const app = express();
const database = require("./DB/Database");
const path = require("path");

// Initialize database connection
database();

// Use express.json() directly
app.use(express.json({ limit: "500mb" }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.use("/api/blogs", require("./Router/Blogs"));
app.use("/api/auth", require("./Router/Auth"));

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
module.exports = app;
