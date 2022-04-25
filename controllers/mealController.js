const factory = require("./factory");
exports.findAllMeals = factory.getAll("Meal");
exports.findMeal = factory.getOne("Meal");
exports.updateMeal = factory.updateOne("Meal");
exports.createMeal = factory.createOne("Meal");
