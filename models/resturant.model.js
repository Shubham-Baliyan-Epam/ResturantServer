module.exports = (Sequelize, sequelize) => {
  const Resturant = sequelize.define(
    "resturant",
    {
      name: Sequelize.STRING,
      location: Sequelize.STRING,
      owner: Sequelize.STRING,
      image: Sequelize.STRING,
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Resturant;
};
