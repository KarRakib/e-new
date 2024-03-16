import React from 'react';
import Hero from '../Hero/Hero';
import Products from '../Products/Products';
import TopProducts from '../TopProducts/TopProducts';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
import Testimonials from '../Testimonials/Testimonials';
import Popup from '../Popup/Popup';

const Home = ({handleOrderPopup, orderPopup, setOrderPopup}) => {
    return (
        <div>
            <Hero handleOrderPopup={handleOrderPopup} />
            <Products />
            <TopProducts handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Subscribe />
            <Products />
            <Testimonials />
          
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
    );
};

export default Home;