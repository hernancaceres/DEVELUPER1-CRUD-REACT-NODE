import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Publicacion} from "./Publicacion.js";

export const Usuario = sequelize.define(
    "usuarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        apellido: {
            type: DataTypes.STRING,
        },
        imagenAbatar: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        contraseña: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

Usuario.hasMany(Publicacion, {
    foreinkey: "usuarioId",
    sourceKey: "id",
  });
  Publicacion.belongsTo(Usuario, { foreinkey: "usuarioId", targetId: "id" });