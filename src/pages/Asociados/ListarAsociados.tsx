import { useEffect, useState } from "react";
import { FiEdit, FiEye, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import AñadirAsociado from "./AñadirAsociado";
import { ActualizarAsociadoProps, Asociado} from "../../types/asociados";
import { getAsociados } from "../../service/ApiEjemplo";
import ModificarAsociado from "./ModificarAsociado";
import { FaTrash } from "react-icons/fa";


export default function Asociados() {
    const [asociadoData, setAsociadoData] = useState<Asociado[]>([]);
    const [error, setError] = useState<string | null > (null)

    const [selectedAsociado, setSelectedAsociado] = useState<Asociado | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState<string>("");

    
    // Funcion para actualizar el asociado luego de editar
    const actualizarAsociado = (asociadoActualizado: ActualizarAsociadoProps) => {
            setAsociadoData((prev) => prev.map((asociado) => asociado.id === asociadoActualizado.id ? {...asociado, ...asociadoActualizado}: asociado
        )
    );
        setSelectedAsociado(null);
    };

    //para paginacion
    const page_id = currentPage
    const page_size = itemsPerPage


   // Funcion para obtener los asociados
    const fetchAsociados = async () => {
        try {
            const data = await getAsociados(page_id, page_size);
            setAsociadoData(data);
        } catch (error: any) {
            setError(error.message || "Error al cargar los asociados");
        }
    };

    // Ejecutar fetchAsociados al montar y cuando cambien currentPage o itemsPerPage
    useEffect(() => {
        fetchAsociados()
    }, [currentPage, itemsPerPage])

    // Funcion para agregar un nuevo asociado
    const handleAddUser = (nuevoAsociado: Asociado) => {
        // Actualizamos el estado agregando el nuevo asociado
        setAsociadoData ((prev) => [...prev, nuevoAsociado])
    }

    // Filtrado de busqueda 
    const filteredAsociados = asociadoData.filter((asociado) => 
        asociado.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Calculamos indices para la paginacion 
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentAsociados = filteredAsociados.slice(indexOfFirstItem, indexOfLastItem)
    const totalAsociados = filteredAsociados.length


    return (
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div className="relative w-full md:w-64 mb-4 md:mb-0">
                    <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-[20px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <AñadirAsociado  onAsociadoAdded = {handleAddUser} />
                    <select
                        className="w-auto p-2 border rounded-lg focus:outline-none focus:border-blue-500 text-[20px]"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                        <option value={10}>10 / page</option>
                        <option value={20}>20 / page</option>
                        <option value={30}>30 / page</option>
                    </select>
                </div>
            </div>

            {error && <p className="text-red-600">{error} </p>}

            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100 text-left text-lg text-[20px] ">
                            {["Nombre", "Primer Apellido", "Segundo Apellido", "CI", "Sexo", "Dirección", "Municipio", "Número Movil", "Otro Teléfono", "Activo"].map((header) => (
                                <th
                                    key={header}
                                    className="px-4 py-2"
                                >
                                    {header}
                                </th>
                            ))}
                            <th className="px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentAsociados.map((asociado) => (
                            <tr key={asociado.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-lg">{asociado.name}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Apellido1}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Apellido2}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Carnet}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Sexo ? "Masculino": "Femenino"}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Direccion}</td>
                                <td className="px-4 py-2 text-lg">{asociado.IDMunicipio}</td>
                                <td className="px-4 py-2 text-lg">{asociado.NumeroPerteneciente}</td>
                                <td className="px-4 py-2 text-lg">{asociado.NumeroT}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Activo ? "Activo": "Inactivo"}</td>
                                <td className="px-4 py-2 text-lg">
                                    <div className="flex space-x-2">
                                        <button className="p-1 text-blue-600 hover:text-blue-800">
                                            <FiEye className="w-5 h-5" />
                                        </button>
                                        {/* Botón para editar */}
                                        <button
                                            onClick={() => setSelectedAsociado(asociado)}
                                            className="p-1 text-green-600 hover:text-green-800"
                                        >
                                            <FiEdit className="w-5 h-5" />
                                        </button>
                                        <button className="p-1 text-red-600 hover:text-red-800">
                                            <FaTrash className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedAsociado && (
                <ModificarAsociado
                asociadosData={selectedAsociado}
                onUpdate={() => actualizarAsociado}
                onCancel={() => setSelectedAsociado(null)}
            />)}

            <div className="flex justify-between items-center mt-6">
                <span className="text-sm text-gray-600">
                Mostrando {indexOfFirstItem + 1} al {Math.min(indexOfLastItem, totalAsociados)} de {" "} {totalAsociados} elementos
                </span>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={indexOfLastItem >= totalAsociados}
                            className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
                        >
                        <FiChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
