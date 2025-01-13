import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiSave, FiX, FiEdit, FiLink2, FiLink } from "react-icons/fi";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Switch } from "@headlessui/react";

interface UserInfo {
    username: string;
    email: string;
    profilePicture: string;
    }

    interface Notifications {
    email: boolean;
    sms: boolean;
    }

    interface Passwords {
    current: string;
    new: string;
    confirm: string;
    }

    interface LinkedAccounts {
    google: boolean;
    facebook: boolean;
    twitter: boolean;
    }

    interface Errors {
    current?: string;
    new?: string;
    confirm?: string;
    }

export default function EditarUsuario () {
    const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    });

    const [notifications, setNotifications] = useState<Notifications>({
    email: true,
    sms: false,
    });

    const [passwords, setPasswords] = useState<Passwords>({
    current: "",
    new: "",
    confirm: "",
    });

    const [linkedAccounts] = useState<LinkedAccounts>({
    google: true,
    facebook: false,
    twitter: true,
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleUserInfoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const validatePasswords = (): boolean => {
    const newErrors: Errors = {};
    if (!passwords.current) newErrors.current = "Current password is required";
    if (!passwords.new) newErrors.new = "New password is required";
    if (passwords.new !== passwords.confirm) {
        newErrors.confirm = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validatePasswords()) {
        console.log("Form submitted");
    }
    };

        return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-heading font-heading text-foreground">Configurar Cuenta</h1>

            {/* User Information Section */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-heading mb-6">Informacion del Usuario</h2>
                <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="relative">
                    <img
                    src={userInfo.profilePicture}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
                    }}
                    />
                    <button className="absolute bottom-0 right-0 bg-blue-400 text-primary-foreground p-2 rounded-full">
                    <FiEdit size={16} />
                    </button>
                </div>
                <div className="flex-1 space-y-4 w-full">
                    <div>
                        <label className="block text-sm font-body mb-2">Nombre de Usuario </label>
                        <input
                            type="text"
                            name="username"
                            value={userInfo.username}
                            onChange={handleUserInfoChange}
                            className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-body mb-2">Apellido</label>
                        <input
                            type="text"
                            name="username"
                            value={userInfo.username}
                            onChange={handleUserInfoChange}
                            className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-body mb-2">Nombre de Usuario </label>
                        <input
                            type="text"
                            name="username"
                            value={userInfo.username}
                            onChange={handleUserInfoChange}
                            className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-body mb-2">Nombre de Usuario </label>
                        <input
                            type="text"
                            name="username"
                            value={userInfo.username}
                            onChange={handleUserInfoChange}
                            className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-body mb-2">Nombre de Usuario </label>
                        <input
                            type="text"
                            name="username"
                            value={userInfo.username}
                            onChange={handleUserInfoChange}
                            className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-body mb-2">Correo</label>
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleUserInfoChange}
                            className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                        />
                    </div>
                </div>
            </div>

            {/* Password Management */}
            <div className="bg-card p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-heading mb-6">Password Management</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-body mb-2">Current Password</label>
                    <input
                    type="password"
                    name="current"
                    value={passwords.current}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                    />
                    {errors.current && (
                    <p className="text-destructive text-sm mt-1">{errors.current}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-body mb-2">New Password</label>
                    <input
                    type="password"
                    name="new"
                    value={passwords.new}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                    />
                    {errors.new && (
                    <p className="text-destructive text-sm mt-1">{errors.new}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-body mb-2">
                    Confirm New Password
                    </label>
                    <input
                    type="password"
                    name="confirm"
                    value={passwords.confirm}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border border-input rounded-sm focus:ring-2 focus:ring-ring"
                    />
                    {errors.confirm && (
                    <p className="text-destructive text-sm mt-1">{errors.confirm}</p>
                    )}
                </div>
                </form>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end">
                <button className="flex items-center gap-2 px-6 py-2 bg-destructive text-destructive-foreground rounded-sm">
                <FiX /> Cancel
                </button>
                <button className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-primary-foreground rounded-sm">
                <FiSave /> Save Changes
                </button>
            </div>
            </div>
        </div>
    </div>
    );
};

