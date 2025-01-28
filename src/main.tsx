import { createRoot } from 'react-dom/client';
import "./App.css";
import { StrictMode } from 'react';


import Sidebar from './Sidebar';

// import Home from './pages/Home/Home';

createRoot(document.getElementById('root')!).render(
<StrictMode>
    <Sidebar></Sidebar>
    {/* <Home></Home> */}
</StrictMode>
);
