import {useContext} from 'react'
import {APIContext} from '../store'

export function Login(){
    
    /** @type {FirebaseAPI} - Firebase API Instance*/
    const API = useContext(APIContext)

    return (
        <form>
            <h1>Login</h1>
            <label htmlFor="email">Email: </label>
            <input name="email" />
            <br/>
            <label htmlFor="pass">Password: </label>
            <input name="pass" />
            <br/>
            <button>Submit</button>
            <br/>
            <br/>
            <span>{API.instanceUID}</span>
        </form>
    )
}