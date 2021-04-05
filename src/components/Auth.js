import React, { useContext, useCallback } from "react";
import { googleAuthProvider, auth } from "../firebase";
import { Redirect, useHistory } from "react-router-dom";
import * as ROUTES from "../routes";
import { AuthContext } from "../contexts/AuthContext";
import "../App.scss";
import { motion } from "framer-motion";

const scaleVariants = {
  hover: {
    scale: 1.1,
  },
};

export function SignIn() {
  const { currentUser } = useContext(AuthContext);

  const signInWithGoogle = useCallback(async (e) => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (error) {
      alert(error);
    }
  }, []);

  if (currentUser) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <div className="signin">
      <motion.button
        variants={scaleVariants}
        whileHover="hover"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </motion.button>
    </div>
  );
}

export function SignOut() {
  const history = useHistory();
  async function handleSignOut() {
    try {
      await auth.signOut();
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    auth.currentUser && (
      <motion.button
        variants={scaleVariants}
        whileHover="hover"
        onClick={handleSignOut}
      >
        Sign Out
      </motion.button>
    )
  );
}
