//import { useState } from "react";
import { HashRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Naviagtion";
//import Auth from "../routes/Auth";
//import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    //const [isLoggedIn, setIsLoggedIn] = useState(false); //eslint-disable-line no-unused-vars
    return (
        /*<div style={{maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
        }}>*/
            <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}

            <div style={{maxWidth: 890,
                    width: "100%",
                    margin: "0 auto",
                    marginTop: 80,
                    display: "flex",
                    justifyContent: "center",
            }}>
            <Routes>
                {isLoggedIn ? (
                    <> 
                        <Route path="/" element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile userObj={userObj} refreshUser={refreshUser}/>} />  
                    </>
                ) : (
                    
                    <Route path="/" element={<Auth />} />
                )}

                

            </Routes>
            </div>
        </Router>
       //</div>
        
    );
};


export default AppRouter;