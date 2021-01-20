import firebase from 'firebase/app';
import 'firebase/auth'


/**
 * Facade class to facilitate firebase related operations 
 * @type {FirebaseApp}
 * @param {Object} firebaseConfig - This represents the JSON containing the
 * Google Cloud Platform credentials.
 * @see Firebase Documentation {@link https://firebase.google.com/docs/reference/js/firebase#initializeapp}
*/
export class FirebaseAPI {
    constructor(config){
        
        /** @type {firebase.app.App} */
        this._app = firebase.initializeApp(config)

        this._app.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

        /** @type {User|null} */        
        this._user = null
    }
    
    /** 
     * Method of class `FirebaseAPI` to encapsulate `firebase.app.auth().onAuthStateChanged`
     * @param {Function} fn - Callback Function to run when auth state changes
     */
    onAuthStateChange(fn) {
        this._app.auth().onAuthStateChanged(fn)
    }

    /** 
     * Method of class `FirebaseAPI` to encapsulate `firebase.app.auth().signInWithEmailAndPassword`
     * @param {string} email - Email of user to sign in with
     * @param {string} password - Password of user to sign in with
     */
    async signIn(email,password){
        return await this._app.auth().signInWithEmailAndPassword(email,password)
    }

    /** 
     * Method of class `FirebaseAPI` to encapsulate `firebase.app.auth().createUserWithEmailAndPassword`
     * @param {string} email - Email of user to sign un with
     * @param {string} password - Password of user to sign un with
     */
    async signUp(email, password){
        return await this._app.auth().createUserWithEmailAndPassword(email,password)
    }


}