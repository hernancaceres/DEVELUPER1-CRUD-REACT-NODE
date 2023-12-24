import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


export const Publicacion = sequelize.define(
  "publicaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    imagen: {
        type: DataTypes.STRING,
      },
  },
  {
    timestamps: false,
  }
);

