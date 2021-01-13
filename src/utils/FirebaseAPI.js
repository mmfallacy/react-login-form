import firebase from 'firebase/app';
import 'firebase/auth'

export class FirebaseAPI {
    constructor(config){
        this._app = firebase.initializeApp(config)
        this._user = null
        this._instanceuid = Math.random()
    }

    onAuthStateChange(fn) {
        this._app.auth().onAuthStateChanged(fn)
    }

    async signIn(email,password){
        return await this._app.auth().signInWithEmailAndPassword(email,password)
    }

    async signUp(email, password){
        return await this._app.auth().createUserWithEmailAndPassword(email,password)
    }

    get instanceUID(){
        return this._instanceuid
    }

}