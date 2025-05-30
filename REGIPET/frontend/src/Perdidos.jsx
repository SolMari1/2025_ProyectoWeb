import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles/stylec.css';
import './styles/stylem.css';
import './styles/styleEF.css';

export default function Perdidos() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [perros, setPerros] = useState([]);
  const formRef = useRef(null);

  const handleMostrarFormulario = () => {
    setMostrarFormulario(prev => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const nombre = formData.get("nombre");
    const sexo = formData.get("sexo");
    const raza = formData.get("raza");
    const descripcion = formData.get("Descripcion");
    const lugar = formData.get("lugar");
    const telefono = formData.get("telefono");
    const archivoFoto = formData.get("foto");

    if (!archivoFoto) {
      alert("Por favor, selecciona una imagen del perrito.");
      return;
    }

    const nuevaMascota = {
      id: Date.now(),
      nombre,
      sexo,
      raza,
      descripcion,
      lugar,
      telefono,
      imagen: URL.createObjectURL(archivoFoto),
    };

    setPerros([...perros, nuevaMascota]);
    formRef.current.reset();
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
        <h1 className="titulo-encontrados">¿Los has visto? 🐾</h1>

        <div className="galeria">
          {[1, 2, 3].map((i) => (
            <div className="card" key={i}>
              <img src="logoWed.jpeg" alt={`Perro ${i}`} />
              <div className="info-perro">
                <p><strong>Nombre:</strong> Max</p>
                <p><strong>Sexo:</strong> Macho</p>
                <p><strong>Raza:</strong> Labrador</p>
                <p><strong>Descripción:</strong> Pelo café, etc...</p>
                <p><strong>Última vez visto🐾:</strong> Parque</p>
                <p><strong>Contáctenos:</strong> 3001234567</p>
              </div>
            </div>
          ))}

          {perros.map((perro) => (
            <div className="card" key={perro.id}>
              <img src={perro.imagen} alt={perro.nombre} />
              <div className="info-perro">
                <p><strong>Nombre:</strong> {perro.nombre}</p>
                <p><strong>Sexo:</strong> {perro.sexo}</p>
                <p><strong>Raza:</strong> {perro.raza}</p>
                <p><strong>Descripción:</strong> {perro.descripcion}</p>
                <p><strong>Última vez visto🐾:</strong> {perro.lugar}</p>
                <p><strong>Contáctenos:</strong> {perro.telefono}</p>
              </div>
            </div>
          ))}
        </div>

        <button id="btnMostrarFormulario" onClick={handleMostrarFormulario}>
          ¿Buscas a tu perrito? Permite que más te ayuden
        </button>

        {mostrarFormulario && (
          <form className="formulario-perro mostrar" ref={formRef} onSubmit={handleSubmit}>
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

            <label htmlFor="Descripcion">Descripción:</label>
            <input type="text" id="Descripcion" name="Descripcion" required />

            <label htmlFor="lugar">Última vez visto🐾:</label>
            <input type="text" id="lugar" name="lugar" required />

            <label htmlFor="telefono">Contáctenos:</label>
            <input type="tel" id="telefono" name="telefono" required />

            <button type="submit">Publicar Mascota</button>
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