import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../components/Home/Home';
import AOS  from 'aos';
import "aos/dist/aos.css";

const Router = ({children}) => {

    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Main handleOrderPopup={handleOrderPopup}/>,
            children:[
                {
                    path:'/',
                    element:<Home handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    );
};

export default Router;