module.exports = (Sequelize, sequelize) => {
  const Meal = sequelize.define(
    "meal",
    {
      name: Sequelize.STRING,
      shortDescription: Sequelize.STRING,
      medium: Sequelize.BOOLEAN,
      large: Sequelize.BOOLEAN,
      originalPrice: Sequelize.FLOAT,
      discountedPrice: Sequelize.FLOAT,
      mediumDiscountedPrice: Sequelize.FLOAT,
      largeDiscountedPrice: Sequelize.FLOAT,
      mediumOriginalPrice: Sequelize.FLOAT,
      largeOriginalPrice: Sequelize.FLOAT,
      image: Sequelize.STRING,
      resturant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "resturant",
          key: "id",
        },
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  return Meal;
};
