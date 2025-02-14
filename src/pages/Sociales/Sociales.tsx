// import { useEffect, useState } from "react";
// import { FiDelete, FiEdit2 } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import {  crearDatosSocial, eliminarDatosSocial, modificarDatosSocial, obtenerDatosSocial} from "../../service/APISocial";
// import { DatosSocialesProps } from "../../types/sociales";


// // Rutas a las actividades y home
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex space-x-4">
//           <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
//           <Link to="/deportiva" className="text-white hover:text-gray-300">Actividad Deportiva</Link>
//           <Link to="/cultural" className="text-white hover:text-gray-300">Actividad Cultural</Link>
//           <Link to="/educativa" className="text-white hover:text-gray-300">Actividad Educativa</Link>
//           <Link to="/asociado" className="text-white hover:text-gray-300">Asociado</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// interface FormErrors {
//     estadoCivil?: string;
//     integracionRevolucionaria?: string;
//     occupacion?: string;
// }


// // Funciones de conversión
// const snakeToCamel = (obj: any): any => {
//     const newObj: any = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = key.replace(/_([a-z])/g, (match) => match[1].toUpperCase());
//             newObj[newKey] = obj[key];
//         }
//     }
//     return newObj;
// };

// const camelToSnake = (obj: any): any => {
//     const newObj: any = {};
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
//             newObj[newKey] = obj[key];
//         }
//     }
//     return newObj;
// };

// // Componente Sociales

// export default function Sociales() {
//     const [formData, setFormData] = useState<DatosSocialesProps>({
//       estadoCivil: "",
//       integracionRevolucionaria: "",
//       occupacion: "",
//       id: 0, // Se actualizará al obtener datos
//     });
//     const [isEditing, setIsEditing] = useState(false);
//     const id_asociado = 1; // ⚠️ Reemplaza esto con el ID real del asociado

//     // Obtener datos sociales
//     useEffect(() => {
//         const fetchDatosSociales = async () => {
//             try {
//                 const response = await obtenerDatosSocial(id_asociado);
//                 const transformedData = snakeToCamel(response.data); // Convertimos los datos al formato camelCase
//                 setFormData(transformedData);
//             } catch (error) {
//                 console.error("Error al obtener datos sociales:", error);
//             }
//         };

//         fetchDatosSociales();
//     }, [id_asociado]);


//     // Valores de la opcion de estado civil
//     const civilStatusOptions = [
//         { value: "soltero", label: "Soltero (Single)" },
//         { value: "casado", label: "Casado (Married)" },
//         { value: "viudo", label: "Viudo (Widowed)" },
//         { value: "divorciado", label: "Divorciado (Divorced)" }
//     ];

//     // Valores de la opcion de revolucionaria
//     const revolutionaryOptions = [
//         { value: "ujc", label: "UJC" },
//         { value: "minint", label: "MININT" },
//         { value: "pcc", label: "PCC" }
//     ];
    
    
//     // Manejar cambios en los campos del formulario
//     const [errors, setErrors] = useState<Record<string, string>>({}); // Usamos Record<string, string> en lugar de FormErrors
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // Alternar entre modo edición y visualización
//     const handleEdit = () => {
//         setIsEditing(true);
//     };

    
//     const validateForm = () => {
//         const newErrors: Record<string, string> = {}; // También usamos Record aquí
//         if (!formData.estadoCivil) newErrors.estadoCivil = "Seleccione estado civil";
//         if (!formData.integracionRevolucionaria) newErrors.integracionRevolucionaria = "Seleccione una opción";
//         if (!formData.occupacion.trim()) newErrors.occupacion = "La ocupación es obligatoria";
        
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
    

//         const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//             e.preventDefault();
//             if (validateForm()) {
//                 try {
//                     const dataToSend = camelToSnake(formData); // Convertimos los datos al formato snake_case antes de enviarlos
        
//                     if (isEditing) {
//                         await modificarDatosSocial(id_asociado, dataToSend); // Si está editando, actualiza
//                     } else {
//                         await crearDatosSocial(dataToSend); // Si no, crea un nuevo registro
//                     }
        
