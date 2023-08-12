"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class salary extends Model {
        static associate(models) {
            this.belongsTo(models["user"], { foreignKey: "id_user" });
        }
    }
    salary.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            id_user: DataTypes.UUID,
            amount: DataTypes.BIGINT,
        },
        {
            sequelize,
            modelName: "salary",
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return salary;
};
