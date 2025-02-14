import React, { useState, useEffect } from 'react';
import { obtenerDatosSocial, modificarDatosSocial } from '../../service/APISocial';
import { ActualizarDatosSocialesProps } from '../../types/sociales'; // El tipo para la actualización

const EditarDatosSociales = ({ idAsociado }: { idAsociado: number }) => {
    const [formData, setFormData] = useState<ActualizarDatosSocialesProps>({
        estadocivil: "",  // inicializado como cadena vacía
        integracionRevolucionaria: "",  // inicializado como cadena vacía
        occupacion: "",  // inicializado como cadena vacía
        // Si el campo 'id' es opcional y es un número, puedes inicializarlo como null
        id: 0, // ejemplo de valor inicial si el id es necesario
    });
    
    useEffect(() => {
        const fetchDatos = async () => {
            try {
                const response = await obtenerDatosSocial(idAsociado);
                setFormData(response.data);
            } catch (error) {
                console.error("Error al obtener los datos sociales:", error);
            }
        };
        fetchDatos();
    }, [idAsociado]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData) {
            try {
                await modificarDatosSocial(idAsociado, formData);
                alert("Datos sociales actualizados exitosamente");
            } catch (error) {
                console.error("Error al actualizar los datos sociales:", error);
            }
        }
    };

    if (!formData) {
        return <div>Cargando...</div>;
    }

    return (
    <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Datos Sociales</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Estado Civil</label>
            <select
              name="estadoCivil"
              value={formData.estadocivil}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 pl-3 py-2 text-base focus:outline-none sm:text-sm"
            >
              <option value="">Selecciona estado civil</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Integración Revolucionaria</label>
            <select
              name="integracionRevolucionaria"
              value={formData.integracionRevolucionaria}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 pl-3 py-2 text-base focus:outline-none sm:text-sm"
            >
              <option value="">Selecciona opción</option>
              <option value="ujc">UJC</option>
              <option value="minint">MININT</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ocupación</label>
            <input
              type="text"
              name="occupacion"
              value={formData.occupacion}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 pl-3 py-2 text-base focus:outline-none sm:text-sm"
            />
          </div>
            <button type="submit"  className="bg-sky-600 text-white px-4 py-2 rounded-md">Actualizar</button>
        </form>
      </div>
    </div>
    );
};

export default EditarDatosSociales;
