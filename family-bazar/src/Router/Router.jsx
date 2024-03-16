import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import data from '../../public/data'
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

import Cart from '../pages/cart/Cart';
import DetailsPage from '../pages/Details/DetailsPage';
import Listing from '../pages/Listing/Listing';

const Router = ({children}) => {
    console.log(data);
    const router = createBrowserRouter([
        {
          path: '/',
          element: <Main data={data} />,
          children:[
            {
                path: '/',
                element: <Home data={data.productData} />
              },
              {
                path: '/cat/:id',
                element: <Listing data={data.productData} single={true} />
              },
              {
                path: '/cat/:id/:id',
                element: <Listing data={data.productData} single={false} />
              },
              {
                path: '/product/:id',
                element: <DetailsPage data={data.productData} />
              },
              {
                path: '/cart',
                element: <Cart />
              },
              // {
              //   path: '/signIn',
              //   element: <SignIn />
              // },
              // {
              //   path: '/signUp',
              //   element: <SignUp />
              // },
              {
                path: '*',
                element: <NotFound />
              }
          ]
        },
       
      ]);
      
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    );
};

export default Router;