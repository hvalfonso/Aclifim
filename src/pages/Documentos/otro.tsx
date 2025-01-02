import React, { useState, useEffect } from "react";
import {
  FiUpload,
  FiSearch,
  FiBox,
  FiDownload,
  FiCreditCard,
  FiStar,
} from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

interface Document {
  id: number;
  title: string;
  type: "digital" | "physical";
  status: "stored" | "pending";
  date: string;
}

interface SubscriptionPlan {
  name: string;
  price: string;
  storage: string;
  physical: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface Notification {
  show: boolean;
  message: string;
  type: "success" | "error" | "";
}

const DocumentStoragePlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"home" | "upload" | "search">(
    "home"
  );
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [notification, setNotification] = useState<Notification>({
    show: false,
    message: "",
    type: "",
  });

  const dummyDocuments: Document[] = [
    { id: 1, title: "Financial Report 2024", type: "digital", status: "stored", date: "2024-01-15" },
    { id: 2, title: "Legal Contracts", type: "physical", status: "pending", date: "2024-01-14" },
    { id: 3, title: "Employee Records", type: "digital", status: "stored", date: "2024-01-13" },
  ];

  const subscriptionPlans: SubscriptionPlan[] = [
    { name: "Basic", price: "DT 9.99", storage: "10GB", physical: "5 boxes" },
    { name: "Pro", price: "DT 24.99", storage: "50GB", physical: "15 boxes" },
    { name: "Enterprise", price: "DT 49.99", storage: "Unlimited", physical: "50 boxes" },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Smith",
      role: "Business Owner",
      content: "This platform revolutionized our document management system.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Office Manager",
      content: "Seamless integration of physical and digital storage solutions.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  ];

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setNotification({ show: true, message: "Document uploaded successfully!", type: "success" });
        setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
      }
    }, 500);
  };

  const HomePage: React.FC = () => (
    <div className="space-y-8">
      {/* HomePage content here */}
    </div>
  );

  const UploadPage: React.FC = () => (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleUpload} className="space-y-6">
        {/* Upload form content here */}
      </form>
    </div>
  );

  const SearchPage: React.FC = () => (
    <div>
      <div className="mb-8">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {dummyDocuments.map((doc) => (
          <div key={doc.id} className="border rounded-lg p-4 hover:shadow-lg transition">
            {/* Document card content here */}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Navbar content here */}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {notification.show && (
          <div className={`mb-4 p-4 rounded-lg ${notification.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {notification.message}
          </div>
        )}

        {activeTab === "home" && <HomePage />}
        {activeTab === "upload" && <UploadPage />}
        {activeTab === "search" && <SearchPage />}
      </main>
    </div>
  );
};

export default DocumentStoragePlatform;
