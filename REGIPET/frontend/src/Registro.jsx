import { useState } from 'react';
import './styles/styleIR.css';
import './styles/stylem.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    usuario: "",
    contrasena: "",
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    

    try {
      // Validación básica
      if (!form.correo.includes('@')) {
        throw new Error('Ingrese un correo electrónico válido');
      }
      if (form.contrasena.length < 4) {
        throw new Error('La contraseña debe tener al menos 5 caracteres');
      }

      const res = await fetch("http://localhost:8000/api/registro/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: form.usuario,  // Django usa 'username', no 'usuario'
        email: form.correo,
        password: form.contrasena,
        first_name: form.nombre,  // 'first_name' en lugar de 'nombre'
        telefono: form.telefono,
      }),
      credentials: 'include',
      });

     
      // Manejo seguro de la respuesta
    const text = await res.text();
    const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(data.mensaje || 'Error al registrar usuario');
      }

      alert("Usuario registrado exitosamente");
      navigate('/login'); // Redirigir al login después de registro exitoso
      
    } catch (err) {
      setError(err.message);
      console.error('Error en registro:', err);
    } finally {
      setLoading(false);
    }
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
        <h1>Regístrate</h1>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Ej: Dayana, etc"
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico:</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              placeholder="usuario@ejemplo.com"
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Ej: 3458942105"
              disabled={loading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="usuario">Nombre de usuario:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={form.usuario}
              onChange={handleChange}
              disabled={loading}
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
              placeholder="Mínimo 8 caracteres"
              disabled={loading}
              required
            />
          </div>

          <div className="button-group">
            <button 
              type="submit" 
              className="btn-guardar"
              disabled={loading}
            >
              {loading ? 'Registrando...' : 'Guardar'}
            </button>
            <button
              type="button"
              className="btn-login"
              onClick={() => navigate('/login')}
              disabled={loading}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
