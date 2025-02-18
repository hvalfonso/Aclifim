// src/pages/Auth/Register.tsx
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // <-- Importar useNavigate
import axiosInstance from "../../service/axiosInstances";
import { getProvincias, getMunicipios } from "../../service/APIGeneral";
import { Provincia, Municipio } from "../../types/general";

interface FormData {
  name: string;
  email: string;
  username: string;
  password: string;
  password2: string;
  municipio: number;
  provincia: number;
}

const Register: React.FC = () => {
  const navigate = useNavigate(); // <--- Hook para redirigir
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
    provincia: 0,
    municipio: 0,
  });

  const [provincias, setProvincias] = useState<Provincia[]>([]);
  const [municipios, setMunicipios] = useState<Municipio[]>([]);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Cargar todas las provincias
  useEffect(() => {
    const fetchProvincias = async () => {
      try {
        const res = await getProvincias(); 
        if (res && Array.isArray(res.data)) {
          setProvincias(res.data);
        } else {
          setError("No se pudieron obtener las provincias");
        }
      } catch (err: any) {
        console.error(err);
        setError("Error al cargar provincias.");
      }
    };
    fetchProvincias();
  }, []);

  // Cargar municipios según la provincia
  useEffect(() => {
    const fetchMunicipiosByProv = async () => {
      if (formData.provincia > 0) {
        try {
          const res = await getMunicipios(formData.provincia);
          if (res && Array.isArray(res.data)) {
            setMunicipios(res.data);
          } else {
            setMunicipios([]);
            setError("La respuesta de municipios no es un array");
          }
        } catch (err: any) {
          console.error(err);
          setError("Error al cargar municipios.");
          setMunicipios([]);
        }
      } else {
        setMunicipios([]);
      }
    };
    fetchMunicipiosByProv();
  }, [formData.provincia]);

  // Manejador de inputs
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Si es provincia/municipio, convertir a número
    if (name === "provincia" || name === "municipio") {
      setFormData((prev) => ({
        ...prev,
        [name]: parseInt(value, 10),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Envío del formulario en JSON
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validar contraseñas
    if (formData.password !== formData.password2) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        municipio: formData.municipio,
        provincia: formData.provincia,
        password2: formData.password2
      };

      const response = await axiosInstance.post("/register", payload);
      console.log("Registro exitoso:", response.data);

      // Mostrar mensaje de éxito y redirigir al login inmediatamente
      setSuccess(true);
      // Redirigir
      navigate("/auth/Login"); // <--- Aquí se redirige al login

    } catch (err: any) {
      console.error("Error al registrar:", err);
      setError("Error al registrar el usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-16 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-md w-full mx-auto space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl text-white font-bold">
            Crea tu perfil 
          </h2>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-2">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaUser />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Nombre Completo"
              className="appearance-none rounded-lg block w-full px-3 py-3 pl-10"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Email */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaEnvelope />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Correo"
              className="appearance-none rounded-lg block w-full px-3 py-3 pl-10"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Usuario */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaUser />
            </div>
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Usuario"
              className="appearance-none rounded-lg block w-full px-3 py-3 pl-10"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>

          {/* Contraseña */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaLock />
            </div>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Contraseña"
              className="appearance-none rounded-lg block w-full px-3 py-3 pl-10"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          {/* Confirmar Contraseña */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaLock />
            </div>
            <input
              id="password2"
              name="password2"
              type="password"
              required
              placeholder="Confirmar Contraseña"
              className="appearance-none rounded-lg block w-full px-3 py-3 pl-10"
              value={formData.password2}
              onChange={handleInputChange}
            />
          </div>

          {/* Seleccionar Provincia */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaMapMarkerAlt />
            </div>
            <select
              id="provincia"
              name="provincia"
              required
              className="appearance-none rounded-lg block w-full px-3 py-3 pl-10"
              value={formData.provincia}
              onChange={handleInputChange}
            >
              <option value={0}>-- Selecciona una provincia --</option>
              {provincias.map((prov) => (
                <option key={prov.id} value={prov.id}>
                  {prov.name}
                </option>
              ))}
            </select>
          </div>

          {/* Seleccionar Municipio */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaMapMarkerAlt />
            </div>
            <select
              id="municipio"
              name="municipio"
              required
              className="appearance-none rounded-lg block w-full px-3 py-3 pl-10"
              value={formData.municipio}
              onChange={handleInputChange}
              disabled={municipios.length === 0}
            >
              <option value={0}>-- Selecciona un municipio --</option>
              {municipios.map((mun) => (
                <option key={mun.id} value={mun.id}>
                  {mun.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-lg bg-indigo-600 text-white"
          >
            {loading ? "Cargando..." : "Crear Cuenta"}
          </button>

          {success && (
            <div className="bg-green-500 text-white px-4 py-2 rounded">
              ¡Cuenta creada exitosamente!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
