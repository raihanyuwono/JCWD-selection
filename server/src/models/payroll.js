"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class payroll extends Model {
        static associate(models) {
            this.belongsTo(models["attendance"], {
                foreignKey: "id_attendance",
            });
        }
    }
    payroll.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            id_attendance: DataTypes.UUID,
            salary: DataTypes.BIGINT,
        },
        {
            sequelize,
            modelName: "payroll",
            nderscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return payroll;
};
