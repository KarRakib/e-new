import React from 'react';
import Header from '../components/header/header';
import   {Outlet} from 'react-router-dom'

const Main = ({data}) => {
    console.log('from Main',data);
    return (
        <div>
            <Header data={data.productData} />
           <Outlet/>
            
        </div>
    );
};

export default Main;