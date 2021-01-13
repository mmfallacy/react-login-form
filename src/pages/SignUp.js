import {useContext} from 'react'
import {APIContext} from '../store'

export function SignUp(){

    /** @type {FirebaseAPI} - Firebase API Instance*/
    const API = useContext(APIContext)

    return (
        <form>
            <h1>Sign Up</h1>
            <label htmlFor="email">Email: </label>
            <input name="email" />
            <br/>
            <label htmlFor="pass">Password: </label>
            <input name="pass" />
            <br/>
            <button>Signup</button>
            <br/>
            <br/>
            <span>{API.instanceUID}</span>
        </form>
    )
}