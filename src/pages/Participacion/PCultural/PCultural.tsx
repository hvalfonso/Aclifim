import React, { useState } from "react";
import { FiSearch, FiEdit, FiTrash2, FiEye, FiX, FiPlus } from "react-icons/fi";

// Define interfaces for the props
    interface Customer {
    id: number;
    pCultural: string;
    fecha: string;
    puesto: string;
    lugar: string;
    }

    interface CustomerCardProps {
    customer: Customer;
    onView: (customer: Customer) => void;
    onEdit: (customer: Customer) => void;
    onDelete: (customer: Customer) => void;
    }

    interface CustomerFormProps {
    customer: Customer | null;
    onSubmit: (customer: Customer) => void;
    onCancel: () => void;
    }

    interface CustomerDetailProps {
    customer: Customer;
    onClose: () => void;
    }

    const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onView, onEdit, onDelete }) => (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
            {/* <img
            src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop`}
            alt={customer.deporte}
            className="w-12 h-12 rounded-full object-cover"
            /> */}
            <div>
            <h3 className=" text-gray-800 text-sm">{`Participacion Cultural: ${customer.pCultural}`}</h3>
            <h3 className=" text-gray-800 text-sm">{`Fecha: ${customer.fecha}`}</h3>
            <h3 className=" text-gray-800 text-sm">{`Puesto Alcanzado: ${customer.puesto}`}</h3>
            <h3 className=" text-gray-800 text-sm">{`Lugar: ${customer.lugar}`}</h3>
            </div>
        </div>
        <div className="flex space-x-2">
            <button
            onClick={() => onView(customer)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
            >
            <FiEye className="w-5 h-5" />
            </button>
            <button
            onClick={() => onEdit(customer)}
            className="p-2 text-green-600 hover:bg-green-50 rounded-full"
            >
            <FiEdit className="w-5 h-5" />
            </button>
            <button
            onClick={() => onDelete(customer)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            >
            <FiTrash2 className="w-5 h-5" />
            </button>
        </div>
        </div>
    </div>
    );

    const CustomerForm: React.FC<CustomerFormProps> = ({ customer, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState<Customer>(customer || {
        pCultural: "",
        fecha: "",
        puesto: "",
        lugar: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-gray-700">Participacion Cultural</label>
            <input
            type="text"
            required
            value={formData.pCultural}
            onChange={(e) => setFormData({ ...formData, pCultural: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
            type="date"
            required
            value={formData.fecha}
            onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Puesto Alcanzado</label>
            <input
            type="text"
            required
            value={formData.puesto}
            onChange={(e) => setFormData({ ...formData, puesto: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
        </div>
        <div>
            <label className="block text-sm font-medium text-gray-700">Lugar desarrollado</label>
            <input
            type="text"
            value={formData.lugar}
            onChange={(e) => setFormData({ ...formData, lugar: e.target.value as "Active" | "Inactive" })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
            </input>
        </div>
        <div className="flex justify-end space-x-2">
            <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
            Cancelar
            </button>
            <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
            Añadir
            </button>
        </div>
        </form>
    );
    };

    const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer, onClose }) => (
    <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-start mb-6">
        <div className="flex items-center space-x-4">
            <img
            src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop`}
            alt={customer.pCultural}
            className="w-16 h-16 rounded-full object-cover"
            />
            <div>
            <h2 className="text-xl font-bold text-gray-900">{customer.pCultural}</h2>
            <p className="text-gray-600">{customer.fecha}</p>
            </div>
        </div>
        <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full"
        >
            <FiX className="w-6 h-6" />
        </button>
        </div>
        <div className="space-y-6">
        <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Informacion de la participacion</h3>
            <div className="space-y-2">
            <p className="text-gray-600">Puesto Alcanzado: {customer.puesto}</p>
            <p className="text-gray-600">Lugar desarrollado: {customer.lugar}</p>
            </div>
        </div>
        </div>
    </div>
    );

export default function PCultural () {
    const [customers, setCustomers] = useState<Customer[]>([
        {
        id: 1,
        pCultural: "Futbol",
        fecha: "1/2/24",
        puesto: "2do",
        lugar: "Haaa"
        }
    ]);

    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

    const filteredCustomers = customers.filter(customer =>
        customer.pCultural.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.fecha.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddCustomer = (customerData: Customer) => {
        setCustomers([...customers, { ...customerData, id: customers.length + 1 }]);
        setIsFormOpen(false);
    };

    const handleEditCustomer = (customerData: Customer) => {
        setCustomers(customers.map(c => c.id === editingCustomer?.id ? { ...customerData, id: c.id } : c));
        setEditingCustomer(null);
    };

    const handleDeleteCustomer = (customer: Customer) => {
        setCustomers(customers.filter(c => c.id !== customer.id));
    };

    return (
        <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Participacion Cultural</h1>
                <nav className="space-x-4">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Inicio</button>
                <button className="px-4 py-2 text-blue-600 font-medium">Asociados</button>
                <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Actividad Cultural</button>
                </nav>
            </div>
            </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-lg">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                type="text"
                placeholder="Buscar Participaciones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <button
                onClick={() => setIsFormOpen(true)}
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            >
                <FiPlus className="mr-2" /> Añadir Participacion
            </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCustomers.map(customer => (
                <CustomerCard
                key={customer.id}
                customer={customer}
                onView={() => setSelectedCustomer(customer)}
                onEdit={() => setEditingCustomer(customer)}
                onDelete={handleDeleteCustomer}
                />
            ))}
            </div>

            {/* Modal for Customer Details */}
            {selectedCustomer && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="max-w-2xl w-full">
                <CustomerDetail customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
                </div>
            </div>
            )}

            {/* Modal for Add/Edit Customer Form */}
            {(isFormOpen || editingCustomer) && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">
                    {editingCustomer ? "Editar Participacion" : "Añadir Nueva Participacion"}
                </h2>
                <CustomerForm
                    customer={editingCustomer}
                    onSubmit={editingCustomer ? handleEditCustomer : handleAddCustomer}
                    onCancel={() => {
                    setIsFormOpen(false);
                    setEditingCustomer(null);
                    }}
                />
                </div>
            </div>
            )}
        </main>
        </div>
    );
};
