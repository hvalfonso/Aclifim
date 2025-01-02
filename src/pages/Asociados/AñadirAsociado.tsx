import { useState, FormEvent } from "react";
import { FiPlus, FiX } from "react-icons/fi";

// Definir tipos para los datos del asociado
interface Asociado {
  id: number;
  Nombre: string;
  Apellido: string;
  SegundoApellido: string;
  CI: string;
  Sexo: string;
  Telefono: string;
  OtroTelefono: string;
  Municipio: string;
  Direccion: string;
  Estado: "activo" | "inactivo";
}

interface FormErrors {
  Nombre? : string;
  Apellido? : string;
  SegundoApellido? : string;
  CI? : string;
  Sexo? : string;
  Telefono? : string;
  OtroTelefono? : string;
  Municipio? : string;
  Direccion? : string;
}

export default function AñadirAsociado() {
  const [asociado, setAsociado] = useState<Asociado[]>([
    {
      id: 1,
      Nombre: "John Doe",
      Apellido: "Valls",
      SegundoApellido: "Alfonso",
      CI: "01091268543",
      Sexo: "Masculino",
      Estado: "activo",
      Telefono: "54482464",
      OtroTelefono: "54482464",
      Municipio: "Cerro",
      Direccion: "20 de mayo"
    },
  ]);

  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<Omit<Asociado, "id" | "createdAt">>({
    Nombre: "",
    Apellido: "",
    SegundoApellido: "",
    CI: "",
    Sexo: "",
    Telefono: "",
    OtroTelefono: "",
    Municipio: "",
    Direccion: "",
    Estado: "activo",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.Nombre.trim()) errors.Nombre = "Name is required";
    if (!formData.Apellido.trim()) errors.Apellido = "Surname is required";
    if (!formData.SegundoApellido.trim()) errors.SegundoApellido = "Email is required";
    if (!formData.Sexo.trim()) errors.Sexo = "Email is required";
    if (!formData.Municipio.trim()) errors.Municipio = "Email is required";
    if (!formData.Telefono.trim()) errors.Telefono = "Cellphone is required";
    if (!formData.OtroTelefono.trim()) errors.OtroTelefono = "Cellphone is required";
    if (!formData.CI.trim()) errors.CI = "Cellphone is required";
    return errors;
  };
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const newAsociado: Asociado = {
        id: asociado.length + 1,
        ...formData
      };
      setAsociado([...asociado, newAsociado]);
      resetForm();
      setShowForm(false);
    } else {
      setFormErrors(errors);
    }
  };

  const resetForm = () => {
    setFormData({
      Nombre: "",
      Apellido: "",
      SegundoApellido: "",
      CI: "",
      Sexo: "",
      Telefono: "",
      OtroTelefono: "",
      Municipio: "",
      Direccion: "",
      Estado: "activo",
    });
    setFormErrors({});
  };

  const handleAddNewUserClick = () => {
    setShowForm(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center ">
        <button
          onClick={handleAddNewUserClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <FiPlus /> Añadir Asociado
        </button>
      </div>

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
                value={formData.Nombre}
                onChange={(e) => setFormData({ ...formData, Nombre: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.Nombre ? "border-red-500" : ""
                }`}
              />
              {formErrors.Nombre && <p className="mt-1 text-sm text-red-600">{formErrors.Nombre}</p>}
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

            {/* Campo CI */}
            <div>
              <label className="block text-sm font-medium text-gray-700">CI</label>
              <input
                type="text"
                value={formData.CI}
                onChange={(e) => setFormData({ ...formData, CI: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.CI ? "border-red-500" : ""
                }`}
              />
              {formErrors.CI && <p className="mt-1 text-sm text-red-600">{formErrors.CI}</p>}
            </div>

            {/* Campo telefono */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Telefono</label>
              <input
                type="tel"
                value={formData.Telefono}
                onChange={(e) => setFormData({ ...formData, Telefono: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.Telefono ? "border-red-500" : ""
                }`}
              />
              {formErrors.Telefono && <p className="mt-1 text-sm text-red-600">{formErrors.Telefono}</p>}
            </div>

            {/* Campo telefono */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Otro Telefono</label>
              <input
                type="tel"
                value={formData.OtroTelefono}
                onChange={(e) => setFormData({ ...formData, OtroTelefono: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.OtroTelefono ? "border-red-500" : ""
                }`}
              />
              {formErrors.OtroTelefono && <p className="mt-1 text-sm text-red-600">{formErrors.OtroTelefono}</p>}
            </div>


            {/* Campo Estado */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Estado</label>
              <select
                value={formData.Estado}
                onChange={(e) => setFormData({ ...formData, Estado: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="activo">active</option>
                <option value="inactivo">inactive</option>
              </select>
            </div>

            {/* Campo sexo */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Sexo</label>
              <select
                value={formData.Sexo}
                onChange={(e) => setFormData({ ...formData, Sexo: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="User">Masculino</option>
                <option value="Admin">Femenino</option>
              </select>
            </div>

             {/* Campo Municipio */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Municipio</label>
              <input
                type="text"
                value={formData.Municipio}
                onChange={(e) => setFormData({ ...formData, Municipio: e.target.value })}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
                  formErrors.Municipio ? "border-red-500" : ""
                }`}
              />
              {formErrors.Municipio && <p className="mt-1 text-sm text-red-600">{formErrors.Municipio}</p>}
            </div>

             {/* Campo Direccion */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Direccion</label>
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

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
