

export function Login(){


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
        </form>
    )
}