import React, { useContext } from 'react';
import Authprovider from './providers/Authprovider';

const Home = () => {
    const authInfo = useContext(0);
    console.log(authInfo);
    return (
        <div>
             <h2>i am from home</h2>
        </div>
    );
};

export default Home; 