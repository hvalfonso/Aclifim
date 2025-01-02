import { useState} from "react";
import { FiEdit, FiEye, FiTrash2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import AñadirAsociado from "./AñadirAsociado";



export default function Asociados () {
    const mockData = [
        {
        id: 1,
        Nombre: "John Doe",
        Apellido: "Valls",
        SegundoApellido: "Alfonso",
        CI: "01091268",
        Sexo: "Masculino",
        Estado: "activo",
        Telefono: "54482464",
        OtroTelefono: "54482464",
        Municipio: "Cerro",
        Direccion: "20 de mayo"
        },

        {
        id: 2,
        Nombre: "Ana Doe",
        Apellido: "Valls",
        SegundoApellido: "Alfonso",
        CI: "01091268",
        Sexo: "Femenino",
        Estado: "activo",
        Telefono: "54482464",
        OtroTelefono: "54482464",
        Municipio: "Cerro",
        Direccion: "20 de mayo"
        },

        {
        id: 3,
        Nombre: "John Doe",
        Apellido: "Valls",
        SegundoApellido: "Alfonso",
        CI: "01091268",
        Sexo: "Masculino",
        Estado: "activo",
        Telefono: "54482464",
        OtroTelefono: "54482464",
        Municipio: "Cerro",
        Direccion: "20 de mayo"
        },

        {
        id: 4,
        Nombre: "John Doe",
        Apellido: "Valls",
        SegundoApellido: "Alfonso",
        CI: "01091268",
        Sexo: "Masculino",
        Estado: "activo",
        Telefono: "54482464",
        OtroTelefono: "54482464",
        Municipio: "Cerro",
        Direccion: "20 de mayo"
        },

        {
        id: 5,
        Nombre: "John Doe",
        Apellido: "Valls",
        SegundoApellido: "Alfonso",
        CI: "01091268",
        Sexo: "Masculino",
        Estado: "activo",
        Telefono: "54482464",
        OtroTelefono: "54482464",
        Municipio: "Cerro",
        Direccion: "20 de mayo"
        },

        {
        id: 6,
        Nombre: "Fer",
        Apellido: "Bolo",
        SegundoApellido: "Alonso",
        CI: "01091268",
        Sexo: "Masculino",
        Estado: "activo",
        Telefono: "54482864",
        OtroTelefono: "54782464",
        Municipio: "Lille",
        Direccion: "22 de mayo"
        },

        {
        id: 7,
        Nombre: "Eli Doe",
        CI: "01091268",
        Apellido: "Vad",
        SegundoApellido: "Lol",
        Sexo: "Femenino",
        Estado: "inactivo",
        Telefono: "54682464",
        OtroTelefono: "51482464",
        Municipio: "NY",
        Direccion: "19 de mayo"
        },
            
    ];

    const [data, setData] = useState(mockData);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const filteredData = data.filter(item =>
        Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (!sortConfig.key) return 0;
        const direction = sortConfig.direction === "ascending" ? 1 : -1;
        return a[sortConfig.key] > b[sortConfig.key] ? direction : -direction;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

    const handleSort = (key) => {
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
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            
            <div className="flex items-center space-x-4">
                <AñadirAsociado/>
                <select
                    className="w-auto p-2 border rounded-lg focus:outline-none focus:border-blue-500"
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
            <thead>
                <tr className="bg-gray-100">
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Nombre")}>Nombre</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Apellido")}>Apellido</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Segundo Apellido")}>Segundo Apellido</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("CI")}>CI</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Telefono")}>Telefono</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Otro Telefono")}>Otro Telefono</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Sexo")}>Sexo</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Direccion")}>Direccion</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Municipio")}>Municipio</th>
                <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("Estado")}>Estado</th>
                <th className="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {currentItems.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{item.Nombre}</td>
                    <td className="px-4 py-2">{item.Apellido}</td>
                    <td className="px-4 py-2">{item.SegundoApellido}</td>
                    <td className="px-4 py-2">{item.CI}</td>
                    <td className="px-4 py-2">{item.Telefono}</td>
                    <td className="px-4 py-2">{item.OtroTelefono}</td>
                    <td className="px-4 py-2">{item.Sexo}</td>
                    <td className="px-4 py-2">{item.Direccion}</td>
                    <td className="px-4 py-2">{item.Municipio}</td>
                    <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-sm ${item.Estado === "activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                        {item.Estado}
                    </span>
                    </td>
                    <td className="px-4 py-2">
                    <div className="flex space-x-2">
                        <button
                        className="p-1 text-blue-600 hover:text-blue-800"
                        >
                        <FiEye className="w-5 h-5" />
                        </button>
                        <button
                        className="p-1 text-green-600 hover:text-green-800"
                        >
                        <FiEdit className="w-5 h-5" />
                        </button>
                        <button
                        className="p-1 text-red-600 hover:text-red-800"
                        >
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
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedData.length)} of {sortedData.length} entries
            </span>
            <div className="flex space-x-2">
            <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            >
                <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(sortedData.length / itemsPerPage)))}
                disabled={currentPage === Math.ceil(sortedData.length / itemsPerPage)}
                className="p-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50"
            >
                <FiChevronRight className="w-5 h-5" />
            </button>
            </div>
        </div>

        {showDeleteModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-sm w-full">
                <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
                <p className="mb-6">Are you sure you want to delete {}?</p>
                <div className="flex justify-end space-x-3">
                <button
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                    Cancel
                </button>
                <button
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                    Delete
                </button>
                </div>
            </div>
            </div>
        )}
    </div>   
    );
};
