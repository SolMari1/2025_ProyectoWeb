import { useState } from 'react';
import './styles/styleIR.css';
import './styles/stylem.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [modoCorreo, setModoCorreo] = useState(false);
  const [form, setForm] = useState({
    usuario: '',
    contrasena: '',
    correo: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const alternarModo = () => {
    setModoCorreo(!modoCorreo);
  };

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (modoCorreo) {
      if (form.correo.trim() === '') {
        alert('Por favor ingresa un correo electrónico.');
        return;
      }
      alert('Sesión iniciada con correo: ' + form.correo);
    } else {
      if (form.usuario.trim() === '' || form.contrasena.trim() === '') {
        alert('Por favor llena todos los campos.');
        return;
      }
      alert('Sesión iniciada como: ' + form.usuario);
    }

    window.location.href = 'regipet';
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logoWed.jpeg" alt="Logo" />
          <h1>REGIPET</h1>
        </div>

        <nav className="nav">
          <div className="menu-item">
            <a href="#">Menu</a>
            <div className="submenu">
              <Link to="/regipetInicio">Volver al inicio</Link>
            </div>
          </div>

          <div className="menu-item">
            <a href="#">Ingreso</a>
            <div className="submenu">
              <Link to="/registro">Registro</Link>
              <Link to="/login">Login</Link>
            </div>
          </div>

        </nav>
      </header>

      <div className="registro-container">
        <h1>Iniciar Sesión</h1>

        <form onSubmit={iniciarSesion}>
          {!modoCorreo && (
            <>
              <div className="form-group">
                <label htmlFor="usuario">Usuario:</label>
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  value={form.usuario}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contrasena">Contraseña:</label>
                <input
                  type="password"
                  id="contrasena"
                  name="contrasena"
                  value={form.contrasena}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {modoCorreo && (
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                placeholder="usuario@ejemplo.com"
                required
              />
            </div>
          )}

          <div className="button-group">
            <button type="submit" className="btn-guardar">Ingresar</button>
            <button type="button" className="btn-login" onClick={alternarModo}>
              {modoCorreo ? 'Acceder por usuario' : 'Acceder por correo'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
