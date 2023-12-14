const express = require("express");
var path = require("path");
const app = express();
var port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "script.js"));
});
app.get("/candy.mp3", (req, res) => {
  res.sendFile(path.join(__dirname, "candie.mp3"));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const mysql = require("mysql");
// const connection = mysql.createConnection({
//   host: "jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   user: "bvhzzrfxifpd1onh",
//   password: "f60cl5lwmc6lmnfj",
//   database: "jfaocgizpyz9abz2",
// });

// app.get("/api/allhistory", function (req, res) {
//   console.log("getting all history")
//   connection.query(
//     "SELECT entry FROM history",
//     function (err, data) {
//       if (err) throw err;
//       res.json(data);
//     }
//   );
// });

// app.post("/api/history", function (req, res) {
//   console.log(req.body);
//   connection.query(
//     "INSERT INTO history (entry) values(?)",
//     [req.body.text],
//     function (err, data) {
//       if (err) throw err;
//       res.json(data);
//     }
//   );
// });