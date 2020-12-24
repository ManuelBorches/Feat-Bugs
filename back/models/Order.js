const { DataTypes, Model } = require("sequelize");
const database = require("../config/db");

class Order extends Model {}

Order.init({
    type: {
        type: DataTypes.ENUM("feature", "bug"),
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM('pending', 'priority', 'done'), 
        defaultValue: 'pending',
    },
    qVotes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, 
{
    sequelize: database, 
    modelName: 'order',
});

module.exports = Order;