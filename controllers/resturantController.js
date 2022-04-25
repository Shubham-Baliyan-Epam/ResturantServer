const factory = require("./factory");
exports.findAllResturants = factory.getAll("Resturant");
exports.findResturant = factory.getOne("Resturant");
exports.updateResturant = factory.updateOne("Resturant");
exports.createResturant = factory.createOne("Resturant");
