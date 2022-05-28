import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebaseAuth, GAuthProvider} from "../firebase/clientApp";

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // GitHub as the only included Auth Provider.
  // // You could add and configure more here!
  signInOptions: [GAuthProvider.providerId],
};

function SignInScreen() {
  return (
    <div>
      <h1>Notice-Board Login</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
    </div>
  );
}

export default SignInScreen;
