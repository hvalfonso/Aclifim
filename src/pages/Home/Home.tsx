import { useState, useEffect } from "react";
import { FaHome,FaBars, FaTimes,  FaPaperPlane, FaOutdent, FaUserEdit } from "react-icons/fa";
import Footer from "./Footer";
import MainHome from "./MainHome";

export default function Home () {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString();
    };

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString("Es", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
        });
    };

    interface NavItem {
        icon: React.ReactNode;
        label: string;
    }

    const navItems: NavItem[] = [
        { icon: <FaHome size={20} />, label: "Asociados" },
        { icon: <FaUserEdit size={20} />, label: "Usuario" },
        { icon: <FaPaperPlane size={20} />, label: "Documentos" },
        { icon: <FaOutdent size={20} />, label: "Salir" }
    ];

    return (
        <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div
            className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white shadow-lg transition-all duration-300 ease-in-out`}
        >
            <div className="p-4">
            {/* Logo and Company Name */}
            <div className="flex flex-col items-center mb-8">
                <img
                src="https://th.bing.com/th/id/OIP.A-h7FhzrzgUzn75V4NvKngAAAA?rs=1&pid=ImgDetMain"
                alt="Logo"
                className="h-16 mb-2"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1633409361618-c73427e4e206";
                    target.onerror = null;
                }}
                />
                {isSidebarOpen && (
                <h1 className="text-xl font-bold text-gray-800">ACLIFIM</h1>
                )}
            </div>

            {/* Navigation Items */}
            <nav>
                {navItems.map((item, index) => (
                <button
                    key={index}
                    className="w-full flex items-center p-3 mb-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label={item.label}
                >
                    <span className="inline-flex justify-center items-center w-8">
                    {item.icon}
                    </span>
                    {isSidebarOpen && (
                    <span className="ml-3 text-sm font-medium">{item.label}</span>
                    )}
                </button>
                ))}
            </nav>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between p-4">
                <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle Sidebar"
                >
                {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>

                <div className="flex flex-col items-end">
                <h2 className="text-3xl font-bold text-gray-800">
                    {formatTime(currentTime)}
                </h2>
                <p className="text-sm text-gray-600">{formatDate(currentTime)}</p>
                </div>
            </div>

            {/* Subsystem Display */}
            <div className="px-4 py-2 bg-gray-50">
                <h1 className="text-center text-lg font-bold text-gray-700">
                Asociación Cubana de Limitados Físicos y Motores
                </h1>
            </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                <MainHome></MainHome>
            </main>

            <Footer />
            </div>
        </div>
    );
};

