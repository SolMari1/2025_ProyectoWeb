import { useEffect, useRef, useState } from 'react';
import './styles/stylec.css';
import './styles/stylem.css';
import './styles/styleEF.css';
import { Link } from 'react-router-dom';

export default function Encontrados() {
  const [tarjetas, setTarjetas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const formRef = useRef(null);

  const handleToggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const archivoFoto = form.foto.files[0];

    if (!archivoFoto) {
      alert("Por favor, selecciona una imagen del perrito.");
      return;
    }

    const nuevaTarjeta = {
      id: Date.now(),
      nombre: form.nombre.value,
      sexo: form.sexo.value,
      raza: form.raza.value,
      lugar: form.lugar.value,
      telefono: form.telefono.value,
      fotoUrl: URL.createObjectURL(archivoFoto)
    };

    setTarjetas([...tarjetas, nuevaTarjeta]);
    form.reset();
    setMostrarFormulario(false);
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
              <Link to="/regipet">Volver al inicio</Link>
            </div>
          </div>

          <div className="menu-item">
            <a href="#">Busqueda</a>
            <div className="submenu">
              <Link to="/Encontrados">Encontrados</Link>
              <Link to="/Perdidos">Perdidos</Link>
            </div>
          </div>

          <div className="menu-item">
            <a href="#">Adopción</a>
            <div className="submenu">
              <Link to="/Registrar">Registrar</Link>
              <a href="#">Adoptar</a>
            </div>
          </div>

          <div className="menu-item">
            <button className="btn-cerrar" onClick={() => alert('Sesión cerrada')}>
              <Link to="/regipetInicio">Cerrar sesión</Link>
            </button>
          </div>
        </nav>
      </header>

      <main className="contenedor-encontrados">
        <h1 className="titulo-encontrados">Reencuéntrate con tu peludito 🐾</h1>

        <div className="galeria" id="galeria">
          {/* Tarjetas fijas + dinámicas */}
          <div className="card">
            <img src="logoWed.jpeg" alt="Max" />
            <div className="info-perro">
              <p><strong>Nombre:</strong> Max</p>
              <p><strong>Sexo:</strong> Macho</p>
              <p><strong>Raza:</strong> Labrador</p>
              <p><strong>Encontrado en:</strong> Parque Simón Bolívar</p>
              <p><strong>Teléfono:</strong> 3001234567</p>
            </div>
          </div>
          <div className="card">
            <img src="logoWed.jpeg" alt="Max" />
            <div className="info-perro">
              <p><strong>Nombre:</strong> Rex</p>
              <p><strong>Sexo:</strong> Macho</p>
              <p><strong>Raza:</strong> Golden Retriver</p>
              <p><strong>Encontrado en:</strong> Parque Turbay</p>
              <p><strong>Teléfono:</strong> 3001234982</p>
            </div>
          </div>

          {tarjetas.map((tarjeta) => (
            <div key={tarjeta.id} className="card">
              <img src={tarjeta.fotoUrl} alt={tarjeta.nombre} />
              <div className="info-perro">
                <p><strong>Nombre:</strong> {tarjeta.nombre}</p>
                <p><strong>Sexo:</strong> {tarjeta.sexo}</p>
                <p><strong>Raza:</strong> {tarjeta.raza}</p>
                <p><strong>Encontrado en:</strong> {tarjeta.lugar}</p>
                <p><strong>Teléfono:</strong> {tarjeta.telefono}</p>
              </div>
            </div>
          ))}
        </div>

        <button id="btnMostrarFormulario" onClick={handleToggleFormulario}>
          ¿Encontraste un perrito? Haz clic aquí para registrarlo
        </button>

        {mostrarFormulario && (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="formulario-perro-desplegable"
          >
            <label htmlFor="foto">Foto del perrito:</label>
            <input type="file" id="foto" name="foto" accept="image/*" required />

            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" name="sexo" required>
              <option value="">Seleccionar</option>
              <option value="Macho">Macho</option>
              <option value="Hembra">Hembra</option>
            </select>

            <label htmlFor="raza">Raza:</label>
            <input type="text" id="raza" name="raza" required />

            <label htmlFor="lugar">Lugar donde fue encontrado:</label>
            <input type="text" id="lugar" name="lugar" required />

            <label htmlFor="telefono">Teléfono de contacto:</label>
            <input type="tel" id="telefono" name="telefono" required />

            <button type="submit">Registrar perrito encontrado</button>
          </form>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 REGIPET. Proyecto ProWed.</p>
        <p>Contáctenos: ###########</p>
      </footer>
    </>
  );
}
