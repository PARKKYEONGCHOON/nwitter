//import logo from './logo.svg';
//import './App.css';

import { useEffect, useState } from "react";
import AppRouter from "components/Router";
//import AppRouter from "./Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //eslint-disable-line no-unused-vars
  const [userObj, setUserObj] = useState(null);
  //setInterval(() => console.log(authService.currentUser), 2000);
  useEffect(() => {authService.onAuthStateChanged((user) => {
    if(user)
    {
      setIsLoggedIn(user);
      setUserObj({
        uid: user.uid,
        displayName: user.displayName,
        updateProfile: (args) => user.updateProfile(args),
      });
    }
    else
    {
      setIsLoggedIn(false);
      setUserObj(false);
    }
    setInit(true);
  });
  },[]);

  const refreshUser = () => {
    setUserObj(authService.currentUser);
  };

  return ( 
  <>
    {init ? (<AppRouter refreshUser={refreshUser} isLoggedIn={isLoggedIn} userObj={userObj}/> 
    ) : ( "initializing...")}
    
  </>
  
  
  
  
  );
    //<div>App</div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  
}

export default App;
