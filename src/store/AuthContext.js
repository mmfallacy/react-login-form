import {createContext, useState, useEffect, useContext} from 'react';
import {APIContext} from './'

/**
 * Context to handle Firebase Auth state
 * @type {React.Context<T>}
 */
export const AuthContext = createContext(null)

/**
 * Component to encapsulate Auth Context Provider
 * @type {React.ReactElement}
 */
export const AuthProvider = ({children}) => {

    const API = useContext(APIContext)

    const [user, setUser] = useState(null)

    /**
     * Set context value to user auth state on mount
     */
    useEffect(()=>{
        API.onAuthStateChange(setUser)
    },[API])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}