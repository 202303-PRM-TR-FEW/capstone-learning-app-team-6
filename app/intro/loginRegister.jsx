import React, { userState } from "react";
const Signup = () => {
  return (
    <div className="bg-gray-400 w-screen h-screen p-10">
      <div className="flex flex-col bg-white mx-auto my-5 p-10 w-2/6 h-6/6  rounded-lg shadow-lg">
        <h2 className="text-slate-800 text-3xl font-bold text-center">
          Register With Us
        </h2>
        <form className="flex flex-col gap-3 mt-5">
          <label className="flex flex-col gap-1 text-slate-700 font-semibold ">
            <p className="text-xl">Name:</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="outline outline-2 outline-gray-300 focus:outline-blue-400 p-1 pl-3 rounded h-12"
            />
            <small className="text-red-500 text-base"> </small>
          </label>

          <label className="flex flex-col gap-2 text-slate-700 font-semibold ">
            <p className="text-xl">Last Name:</p>
            <input
              type="text"
              placeholder="Enter last name"
              className="outline outline-2 outline-gray-300 focus:outline-blue-400 p-1 pl-3 rounded h-12"
            />
            <small className="text-red-500 text-base">
              Please enter things here
            </small>
          </label>

          <label className="flex flex-col gap-2 text-slate-700 font-semibold ">
            <p className="text-xl">Username</p>
            <input
              type="text"
              placeholder="Enter your username"
              className="outline outline-2 outline-gray-300 focus:outline-blue-400 p-1 pl-3 rounded h-12"
            />
            <small className="text-red-500 text-base">
              Please enter things here
            </small>
          </label>

          <label className="flex flex-col gap-2 text-slate-700 font-semibold ">
            <p className="text-xl">Email:</p>
            <input
              type="text"
              placeholder="Enter username"
              className="outline outline-2 outline-gray-300 focus:outline-blue-400 p-1 pl-3 rounded h-12"
            />
            <small className="text-red-500 text-base">
              Please enter things here
            </small>
          </label>

          <label className="flex flex-col gap-2 text-slate-700 font-semibold ">
            <p className="text-xl">Password:</p>
            <input
              type="text"
              placeholder="Enter username"
              className="outline outline-2 outline-gray-300 focus:outline-blue-400 p-1 pl-3 rounded h-12"
            />
            <small className="text-red-500 text-base">
              Please enter things here
            </small>
          </label>

          <input
            type="submit"
            value="Register"
            placeholder="Enter username"
            className="bg-blue-500 mx-auto cursor-pointer text-white text-2xl mt-5 font-norml hover:bg-blue-400 w-5/6 rounded-lg h-12"
          />
          <h3 className="mx-auto font-normal">or</h3>
          <a className="mx-auto underline text-blue-900 text-xl" href="#">
            Cancel
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
