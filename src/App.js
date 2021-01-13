import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Route exact path="/" component={MockHome}/>
      <Route exact path="/login" component={MockLogin}/>
      <Route exact path="/signup" component={MockSignUp}/>
    </Router>

  );
}

const MockHome = () => <div>Home</div>
const MockLogin = () => <div>Login</div>
const MockSignUp = () => <div>Sign Up</div>


export default App;
