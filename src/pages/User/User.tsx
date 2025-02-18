// src/pages/User/EditarUsuario.tsx
import { useState, FormEvent} from "react";
import { FiSave, FiX } from "react-icons/fi";
import { updatePass } from "../../service/APIUser"; 
import { PasswordUserRequest } from "../../types/users";

interface Errors {
  current?: string;
  new?: string;
  confirm?: string;
  global?: string; // Para errores generales
}

export default function EditarUsuario() {
  // Supongamos que tienes el id del usuario en localStorage
  // o quizás lo obtienes de un store. Ejemplo:
  const userId = Number(localStorage.getItem("user_id")) || 1;

  // Estado para passwords
  const [currentPwd, setCurrentPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  // Estado para mensajes de error / éxito
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState<string | null>(null);

  // Validar contraseñas
  const validatePasswords = (): boolean => {
    const newErrors: Errors = {};
    if (!currentPwd) newErrors.current = "La contraseña actual es requerida.";
    if (!newPwd) newErrors.new = "La nueva contraseña es requerida.";
    if (newPwd !== confirmPwd) {
      newErrors.confirm = "Las contraseñas no coinciden.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validatePasswords()) {
      return; // si falla validación
    }

    try {
      // Llamar al endpoint
      // Aquí, tu backend podría requerir "currentPwd" y luego "password", "password2"
      // o depender de tu flujo. Asumiendo que 'password' y 'password2' sean newPwd y confirmPwd
      const payload: PasswordUserRequest = {
        id: userId,
        password: newPwd,
        password2: confirmPwd, 
        // OJO: si tu backend requiere la current, podrías usar password2 = ...
        // Dependiendo de tu definición
      };

      console.log("payload enviado", payload)
      const responseMsg = await updatePass(payload);
      console.log("Contraseña actualizada:", responseMsg);
      setSuccess("¡Contraseña actualizada con éxito!");
      setErrors({});
      // Aquí podrías limpiar campos
      setCurrentPwd("");
      setNewPwd("");
      setConfirmPwd("");
    } catch (err: any) {
        console.error("Error al actualizar contraseña:", err);
        // Haz un log de 'err.response.data' si existe
        if (err.response && err.response.data) {
          console.log("Detalle del error:", err.response.data);
        }
      }
    }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">Configuración de Cuenta</h1>

        {/* Cambiar contraseña */}
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-xl mb-6">Cambiar Contraseña</h2>
          {/* Si existe un error global, lo mostramos */}
          {errors.global && (
            <p className="text-red-500 mb-4">{errors.global}</p>
          )}
          {success && (
            <p className="text-green-500 mb-4">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-body mb-2">
                Contraseña Actual
              </label>
              <input
                type="password"
                value={currentPwd}
                onChange={(e) => setCurrentPwd(e.target.value)}
                className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
              />
              {errors.current && (
                <p className="text-red-500 text-sm mt-1">{errors.current}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-body mb-2">
                Nueva Contraseña
              </label>
              <input
                type="password"
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
              />
              {errors.new && (
                <p className="text-red-500 text-sm mt-1">{errors.new}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-body mb-2">
                Confirmar Nueva Contraseña
              </label>
              <input
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
              />
              {errors.confirm && (
                <p className="text-red-500 text-sm mt-1">{errors.confirm}</p>
              )}
            </div>

            <div className="flex gap-4 justify-end mt-6">
              <button
                type="button"
                className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-sm"
                onClick={() => {
                  // Accion de Cancel, p.e. resetear campos
                  setCurrentPwd("");
                  setNewPwd("");
                  setConfirmPwd("");
                  setErrors({});
                  setSuccess(null);
                }}
              >
                <FiX /> Cancelar
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-sm"
              >
                <FiSave /> Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
