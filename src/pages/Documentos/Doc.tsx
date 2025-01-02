// import React, { useState } from "react";
// import { Document, Page, pdfjs } from "react-pdf";
// import { FaFileUpload, FaTrash, FaSave, FaFilePdf } from "react-icons/fa";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const PDFViewer = () => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
//   const [numPages, setNumPages] = useState(null);
//   const [notes, setNotes] = useState({});

//   // Sample PDF list data
//   const samplePDFs = [
//     { id: 1, name: "Annual Report 2023.pdf", size: "2.5 MB", lastModified: "2023-12-01" },
//     { id: 2, name: "Project Proposal.pdf", size: "1.8 MB", lastModified: "2023-11-28" },
//     { id: 3, name: "Financial Statement.pdf", size: "3.2 MB", lastModified: "2023-11-25" },
//     { id: 4, name: "Technical Documentation.pdf", size: "4.1 MB", lastModified: "2023-11-20" }
//   ];

//   const handleFileUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles([...selectedFiles, ...files]);
//     if (!notes[0]) setNotes({ ...notes, 0: "" });
//   };

//   const handleRemoveFile = (index) => {
//     const updatedFiles = selectedFiles.filter((_, i) => i !== index);
//     setSelectedFiles(updatedFiles);
//     const updatedNotes = { ...notes };
//     delete updatedNotes[index];
//     setNotes(updatedNotes);
//     if (currentPdfIndex >= updatedFiles.length) {
//       setCurrentPdfIndex(Math.max(0, updatedFiles.length - 1));
//     }
//   };

//   const handleNoteChange = (value) => {
//     setNotes({ ...notes, [currentPdfIndex]: value });
//   };

//   const saveNotes = () => {
//     console.log("Notes saved:", notes);
//     alert("Notes saved successfully!");
//   };

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* PDF List Section */}
//         <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Available PDFs</h2>
//           <div className="grid gap-4">
//             {samplePDFs.map((pdf) => (
//               <div
//                 key={pdf.id}
//                 className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
//                 onClick={() => console.log(`Selected PDF: ${pdf.name}`)}
//               >
//                 <div className="flex items-center">
//                   <FaFilePdf className="text-red-500 text-2xl mr-3" />
//                   <div>
//                     <h3 className="font-medium">{pdf.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       Size: {pdf.size} • Last Modified: {pdf.lastModified}
//                     </p>
//                   </div>
//                 </div>
//                 <button className="text-gray-500 hover:text-gray-700">
//                   View
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mb-8">
//           <label
//             className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
//           >
//             <div className="flex flex-col items-center space-y-2">
//               <FaFileUpload className="w-8 h-8 text-gray-400" />
//               <span className="font-medium text-gray-600">
//                 Drop PDF files here or click to upload
//               </span>
//             </div>
//             <input
//               type="file"
//               className="hidden"
//               accept=".pdf"
//               multiple
//               onChange={handleFileUpload}
//             />
//           </label>
//         </div>

//         {selectedFiles.length > 0 && (
//           <div className="mb-8">
//             <h3 className="text-lg font-semibold mb-4">Uploaded Files:</h3>
//             <div className="flex flex-wrap gap-4">
//               {selectedFiles.map((file, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-center p-3 rounded-lg ${
//                     currentPdfIndex === index
//                       ? "bg-blue-100 border-blue-300"
//                       : "bg-white border-gray-200"
//                   } border`}
//                 >
//                   <span
//                     className="cursor-pointer mr-2"
//                     onClick={() => setCurrentPdfIndex(index)}
//                   >
//                     {file.name}
//                   </span>
//                   <button
//                     onClick={() => handleRemoveFile(index)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             {selectedFiles.length > 0 ? (
//               <Document
//                 file={selectedFiles[currentPdfIndex]}
//                 onLoadSuccess={onDocumentLoadSuccess}
//                 className="border rounded-lg"
//               >
//                 {Array.from(new Array(numPages), (el, index) => (
//                   <Page
//                     key={`page_${index + 1}`}
//                     pageNumber={index + 1}
//                     width={window.innerWidth / 2.5}
//                     className="mb-4"
//                   />
//                 ))}
//               </Document>
//             ) : (
//               <div className="flex items-center justify-center h-64 text-gray-500">
//                 No PDF selected
//               </div>
//             )}
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-semibold">Notes</h3>
//               <button
//                 onClick={saveNotes}
//                 className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
//               >
//                 <FaSave className="mr-2" />
//                 Save Notes
//               </button>
//             </div>
//             <textarea
//               value={notes[currentPdfIndex] || ""}
//               onChange={(e) => handleNoteChange(e.target.value)}
//               className="w-full h-[calc(100vh-300px)] p-4 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               placeholder="Take notes here..."
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PDFViewer;
