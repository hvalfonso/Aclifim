import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
        <header>Dashboard</header>
        <nav>/* Aquí el menú de navegación */</nav>
        <main>
            <Outlet />
        </main>
        </div>
    );
};

export default DashboardLayout;
