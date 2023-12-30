import CrearPublicacion from "./pages/CrearPublicacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MostrarPublicaciones from "./pages/MostrarPublicaciones";
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/crear-publicacion" element={< CrearPublicacion />} />
        <Route path="/publicaciones" element={< MostrarPublicaciones />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
