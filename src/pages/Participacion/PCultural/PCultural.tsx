// src/components/PCultural.tsx
import React, { useState, useEffect } from "react";
import { FiSearch, FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import AñadirParticipacionCultural from "./AñadirPCultural";
import ModificarParticipacionCultural from "./ModificarPCultural";
import EliminarParticipacionCultural from "./EliminarPCultural";
import { CreateParticipacionCulturalResponse } from "../../../types/cultural";
import { getParticipacionesByActividad } from "../../../service/APICultural"; // Si cuentas con este endpoint

interface PCulturalProps {
  actividadId: number;
}

const PCultural: React.FC<PCulturalProps> = ({ actividadId }) => {
  const [participaciones, setParticipaciones] = useState<CreateParticipacionCulturalResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingParticipacion, setEditingParticipacion] = useState<CreateParticipacionCulturalResponse | null>(null);
  const [participacionToDelete, setParticipacionToDelete] = useState<CreateParticipacionCulturalResponse | null>(null);

  // Cargar las participaciones de la actividad (si cuentas con este endpoint)
  useEffect(() => {
    const fetchParticipaciones = async () => {
      try {
        const data = await getParticipacionesByActividad(actividadId);
        setParticipaciones(data);
      } catch (error) {
        console.error("Error al cargar las participaciones:", error);
      }
    };

    fetchParticipaciones();
  }, [actividadId]);

  // Filtrar participaciones según el término de búsqueda
  const filteredParticipaciones = participaciones.filter((p) =>
    p.donde_se_desarrollo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.fecha.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Callback que se ejecuta cuando se agrega una participación (desde el modal Añadir)
  const handleAddParticipacion = (newP: CreateParticipacionCulturalResponse) => {
    setParticipaciones([...participaciones, newP]);
  };

  // Callback que se ejecuta cuando se actualiza una participación (desde el modal Modificar)
  const handleEditParticipacion = (updated: CreateParticipacionCulturalResponse) => {
    setParticipaciones(participaciones.map(p => p.id === updated.id ? updated : p));
    setEditingParticipacion(null);
  };

  // Callback que se ejecuta cuando se elimina una participación (desde el modal Eliminar)
  const handleDeleteParticipacion = (p: CreateParticipacionCulturalResponse) => {
    setParticipaciones(participaciones.filter(item => item.id !== p.id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Participación Cultural</h1>
            <nav className="space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Inicio</button>
              <button className="px-4 py-2 text-blue-600 font-medium">Asociados</button>
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Actividad Cultural</button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="relative flex-1 max-w-lg">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar Participaciones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          {/* Se le pasa el id de la actividad para que la nueva participación quede asociada */}
          <AñadirParticipacionCultural 
            actividadId={actividadId}
            onParticipacionAdded={handleAddParticipacion} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredParticipaciones.map((p) => (
            <ParticipacionCard
              key={p.id}
              participacion={p}
              onView={(p) => console.log("Ver", p)}
              onEdit={(p) => setEditingParticipacion(p)}
              onDelete={(p) => setParticipacionToDelete(p)}
            />
          ))}
        </div>

        {/* Modal para Editar Participación */}
        {editingParticipacion && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <ModificarParticipacionCultural
              participacion={editingParticipacion}
              onUpdate={handleEditParticipacion}
              onCancel={() => setEditingParticipacion(null)}
            />
          </div>
        )}

        {/* Modal para Eliminar Participación */}
        {participacionToDelete && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <EliminarParticipacionCultural
              participacion={participacionToDelete}
              onDeleted={async () => {
                handleDeleteParticipacion(participacionToDelete);
                setParticipacionToDelete(null);
              }}
              onCancel={() => setParticipacionToDelete(null)}
            />
          </div>
        )}
      </main>
    </div>
  );
};

interface ParticipacionCardProps {
  participacion: CreateParticipacionCulturalResponse;
  onView: (p: CreateParticipacionCulturalResponse) => void;
  onEdit: (p: CreateParticipacionCulturalResponse) => void;
  onDelete: (p: CreateParticipacionCulturalResponse) => void;
}

const ParticipacionCard: React.FC<ParticipacionCardProps> = ({ participacion, onView, onEdit, onDelete }) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-gray-800 text-sm">
          Participación: {participacion.donde_se_desarrollo}
        </h3>
        <p className="text-gray-800 text-sm">Fecha: {participacion.fecha}</p>
        <p className="text-gray-800 text-sm">Lugar alcanzado: {participacion.lugar_alcanzado}</p>
        <p className="text-gray-800 text-sm">Especialidad: {participacion.especialidad}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onView(participacion)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
        >
          <FiEye className="w-5 h-5" />
        </button>
        <button
          onClick={() => onEdit(participacion)}
          className="p-2 text-green-600 hover:bg-green-50 rounded-full"
        >
          <FiEdit className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(participacion)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
        >
          <FiTrash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default PCultural;
