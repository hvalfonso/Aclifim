import { useState } from "react";
import { eliminarDatosSocial } from "../../service/APISocial";

const EliminarDatosSociales = ({ idAsociado }: { idAsociado: number }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await eliminarDatosSocial(idAsociado);
      alert("Datos eliminados con éxito");
    } catch (error) {
      alert("Error al eliminar los datos sociales");
    }
    setIsDeleting(false);
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Eliminar
      </button>
    </div>
  );
};

export default EliminarDatosSociales;
