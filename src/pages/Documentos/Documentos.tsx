import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { FiSearch, FiFilter, FiTrash2, FiUpload, FiX } from "react-icons/fi";
import { BsFileEarmarkPdf, BsFileEarmarkImage, BsFileEarmarkText } from "react-icons/bs";

type FileType = "pdf" | "image" | "text";

interface FileItem {
    id: number;
    name: string;
    size: string;
    type: FileType;
    lastModified: string;
    }

    const Documentos: React.FC = () => {
    const [files, setFiles] = useState<FileItem[]>([
        {
        id: 1,
        name: "Project_Proposal.pdf",
        size: "2.5 MB",
        type: "pdf",
        lastModified: "2024-01-15 14:30"
        },
        {
        id: 2,
        name: "Meeting_Notes.txt",
        size: "45 KB",
        type: "text",
        lastModified: "2024-01-14 09:15"
        },
        {
        id: 3,
        name: "Profile_Picture.jpg",
        size: "1.2 MB",
        type: "image",
        lastModified: "2024-01-13 16:45"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const getFileIcon = (type: FileType) => {
        switch (type) {
        case "pdf":
            return <BsFileEarmarkPdf className="w-5 h-5 text-red-600" />;
        case "image":
            return <BsFileEarmarkImage className="w-5 h-5 text-blue-600" />;
        default:
            return <BsFileEarmarkText className="w-5 h-5 text-gray-600" />;
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFileUpload(droppedFiles);
    };

    const handleFileUpload = (uploadedFiles: File[]) => {
        setIsUploading(true);
        let progress = 0;
        const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setUploadProgress(0);
        }
        }, 300);
    };

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this file?")) {
        setFiles(files.filter(file => file.id !== id));
        }
    };

    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-black p-8">
        <div className="max-w-6xl mx-auto space-y-6">
            <div
            className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:border-white transition-colors duration-300 bg-gray-900"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            >
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleFileUpload(Array.from(e.target.files || []))
                }
                multiple
            />
            <FiUpload className="mx-auto h-12 w-12 text-white" />
            <p className="mt-2 text-sm text-gray-300">Drag your files here or click to upload</p>
            <p className="text-xs text-gray-400 mt-1">Supported files: PDF, Images, Text (Max: 10MB)</p>
            </div>

            <div className="flex gap-4 items-center">
            <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                type="text"
                placeholder="Search files..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white bg-gray-900 text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button
                onClick={() => setShowFilterModal(!showFilterModal)}
                className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 hover:bg-gray-800 flex items-center gap-2 text-white"
            >
                <FiFilter className="text-gray-300" />
                <span>Filter</span>
            </button>
            </div>

            {isUploading && (
            <div className="relative pt-1">
                <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                    <div className="h-2 bg-gray-700 rounded-full">
                    <div
                        className="h-2 bg-white rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                    ></div>
                    </div>
                </div>
                <button
                    onClick={() => setIsUploading(false)}
                    className="text-gray-400 hover:text-white"
                >
                    <FiX className="w-5 h-5" />
                </button>
                </div>
                <p className="text-xs text-gray-400 mt-1">{uploadProgress}% uploaded</p>
            </div>
            )}

            <div className="bg-gray-900 rounded-lg shadow overflow-x-auto border border-gray-800">
            <table className="min-w-full divide-y divide-gray-800">
                <thead className="bg-gray-800">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Size</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Modified</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                {filteredFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-gray-800 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                        {getFileIcon(file.type)}
                        <span className="ml-2 text-sm text-white">{file.name}</span>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{file.size}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{file.lastModified}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                        onClick={() => handleDelete(file.id)}
                        className="text-red-500 hover:text-red-400 transition-colors duration-200"
                        >
                        <FiTrash2 className="w-5 h-5" />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    );
};

export default Documentos;
