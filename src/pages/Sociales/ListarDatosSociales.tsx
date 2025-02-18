import { useEffect, useState } from "react";
import { FiEdit2, FiDelete } from "react-icons/fi";
import { obtenerDatosSocial } from "../../service/APISocial";
import { DatosSociales } from "../../types/sociales";
import { Asociado } from "../../types/asociados";

interface DatosSocialesProps {
  asociado: Asociado;
}

export default function ListarDatosSociales ({asociado}: DatosSocialesProps){
  const [datosSociales, setDatosSociales] = useState<DatosSociales[]>([]);

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const response = await obtenerDatosSocial(asociado.ID); // Usa el ID adecuado
        setDatosSociales(response.data);
      } catch (error) {
        console.error("Error al obtener los datos", error);
      }
    };
    fetchDatos();
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Datos Sociales</h2>
        <div className="space-y-4">
          {datosSociales.map((data) => (
            <div key={data.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="space-y-4">
                    <div>
                        <p className="font-medium">Estado Civil: {data.estado_civil}</p>
                    </div>

                    <div>
                        <p className="font-medium">Integración Revolucionaria: {data.integracion_revolucionaria}</p>
                    </div>

                    <div>
                        <p className="font-medium">Ocupación: {data.ocupacion}</p>
                    </div>
                </div>
              <div className="flex justify-end space-x-4">
                <button className="text-sky-600">
                  <FiEdit2 />
                </button>
                <button className="text-red-600">
                  <FiDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
