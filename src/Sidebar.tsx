import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {  FaUserPlus, FaHome, FaUserEdit } from "react-icons/fa";
import "./App.css";
import Asociados from "./pages/Asociados/Asociados";
import User from "./pages/User/User";
import { FaPerson } from "react-icons/fa6";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter} from "react-icons/fa";


function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">ACLIFIM</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-200 flex items-center gap-2"><FaHome size={20}/>Inicio</Link>
          <Link to="/asociado" className="text-white hover:text-blue-200 flex items-center gap-2"><FaPerson size={20} />Asociados</Link>
          <Link to="/user" className="text-white hover:text-blue-200 flex items-center gap-2"><FaUserEdit size={20} />Editar Usuario</Link>
          <Link to="/auth" className="text-white hover:text-blue-200 flex items-center gap-2"><FaUserPlus size={20} />Login/Registrarse</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-white p-2 hover:bg-blue-700">Home</Link>
          <Link to="/companies" className="block text-white p-2 hover:bg-blue-700">Companies</Link>
          <Link to="/events" className="block text-white p-2 hover:bg-blue-700">Events</Link>
          <Link to="/auth" className="block text-white p-2 hover:bg-blue-700">Login/Register</Link>
        </div>
      )}
    </nav>
  );
};

const HomePage = () => {
  const currentYear = new Date().getFullYear();

  const items = [
    {
      id: 1,
      title: "Marcha del 1ero de Mayo",
      description: "En el contexto del Primero de Mayo, Día Internacional de los Trabajadores, la ACLIFIM suele desempeñar un papel destacado en las actividades conmemorativas. Sus integrantes a menudo participan en los desfiles y celebraciones, destacando su capacidad de superación y su compromiso con la construcción de una sociedad inclusiva. Además, es un momento para visibilizar sus demandas, logros y contribuciones al desarrollo social, así como para reafirmar la importancia de la igualdad de derechos y oportunidades para todos los ciudadanos.",
      image: "https://th.bing.com/th/id/OIP.gwUvF7-uk2bVIyWgi2w3QAAAAA?rs=1&pid=ImgDetMain",
  },
  
  {
      id: 2,
      title: "Aclifim en Granma Festival de teatro y danza",
      description: "El amor a la vida  hizo acto de presencia, hoy, en la X edición del Festival provincial de teatro y danza de la Asociación Cubana de Limitados Físico- Motores (Aclifim), celebrado en la casa de la cultura 20 de Octubre, de Bayamo. Los 44 participantes, de los municipios de Bayamo, Yara, Manzanillo y Niquero derrocharon talento y alegría en el escenario.",
      image: "https://th.bing.com/th/id/R.1a829b8e74ccb34619c92119d4aa8875?rik=jSn7qCrqN5eD4Q&riu=http%3a%2f%2flademajagua.cu%2fwp-content%2fuploads%2f2018%2f10%2fFestival-de-la-Aclifim-en-Granma.jpg&ehk=GUQ1BankeXZKm0tdkjFiysP3Mk8RcpJEXCWp38GEwHk%3d&risl=&pid=ImgRaw&r=0",
  },
  
  {
      id: 3,
      title: "Storyboard Animation",
      description: "Short film animation sequence",
      image: "https://th.bing.com/th/id/OIP.FY-pumqPuuXVrQitfdO94wHaDo?w=708&h=348&rs=1&pid=ImgDetMain",
  },

  {
    id: 4,
    title: "Asamblea de Balance Anual ACLIFIM en Cienfuegos",
    description: "La ACLIFIM en Cienfuegos realizó su Asamblea de Balance anual, evaluando su gestión en 2022. De los 16 acuerdos planteados, siete fueron cumplidos y nueve, parcialmente. Las principales problemáticas destacadas incluyen el mal estado de las sedes municipales, el incumplimiento en la entrega de sillas de ruedas y la necesidad de integrar más a los jóvenes con discapacidad en la sociedad. También se subrayó la importancia de superar el asistencialismo y garantizar derechos plenos a las personas con discapacidades. El evento contó con la participación de autoridades provinciales, organismos y representantes de sus 3,751 afiliados.",
    image: "https://www.rcm.cu/wp-content/uploads/2023/02/331307134_3391593791112630_2715139654442349268_n.jpg",
},

{
    id: 5,
    title: "Asamblea de Balance Anual ACLIFIM en Cienfuegos",
    description: "La ACLIFIM en Cienfuegos realizó su Asamblea de Balance anual, evaluando su gestión en 2022. De los 16 acuerdos planteados, siete fueron cumplidos y nueve, parcialmente. Las principales problemáticas destacadas incluyen el mal estado de las sedes municipales, el incumplimiento en la entrega de sillas de ruedas y la necesidad de integrar más a los jóvenes con discapacidad en la sociedad. También se subrayó la importancia de superar el asistencialismo y garantizar derechos plenos a las personas con discapacidades. El evento contó con la participación de autoridades provinciales, organismos y representantes de sus 3,751 afiliados.",
    image: "https://www.rcm.cu/wp-content/uploads/2023/02/331307134_3391593791112630_2715139654442349268_n.jpg",
},

{
    id: 6,
    title: "Asamblea de Balance Anual ACLIFIM en Cienfuegos",
    description: "La ACLIFIM en Cienfuegos realizó su Asamblea de Balance anual, evaluando su gestión en 2022. De los 16 acuerdos planteados, siete fueron cumplidos y nueve, parcialmente. Las principales problemáticas destacadas incluyen el mal estado de las sedes municipales, el incumplimiento en la entrega de sillas de ruedas y la necesidad de integrar más a los jóvenes con discapacidad en la sociedad. También se subrayó la importancia de superar el asistencialismo y garantizar derechos plenos a las personas con discapacidades. El evento contó con la participación de autoridades provinciales, organismos y representantes de sus 3,751 afiliados.",
    image: "https://th.bing.com/th/id/R.55c2d459e8dddfa858885c8a1260fd42?rik=w0kb6yBeVtK6Ag&riu=http%3a%2f%2flademajagua.cu%2fwp-content%2fuploads%2f2017%2f02%2fAclifim-pesas-Granma.jpg&ehk=hFvIQm5EVj6Sw6uqw0n19hLfwT3OubB5muuMlXItCG4%3d&risl=&pid=ImgRaw&r=0",
},

  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a la ACLFIM</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          La asociacion cubana de discapacitados fisicos y motores de Cuba.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">TODOS SOMOS IGUALES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab";
                }}
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section >
                <div >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Sobre nosotros</h2>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Asociación Cubana de Personas con Discapacidad Físico–Motora (ACLIFIM).
                        Se fundó con el nombre de Asociación Cubana de Limitados Físico Motores y actualmente, 
                        se denomina Asociación Cubana de Personas con Discapacidad Físico–Motora. 
                        Es una asociación sin fines de lucro, con personalidad jurídica propia; 
                        fundada el 14 de marzo de 1980, por un grupo de personas con discapacidad físico - motora 
                        y está reconocida oficialmente como Asociación por el Ministerio de Justicia de la República de Cuba.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Su lema es <span className="font-bold text-gray-800">"Por la Diversidad, la Inclusión y la Participación Efectiva."</span> 
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                        Las limitaciones físico-motoras constituyen una de las principales discapacidades que afectan a la población mundial. 
                        En Cuba el estudio psicosocial de las personas con discapacidad, realizado en todo el territorio nacional en el año 2003,
                        por orientación del Comandante en Jefe Fidel Castro, 
                        reveló que las limitaciones físico-motoras ocupan el segundo lugar entre todas las discapacidades, 
                        superada solamente por los portadores deficientes intelectuales (retraso mental).
                        </p>
                    </div>
                </div>
        </section>

        <footer className="bg-gray-50 text-gray-700">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
            <a href="/" className="mb-4">
            <img
                src="https://th.bing.com/th/id/OIP.A-h7FhzrzgUzn75V4NvKngAAAA?rs=1&pid=ImgDetMain"
                alt="Company Logo"
                className="h-16 w-auto"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/120x48?text=Logo";
                target.alt = "Fallback";
                }}
            />
            </a>
            <p className="text-sm text-center">Asociacion Cubana de Limitados <br /> Fisicos y Motores</p>
        </div>

        {/* Contacto de Informacion */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
            <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-600" />
                <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">
                +53 (544) 82-464
                </a>
            </div>
            <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-600" />
                <a href="mailto:info@company.com" className="hover:text-blue-600 transition-colors">
                Aclifim@gmail.com
                </a>
            </div>
            </div>
        </div>

        {/* Direccion */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Sede Principal</h3>
            <div className="flex items-start">
            <FaMapMarkerAlt className="mr-2 text-blue-600 mt-1" />
            <div>
                <p className="mb-1">Calle 6 #106 e/ 1ra y 3ra</p>
                <p>Playa, La Habana, Cuba</p>
                <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                >
                Get Directions
                </a>
            </div>
            </div>
        </div>

        {/* Redes sociales */}
        <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
            >
                <FaFacebook size={24} />
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
            >
                <FaTwitter size={24} />
            </a>
            </div>
        </div>
        </div>

        {/* Copyright*/}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
        <p className="text-sm">
            © {currentYear} Company Name. All rights reserved.
        </p>
        </div>
    </div>
    </footer>


    </div>
  );
};

const Sidebar = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/asociado" element={<Asociados />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Sidebar;
