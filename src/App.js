import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login, SignUp} from './pages'
import {APIProvider} from './store'
import {FirebaseAPI} from './utils'

const FIREBASE_CONFIG = process.env.REACT_APP_FIREBASE_CONFIG
const API = new FirebaseAPI(FIREBASE_CONFIG)

function App() {
  return (


    <APIProvider instance={API}>
      <Router>
        <Route exact path="/" component={MockHome}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={SignUp}/>
      </Router>
    </APIProvider>

  );
}

const MockHome = () => <div>Home</div>


export default App;
