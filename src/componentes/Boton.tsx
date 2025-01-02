// Button.tsx
import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode; // Icono opcional
    }

const Boton: React.FC<ButtonProps> = ({ label, onClick, icon }) => {
    return (
        <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
        {icon && <span className="inline-block mr-2">{icon}</span>}
        {label}
        </button>
    );
};

export default Boton;
