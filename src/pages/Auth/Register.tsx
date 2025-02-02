import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaUser, FaEnvelope, FaLock, FaUpload, FaMapMarkerAlt } from "react-icons/fa";
import axiosInstance from "../../service/axiosEjemplo"; // Asegúrate de importar la instancia de Axios


interface FormData {
    name: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string; // Nuevo campo
    dateOfBirth: string;
    profilePicture: File | null;
    municipio: string; // Nuevo campo
    provincia: string; // Nuevo campo
}

const provinciasYMunicipios: Record<string, string[]> = {
    "Pinar del Río": ["Pinar del Río", "Viñales", "Consolación del Sur"],
    "Artemisa": ["Artemisa", "Bauta", "San Antonio de los Baños"],
    "La Habana": ["Centro Habana", "Playa", "Marianao"],
    "Matanzas": ["Matanzas", "Cárdenas", "Varadero"],
    "Villa Clara": ["Santa Clara", "Caibarién", "Placetas"],
    "Cienfuegos": ["Cienfuegos", "Palmira", "Cruces"],
    "Sancti Spíritus": ["Sancti Spíritus", "Trinidad", "Jatibonico"],
    "Ciego de Ávila": ["Ciego de Ávila", "Morón", "Venezuela"],
    "Camagüey": ["Camagüey", "Nuevitas", "Florida"],
    "Las Tunas": ["Las Tunas", "Puerto Padre", "Amancio"],
    "Holguín": ["Holguín", "Gibara", "Moa"],
    "Granma": ["Bayamo", "Manzanillo", "Jiguaní"],
    "Santiago de Cuba": ["Santiago de Cuba", "Palma Soriano", "Contramaestre"],
    "Guantánamo": ["Guantánamo", "Baracoa", "Maisí"],
    "Isla de la Juventud": ["Nueva Gerona"],
};

const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "", // Nuevo campo
        dateOfBirth: "",
        profilePicture: null,
        municipio: "", // Nuevo campo
        provincia: "", // Nuevo campo
    });
    const [municipios, setMunicipios] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [preview, setPreview] = useState<string | null>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

            // Si se selecciona una provincia, actualizamos los municipios
            if (name === "provincia") {
                const nuevosMunicipios = provinciasYMunicipios[value] || [];
                setFormData((prev) => ({
                    ...prev,
                    provincia: value,
                    municipio: "", // Resetea el municipio si cambia la provincia
                }));
                setMunicipios(nuevosMunicipios);
            }
            

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                profilePicture: file,
            }));
            setPreview(URL.createObjectURL(file));
        }
    };

const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }
    setLoading(true);
    
    try {
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value instanceof File) {
                formDataToSend.append(key, value);
            } else {
                formDataToSend.append(key, value as string);
            }
        });

        const response = await axiosInstance.post("/register", formDataToSend);
        console.log("Registro exitoso:", response.data);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
        console.error("Error en el registro:", error);
    } finally {
        setLoading(false);
    }
};


    return (
        <div className="min-h-screen py-12 px-4 sm:px-16 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="max-w-md w-full mx-auto space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl transform transition-all hover:scale-[1.01]">
                <div>
                    <h2 className="mt-6 text-center text-3xl animate-fade-in text-white font-bold">
                        Crea tu perfil
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <div className="group">
                            <label htmlFor="name" className="sr-only">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaUser />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    aria-label="Full Name"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="email" className="sr-only">
                                Correo
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaEnvelope />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    aria-label="Email address"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="username" className="sr-only">
                                Nombre de usuario
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaUser />
                                </div>
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    aria-label="Nombre de usuario"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="password" className="sr-only">
                                Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaLock />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Contraseña"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    aria-label="Password"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="confirmPassword" className="sr-only">
                                Confirmar Contraseña
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaLock />
                                </div>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Confirmar Contraseña"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    aria-label="Confirm Password"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="provincia" className="sr-only">
                                Provincia
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaMapMarkerAlt />
                                </div>
                                <select
                                    id="provincia"
                                    name="provincia"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    value={formData.provincia}
                                    aria-label="Provincia"
                                >
                                    <option value="">Selecciona una provincia</option>
                                    {Object.keys(provinciasYMunicipios).map((provincia) => (
                                        <option key={provincia} value={provincia}>
                                            {provincia}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="municipio" className="sr-only">
                                Municipio
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaMapMarkerAlt />
                                </div>
                                <select
                                    id="municipio"
                                    name="municipio"
                                    required
                                    className="appearance-none rounded-lg relative block w-full px-3 py-3 pl-10 border-gray-600 placeholder-gray-500 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    value={formData.municipio}
                                    aria-label="Municipio"
                                    disabled={!municipios.length}
                                >
                                    <option value="">Selecciona un municipio</option>
                                    {municipios.map((municipio) => (
                                        <option key={municipio} value={municipio}>
                                            {municipio}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="group">
                            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700">
                                Foto de perfil
                            </label>
                            <div className="mt-1 flex items-center space-x-4">
                                {preview && (
                                    <div className="w-16 h-16 rounded-full overflow-hidden">
                                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <label className="relative cursor-pointer bg-gray-700 rounded-md font-medium text-blue-950 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-gray-700  focus:ring-indigo-500 focus:border-transparent transition-all duration-300">
                                        <FaUpload className="mr-2" />
                                        Insectar foto
                                    </span>
                                    <input
                                        id="profilePicture"
                                        name="profilePicture"
                                        type="file"
                                        className="sr-only"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        aria-label="Upload profile picture"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                "Crear Cuenta"
                            )}
                        </button>
                    </div>

                    {success && (
                        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-down">
                            Su cuenta ha sido creada exitosamente!
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Register;
