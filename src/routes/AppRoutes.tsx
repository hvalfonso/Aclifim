import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout/DashboardLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Home from '../pages/Home/Home';
import User from '../pages/User/User';
import Asociados from '../pages/Asociados/Asociados';
import Cultural from '../pages/Actividades/Cultural';
import Deportiva from '../pages/Actividades/Deportiva';
import Educativa from '../pages/Actividades/Educativa';
import Sociales from '../pages/Sociales/Sociales';
import Documentos from '../pages/Documentos/Documentos';

const AppRoutes = () => {
return (
    <Router>
        <Routes>
        {/* Rutas de autenticación */}
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>

        {/* Rutas del dashboard (requieren autenticación) */}
        <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/asociados" element={<Asociados />} />
            <Route path="/actividades/cultural" element={<Cultural />} />
            <Route path="/actividades/deportiva" element={<Deportiva />} />
            <Route path="/actividades/educativa" element={<Educativa />} />
            <Route path="/sociales" element={<Sociales />} />
            <Route path="/documentos" element={<Documentos />} />
        </Route>
        </Routes>
    </Router>
    );
};

export default AppRoutes;
