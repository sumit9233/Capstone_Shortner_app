import {  React, useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import Card from "../UI/Card";
import classes from "./Google.module.css";

const clientId =
  "809515788873-8h36j161t9rktleeinj0ua7f39t98pfm.apps.googleusercontent.com";

function Google(props) {
  const [profile, setProfile] = useState(false);

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
    props.onLogged(true)
  };
  

  const onFailure = (error) => {
    console.error(error);
  };



  return (
    <>
      <Card>

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
            />
          </div>
        )}
      </Card>
    </>
  );
}

export default Google;
