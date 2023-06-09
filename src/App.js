import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import NavBar from "./Components/NavBar";
import Acerca from "./pages/Acerca";
import Home from "./pages/Home";
import Actividades from "./pages/Actividades";
import Pruebas from "./pruebas/Pruebas";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Actividades" element={<Actividades />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Contacto" element={<Contacto />}></Route>
          <Route path="/Acerca" element={<Acerca />}></Route>
          <Route path="/Login" element={<Pruebas />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
