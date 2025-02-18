// src/components/AñadirCultural.tsx
import { useState, FormEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { createActividadCultural } from "../../../service/APICultural";
import { CreateActividadCulturalRequest, ActividadCulturalResponse } from "../../../types/cultural";
import { Asociado } from "../../../types/asociados";

interface AñadirCulturalProps {
  onCulturalAdded: (actividad: ActividadCulturalResponse) => void;
  asociado: Asociado; // Recibe el asociado actual
}


export default function AñadirCultural ({ onCulturalAdded, asociado }: AñadirCulturalProps){
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<CreateActividadCulturalRequest>({
    asociado_Id: asociado.ID,
    especialidad: [],
  });
  const [inputEspecialidad, setInputEspecialidad] = useState(""); // Para ingresar especialidades como cadena
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Convertir el input a array (dividiendo por comas)
    const especialidadArray = inputEspecialidad
      .split(",")
      .map(s => s.trim())
      .filter(s => s !== "");
    const data: CreateActividadCulturalRequest = {
      ...formData,
      especialidad: especialidadArray,
    };
    setIsSubmitting(true);
    try {
      const nuevaActividad = await createActividadCultural(data);
      onCulturalAdded(nuevaActividad);
      setFormData({ asociado_Id: 0, especialidad: [] });
      setInputEspecialidad("");
      setShowForm(false);
    } catch (err: any) {
      setError(err.message || "Error al crear actividad cultural");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
      >
        <FiPlus /> Añadir Actividad Cultural
      </button>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Nueva Actividad Cultural</h2>
              <button onClick={() => setShowForm(false)}>
                <FiX size={24} />
              </button>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium">Especialidades (separadas por coma)</label>
                <input
                  type="text"
                  value={inputEspecialidad}
                  onChange={(e) => setInputEspecialidad(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                  {isSubmitting ? "Guardando..." : "Guardar"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
