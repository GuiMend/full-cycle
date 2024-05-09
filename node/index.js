const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "mydb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = (name) =>
  `INSERT INTO people(name) values('${name ?? "Full Cycle"}')`;

app.get("/", (req, res) => {
  connection.query("SELECT * FROM people", function (err, result) {
    if (err) throw err;
    let people =
      result.map((person) => `<li>${person.name}</li>`).join("") ??
      "<li>No people found</li>";
    res.send(`
    <h1>Full Cycle Rocks!</h1>
    <h2>People:</h2>
    <ul>
      ${people}
    </ul>
    <form action="/add" method="post" enctype="multipart/form-data">
      <button type="submit">Add random name</button>
    </form>
    `);
  });
});

app.post("/add", (req, res) => {
  const name = Math.random().toString(36).substring(7);
  connection.query(sql(name), function (err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
