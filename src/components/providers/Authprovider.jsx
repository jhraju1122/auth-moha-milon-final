import React from 'react';
import { createContext} from 'react';
import PropTypes from 'prop-types'; // ES6
import { useContext } from 'react';


const AuthContext = createContext(null);
const Authprovider = ({children}) => {
 
    const authInfo = {name: 'nodi sagor khal bill'}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
 
Authprovider.prototypes = {
    children: PropTypes.node
}

// 
// 1,  create AuthContext
// 2, set provider with value 
// 3, use the auth provider in the main.jsx file 
// 4, access children in the authProvider component as children and use it in the middle  of the provier 