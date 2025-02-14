import { createRoot } from 'react-dom/client';
import "./App.css";
import { StrictMode } from 'react';

// import Sociales from './pages/Sociales/Sociales';
// import VistaAsociados from './pages/Sociales/VistasAsociados';
import Sidebar from './Sidebar';

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <Sidebar></Sidebar>
    {/* <ActiDeportiva></ActiDeportiva> */}
</StrictMode>
);
