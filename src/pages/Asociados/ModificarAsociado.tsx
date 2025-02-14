import { useState } from "react";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { ActualizarAsociadoProps, Asociado } from "../../types/asociados";
import { updateAsociado } from "../../service/ApiEjemplo";

interface ModificarAsociadoProps {
  asociadosData: Asociado;
  onUpdate: (updatedAsociado: ActualizarAsociadoProps) => void;
  onCancel: () => void;
}

export default function ModificarAsociado({ 
  asociadosData, onUpdate, onCancel 
}: ModificarAsociadoProps) {
  const [editingAsociado, setEditingAsociado] = useState<ActualizarAsociadoProps>({
    ...asociadosData,
    id: asociadosData.id  // Asegurar que siempre tenga un id
  });
  
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (field: keyof ActualizarAsociadoProps, value: any) => {
    setEditingAsociado({ ...editingAsociado, [field]: value });
  };

// Modificar la función handleSave
const handleSave = async () => {
  try {
      const updatedAsociado = await updateAsociado(editingAsociado);
      if (updatedAsociado) {
          onUpdate(editingAsociado); // Esto debería disparar un refetch
          setIsEditing(false);
      }
  } catch (error) {
      console.error("Error al actualizar:", error);
  }
};


  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      {isEditing ? (
        <>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={editingAsociado.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Nombre"
            />
            <input
              type="text"
              value={editingAsociado.Apellido1}
              onChange={(e) => handleChange("Apellido1", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Apellido"
            />

            <input
              type="text"
              value={editingAsociado.Apellido2}
              onChange={(e) => handleChange("Apellido2", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Apellido"
            />
              
            <select
              value={editingAsociado.Sexo ? "Masculino" : "Femenino"}
              onChange={(e) => handleChange("Sexo", e.target.value === "Masculino")} // ✅ Corrección aquí
              className="w-full p-2 border rounded"
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
            </select>

            <input
              type="text"
              value={editingAsociado.Direccion}
              onChange={(e) => handleChange("Direccion", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Dirección"
            />

            <input
            type="number"
            value={editingAsociado.IDMunicipio}
            onChange={(e) => handleChange("IDMunicipio", Number(e.target.value))}
            className="w-full p-2 border rounded"
            placeholder="IDMunicipio"
            />

            <input
            type="number"
            value={editingAsociado.Carnet}
            onChange={(e) => handleChange("Carnet", Number(e.target.value))}
            className="w-full p-2 border rounded"
            placeholder="Carnet"
            />

            <input
              type="text"
              value={editingAsociado.NumeroPerteneciente}
              onChange={(e) => handleChange("NumeroPerteneciente", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Número Perteneciente"
            />

          <input
              type="number"
              value={editingAsociado.NumeroT}
              onChange={(e) => handleChange("NumeroT", e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Número"
            />

          <select
            value={editingAsociado.Activo ? "Activo" : "Inactivo"}
            onChange={(e) => handleChange("Activo", e.target.value === "Activo")} // ✅ Corrección aquí
            className="w-full p-2 border rounded"
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
          </select>

          </div>
          <div className="flex justify-end space-x-2">
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
              <FaCheck className="mr-1" /> Guardar
            </button>
            <button onClick={onCancel} className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
              <FaTimes className="mr-1" /> Cancelar
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{asociadosData.name} {asociadosData.Apellido1} {asociadosData.Apellido2} {asociadosData.Carnet} {asociadosData.Sexo} {asociadosData.Direccion} {asociadosData.NumeroPerteneciente} {asociadosData.NumeroT} {asociadosData.Activo}</span>
          <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <FaEdit className="mr-1" /> Editar
          </button>
        </div>
      )}
    </div>
  );
}