//                     alert("Datos sociales guardados con éxito");
//                     setIsEditing(false);
//                 } catch (error) {
//                     alert("Error al guardar los datos sociales");
//                 }
//             }
//         };
        
  

//     const handleDelete = async () => {
//         if (!formData.id) return;
//         const confirmDelete = window.confirm("¿Estás seguro de eliminar estos datos?");
//         if (confirmDelete) {
//           try {
//             await eliminarDatosSocial(formData.id);
//             alert("Datos eliminados con éxito");
//             setFormData({ estadoCivil: "", integracionRevolucionaria: "", occupacion: "", id: 0 });
//             setIsEditing(false);
//           } catch (error) {
//             alert("Error al eliminar datos");
//           }
//         }
//       };

//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <div className="min-h-screen bg-stone-100 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//           <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
//             <div className="text-center">
//               <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Datos Sociales</h2>
//               <p className="text-sm text-gray-600">Por favor completar los datos sociales</p>
//             </div>

//             <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//               <div className="space-y-4">
//                 {/* Estado Civil */}
//                 <div>
//                   <label htmlFor="estadoCivil" className="block text-sm font-medium text-gray-700">
//                     Estado Civil
//                   </label>
//                   <div className="mt-1 relative">
//                     <select
//                       id="estadoCivil"
//                       name="estadoCivil"
//                       value={formData.estadoCivil}
//                       onChange={handleChange}
//                       className={`block w-full rounded-md border ${errors.estadoCivil ? "border-red-300" : "border-gray-300"} 
//                         focus:ring-emerald-500 focus:border-emerald-500 pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm`}
//                       disabled={!isEditing}
//                     >
//                       <option value="">Selecciona el estado</option>
//                       {civilStatusOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                     {errors.estadoCivil && (
//                       <p className="mt-1 text-xs text-red-600">{errors.estadoCivil}</p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Integración Revolucionaria */}
//                 <div>
//                   <label htmlFor="integracionRevolucionaria" className="block text-sm font-medium text-gray-700">
//                     Integración Revolucionaria
//                   </label>
//                   <div className="mt-1 relative">
//                     <select
//                       id="integracionRevolucionaria"
//                       name="integracionRevolucionaria"
//                       value={formData.integracionRevolucionaria}
//                       onChange={handleChange}
//                       className={`block w-full rounded-md border ${errors.integracionRevolucionaria ? "border-red-300" : "border-gray-300"} 
//                         focus:ring-sky-500 focus:border-sky-500 pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm`}
//                       disabled={!isEditing}
//                     >
//                       <option value="">Selecciona la integracion</option>
//                       {revolutionaryOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                           {option.label}
//                         </option>
//                       ))}
//                     </select>
//                     {errors.integracionRevolucionaria && (
//                       <p className="mt-1 text-xs text-red-600">{errors.integracionRevolucionaria}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="occupacion" className="block text-sm font-medium text-gray-700">
//                     Ocupación
//                   </label>
//                   <div className="mt-1">
//                     <input
//                       type="text"
//                       id="occupacion"
//                       name="occupacion"
//                       value={formData.occupacion}
//                       onChange={handleChange}
//                       placeholder="Añade una ocupación"
//                       className={`block w-full rounded-md border ${errors.occupacion ? "border-red-300" : "border-gray-300"} 
//                         focus:ring-emerald-500 focus:border-emerald-500 pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm`}
//                       disabled={!isEditing}
//                     />
//                     {errors.occupacion && (
//                       <p className="mt-1 text-xs text-red-600">{errors.occupacion}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Botones */}
//               <div className="flex justify-between">
//                   <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded-md">Guardar</button>
//                   <button type="button" onClick={handleEdit} className="bg-sky-600 text-white px-4 py-2 rounded-md"><FiEdit2 /> Editar</button>
//                   <button type="button" onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded-md"><FiDelete /> Eliminar</button>
//                 </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// };
