const User =  require("./User");
const Order = require("./Order");
const Tool = require("./Tool");
//const Votes = require("./Votes") // tabla pivot


Order.belongsTo(User);  // order.setUser(), order.create().then(user.find()).then(const=res).order.setUser(res)
Order.belongsTo(Tool);

User.belongsToMany(Order, {through: 'votes'})
Order.belongsToMany(User, {through: 'votes'})



///////////////////////////////// votes /////////////////////////////////////////////////////

module.exports = { User, Order, Tool }