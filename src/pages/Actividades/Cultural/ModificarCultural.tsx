// src/components/ModificarCultural.tsx
import React, { useState, FormEvent } from "react";
import { updateActividadCultural } from "../../../service/APICultural";
import { ActualizarActividadCulturalRequest, ActualizarActividadCulturalResponse, ActividadCulturalResponse } from "../../../types/cultural";
import { FaTimes } from "react-icons/fa";

interface ModificarCulturalProps {
  actividad: ActividadCulturalResponse;
  onUpdate: (updated: ActualizarActividadCulturalResponse) => void;
  onCancel: () => void;
}

const ModificarCultural: React.FC<ModificarCulturalProps> = ({ actividad, onUpdate, onCancel }) => {
  // Usamos un state para la "aficcion" (campo a actualizar)
  const [aficcion, setAficcion] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const requestData: ActualizarActividadCulturalRequest = {
        id: actividad.id,  // Asegúrate de que la propiedad id coincide con la respuesta
        aficcion,
      };
      const updated = await updateActividadCultural(requestData);
      onUpdate(updated);
    } catch (err: any) {
      setError(err.message || "Error al actualizar actividad cultural");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-xl font-bold mb-4">Modificar Actividad Cultural</h2>
        {error && <p className="text-red-600">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Aficción (nuevo valor)</label>
            <input
              type="text"
              value={aficcion}
              onChange={(e) => setAficcion(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300"
            />
          </div>
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md flex items-center justify-center"
            >
              {isSubmitting ? "Guardando..." : "Guardar"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center"
            >
              <FaTimes className="mr-2" /> Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModificarCultural;