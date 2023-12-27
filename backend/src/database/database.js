import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    "projectsdb1", // db name,
    "postgres", // username
    "password", // password
    {
        host: "localhost",
        dialect: "postgres",
    }
);