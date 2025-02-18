// src/components/EliminarCultural.tsx
import React, { useState } from "react";
import { deleteActividadCultural } from "../../../service/APICultural";
import { ActividadCulturalResponse } from "../../../types/cultural";
import { FaTrash } from "react-icons/fa";

interface EliminarCulturalProps {
  actividad: ActividadCulturalResponse;
  onDeleted: (id: number) => void;
  onCancel?: () => void;
}

const EliminarCultural: React.FC<EliminarCulturalProps> = ({ actividad, onDeleted, onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await deleteActividadCultural(actividad.id);
      console.log("Actividad cultural eliminada:", resp);
      onDeleted(actividad.id);
    } catch (err: any) {
      setError(err.message || "Error al eliminar la actividad cultural");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-96">
        <p className="text-lg mb-4">
          ¿Estás seguro de que deseas eliminar la actividad cultural: {actividad.especialidad}?
        </p>
        {error && <p className="text-red-600">{error}</p>}
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleDelete}
            disabled={loading}
            className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
          >
            {loading ? "Eliminando..." : <><FaTrash className="mr-2" />Eliminar</>}
          </button>
          {onCancel && (
            <button
              onClick={onCancel}
              className="bg-gray-200 px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EliminarCultural;