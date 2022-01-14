const express = require("express");
const PORT = 4042;
const app = express();
require("./config/db");
const routerPath = require("./controller/router");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is up and running");
});

app.use("/api", routerPath);

app.listen(PORT, () => {
  console.log(`Server is ready to listen to ${PORT}`);
});
