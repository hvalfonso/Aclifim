// src/index.tsx
import { createRoot } from 'react-dom/client';
import "./App.css";

import AppRoutes from './routes/AppRoutes';
// import Home from './pages/Home/Home';
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';


createRoot(document.getElementById('root')!).render(
    // {/* <Register></Register> */}
    // {/* <Login></Login> */}
    // {/* <Home></Home> */}
    // {/* <Asociados></Asociados> */}
    <AppRoutes />
);
