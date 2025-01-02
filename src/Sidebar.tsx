import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaBriefcase, FaCalendarAlt, FaUserPlus, FaHome } from "react-icons/fa";
import "./App.css";

function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">PlaceCell</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-200 flex items-center gap-2"><FaHome />Home</Link>
          <Link to="/companies" className="text-white hover:text-blue-200 flex items-center gap-2"><FaBriefcase />Companies</Link>
          <Link to="/events" className="text-white hover:text-blue-200 flex items-center gap-2"><FaCalendarAlt />Events</Link>
          <Link to="/auth" className="text-white hover:text-blue-200 flex items-center gap-2"><FaUserPlus />Login/Register</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link to="/" className="block text-white p-2 hover:bg-blue-700">Home</Link>
          <Link to="/companies" className="block text-white p-2 hover:bg-blue-700">Companies</Link>
          <Link to="/events" className="block text-white p-2 hover:bg-blue-700">Events</Link>
          <Link to="/auth" className="block text-white p-2 hover:bg-blue-700">Login/Register</Link>
        </div>
      )}
    </nav>
  );
};

const HomePage = () => {
  const companies = [
    {
      id: 1,
      name: "Tech Corp",
      image: "https://images.unsplash.com/photo-1496200186974-4293800e2c20",
      role: "Software Engineer"
    },
    {
      id: 2,
      name: "Data Systems",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      role: "Data Analyst"
    },
    {
      id: 3,
      name: "Cloud Solutions",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      role: "Cloud Engineer"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to PlaceCell</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your gateway to exciting career opportunities. We connect talented students with leading companies.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={company.image} 
                alt={company.name} 
                className="w-full h-48 object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab";
                }}
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{company.name}</h3>
                <p className="text-gray-600">{company.role}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const CompaniesPage = () => {
  const companies = [
    {
      id: 1,
      name: "Tech Corp",
      logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20",
      description: "Leading technology solutions provider",
      roles: ["Software Engineer", "Product Manager"]
    },
    {
      id: 2,
      name: "Data Systems",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      description: "Big data and analytics company",
      roles: ["Data Analyst", "Business Intelligence"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Participating Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companies.map((company) => (
          <div key={company.id} className="bg-white rounded-lg shadow-lg p-6">
            <img 
              src={company.logo} 
              alt={company.name} 
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4" 
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab";
              }}
            />
            <h2 className="text-xl font-bold text-center mb-2">{company.name}</h2>
            <p className="text-gray-600 text-center mb-4">{company.description}</p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {company.roles.map((role, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {role}
                </span>
              ))}
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventsPage = () => {
  const events = [
    {
      id: 1,
      title: "Tech Career Fair 2024",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      companies: ["Tech Corp", "Data Systems", "Cloud Solutions"],
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2"
    },
    {
      id: 2,
      title: "Interview Workshop",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      companies: ["Tech Corp"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-full h-48 object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://images.unsplash.com/photo-1475721027785-f74eccf877e2";
              }}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.date} | {event.time}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Participating Companies:</h3>
                <div className="flex flex-wrap gap-2">
                  {event.companies.map((company, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 ${isLogin ? "bg-blue-600 text-white" : "text-gray-600"}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 ${!isLogin ? "bg-blue-600 text-white" : "text-gray-600"}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="contact">
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className="w-full px-3 py-2 border rounded-lg"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Sidebar;
