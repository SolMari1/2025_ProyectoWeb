import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/stylec.css';
import './styles/stylem.css';
import './styles/styleEF.css'; // Utilizamos los mismos estilos para mantener coherencia visual

export default function Adoptar() {
  const [mascotas] = useState([
    {
      id: 1,
      nombre: 'Luna',
      sexo: 'Hembra',
      raza: 'Golden Retriever',
      descripcion: 'Muy cariñosa y juguetona.',
      edad: '2 años',
      contacto: '3001234567',
      imagen: 'logoWed.jpeg',
    },
    {
      id: 2,
      nombre: 'Toby',
      sexo: 'Macho',
      raza: 'Beagle',
      descripcion: 'Le encanta correr y es muy obediente.',
      edad: '3 años',
      contacto: '3012345678',
      imagen: 'logoWed.jpeg',
    },
  ]);

  const handleAdoptar = (nombre) => {
    alert(`¡Gracias por tu interés en adoptar a ${nombre}! Pronto te contactaremos.`);
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
        <h1 className="titulo-encontrados">Mascotas que buscan un hogar 🏠</h1>

        <div className="galeria">
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
                <button className="btn-adoptar" onClick={() => handleAdoptar(mascota.nombre)}>
                  Quiero Adoptar
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 REGIPET. Proyecto ProWed.</p>
        <p>Contáctenos: ###########</p>
      </footer>
    </>
  );
}
