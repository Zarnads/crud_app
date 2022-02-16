const Sequelize = require("sequelize");
const sequelize = require('../database/connection');

module.exports = sequelize.define("Course", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    duration: {
        type: Sequelize.STRING
    },
    fees: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
});