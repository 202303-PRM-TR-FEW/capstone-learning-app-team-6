import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import { AiOutlineEyeInvisible } from "react-icons/ai";
// import { AiOutlineEye } from "react-icons/ai";

import styles from "./signinPage.module.css";

const LoginPage = () => {
  const router = useRouter();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        setError("Incorrect email or password!");
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        router.push("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navigateToHomePage = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles["login-box"]}>
        <h1 className="mb-4 text-xl font-semibold">Welcome to LearnU</h1>
        <div
          className="text-blue-500 hover:text-blue-400 cursor-pointer"
          onClick={navigateToHomePage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>
        </div>
        {error && <div className={styles.error}> {error} </div>}{" "}
        {/* error message */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles["input-field"]}
        />
        <div className={styles["password-container"]}>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles["input-field"]}
          />
          <span
            onClick={() => setPasswordVisible(!passwordVisible)}
            className={styles["toggle-password-visibility"]}
          >
            {passwordVisible ? (
              <AiOutlineEye size={18} />
            ) : (
              <AiOutlineEyeInvisible size={18} />
            )}
          </span>
        </div>
        <button
          onClick={handleSignup}
          className={`${styles.button} ${styles["button-signup"]}`}
        >
          Sign Up
        </button>
        <button
          onClick={handleLogin}
          className={`${styles.button} ${styles["button-login"]}`}
        >
          Log In
        </button>
        <button
          onClick={handleGoogleLogin}
          className={`${styles.button} ${styles["button-google"]}`}
        >
          Log In with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
