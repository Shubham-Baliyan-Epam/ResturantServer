module.exports = (Sequelize, sequelize) => {
  const User = sequelize.define(
    "user",
    {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      image: Sequelize.STRING,
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  return User;
};
