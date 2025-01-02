import React, { useState } from "react";
import { FiEdit, FiDownload, FiEye, FiUser, FiDollarSign, FiHome, FiFile } from "react-icons/fi";
import { BsBank } from "react-icons/bs";

interface PersonalDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  religion: string;
  email: string;
  contactNumber: string;
}

interface BankingDetails {
  accountHolder: string;
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  branchAddress: string;
}

interface AddressDetails {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Document {
  name: string;
  date: string;
}

const DetailsViewPage: React.FC = () => {
  const [expandedDocs, setExpandedDocs] = useState<boolean>(false);

  const personalDetails: PersonalDetails = {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "01/01/1990",
    gender: "Male",
    religion: "Hindu",
    email: "john.doe@example.com",
    contactNumber: "+91-9876543210",
  };

  const bankingDetails: BankingDetails = {
    accountHolder: "John Doe",
    bankName: "XYZ Bank",
    accountNumber: "123456789",
    ifscCode: "XYZ123456",
    branchAddress: "123 Financial Street, Mumbai",
  };

  const addressDetails: AddressDetails = {
    streetAddress: "456 Residency Lane",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400001",
    country: "India",
  };

  const documents: Document[] = [
    { name: "Aadhar Card", date: "2024-11-30" },
    { name: "PAN Card", date: "2024-11-30" },
    { name: "Salary Slip", date: "2024-12-01" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Details Overview</h1>
            <p className="mt-2 text-sm text-gray-600">Review the submitted details below.</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <FiEdit className="mr-2" /> Edit Details
          </button>
        </div>

        {/* Personal Details Section */}
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <div className="flex items-center mb-4">
            <FiUser className="text-blue-600 text-xl mr-2" />
            <h2 className="text-xl font-semibold">Personal Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(personalDetails).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                <span className="mt-1 text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banking Details Section */}
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <div className="flex items-center mb-4">
            <BsBank className="text-blue-600 text-xl mr-2" />
            <h2 className="text-xl font-semibold">Banking Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(bankingDetails).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                <span className="mt-1 text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Address Details Section */}
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <div className="flex items-center mb-4">
            <FiHome className="text-blue-600 text-xl mr-2" />
            <h2 className="text-xl font-semibold">Address Details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(addressDetails).map(([key, value]) => (
              <div key={key} className="flex flex-col">
                <span className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                <span className="mt-1 text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="bg-white shadow rounded-lg mb-6 p-6">
          <div className="flex items-center mb-4">
            <FiFile className="text-blue-600 text-xl mr-2" />
            <h2 className="text-xl font-semibold">Uploaded Documents</h2>
          </div>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FiFile className="text-gray-400 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-500">Uploaded on {doc.date}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-blue-600 hover:text-blue-800">
                    <FiEye className="text-xl" />
                  </button>
                  <button className="p-2 text-blue-600 hover:text-blue-800">
                    <FiDownload className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <FiEdit className="inline mr-2" /> Edit Details
          </button>
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            Submit Final
          </button>
          <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
            <FiDownload className="inline mr-2" /> Download All Documents
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsViewPage;
