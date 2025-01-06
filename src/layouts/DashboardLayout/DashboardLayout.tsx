import { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { FaCircleChevronRight, FaCircleNodes, FaHand, FaUser, FaUsers } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {

    const [isSidebarOpen, setisSidebarOpen] = useState<boolean>(false)

    const navMenu = [
        {
            label: "Usuarios",
            path: "/user",
            icon: <FaUser/>
        },
        {
            label: "Asociados",
            path: "/asociados",
            icon: <FaUsers/>
        },
        {
            label: "Actividades",
            path: "/actividades/cultural",
            icon: <FaHand />
        },
        {
            label: "Sociales",
            path: "/sociales",
            icon:  <FaCircleNodes />
        },
        {
            label: "Documentos",
            path: "/documentos",
            icon: <FaFileDownload />
        },
    ]

    // Functions
    const toggleSidebar = () => {
        setisSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className='w-full h-screen'>
            <main className='flex h-full'>
                <aside className={`flex flex-col items-center justify-start transition-all duration-200 ${ isSidebarOpen ? 'w-72' : 'w-16' } p-4 bg-slate-700`}>
                    <button className={`transition-all duration-300 justify-start ${ isSidebarOpen ? 'rotate-180' : '' }`} onClick={toggleSidebar}> 
                        <FaCircleChevronRight className='w-6 h-6 text-white'/>
                    </button>

                    <nav className='flex flex-col items-center justify-start gap-2 w-full mt-4'>
                        {navMenu.map((item, index) => (
                            <Link key={index} to={item.path} className='flex w-full justify-center text-center py-2 text-white hover:bg-slate-500 rounded-md'>
                                <div className={`grid  ${ isSidebarOpen ? 'grid-cols-3' : '' }  items-center gap-2`}>
                                    <div className='flex justify-end'>
                                        {item.icon}
                                    </div>
                                    <div className={`${isSidebarOpen ? 'block' : 'hidden'}`} >
                                        {item.label}
                                    </div>
                                </div>

                            
                            </Link>
                        ))}
                    </nav>

                </aside>
                <div className='w-full h-full'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
