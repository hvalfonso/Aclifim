import { useState, FormEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { createAsociado } from "../../service/ApiEjemplo"; // Asegúrate de que esta sea la ruta correcta
import { AsociadoProps } from "../../types/asociados";

// Tipos y estructura del componente
interface AñadirAsociadoProps {
  onAsociadoAdded: (asociado: AsociadoProps) => void;
}

// Definir la estructura de errores de los campos
interface FormErrors {
  name?: string;
  Apellido?: string;
  phone?: string;
  Direccion?: string;
  IDMunicipio?: string;
  NumeroPerteneciente?: string;
  NumeroT?: string;
  Sexo?: string;
  Activo?: string;
}

export default function AñadirAsociado({ onAsociadoAdded }: AñadirAsociadoProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<AsociadoProps, "ID">>({
    name: "",
    Apellido: "",
    Direccion: "",
    IDMunicipio: 0,
    NumeroPerteneciente: "",
    NumeroT: 0,
    Sexo: true, // Valor predeterminado si no lo tienes en el formulario
    Activo: true, // Valor predeterminado si no lo tienes en el formulario
    Carnet: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Nombre es requerido";
    if (!formData.Apellido.trim()) errors.Apellido = "Apellido es requerido";
    if (!formData.Direccion.trim()) errors.Direccion = "Dirección es requerida";
    if (!formData.IDMunicipio) errors.IDMunicipio = "Municipio es requerido";
    if (!formData.NumeroPerteneciente.trim()) errors.NumeroPerteneciente = "Número Pertinente es requerido";
    if (!formData.NumeroT) errors.NumeroT = "Número de Teléfono es requerido";
    if (formData.Sexo === undefined) errors.Sexo = "Sexo es requerido";
    if (formData.Activo === undefined) errors.Activo = "Estado de actividad es requerido";
    return errors;
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Llama a la API para crear el asociado
      const newAsociado = await createAsociado(formData);

      // Si la solicitud es exitosa, actualiza el estado local
      onAsociadoAdded(newAsociado);
      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error("Error al crear el asociado:", error);
      alert("Hubo un error al intentar crear el asociado.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      Apellido: "",
      Direccion: "",
      IDMunicipio: 0,
      NumeroPerteneciente: "",
      NumeroT: 0,
      Sexo: true, // Valor predeterminado
      Activo: true, // Valor predeterminado
      Carnet: 0,
    });
    setFormErrors({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors text-[20px]"
        >
          <FiPlus /> Añadir Asociado
        </button>
      </div>

      {/* Formulario */}
      <div
        className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform ${
          showForm ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Añadir Nuevo Asociado</h2>
            <button
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.name ? "border-red-500" : ""
                }`}
              />
              {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
            </div>

            {/* Campo Apellido */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Apellido</label>
              <input
                type="text"
                value={formData.Apellido}
                onChange={(e) => setFormData({ ...formData, Apellido: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.Apellido ? "border-red-500" : ""
                }`}
              />
              {formErrors.Apellido && <p className="mt-1 text-sm text-red-600">{formErrors.Apellido}</p>}
            </div>
            {/* Numero Perteneciente*/}
            <div>
              <label className="block text-sm font-medium text-gray-700">Numero</label>
              <input
                type="number"
                value={formData.NumeroPerteneciente}
                onChange={(e) => setFormData({ ...formData, NumeroPerteneciente: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.NumeroPerteneciente ? "border-red-500" : ""
                }`}
              />
              {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
            </div>
            {/* Campo Teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Teléfono</label>
              <input
                type="number"
                value={formData.NumeroT}
                onChange={(e) => setFormData({ ...formData, NumeroT: parseInt(e.target.value) })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.NumeroT ? "border-red-500" : ""
                }`}
              />
              {formErrors.NumeroT && <p className="mt-1 text-sm text-red-600">{formErrors.NumeroT}</p>}
            </div>

            {/* Campo Dirección */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Dirección</label>
              <input
                type="text"
                value={formData.Direccion}
                onChange={(e) => setFormData({ ...formData, Direccion: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.Direccion ? "border-red-500" : ""
                }`}
              />
              {formErrors.Direccion && <p className="mt-1 text-sm text-red-600">{formErrors.Direccion}</p>}
            </div>

            {/* Campo Municipio */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Municipio</label>
              <input
                type="number"
                value={formData.IDMunicipio}
                onChange={(e) => setFormData({ ...formData, IDMunicipio: parseInt(e.target.value) })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.IDMunicipio ? "border-red-500" : ""
                }`}
              />
              {formErrors.IDMunicipio && <p className="mt-1 text-sm text-red-600">{formErrors.IDMunicipio}</p>}
            </div>

            {/* Campo Sexo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Sexo</label>
              <select
                value={formData.Sexo ? "Masculino" : "Femenino"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Sexo: e.target.value === "Masculino" ? true : false,
                  })
                }
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.Sexo ? "border-red-500" : ""
                }`}
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
              {formErrors.Sexo && <p className="mt-1 text-sm text-red-600">{formErrors.Sexo}</p>}
            </div>

            {/* Campo Activo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Estado de actividad</label>
              <select
                value={formData.Activo ? "Activo" : "Inactivo"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    Activo: e.target.value === "Activo" ? true : false,
                  })
                }
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.Activo ? "border-red-500" : ""
                }`}
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
              {formErrors.Activo && <p className="mt-1 text-sm text-red-600">{formErrors.Activo}</p>}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {isSubmitting ? "Guardando..." : "Guardar"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
