import { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

const CrearPublicacion = () => {
  const [publicacion, setPublicacion] = useState({
    titulo: '',
    descripcion: '', // Cambiado a un string, ajustar según sea necesario
    imagen: '',
  });

  // const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPublicacion({ ...publicacion, [name]: value });
  };

  const handleCreatePublicacion = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${URL}/api/publicaciones`, 
        { ...publicacion },
        {
          withCredentials: true,
        }
      );

      // Lógica adicional después de crear el proyecto (redirección, actualización, etc.)
      // navigate('/posts');

      console.log('Publicacion creada:', response.data);
    } catch (error) {
      console.error('Error al crear la publicacion:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h2>Crear Nueva Publicación</h2>
      <form onSubmit={handleCreatePublicacion}>
        <label>titulo: </label>
        <input type="text" name="titulo" placeholder="titulo" value={publicacion.titulo} onChange={handleInputChange} />
        <br />
        <label>Descripción: </label>
        <textarea name="descripcion" placeholder="Descripción" value={publicacion.descripcion} onChange={handleInputChange} />
        <br />
        <label>Descripción: </label>
        <textarea name="imagen" placeholder="imagen" value={publicacion.imagen} onChange={handleInputChange} />
        <br />
        <button type="submit">Crear Publicación</button>
      </form>
    </div>
  );
};

export default CrearPublicacion;
