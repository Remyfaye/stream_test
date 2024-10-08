import Image from "next/image";
import React, { useState } from "react";

interface SignUpProps {
  setToken: (token: string) => void;
}

const SignUp: React.FC<SignUpProps> = ({ setToken }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = () => {
    if (username && password) {
      const token = Math.random().toString(36).substr(2);
      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      setToken(token);
      alert("User signed up successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="p-5 max-w-xl mx-auto">
      <div className=" my-5">
        <h1 className="text-2xl text-center font-bold  text-red-700 ">
          ICFPLUS
        </h1>
        <h1 className="text-center text-xl">Work without limits</h1>
      </div>

      <form className="mt-10">
        <div className="flex flex-col  my-5">
          <label className="text-gray-400">Username</label>
          <input
            placeholder="enter your name"
            className="mt-2 py-4 border-[1px] border-black/20 rounded-xl px-3"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col ">
          <label className="text-gray-400">Password</label>
          <input
            type="password"
            placeholder="enter your name"
            className="mt-2 py-4 border-[1px] border-black/20 rounded-xl px-3"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSignUp}
          className="bg-red-600 my-20 py-3 w-[100%] text-xl rounded-full text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
