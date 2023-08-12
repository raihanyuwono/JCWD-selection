"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class attendance extends Model {
        static associate(models) {
            this.belongsTo(models["user"], { foreignKey: "id_user" });
            this.hasOne(models["payroll"], { foreignKey: "id_attendance" });
        }
    }
    attendance.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            id_user: DataTypes.UUID,
            shift: DataTypes.ENUM("day", "night"),
            clock_in: DataTypes.DATE,
            clock_out: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "attendance",
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return attendance;
};
