const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home page
app.get("/", (req, res) => {
  res.render("index", { message: null, form: {} });
});

// Register employee
app.post("/register", async (req, res) => {
  const { name, email, department } = req.body;
  if (!name || !email || !department) {
    return res.render("index", { message: "All fields required!", form: req.body });
  }

  try {
    await db.execute(
      "INSERT INTO employees (name, email, department) VALUES (?, ?, ?)",
      [name, email, department]
    );
    res.render("index", { message: "Employee registered successfully!", form: {} });
  } catch (err) {
    console.error(err);
    res.render("index", { message: "Error saving employee", form: req.body });
  }
});

// Employee list
app.get("/employees", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM employees ORDER BY id DESC");
    res.render("employees", { employees: rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

