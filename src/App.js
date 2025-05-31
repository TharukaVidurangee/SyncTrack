import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

//pages
import Dashboard from './pages/Dashboard/Dashboard';
import Create from './pages/Create/Create';
import Project from './pages/Project/Project';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter >

      {/* adding the Sidebar */}
      <Sidebar />
      <div className='container'>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
      
      </BrowserRouter>
    </div>
  );
}

export default App



/* required pages for this project

homepage - dashboard
login 
signup
create
project details - project 

*/
