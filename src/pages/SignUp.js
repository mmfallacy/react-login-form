import {useContext} from 'react'
import {useForm} from "react-hook-form"
import {APIContext} from '../store'

export function SignUp(){

    /** @type {FirebaseAPI} - Firebase API Instance*/
    const API = useContext(APIContext)

    /** 
     * Form Handler 
     */
    const {register, handleSubmit} = useForm()
    
    /** @param {FormData} data - Sign Up form data */ 
    const onSubmit = async (data)=>{
        console.log(data)
        const {email, pass} = data
        API.signUp(email, pass)
    }   

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign Up</h1>
            <label htmlFor="email">Email: </label>
            <input ref={register} name="email" />
            <br/>
            <label htmlFor="pass">Password: </label>
            <input ref={register} type="password" name="pass" />
            <br/>
            <button>Signup</button>
            <br/>
            <br/>
            <span>{API.instanceUID}</span>
        </form>
    )
}