import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';


const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        <Copyright />
      </>
    );
};

export default MainLayout;