import { useState } from 'react';
import ListarDatosSociales from './ListarDatosSociales';
import AñadirDatosSociales from './AñadirDatosSociales';
import EditarDatosSociales from './EditarDatosSociales';
import EliminarDatosSociales from './Eliminar';
import { Link, BrowserRouter as Router } from 'react-router-dom';

import { FiDelete, FiEdit2 } from 'react-icons/fi';



// Rutas a las actividades y home
const Navbar = () => {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
            <Link to="/deportiva" className="text-white hover:text-gray-300">Actividad Deportiva</Link>
            <Link to="/cultural" className="text-white hover:text-gray-300">Actividad Cultural</Link>
            <Link to="/educativa" className="text-white hover:text-gray-300">Actividad Educativa</Link>
            <Link to="/asociado" className="text-white hover:text-gray-300">Asociado</Link>
          </div>
        </div>
      </nav>
    );
  };

const GestionDatosSociales = ({ idAsociado }: { idAsociado: number }) => {
    const [accion, setAccion] = useState<string>('listar');

    return (
        <Router>
            <div>
                <Navbar />
                <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
                    <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Datos Sociales</h2>
                    <p className="text-sm text-gray-600">Por favor completar los datos sociales</p>
                    </div>

                    
                    {/* Botones */}
                    <div className="flex justify-between">
                    <button onClick={() => setAccion('listar')}>Ver Datos</button>
                        <button onClick={() => setAccion('añadir')} className="bg-emerald-600 text-white px-4 py-2 rounded-md">Añadir</button>
                        <button onClick={() => setAccion('editar')} className="bg-sky-600 text-white px-4 py-2 rounded-md"><FiEdit2 /> Editar</button>
                        <button onClick={() => setAccion('eliminar')} className="bg-red-600 text-white px-4 py-2 rounded-md"> <FiDelete />Eliminar</button>

                    {accion === 'listar' && <ListarDatosSociales idAsociado={idAsociado} />}
                    {accion === 'añadir' && <AñadirDatosSociales idAsociado={idAsociado} />}
                    {accion === 'editar' && <EditarDatosSociales idAsociado={idAsociado} />}
                    {accion === 'eliminar' && <EliminarDatosSociales idAsociado={idAsociado} />}
                </div>
                </div>
                </div>
            </div>
        </Router>
    );
};

export default GestionDatosSociales;
