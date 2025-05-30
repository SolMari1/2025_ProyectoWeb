import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Regipet from './Regipet';
import Registro from './Registro';
import Login from './Login';
import RegipetInicio from './RegipetInicio';
import Encontrados from './Encontrados';
import Perdidos from './Perdidos';
import Registrar from './Registrar';
import Adoptar from './Adoptar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Adoptar" element={<Adoptar />} />
        <Route path="/Registrar" element={<Registrar />} />
        <Route path="/Perdidos" element={<Perdidos />} />
        <Route path="/Encontrados" element={<Encontrados />} />
        <Route path="/regipetInicio" element={<RegipetInicio />} />
        <Route path="/regipet" element={<Regipet />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);