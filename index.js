const express = require("express");
const baseRouter = require("./routes/index.routes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/v2", baseRouter);

app.listen(process.env.PORT, () => {
  console.log("server is listening");
});
