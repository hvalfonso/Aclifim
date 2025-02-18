import { useState } from "react";
import { FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import { ActualizarAsociadoProps, Asociado } from "../../types/asociados";
import { updateAsociado } from "../../service/APIAsociados";

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
    id: asociadosData.ID  // Ensure it always has an id
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const handleChange = (field: keyof ActualizarAsociadoProps, value: any) => {
    setEditingAsociado({ ...editingAsociado, [field]: value });
  };

  const handleSave = async () => {
    try {
      const updatedAsociado = await updateAsociado(editingAsociado);
      if (updatedAsociado) {
        onUpdate(editingAsociado); // Trigger a refetch
        setIsModalOpen(false);  // Close the modal after saving
      }
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setIsModalOpen(true);  // Open modal for editing
  };

  return (
    <>
      <div className="p-4 border rounded shadow-md bg-white">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">
            {asociadosData.name} {asociadosData.Apellido1} {asociadosData.Apellido2}
          </span>
          <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <FaEdit className="mr-1" /> Editar
          </button>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Editar Asociado</h2>
            <form>
              {/* Nombre Input */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="name"
                  value={editingAsociado.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Nombre"
                />
              </div>

              {/* Apellido1 Input */}
              <div className="mb-4">
                <label htmlFor="Apellido1" className="block text-sm font-medium text-gray-700">Primer Apellido</label>
                <input
                  type="text"
                  id="Apellido1"
                  value={editingAsociado.Apellido1}
                  onChange={(e) => handleChange("Apellido1", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Primer Apellido"
                />
              </div>
              
              {/* Apellido2 Input */}
              <div className="mb-4">
                <label htmlFor="Apellido2" className="block text-sm font-medium text-gray-700">Segundo Apellido</label>
                <input
                  type="text"
                  id="Apellido2"
                  value={editingAsociado.Apellido2}
                  onChange={(e) => handleChange("Apellido2", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Segundo Apellido"
                />
              </div>

              {/* Sexo Input */}
              <div className="mb-4">
                <label htmlFor="Sexo" className="block text-sm font-medium text-gray-700">Sexo</label>
                <select
                  id="Sexo"
                  value={editingAsociado.Sexo ? "Masculino" : "Femenino"}
                  onChange={(e) => handleChange("Sexo", e.target.value === "Masculino")}
                  className="w-full p-2 border rounded"
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>

              {/* Dirección Input */}
              <div className="mb-4">
                <label htmlFor="Direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
                <input
                  type="text"
                  id="Direccion"
                  value={editingAsociado.Direccion}
                  onChange={(e) => handleChange("Direccion", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Dirección"
                />
              </div>
              
              {/* IDMunicipio Input */}
              <div className="mb-4">
                <label htmlFor="IDMunicipio" className="block text-sm font-medium text-gray-700">ID Municipio</label>
                <input
                  type="number"
                  id="IDMunicipio"
                  value={editingAsociado.IDMunicipio}
                  onChange={(e) => handleChange("IDMunicipio", Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  placeholder="ID Municipio"
                />
              </div>
              
              {/* Carnet Input */}
              <div className="mb-4">
                <label htmlFor="Carnet" className="block text-sm font-medium text-gray-700">Carnet</label>
                <input
                  type="number"
                  id="Carnet"
                  value={editingAsociado.Carnet}
                  onChange={(e) => handleChange("Carnet", Number(e.target.value))}
                  className="w-full p-2 border rounded"
                  placeholder="Carnet"
                />
              </div>
              
              {/* NumeroPerteneciente Input */}
              <div className="mb-4">
                <label htmlFor="NumeroPerteneciente" className="block text-sm font-medium text-gray-700">Número Perteneciente</label>
                <input
                  type="number"
                  id="NumeroPerteneciente"
                  value={editingAsociado.NumeroPerteneciente}
                  onChange={(e) => handleChange("NumeroPerteneciente", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Número Perteneciente"
                />
              </div>
              
              {/* NumeroT Input */}
              <div className="mb-4">
                <label htmlFor="NumeroT" className="block text-sm font-medium text-gray-700">Número Teléfono</label>
                <input
                  type="number"
                  id="NumeroT"
                  value={editingAsociado.NumeroT}
                  onChange={(e) => handleChange("NumeroT", e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Número Teléfono"
                />
              </div>

              {/* Activo Status */}
              <div className="mb-4">
                <label htmlFor="Activo" className="block text-sm font-medium text-gray-700">Estado</label>
                <select
                  id="Activo"
                  value={editingAsociado.Activo ? "Activo" : "Inactivo"}
                  onChange={(e) => handleChange("Activo", e.target.value === "Activo")}
                  className="w-full p-2 border rounded"
                >
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
                >
                  <FaCheck className="mr-1" /> Guardar
                </button>
                <button
                  onClick={() => setIsModalOpen(false)} // Close modal
                  className="bg-red-500 text-white px-4 py-2 rounded flex items-center"
                >
                  <FaTimes className="mr-1" /> Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
