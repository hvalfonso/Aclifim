import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

export default function Login () {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login attempted with:", { username, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
            <div className="text-center">
            <div className="flex justify-center">
                <div className="h-16 w-16 bg-gray-700 rounded-full flex items-center justify-center">
                <FaLock className="h-8 w-8 text-indigo-500" />
                </div>
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">Bienvenido</h2>
            <p className="mt-2 text-sm text-gray-400">Por favor, inicia sesión en tu cuenta</p>
            </div>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div className="relative">
                <label htmlFor="username" className="sr-only">
                    Nombre del Usuario
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdPerson className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-600 placeholder-gray-500 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Nombre del Usuario"
                />
                </div>

                <div className="relative">
                <label htmlFor="password" className="sr-only">
                    Contraseña
                </label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-600 placeholder-gray-500 text-white rounded-lg bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                />
                <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                >
                    {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                    ) : (
                    <FaEye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                    )}
                </button>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    Recuérdame
                </label>
                </div>

                <div className="text-sm">
                <a
                    href="#"
                    className="font-medium text-indigo-500 hover:text-indigo-400 transition-colors duration-200"
                >
                    ¿Olvidaste tu contraseña?
                </a>
                </div>
            </div>

            <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
                Regístrate
            </button>

            <p className="text-center text-sm text-gray-400">
                ¿No tienes una cuenta?{" "}
                <a
                href="#"
                className="font-medium text-indigo-500 hover:text-indigo-400 transition-colors duration-200"
                >
                Regístrate
                </a>
            </p>
            </form>
        </div>
        </div>
    );
};