import {useContext} from 'react'
import {APIContext} from '../store'

export function Login(){
    const API = useContext(APIContext)

    return (
        <form>
            <h1>Login</h1>
            <label for="email">Email: </label>
            <input name="email" />
            <br/>
            <label for="pass">Password: </label>
            <input name="pass" />
            <br/>
            <button>Submit</button>
            <br/>
            <br/>
            <span>{API.instanceUID}</span>
        </form>
    )
}