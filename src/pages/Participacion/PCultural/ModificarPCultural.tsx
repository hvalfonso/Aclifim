// src/components/ModificarParticipacionCultural.tsx
import React, { useState } from "react";
import { updateParticipacionCultural } from "../../../service/APICultural";
import { ActualizarParticipacionCulturalRequest, CreateParticipacionCulturalResponse,} from "../../../types/cultural";
import { FaCheck, FaTimes } from "react-icons/fa";

interface ModificarParticipacionCulturalProps {
  participacion: CreateParticipacionCulturalResponse;
  onUpdate: (updated: CreateParticipacionCulturalResponse) => void;
  onCancel: () => void;
}

const ModificarParticipacionCultural: React.FC<ModificarParticipacionCulturalProps> = ({
  participacion,
  onUpdate,
  onCancel,
}) => {
  const [formData, setFormData] = useState<ActualizarParticipacionCulturalRequest>({
    id: participacion.id,
    donde_se_desarrollo: participacion.donde_se_desarrollo,
    e_specialidad: participacion.especialidad, // en la respuesta se llama especialidad, en el request e_specialidad
    fecha: participacion.fecha,
    lugar_alcanzado: participacion.lugar_alcanzado,
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSave = async () => {
    setIsSubmitting(true);
    try {
      const updated = await updateParticipacionCultural(formData);
      // Mapeamos la respuesta a nuestro tipo de participación (si es necesario)
      onUpdate({
        id: updated.id,
        donde_se_desarrollo: updated.donde_se_desarrollo,
        especialidad: updated.especialidad,
        fecha: updated.fecha,
        id_actividad_cultural: updated.id_actividad_cultural,
        lugar_alcanzado: updated.lugar_alcanzado,
      });
    } catch (err: any) {
      setError(err.message || "Error al actualizar participación");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          value={formData.donde_se_desarrollo}
          onChange={(e) => setFormData({ ...formData, donde_se_desarrollo: e.target.value })}
          placeholder="Donde se desarrollo"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          value={formData.e_specialidad}
          onChange={(e) => setFormData({ ...formData, e_specialidad: e.target.value })}
          placeholder="Especialidad"
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          value={formData.fecha}
          onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={formData.lugar_alcanzado}
          onChange={(e) => setFormData({ ...formData, lugar_alcanzado: Number(e.target.value) })}
          placeholder="Lugar alcanzado"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={handleSave} disabled={isSubmitting} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
          <FaCheck className="mr-2" /> Guardar
        </button>
        <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
          <FaTimes className="mr-2" /> Cancelar
        </button>
      </div>
    </div>
  );
};

export default ModificarParticipacionCultural;