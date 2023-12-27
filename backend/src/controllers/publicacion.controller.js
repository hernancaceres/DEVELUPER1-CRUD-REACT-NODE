import { Publicacion } from "../models/Publicacion.js";


export async function getPublicaciones(req, res) {
    try {
        const publicaciones = await Publicacion.findAll({
            atributes: ["id", "titulo", "descripcion", "imagen", "deliverydate"],
        });
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

export async function createPublicacion(req, res) {
    const { titulo, descripcion, imagen, deliveryDate } = req.body;
    try {
        let newPublicacion = await Publicacion.create(
            {
                titulo,
                descripcion,
                imagen,
                deliveryDate: new Date(deliveryDate).getTime(),
            },
            {
                fields: ["id", "titulo", "descripcion", "imagen", "deliverydate"],
            }
        );
        return res.json(newPublicacion);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
    res.json("received");
}