import {  } from 'react-router';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Multichart from './component/Multichart';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import Forex from './component/Forex';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import LoadingSpin from 'react-loading-spin';
import styled from 'styled-components';

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="App">
          {
            loading ? ( 
              <Loading>              
              <LoadingSpin
                  duration = '2s'
                  width = '15px'
                  timingFunction = 'ease-in-out'
                  direction = 'alternate'
                  size = '200px'
                  primaryColor = 'yellow'
                  secondaryColor = '#333'
              />          
              </Loading>
            ) : ""
          }
          {
            !user ? (
                  <div>
                  <Login/>
                  </div>
            ) : (
      <Router>
          
        <Switch>
              <Route exact path="/">
              <Header/>
                  <Login/>
              </Route>
              <Route path="/home">
              <Header/>
                <Home/>
              </Route>
              <Route path="/multichart">
              <Multichart/>
              </Route>
              <Route path="/forex">
              <Header/>
              <Forex/>
              </Route>
        </Switch>
      </Router>
            )
          }
    </div>
  );
}

export default App;

const Loading = styled.div`
display: flex;
justify-content:center;
align-items: center;
min-height: 100vh;
position: absolute;
top:0;
left: 0;
right: 0;
z-index: 200;
  &::-webkit-scrollbar{
    display: none;
    
  }
`;