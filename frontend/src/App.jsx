import CrearPublicacion from "./pages/CrearPublicacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crear-publicacion" element={< CrearPublicacion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
