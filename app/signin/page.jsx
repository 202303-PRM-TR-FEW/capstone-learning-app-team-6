"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
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
        setError(
          "Incorrect email or password! Please provide valid email and password with at least 6 characters"
        );
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
    <div className="flex bg-gray-300 w-screen h-screen">
      <div className="w-1/2 flex items-center justify-center h-screen p-2">
        <div className="flex flex-col bg-white md:mx-auto ml-9 md:w-1/2 w-6/7 h-54 rounded-xl">
          <div
            className="text-blue-500 mx-auto m-10 mb-5 hover:text-blue-400 cursor-pointer"
            onClick={navigateToHomePage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-14 h-14"
            >
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
              <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
            </svg>
          </div>
          <h1 className="mb-4 mx-auto text-4xl font-semibold">
            Welcome to LearnU
          </h1>
          <div className="flex flex-col items-center justify-center">
            {error && (
              <div className="text-xl text-red-600 mt-2 text-center">
                {" "}
                {error}{" "}
              </div>
            )}
          </div>
          <input
            className="h-20 outline outline-2 outline-slate-400 focus:outline-blue-400 text-2xl rounded p-1 pl-4 m-10"
            type="text"
            placeholder="Email or Phone number"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (!e.target.value && !password) {
                setError(null);
              }
            }}
          />
          <div className={styles.passwordContainer}>
            <input
              className={`h-20 text-2xl rounded p-1 pl-4 pr-10 m-10 mt-0 ${styles.inputField} `}
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (!e.target.value && !email) {
                  setError(null);
                }
              }}
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className={`${styles.togglePasswordVisibility} cursor-pointer`}
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible size={18} />
              ) : (
                <AiOutlineEye size={18} />
              )}
            </span>
          </div>

          <input
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-2xl h-20 rounded-xl pl-4 m-10 mt-0"
            type="submit"
            onClick={handleLogin}
            value="Log In"
          />
          <hr className="bg-slate-400 mx-auto mt-0 w-1/2 h-1 rounded" />
          <input
            className="bg-green-600 hover:bg-green-500 text-white font-semibold text-2xl h-20 rounded-xl pl-4 m-10"
            type="button"
            onClick={handleSignup}
            name=""
            id=""
            value="Sign Up"
          />
          <input
            className="bg-red-600 hover:bg-red-500 text-white font-semibold text-2xl h-20 rounded-xl pl-4 m-10 mt-0"
            type="button"
            onClick={handleGoogleLogin}
            value="Log In with Google"
          />
        </div>
      </div>

      <div className="flex bg-white rounded-l-[70px] ml-auto items-center justify-center h-screen md:w-1/2 w-2/5">
        <Image
          className=""
          src="https://assets.api.uizard.io/api/cdn/stream/a8ce660d-47da-404a-b3b3-63ca6970ddcf.png"
          width={500}
          height={500}
          alt="front page"
        />
      </div>
    </div>
  );
};

export default LoginPage;
