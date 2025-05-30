import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles/stylec.css';
import './styles/stylem.css';
import './styles/styleEF.css';

export default function Registrar() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mascotas, setMascotas] = useState([]);
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
    const descripcion = formData.get("descripcion");
    const edad = formData.get("edad");
    const contacto = formData.get("contacto");
    const archivoFoto = formData.get("foto");

    if (!archivoFoto) {
      alert("Por favor, selecciona una imagen de la mascota.");
      return;
    }

    const nuevaMascota = {
      id: Date.now(),
      nombre,
      sexo,
      raza,
      descripcion,
      edad,
      contacto,
      imagen: URL.createObjectURL(archivoFoto),
    };

    setMascotas([...mascotas, nuevaMascota]);
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
            <a href="#">Búsqueda</a>
            <div className="submenu">
              <Link to="/Encontrados">Encontrados</Link>
              <Link to="/Perdidos">Perdidos</Link>
            </div>
          </div>

          <div className="menu-item">
            <a href="#">Adopción</a>
            <div className="submenu">
              <Link to="/Registrar">Registrar</Link>
              <Link to="/Adoptar">Adoptar</Link>
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
        <h1 className="titulo-encontrados">¿Quieres dar en adopción a tu mascota? 🐾</h1>

        <div className="galeria" id="galeria">
          <div className="card">
            <img src="logoWed.jpeg" alt="Max" />
            <div className="info-perro">
              <p><strong>Nombre:</strong> Luna</p>
              <p><strong>Sexo:</strong> Hembra</p>
              <p><strong>Raza:</strong> Beagule</p>
              <p><strong>Descripcion:</strong> Juguetona, cariñosa y sociable</p>
              <p><strong>Edad:</strong> 2 años</p>
              <p><strong>Contacto:</strong> 3208765920</p>
            </div>
          </div>
          <div className="card">
            <img src="logoWed.jpeg" alt="Max" />
            <div className="info-perro">
              <p><strong>Nombre:</strong> Manolo</p>
              <p><strong>Sexo:</strong> Macho</p>
              <p><strong>Raza:</strong> Pastor aleman</p>
              <p><strong>Descripcion:</strong> Territorial, ansioso y amigable</p>
              <p><strong>Edad:</strong> 4 años</p>
              <p><strong>Contacto:</strong> 3008274501</p>
            </div>
          </div>
          {mascotas.map((mascota) => (
            <div className="card" key={mascota.id}>
              <img src={mascota.imagen} alt={mascota.nombre} />
              <div className="info-perro">
                <p><strong>Nombre:</strong> {mascota.nombre}</p>
                <p><strong>Sexo:</strong> {mascota.sexo}</p>
                <p><strong>Raza:</strong> {mascota.raza}</p>
                <p><strong>Descripción:</strong> {mascota.descripcion}</p>
                <p><strong>Edad:</strong> {mascota.edad}</p>
                <p><strong>Contacto:</strong> {mascota.contacto}</p>
              </div>
            </div>
          ))}
        </div>

        <button id="btnMostrarFormulario" onClick={handleMostrarFormulario}>
          Registrar mascota en adopción
        </button>

        {mostrarFormulario && (
          <form className="formulario-perro mostrar" ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="foto">Foto de la mascota:</label>
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

            <label htmlFor="descripcion">Descripción:</label>
            <input type="text" id="descripcion" name="descripcion" required />

            <label htmlFor="edad">Edad:</label>
            <input type="text" id="edad" name="edad" required />

            <label htmlFor="contacto">Contacto:</label>
            <input type="tel" id="contacto" name="contacto" required />

            <button type="submit">Publicar para adopción</button>
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
