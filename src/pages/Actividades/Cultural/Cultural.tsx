// src/components/Cultural.tsx

import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaList, FaTasks } from "react-icons/fa";
import { Asociado } from "../../../types/asociados";
import {
  ActividadCulturalLocal,
  ActividadCulturalResponse
} from "../../../types/cultural";
import {
  getActividadCulturalById,
  deleteActividadCultural,
  updateActividadCultural
} from "../../../service/APICultural";

// Importamos el componente para añadir actividades
import AñadirCultural from "./AñadirCultural";

interface ActiCulturalProps {
  asociado: Asociado;
}

export default function ActiCultural({ asociado }: ActiCulturalProps) {
  const [actividades, setActividades] = useState<ActividadCulturalLocal[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [edicionEspecialidad, setEdicionEspecialidad] = useState<string>("");
  const [viewMode, setViewMode] = useState<"dashboard" | "table">("dashboard");
  const [error, setError] = useState<string | null>(null);

  // Cargar actividades al montar o cambiar el asociado
  useEffect(() => {
    const cargarActividades = async () => {
      try {
        // Ajusta la ruta si tu backend maneja múltiples actividades
        const response: ActividadCulturalResponse = await getActividadCulturalById(asociado.ID);
        
        // Convertimos la respuesta en un objeto con la propiedad "completado"
        const actividadLocal: ActividadCulturalLocal = { ...response, completado: false };
        
        // Si tu backend retorna un array con varias actividades,
        // cambia la lógica para setActividades(response.map(...))
        setActividades([actividadLocal]);
      } catch (err: any) {
        // Si el backend responde 404, asumimos que aún no se ha creado la actividad
        if (err.response && err.response.status === 404) {
          setActividades([]);
        } else {
          setError(err.message || "Error al cargar actividades culturales");
        }
      }
    };
    cargarActividades();
  }, [asociado.ID]);

  // Función para recibir la nueva actividad desde AñadirCultural
  const handleCulturalAdded = (nuevaActividad: ActividadCulturalResponse) => {
    // Convertimos la respuesta en ActividadCulturalLocal (agregando 'completado')
    const actividadLocal: ActividadCulturalLocal = {
      ...nuevaActividad,
      completado: false
    };
    // Actualizamos el estado añadiendo la nueva actividad al array
    setActividades((prev) => [...prev, actividadLocal]);
  };

  // Alternar "completado"
  const toggleComplete = (id: number) => {
    setActividades(
      actividades.map((actividad) =>
        actividad.id === id
          ? { ...actividad, completado: !actividad.completado }
          : actividad
      )
    );
  };

  // Iniciar edición
  const startEditing = (actividad: ActividadCulturalLocal) => {
    setEditingId(actividad.id);
    setEdicionEspecialidad(actividad.especialidad.join(", "));
  };

  // Guardar edición
  const saveEdit = async (id: number) => {
    try {
      const requestData = { id, aficcion: edicionEspecialidad };
      const updatedResponse = await updateActividadCultural(requestData);
      setActividades(
        actividades.map((actividad) =>
          actividad.id === id
            ? {
                ...actividad,
                especialidad: updatedResponse.aficcion,
                completado: actividad.completado
              }
            : actividad
        )
      );
      setEditingId(null);
      setEdicionEspecialidad("");
    } catch (err: any) {
      setError(err.message || "Error al actualizar actividad cultural");
    }
  };

  // Eliminar actividad
  const handleDelete = async (id: number) => {
    try {
      await deleteActividadCultural(id);
      setActividades(actividades.filter((actividad) => actividad.id !== id));
    } catch (err: any) {
      setError(err.message || "Error al eliminar actividad cultural");
    }
  };

  // Estadísticas
  const stats = {
    total: actividades.length,
    completadas: actividades.filter((a) => a.completado).length,
    pendientes: actividades.filter((a) => !a.completado).length,
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto bg-card rounded-lg shadow-lg p-6">
        <h1 className="text-heading font-heading text-center mb-8 text-foreground">
          Actividades Culturales
        </h1>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setViewMode("dashboard")}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                viewMode === "dashboard"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <FaTasks /> Tablero
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                viewMode === "table"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <FaList /> Ver tabla
            </button>
          </div>

          {/* Botón para abrir el form de AñadirCultural */}
          <AñadirCultural
            asociado={asociado}
            onCulturalAdded={handleCulturalAdded}
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        {/* TABLERO DE ESTADÍSTICAS */}
        {viewMode === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-chart-1/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Total de Actividades</h3>
              <p className="text-3xl font-bold text-chart-1">{stats.total}</p>
            </div>
            <div className="bg-chart-2/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Actividades Completadas</h3>
              <p className="text-3xl font-bold text-chart-2">{stats.completadas}</p>
            </div>
            <div className="bg-chart-3/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Actividades Pendientes</h3>
              <p className="text-3xl font-bold text-chart-3">{stats.pendientes}</p>
            </div>
          </div>
        )}

        {/* LISTADO (DASHBOARD O TABLA) */}
        {viewMode === "dashboard" ? (
          <div className="space-y-4 mb-6">
            {actividades.map((actividad) => (
              <div
                key={actividad.id}
                className="flex items-center justify-between bg-secondary rounded p-4"
              >
                {editingId === actividad.id ? (
                  <input
                    type="text"
                    value={edicionEspecialidad}
                    onChange={(e) => setEdicionEspecialidad(e.target.value)}
                    className="flex-1 px-4 py-2 rounded border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground mr-4"
                    onKeyPress={(e) => e.key === "Enter" && saveEdit(actividad.id)}
                    autoFocus
                  />
                ) : (
                  <span
                    className={`flex-1 ${
                      actividad.completado
                        ? "line-through text-accent"
                        : "text-foreground"
                    }`}
                  >
                    {actividad.especialidad.join(", ")}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  {editingId === actividad.id ? (
                    <button
                      onClick={() => saveEdit(actividad.id)}
                      className="text-primary hover:text-primary/80"
                    >
                      <FaCheck size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={() => startEditing(actividad)}
                      className="text-primary hover:text-primary/80"
                    >
                      <FaEdit size={18} />
                    </button>
                  )}
                  <button
                    onClick={() => toggleComplete(actividad.id)}
                    className={`${
                      actividad.completado ? "text-chart-2" : "text-accent"
                    } hover:opacity-80`}
                  >
                    <FaCheck size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(actividad.id)}
                    className="text-destructive hover:text-destructive/80"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left p-4 border-b border-input">Actividades</th>
                  <th className="text-left p-4 border-b border-input">Estado</th>
                  <th className="text-right p-4 border-b border-input">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {actividades.map((actividad) => (
                  <tr key={actividad.id} className="border-b border-input">
                    <td className="p-4">
                      {editingId === actividad.id ? (
                        <input
                          type="text"
                          value={edicionEspecialidad}
                          onChange={(e) => setEdicionEspecialidad(e.target.value)}
                          className="w-full px-4 py-2 rounded border border-input focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                          onKeyPress={(e) =>
                            e.key === "Enter" && saveEdit(actividad.id)
                          }
                          autoFocus
                        />
                      ) : (
                        <span
                          className={
                            actividad.completado
                              ? "line-through text-accent"
                              : "text-foreground"
                          }
                        >
                          {actividad.especialidad.join(", ")}
                        </span>
                      )}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${
                          actividad.completado ? "bg-chart-2/20 text-chart-2" : "bg-chart-3/20 text-chart-3"
                        }`}
                      >
                        {actividad.completado ? "Completado" : "Pendiente"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-3">
                        {editingId === actividad.id ? (
                          <button
                            onClick={() => saveEdit(actividad.id)}
                            className="text-primary hover:text-primary/80"
                          >
                            <FaCheck size={18} />
                          </button>
                        ) : (
                          <button
                            onClick={() => startEditing(actividad)}
                            className="text-primary hover:text-primary/80"
                          >
                            <FaEdit size={18} />
                          </button>
                        )}
                        <button
                          onClick={() => toggleComplete(actividad.id)}
                          className={`${
                            actividad.completado ? "text-chart-2" : "text-accent"
                          } hover:opacity-80`}
                        >
                          <FaCheck size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(actividad.id)}
                          className="text-destructive hover:text-destructive/80"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
