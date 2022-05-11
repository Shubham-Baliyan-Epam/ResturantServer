const express = require('express');
const path = require('path');

const db = require('./models/index.model');
const baseRouter = require('./routes/index.routes');
const globalErrorHandler = require('./controllers/errorController');
require('dotenv').config();

const app = express();

db.sequelize
  .sync()
  .then()
  .catch((err) => console.log(err));
app.use(express.json());

app.use(express.static(__dirname)); //to serve the static assets
app.use('/api/v2', baseRouter);
app.use(globalErrorHandler);
app.listen(process.env.PORT, () => {
  console.log('server is listening');
});
