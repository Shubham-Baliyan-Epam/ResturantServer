const Sequelize = require("sequelize");
const dbConfig = require("../db");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    min: dbConfig.pool.min,
    max: dbConfig.pool.max,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {
  Sequelize,
  sequelize,
};
db.User = require("./user.model")(Sequelize, sequelize);
db.Meal = require("./meal.model")(Sequelize, sequelize);
db.Resturant = require("./resturant.model")(Sequelize, sequelize);
module.exports = db;
