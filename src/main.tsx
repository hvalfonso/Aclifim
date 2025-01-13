// src/index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./App.css";

// Esto son las rutas del autenticacion
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';

// Estas son las rutas principales
// import Home from './pages/Home/Home';
// import EditarUsuario from './pages/User/User';
// import Asociados from './pages/Asociados/Asociados';

// Estas son las rutas de las actividades
import ActiCultural from './pages/Actividades/Cultural';
// import ActiEducativa from './pages/Actividades/Cultural';
// import ActiDeportiva from './pages/Actividades/Cultural';


// Estas son las rutas de las participaciones
// import PDeportiva from './pages/Participacion/PDeportiva/PDeportiva'
// import PCultural from './pages/Participacion/PCultural/PCultural'

createRoot(document.getElementById('root')!).render(
<StrictMode>
    {/* <Register></Register> */}
    {/* <Login></Login> */}
    {/* <Home></Home> */}

    {/* <EditarUsuario></EditarUsuario> */}
    {/* <Asociados></Asociados> */}


    {/* <PDeportiva></PDeportiva> */}
    {/* <PCultural></PCultural> */}

    <ActiCultural></ActiCultural>
</StrictMode>
);
