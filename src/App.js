import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Login, SignUp} from './pages'
import {APIProvider} from './store'
import {FirebaseAPI} from './utils'

// Read Firebase Credentials from .env
const FIREBASE_CONFIG = process.env.REACT_APP_FIREBASE_CONFIG

// Initialize an instance for the FirebaseAPI
const API = new FirebaseAPI(FIREBASE_CONFIG)

function App() {
  return (

    <APIProvider instance={API}>

      <Router>
        <Route exact path="/" component={MockHome}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>

        <MockNav />
      </Router>
      
    </APIProvider>

  );
}

const MockHome = () => <div>Home</div>

const MockNav = () => 
    <nav>
      <Link to="/">Home</Link> <br/>
      <Link to="/login">Login</Link> <br/>
      <Link to="/signup">SignUp</Link> <br/>
    </nav>

export default App;
