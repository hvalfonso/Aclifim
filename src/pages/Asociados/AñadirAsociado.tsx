import { useState, FormEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { createAsociado } from "../../service/ApiEjemplo";
import { Asociado, AsociadoProps } from "../../types/asociados";

interface AñadirAsociadoProps {
  onAsociadoAdded: (nuevoAsociado: Asociado) => void
}

interface FormErrors {
  name?: string;
  Apellido1?: string;
  Apellido2?: string;
  Direccion?: string;
  IDMunicipio?: string;
  NumeroPerteneciente?: string;
  NumeroT?: string;
  Carnet?: string;
}

export default function AñadirAsociado({ onAsociadoAdded }: AñadirAsociadoProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<AsociadoProps, "id">>({
    name: "",
    Apellido1: "",
    Apellido2: "",
    Direccion: "",
    IDMunicipio: 1,
    NumeroPerteneciente: "",
    NumeroT: 0,
    Sexo: true,
    Activo: true,
    Carnet: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = "Nombre es requerido";
    if (!formData.Apellido1.trim()) errors.Apellido1 = "Primer Apellido es requerido";
    if (!formData.Apellido2.trim()) errors.Apellido2 = "Segundo Apellido es requerido";
    if (!formData.Direccion.trim()) errors.Direccion = "Dirección es requerida";
    if (!formData.IDMunicipio) errors.IDMunicipio = "Municipio es requerido";
    if (!formData.NumeroPerteneciente.trim()) errors.NumeroPerteneciente = "Número Móvil es requerido";
    if (!formData.NumeroT) errors.NumeroT = "Número de Teléfono es requerido";
    if (!formData.Carnet) errors.Carnet = "El Carnet de Identidad es requerido";
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
      const nuevoAsociado = await createAsociado(formData);
      onAsociadoAdded(nuevoAsociado); // <- Ahora sin parámetro
      resetForm();
      setShowForm(false);
  } catch (error) {
      // ... manejo de errores ...
  }
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      Apellido1: "",
      Apellido2: "",
      Direccion: "",
      IDMunicipio: 1,
      NumeroPerteneciente: "",
      NumeroT: 0,
      Sexo: true,
      Activo: true,
      Carnet: 0,
    });
    setFormErrors({});
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors text-[20px]"
      >
        <FiPlus /> Añadir Asociado
      </button>

      <div
        className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform ${
          showForm ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Añadir Nuevo Asociado</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-gray-700">
              <FiX size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
        <label className="block text-sm font-medium text-gray-700">Primer Apellido</label>
        <input
          type="text"
          value={formData.Apellido1}
          onChange={(e) => setFormData({ ...formData, Apellido1: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            formErrors.Apellido1 ? "border-red-500" : ""
          }`}
        />
        {formErrors.Apellido1 && <p className="mt-1 text-sm text-red-600">{formErrors.Apellido1}</p>}
      </div>

      {/* Campo Apellido2 */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Segundo Apellido</label>
        <input
          type="text"
          value={formData.Apellido2}
          onChange={(e) => setFormData({ ...formData, Apellido2: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            formErrors.Apellido2 ? "border-red-500" : ""
          }`}
        />
        {formErrors.Apellido2 && <p className="mt-1 text-sm text-red-600">{formErrors.Apellido2}</p>}
      </div>

      {/* Numero Perteneciente*/}
      <div>
        <label className="block text-sm font-medium text-gray-700">Número Movil</label>
        <input
          type="number"
          value={formData.NumeroPerteneciente}
          onChange={(e) => setFormData({ ...formData, NumeroPerteneciente: e.target.value })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            formErrors.NumeroPerteneciente ? "border-red-500" : ""
          }`}
        />
        {formErrors.NumeroPerteneciente && <p className="mt-1 text-sm text-red-600">{formErrors.NumeroPerteneciente}</p>}
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

      {/* Carnet de Identidad */}
      <div>
        <label className="block text-sm font-medium text-gray-700">CI</label>
        <input
          type="number"
          value={formData.Carnet}
          onChange={(e) => setFormData({ ...formData, Carnet: parseInt(e.target.value) })}
          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
            formErrors.Carnet ? "border-red-500" : ""
          }`}
        />
        {formErrors.Carnet && <p className="mt-1 text-sm text-red-600">{formErrors.Carnet}</p>}
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
          onChange={(e) => setFormData({ ...formData, IDMunicipio: e.target.value ? parseInt(e.target.value) : 0 })}
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
                value={formData.Sexo.toString()}
                onChange={(e) => setFormData({ ...formData, Sexo: e.target.value === "true" })}
              >
                <option value="true">Masculino</option>
                <option value="false">Femenino</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Estado de actividad</label>
              <select
                value={formData.Activo.toString()}
                onChange={(e) => setFormData({ ...formData, Activo: e.target.value === "true" })}
              >
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </select>
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