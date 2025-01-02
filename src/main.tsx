// src/index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./App.css";

import Asociados from './pages/Asociados/Asociados';
// import Home from './pages/Home/Home';
// import Login from './pages/Auth/Login';
// import Register from './pages/Auth/Register';


createRoot(document.getElementById('root')!).render(
<StrictMode>
    {/* <Register></Register> */}
    {/* <Login></Login> */}
    {/* <Home></Home> */}
    <Asociados></Asociados>

</StrictMode>
);
