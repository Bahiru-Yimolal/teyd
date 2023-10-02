import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

const HomePage = () => {
  return (
    <div className="h-screen bg-[#0095FF]">
      <div class="grid grid-cols-9 gap-4 ">
        <div class="bg-red-600 mt-2 ml-4 rounded-xl">
          {/* <img className="w-full h-full" src={logo} alt="logo"></img> */}
        </div>
        <div class="col-span-8 mt-2">
          <nav className="max-w-6xl bg-white shadow-lg rounded-xl ">
            <div className="container p-4">
              <Link to="/">
                <h2 className="text-black text-l font-bold text-center">
                  {" "}
                  AKAKI KALITY SUBCITY ADMINISTATION{" "}
                </h2>
              </Link>
            </div>
          </nav>
        </div>
        <div>HomePage</div>
      </div>
      <div class="grid grid-cols-5 gap-4 ">
        <div class="bg-red-600 mt-2 ml-4 rounded-xl">
          {/* <img className="w-full h-full" src={logo} alt="logo"></img> */}
        </div>
        <div class="col-span-8 mt-2">
          <nav className="max-w-6xl bg-white shadow-lg rounded-xl ">
            <div className="container p-4">
              <Link to="/">
                <h2 className="text-black text-l font-bold text-center">
                  {" "}
                  AKAKI KALITY SUBCITY ADMINISTATION{" "}
                </h2>
              </Link>
            </div>
          </nav>
        </div>
        <div>HomePage</div>
      </div>
    </div>
  );
};

export default HomePage;
