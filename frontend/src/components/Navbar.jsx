import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  //console.log('usuario navbar:', user);

  return (
    <nav className= "my-3 flex flex-col md:flex-row justify-between py-5 px-4 md:px-10 rounded-lg" >
      <Link to="/">
        <h1 className="text-1xl font-bold">PUBLICACIONES</h1>
      </Link>
      <ul className="flex flex-col md:flex-row gap-x-2 items-center">

        <li>
          <button
            onClick={() => navigate('/publicaciones')}
            className={`px-2 md:px-4 py-2 rounded-lg`}
          >
            Ver Las publicaciones
          </button>
        </li>
        {/* Mostrar el botón "Crear un Post" solo si el usuario está autenticado */}
        <li>
          <button
            onClick={() => navigate('/crear-publicacion')}
            className={`px-2 md:px-4 py-2 rounded-lg`}
          >
            Crear una Publicación
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
