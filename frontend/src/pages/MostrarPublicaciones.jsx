import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = import.meta.env.VITE_BACKEND_URL;


const MostrarPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const fetchPublicaciones = async () => {
      try {
        const response = await axios.get(`${URL}/api/publicaciones`);
        setPublicaciones(response.data);
      } catch (error) {
        console.error('Error al obtener proyectos:', error.response ? error.response.data : error.message);
      }
    };

    fetchPublicaciones();
  }, []); // El segundo argumento [] asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      <h2>Lista de Publicaciones</h2>
      <ul>
        {publicaciones.map((publicacion) => (
          <li key={publicacion.id}>
            <strong>{publicacion.titulo}</strong>  {publicacion.descripcion} {publicacion.imagen}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostrarPublicaciones;
