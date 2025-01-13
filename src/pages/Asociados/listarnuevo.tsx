// import React, { useState, useEffect } from "react";
// import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";

// const ProblemSolvingTable = () => {
//   const [data, setData] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     date: "",
//     problem: "",
//     user: "",
//     division: ""
//   });
//   const [editIndex, setEditIndex] = useState(null);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     // Load data from localStorage on component mount
//     const savedData = localStorage.getItem("problemData");
//     if (savedData) {
//       setData(JSON.parse(savedData));
//     }
//   }, []);

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("problemData", JSON.stringify(data));
//   }, [data]);

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.date) newErrors.date = "Date is required";
//     if (!formData.problem) newErrors.problem = "Problem is required";
//     if (!formData.user) newErrors.user = "User is required";
//     if (!formData.division) newErrors.division = "Division is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     let newData;
//     if (editIndex !== null) {
//       newData = [...data];
//       newData[editIndex] = formData;
//     } else {
//       newData = [...data, formData];
//     }

//     setData(newData);
//     setIsModalOpen(false);
//     setFormData({ date: "", problem: "", user: "", division: "" });
//     setEditIndex(null);
//     setErrors({});

//     // Download JSON file
//     const dataStr = JSON.stringify(newData, null, 2);
//     const blob = new Blob([dataStr], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "problemData.json";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     URL.revokeObjectURL(url);
//   };

//   const handleEdit = (index) => {
//     setFormData(data[index]);
//     setEditIndex(index);
//     setIsModalOpen(true);
//   };

//   const handleDelete = (index) => {
//     const newData = data.filter((_, i) => i !== index);
//     setData(newData);
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Problem Solving Database</h1>
//         <button
//           onClick={() => {
//             setFormData({ date: "", problem: "", user: "", division: "" });
//             setIsModalOpen(true);
//             setEditIndex(null);
//           }}
//           className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           <FaPlus /> Add New Entry
//         </button>
//       </div>

//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Problem</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Division</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {data.map((item, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
//                 <td className="px-6 py-4">{item.problem}</td>
//                 <td className="px-6 py-4">{item.user}</td>
//                 <td className="px-6 py-4">{item.division}</td>
//                 <td className="px-6 py-4 flex gap-2">
//                   <button
//                     onClick={() => handleEdit(index)}
//                     className="text-blue-600 hover:text-blue-800"
//                   >
//                     <FaEdit size={18} />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(index)}
//                     className="text-red-600 hover:text-red-800"
//                   >
//                     <FaTrash size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg p-6 w-full max-w-md">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-gray-800">
//                 {editIndex !== null ? "Edit Entry" : "Add New Entry"}
//               </h2>
//               <button
//                 onClick={() => {
//                   setIsModalOpen(false);
//                   setErrors({});
//                 }}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <IoMdClose size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Date</label>
//                 <input
//                   type="date"
//                   value={formData.date}
//                   onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                   className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.date ? "border-red-500" : ""}`}
//                 />
//                 {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Problem</label>
//                 <input
//                   type="text"
//                   value={formData.problem}
//                   onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
//                   className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.problem ? "border-red-500" : ""}`}
//                 />
//                 {errors.problem && <p className="text-red-500 text-xs mt-1">{errors.problem}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">User</label>
//                 <input
//                   type="text"
//                   value={formData.user}
//                   onChange={(e) => setFormData({ ...formData, user: e.target.value })}
//                   className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.user ? "border-red-500" : ""}`}
//                 />
//                 {errors.user && <p className="text-red-500 text-xs mt-1">{errors.user}</p>}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Division</label>
//                 <input
//                   type="text"
//                   value={formData.division}
//                   onChange={(e) => setFormData({ ...formData, division: e.target.value })}
//                   className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.division ? "border-red-500" : ""}`}
//                 />
//                 {errors.division && <p className="text-red-500 text-xs mt-1">{errors.division}</p>}
//               </div>

//               <div className="flex justify-end gap-2 mt-6">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsModalOpen(false);
//                     setErrors({});
//                   }}
//                   className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   {editIndex !== null ? "Update" : "Save"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProblemSolvingTable;