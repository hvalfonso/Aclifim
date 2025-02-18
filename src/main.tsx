import { createRoot } from 'react-dom/client';
import "./App.css";
import { StrictMode } from 'react';
// import ListarDatosSociales from './pages/Sociales/ListarDatosSociales';
// import Sociales from './pages/Sociales/Sociales';

import Sidebar from './Sidebar';
// import Login from './pages/Auth/Login';

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <Sidebar></Sidebar>
</StrictMode>
);
