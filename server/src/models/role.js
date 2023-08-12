"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class role extends Model {
        static associate(models) {
            this.hasMany(models["user"], { foreignKey: "id_role" });
        }
    }
    role.init(
        {
            name: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "role",
            timestamps: false,
        }
    );
    return role;
};
