"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="w-full h-screen bg-[#f6f6f6] flex items-center justify-center">
      <div className="bg-sky-400 w-full md:w-[500px] p-4 md:p-10 rounded-lg">
        <h1 className="text-2xl font-semibold text-center capitalize text-[#fff]">
          Welcome Back
        </h1>
        <form className="mt-10 w-full">
          <div className="w-full">
            <input
              className="w-full px-4 py-2 rounded"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="w-full mt-2 flex">
            <input
              className="w-[90%] px-4 py-2 rounded-tl rounded-bl"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your email password"
            />
            <button
              type="button"
              className="w-[10%]  bg-white rounded-tr rounded-br flex justify-center items-center"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <LuEyeOff className="text-2xl transition-all" />
              ) : (
                <LuEye className="text-2xl transition-all" />
              )}
            </button>
          </div>
          <div>
            <Link
              className="float-right text-blue-800"
              href={"forgot-password"}
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-2">
            <p>
              Did not have an account{" "}
              <Link className="text-blue-800" href={"/signup"}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
