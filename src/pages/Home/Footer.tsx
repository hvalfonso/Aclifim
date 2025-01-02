import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter} from "react-icons/fa";

export default function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
                <a href="/" className="mb-4">
                <img
                    src="https://th.bing.com/th/id/OIP.A-h7FhzrzgUzn75V4NvKngAAAA?rs=1&pid=ImgDetMain"
                    alt="Company Logo"
                    className="h-16 w-auto"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/120x48?text=Logo";
                    target.alt = "Fallback";
                    }}
                />
                </a>
                <p className="text-sm text-center">Asociacion Cubana de Limitados <br /> Fisicos y Motores</p>
            </div>

            {/* Contacto de Informacion */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <div className="space-y-3">
                <div className="flex items-center">
                    <FaPhone className="mr-2 text-blue-600" />
                    <a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">
                    +53 (544) 82-464
                    </a>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-blue-600" />
                    <a href="mailto:info@company.com" className="hover:text-blue-600 transition-colors">
                    Aclifim@gmail.com
                    </a>
                </div>
                </div>
            </div>

            {/* Direccion */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Sede Principal</h3>
                <div className="flex items-start">
                <FaMapMarkerAlt className="mr-2 text-blue-600 mt-1" />
                <div>
                    <p className="mb-1">Calle 6 #106 e/ 1ra y 3ra</p>
                    <p>Playa, La Habana, Cuba</p>
                    <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                    >
                    Get Directions
                    </a>
                </div>
                </div>
            </div>

            {/* Redes sociales */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
                <div className="flex space-x-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    aria-label="Facebook"
                >
                    <FaFacebook size={24} />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition-colors"
                    aria-label="Twitter"
                >
                    <FaTwitter size={24} />
                </a>
                </div>
            </div>
            </div>

            {/* Copyright*/}
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm">
                © {currentYear} Company Name. All rights reserved.
            </p>
            </div>
        </div>
        </footer>
    );
};