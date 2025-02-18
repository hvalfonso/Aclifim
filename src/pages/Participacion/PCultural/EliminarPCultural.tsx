// src/components/EliminarParticipacionCultural.tsx
import React, { useState } from "react";
import { deleteParticipacionCulturalResponse } from "../../../service/APICultural";
import { CreateParticipacionCulturalResponse } from "../../../types/cultural";
import { FaTrash } from "react-icons/fa";

interface EliminarParticipacionCulturalProps {
  participacion: CreateParticipacionCulturalResponse;
  onDeleted: (id: number) => void;
  onCancel?: () => void;
}

const EliminarParticipacionCultural: React.FC<EliminarParticipacionCulturalProps> = ({
  participacion,
  onDeleted,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      const resp = await deleteParticipacionCulturalResponse(participacion.id);
      console.log("Participación eliminada:", resp);
      onDeleted(participacion.id);
    } catch (err: any) {
      setError(err.message || "Error al eliminar la participación");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <p className="text-lg mb-4">
        ¿Estás seguro de que deseas eliminar la participación: {participacion.donde_se_desarrollo || "Participación"}?
      </p>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="bg-red-600 text-white px-4 py-2 rounded flex items-center"
        >
          {loading ? "Eliminando..." : <><FaTrash className="mr-2" />Eliminar</>}
        </button>
        {onCancel && (
          <button
            onClick={onCancel}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
          >
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
};

export default EliminarParticipacionCultural;