import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login, SignUp} from './pages'

function App() {
  return (

    <Router>
      <Route exact path="/" component={MockHome}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={SignUp}/>
    </Router>

  );
}

const MockHome = () => <div>Home</div>


export default App;
