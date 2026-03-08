const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/test";

app.get("/", (req, res) => {
  res.json({ message: "MERN CI/CD App Running" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
