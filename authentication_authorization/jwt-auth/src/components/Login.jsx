import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };
    // console.log("output", payload);
    axios
      .post("logn_api", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        alert("login success");
        console.log("login succesfful", res);
      })
      .catch((err) => {
        alert("login failed");
        console.log("login failed", err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">Login Page</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-80            
          bg-white     
          p-6                 
          rounded-xl          
          flex flex-col gap-4 "
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name=""
          id="email"
          placeholder="Enter your mail"
          className=" border border-gray-300 
            rounded-md 
            px-3 py-2       
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-400 "
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name=""
          id="pass"
          placeholder="Enter the password"
          className="border border-gray-300 
            rounded-md 
            px-3 py-2
            focus:outline-none 
            focus:ring-2 
            focus:ring-blue-400"
        />
        <button
          type="submit"
          className="
            bg-blue-500 
            text-white 
            py-2 
            rounded-md 
            hover:bg-blue-600 
            transition
          "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
