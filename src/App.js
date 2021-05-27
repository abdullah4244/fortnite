
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import UpcomingItems from './components/UpcomingItems/UpcomingItems';
import CurrentItems from './components/CurrentItems/CurrentItems';
function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Switch>
       <Route path="/uitems" exact component = {UpcomingItems} />
       <Route path="/citems" exact component = {CurrentItems} />
       <Route path="/" component = {Home} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
