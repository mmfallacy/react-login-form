import {createContext, useState} from 'react';

export const APIContext = createContext(null)

export const APIProvider = ({instance, children}) => {

    const [_instance] = useState(instance)

    return (
        <APIContext.Provider value={_instance}>
            {children}
        </APIContext.Provider>
    )
}