'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Home() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };

    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      console.log("abc")
      e.preventDefault();
      setLoading(true);
      fetch(`/api/user`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({username, name, email, password})
      }).then(res=>res.json())
      .then((data)=>{
        console.log(data)
      })
    };
  
    const handleGoogleLogin = () => {
      // Perform login with Google logic here
    };
  
    const handleFacebookLogin = () => {
      // Perform login with Facebook logic here
    };
  
    const handleTwitterLogin = () => {
      // Perform login with Facebook logic here
    };
  
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:h-screen mt-4">
      <div className="flex flex-col items-center justify-center w-full md:w-1/4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome!</h1>
            <p className="mt-2 text-gray-500">
              Create a new account.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

          <div class="relative z-0">
            <input type="email" id="email" class="block py-4 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" onChange={handleEmailChange} placeholder=" " required/>
            <label for="email" class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>

          <div class="relative z-0">
            <input type="text" id="username" class="block py-4 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" onChange={handleUsernameChange} placeholder=" " required/>
            <label for="username" class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
          </div>

          <div class="relative z-0">
            <input type="password" id="password" class="block py-4 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" onChange={handlePasswordChange} placeholder=" " required/>
            <label for="password" class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          </div>

          <div class="relative z-0">
            <input type="password" id="password" class="block py-4 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" onChange={handlePasswordChange} placeholder=" " required/>
            <label for="password" class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
          </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
            </div>
          

            <div className="relative flex items-center justify-center m-4 pt-4 text-sm px-5 text-gray-400">Or Sign Up Using</div>
            <div className="flex flex-row justify-center items-center gap-4">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="bg-red-500 hover:bg-red-700 py-2.5 px-2.5 rounded-full focus:outline-none focus:shadow-outline mb-3 text-white"
                >
              <FaGoogle />
              </button>
              <button 
                type="button"
                onClick={handleFacebookLogin}
                className="bg-blue-700 hover:bg-blue-900 py-2.5 px-2.5 rounded-full focus:outline-none focus:shadow-outline mb-3 text-white">
              <FaFacebook />
              </button>
              <button 
                type="button"
                onClick={handleTwitterLogin}
                className="bg-sky-500 hover:bg-sky-700 py-2.5 px-2.5 rounded-full focus:outline-none focus:shadow-outline mb-3 text-white">
              <FaTwitter />
              </button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-500 hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-full md:w-1/2 ml-8 border-0 rounded-lg bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] ">
      </div>
    </div>
  );
}