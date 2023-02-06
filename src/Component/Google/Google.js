import { Fragment, React, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import Card from "../UI/Card";
import classes from "./Google.module.css";
import Home from "../Pages/Home";
import Button from "../UI/Button";

const clientId =
  "809515788873-8h36j161t9rktleeinj0ua7f39t98pfm.apps.googleusercontent.com";

function Google(props) {
  const [profile, setProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
 

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    console.log("success:", res);
    setProfile(res.profileObj);
  };
  

  const onFailure = (error) => {
    console.error(error);
  };


  const logoutHandler = () => {
    setProfile(false);
    setIsLoggedIn(false);
  };

  return (
    <>
     

      <Card>
      <div className={classes.logout}>
        {profile && <Button onClick={logoutHandler}>Log Out</Button>}
      </div>
        {profile  && (
          <>
            <Home name={profile.givenName}></Home>
          </>
        )}

        {!profile && (
          <div className={classes.google}>
            <h2> URL Shortner </h2>
            <h2> Welcome To My App</h2>
            <br></br>
            <img src="https://shrtco.de/B1dSEd" alt="imag"></img>
            <p> Please Sign into your Google Account</p>
            
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={isLoggedIn}
            />
          </div>
        )}
      </Card>
    </>
  );
}

export default Google;
