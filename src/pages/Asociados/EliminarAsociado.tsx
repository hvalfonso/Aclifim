import { useState } from "react";
import { deleteAsociado } from "../../service/APIAsociados";
import { FaTrash } from "react-icons/fa";
import { Asociado } from "../../types/asociados";

interface EliminarAsociadoProps {
  asociado: Asociado;
  onDeleted: (id: number) => void;  // notifica al componente padre
  onCancel?: () => void;           // opcional, si deseas cerrar un modal
}

const EliminarAsociado: React.FC<EliminarAsociadoProps> = ({
  asociado,
  onDeleted,
  onCancel,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      // Llamamos a la función que hace la petición DELETE
      const responseMsg = await deleteAsociado(asociado.ID);
      console.log("Asociado eliminado:", responseMsg);
      // Notificamos al padre
      onDeleted(asociado.ID);
    } catch (err: any) {
      setError(err.message || "Error al eliminar el asociado");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <p className="text-lg mb-4">
        ¿Estás seguro de que deseas eliminar el asociado {" "} {asociado.name} {asociado.Apellido1} {asociado.Apellido2}?
      </p>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="flex justify-end space-x-4">
        <button
          onClick={handleDelete}
          disabled={loading}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors flex items-center"
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

export default EliminarAsociado;