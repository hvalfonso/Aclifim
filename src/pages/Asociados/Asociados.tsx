import { useState, useEffect } from "react";
import { FiEdit, FiEye, FiTrash2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import AñadirAsociado from "./AñadirAsociado";
import { AsociadoProps } from "../../types/asociados";
import { getAsociado } from "../../service/ApiEjemplo";

export default function Asociados() {
    const [asociados, setAsociado] = useState<AsociadoProps[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortConfig, setSortConfig] = useState<{
        key: keyof AsociadoProps | "";
        direction: "ascending" | "descending";
    }>({
        key: "",
        direction: "ascending",
    });

    // Cargar usuarios desde la API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAsociado();
                setAsociado(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const handleAddUser = (newAsociado: AsociadoProps) => {
        setAsociado((prevAsociado) => [...prevAsociado, newAsociado]);
    };


    // Filtrar usuarios por término de búsqueda
    const filteredData = asociados.filter((asociado) => {
        return Object.keys(asociado).some((key) => {
            const value = asociado[key as keyof AsociadoProps];

            if (typeof value === "object" && value !== null) {
                // Filtrar propiedades anidadas como 'address'
                return Object.values(value).some((nestedValue) => {
                    if (typeof nestedValue === "string") {
                        return nestedValue.toLowerCase().includes(searchTerm.toLowerCase());
                    }
                    return false;
                });
            }

            if (typeof value === "string" || typeof value === "number") {
                return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
            }

            return false;
        });
    });

    // Ordenar datos
    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig.key) return 0;
        const direction = sortConfig.direction === "ascending" ? 1 : -1;
        const key = sortConfig.key as keyof AsociadoProps;
        if (a[key] < b[key]) return -1 * direction;
        if (a[key] > b[key]) return 1 * direction;
        return 0;
    });

    // Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    // Cambiar el estado de ordenamiento
    const handleSort = (key: keyof AsociadoProps) => {
        const direction = sortConfig.key === key && sortConfig.direction === "ascending" ? "descending" : "ascending";
        setSortConfig({ key, direction });
    };

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
                        <option value={5}>5 / page</option>
                        <option value={10}>10 / page</option>
                        <option value={15}>15 / page</option>
                    </select>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="">
                        <tr className="bg-gray-100 text-left text-lg text-[20px] ">
                            {["Nombre", "Primer Apellido", "Segundo Apellido", "CI", "Sexo", "Dirección", "Municipio", "Número Movil", "Otro Teléfono", "Activo"].map((header, index) => (
                                <th
                                    key={index}
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => handleSort(header.toLowerCase() as keyof AsociadoProps)}
                                >
                                    {header}
                                </th>
                            ))}
                            <th className="px-4 py-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((asociado, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-lg">{asociado.name}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Apellido1}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Apellido2}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Carnet}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Sexo}</td>
                                <td className="px-4 py-2 text-lg">{asociado.Direccion}</td>
                                <td className="px-4 py-2 text-lg">{asociado.IDMunicipio}</td>
                                <td className="px-4 py-2 text-lg">{asociado.NumeroPerteneciente}</td>
                                <td className="px-4 py-2 text-lg">{asociado.NumeroT}</td>
                                <td className="px-4 py-2 text-lg">
                                    <div className="flex space-x-2">
                                        <button className="p-1 text-blue-600 hover:text-blue-800">
                                            <FiEye className="w-5 h-5" />
                                        </button>
                                        <button className="p-1 text-green-600 hover:text-green-800">
                                            <FiEdit className="w-5 h-5" />
                                        </button>
                                        <button className="p-1 text-red-600 hover:text-red-800">
                                            <FiTrash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6">
                <span className="text-sm text-gray-600">
                    Mostrando {indexOfFirstItem + 1} al {Math.min(indexOfLastItem, sortedData.length)} de {sortedData.length} elementos
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
                        onClick={() =>
                            setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(sortedData.length / itemsPerPage)))
                        }
                        disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}
                        className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
                    >
                        <FiChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
