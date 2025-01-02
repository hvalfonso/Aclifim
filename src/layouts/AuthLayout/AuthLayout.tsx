import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
        <header>Autenticación</header>
        <main>
            <Outlet />
        </main>
        </div>
    );
};

export default AuthLayout;
