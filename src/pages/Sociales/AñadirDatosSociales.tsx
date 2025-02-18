import { useState } from 'react';
import { crearDatosSocial } from '../../service/APISocial';
import { DatosSociales, DatosSocialesProps } from '../../types/sociales'; // Tipo de los datos a enviar
import { Asociado } from '../../types/asociados';
// import { FiSave } from 'react-icons/fi';

interface AñadirDatosSocialesProps{
  onDatosSocialesAdded: (datos: DatosSociales) => void;
  asociado: Asociado
}

export default function AñadirDatosSociales ({onDatosSocialesAdded, asociado}: AñadirDatosSocialesProps) {
  const [showForm, setShowForm] = useState(false);  
  const [formData, setFormData] = useState<DatosSocialesProps>({
        estadoCivil: '',
        integracionRevolucionaria: '',
        occupacion: '',
        id : asociado.ID,
        // Rellena con los demás campos necesarios
    });

    // Valores de la opcion de estado civil
    const civilStatusOptions = [
        { value: "soltero", label: "Soltero (Single)" },
        { value: "casado", label: "Casado (Married)" },
        { value: "viudo", label: "Viudo (Widowed)" },
        { value: "divorciado", label: "Divorciado (Divorced)" }
    ];

    // Valores de la opcion de revolucionaria
    const revolutionaryOptions = [
        { value: "ujc", label: "UJC" },
        { value: "minint", label: "MININT" },
        { value: "pcc", label: "PCC" }
    ];
    
    
    // Manejar cambios en los campos del formulario
    const [errors, setErrors] = useState<Record<string, string>>({}); // Usamos Record<string, string> en lugar de FormErrors
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [isEditing, setIsEditing] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {}; // También usamos Record aquí
        if (!formData.estadoCivil) newErrors.estadoCivil = "Seleccione estado civil";
        if (!formData.integracionRevolucionaria) newErrors.integracionRevolucionaria = "Seleccione una opción";
        if (!formData.occupacion.trim()) newErrors.occupacion = "La ocupación es obligatoria";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(validateForm ()) {
            try {
                await crearDatosSocial(formData);
                alert("Datos sociales creados exitosamente");
                setIsEditing(false);
            } catch (error) {
                console.error("Error al crear los datos sociales:", error);
            }
        };
        }

    return (
    <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Agregar Datos Sociales</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Estado Civil</label>
            <select
              name="estadoCivil"
              value={formData.estadoCivil}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 pl-3 py-2 text-base focus:outline-none sm:text-sm"
            >
              <option value="">Selecciona estado civil</option>
              <option value="soltero">Soltero</option>
              <option value="casado">Casado</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Integración Revolucionaria</label>
            <select
              name="integracionRevolucionaria"
              value={formData.integracionRevolucionaria}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 pl-3 py-2 text-base focus:outline-none sm:text-sm"
            >
              <option value="">Selecciona opción</option>
              <option value="ujc">UJC</option>
              <option value="minint">MININT</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Ocupación</label>
            <input
              type="text"
              name="occupacion"
              value={formData.occupacion}
              onChange={handleChange}
              className="block w-full rounded-md border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 pl-3 py-2 text-base focus:outline-none sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white px-4 py-2 rounded-md"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
    );
};