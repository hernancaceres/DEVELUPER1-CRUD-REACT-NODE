import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_BACKEND_URL;

const CrearPublicacion = () => {
  const [publicacion, setPublicacion] = useState({
    titulo: '',
    descripcion: '', // Cambiado a un string, ajustar según sea necesario
    imagen: '',
  });

 const navigate = useNavigate();

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
      navigate('/publicaciones');

      console.log('Publicacion creada:', response.data);
    } catch (error) {
      console.error('Error al crear la publicacion:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Publicación</h2>
      <form onSubmit={handleCreatePublicacion} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="titulo" className="text-sm font-medium text-gray-600">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Título"
            value={publicacion.titulo}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="descripcion" className="text-sm font-medium text-gray-600">Descripción:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
            value={publicacion.descripcion}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="imagen" className="text-sm font-medium text-gray-600">Imagen:</label>
          <textarea
            id="imagen"
            name="imagen"
            placeholder="URL de la imagen"
            value={publicacion.imagen}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
          Crear Publicación
        </button>
      </form>
    </div>
  );
};

  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-white">
  //       <div className=" max-w-md w-full p-10 rounded-md">
  //         <h1 className="text-2xl font-bold mb-4 ">Crear Nueva Publicación</h1>

  //         <form onSubmit={handleCreatePublicacion} className="flex flex-col gap-2">
  //           <label>titulo: </label>
  //           <input type="text" name="titulo" placeholder="titulo" value={publicacion.titulo} onChange={handleInputChange} 
  //           className="w-full input-style px-1 py-2 rounded-md"/>
  //           <br />
  //           <label>Descripción: </label>
  //           <textarea name="descripcion" placeholder="Descripción" value={publicacion.descripcion} onChange={handleInputChange} 
  //           className="w-full input-style px-1 py-2 rounded-md"/>
  //           <br />
  //           <label>Url de la Imagen: </label>
  //           <textarea name="imagen" placeholder="imagen" value={publicacion.imagen} onChange={handleInputChange} 
  //           className="w-full input-style px-1 py-2 rounded-md"/>
  //           <br />
  //           <button className=" px-4 py-2 rounded-md " type="submit">Crear Publicación</button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };

  export default CrearPublicacion;
