const app = require("./app");

app.route("/").get((req, res) => {
  res.send("Api funcionando");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
