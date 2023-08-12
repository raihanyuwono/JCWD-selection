"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        static associate(models) {
            this.hasMany(models["attendance"], { foreignKey: "id_user" });
            this.hasOne(models["salary"], { foreignKey: "id_user" });
            this.belongsTo(models["role"], { foreignKey: "id_role" });
        }
    }
    user.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
            },
            phone: {
                type: DataTypes.STRING,
                unique: true,
            },
            password: DataTypes.STRING,
            name: DataTypes.STRING,
            birthday: DataTypes.DATEONLY,
            id_role: {
                type: DataTypes.INTEGER,
                defaultValue: 2,
            },
        },
        {
            sequelize,
            modelName: "user",
            underscored: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            indexes: [
                { unique: true, fields: ["username"] },
                { unique: true, fields: ["email"] },
            ],
        }
    );
    return user;
};
