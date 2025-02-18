// src/components/AñadirParticipacionCultural.tsx
import React, { useState, FormEvent } from "react";
import { createParticipacionCultural } from "../../../service/APICultural";
import {
  CreateParticipacionCulturalRequest,
  CreateParticipacionCulturalResponse,
} from "../../../types/cultural";
import { FiPlus, FiX } from "react-icons/fi";

interface AñadirParticipacionCulturalProps {
  onParticipacionAdded: (nueva: CreateParticipacionCulturalResponse) => void;
}

const AñadirParticipacionCultural: React.FC<AñadirParticipacionCulturalProps> = ({ onParticipacionAdded }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<CreateParticipacionCulturalRequest>({
    donde_se_desarrollo: "",
    e_specialidad: "",
    fecha: "",
    id_actividad_cultural: 0,
    lugar_alcanzado: 0,
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const nuevaParticipacion = await createParticipacionCultural(formData);
      onParticipacionAdded(nuevaParticipacion);
      setFormData({
        donde_se_desarrollo: "",
        e_specialidad: "",
        fecha: "",
        id_actividad_cultural: 0,
        lugar_alcanzado: 0,
      });
      setShowForm(false);
    } catch (err: any) {
      setError(err.message || "Error al crear participación cultural");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
      >
        <FiPlus /> Añadir Participación
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Nueva Participación Cultural</h2>
              <button onClick={() => setShowForm(false)}>
                <FiX size={24} />
              </button>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Donde se desarrollo</label>
                <input
                  type="text"
                  value={formData.donde_se_desarrollo}
                  onChange={(e) => setFormData({ ...formData, donde_se_desarrollo: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Especialidad</label>
                <input
                  type="text"
                  value={formData.e_specialidad}
                  onChange={(e) => setFormData({ ...formData, e_specialidad: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Fecha</label>
                <input
                  type="date"
                  value={formData.fecha}
                  onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">ID Actividad Cultural</label>
                <input
                  type="number"
                  value={formData.id_actividad_cultural}
                  onChange={(e) => setFormData({ ...formData, id_actividad_cultural: Number(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Lugar Alcanzado</label>
                <input
                  type="number"
                  value={formData.lugar_alcanzado}
                  onChange={(e) => setFormData({ ...formData, lugar_alcanzado: Number(e.target.value) })}
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

export default AñadirParticipacionCultural;