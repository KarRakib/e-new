import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import   {Outlet} from 'react-router-dom'
import Footer from '../components/Footer/Footer';
const Main = ({handleOrderPopup}) => {
   
    return (
        <div>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Outlet/>
        <Footer/>
            
        </div>
    );
};

export default Main;