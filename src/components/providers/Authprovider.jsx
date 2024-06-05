 import { createContext, useState} from 'react';
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
 


export const AuthContext = createContext(null); // 1,  create AuthContext
const Authprovider = ({children}) => {
 
const [user, setUser] = useState(null);

const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}


    const authInfo = { user, createUser }

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

//   {/* // 2, set provider with value  */}
         // 3, use the auth provider in the main.jsx file 
/* // 4, access children in the authProvider component as children and use it in the middle  of the provier  */
