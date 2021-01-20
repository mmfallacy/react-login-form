import {useContext} from 'react'
import {useForm} from "react-hook-form"
import {APIContext} from '../store'

export function Login(){
    
    /** @type {FirebaseAPI} - Firebase API Instance*/
    const API = useContext(APIContext)

    /** 
     * Form Handler 
     */
    const {register, handleSubmit} = useForm()
    
    /** @param {FormData} data - Login form data */ 
    const onSubmit = async (data)=>{
        console.log(data)
        const {email, pass} = data
        API.signIn(email, pass)
    }   

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <label htmlFor="email">Email: </label>
            <input ref={register} name="email" />
            <br/>
            <label htmlFor="pass">Password: </label>
            <input ref={register} name="pass" />
            <br/>
            <button>Submit</button>
            <br/>
            <br/>
            <span>{API.instanceUID}</span>
        </form>
    )
}