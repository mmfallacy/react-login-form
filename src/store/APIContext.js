import {createContext, useState} from 'react';

/**
 * Context to handle API instance
 * @type {React.Context<T>}
 */
export const APIContext = createContext(null)

/**
 * Component to encapsulate API Context Provider
 * @type {React.ReactElement}
 */
export const APIProvider = ({instance, children}) => {

    const [_instance] = useState(instance)

    return (
        <APIContext.Provider value={_instance}>
            {children}
        </APIContext.Provider>
    )
}