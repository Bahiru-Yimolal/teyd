import React from 'react'
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import building from "../assets/kality.jpg"


const Home = () => {
  return (
    <div className="container min-h-screen min-w-full bg-[#0095FF]">
      <nav className="flex">
        <img
          className="w-16 h-16 mt-2 ml-10 cursor-pointer"
          src={logo}
          alt="logo"
        ></img>
        <div className="container flex p-4 ml-20 mr-6 mt-2 max-w-6xl bg-white shadow-lg rounded-xl">
          <h2 className="text-black font-bold mx-auto">
            AKAKI KALITY SUBCITY ADMINISTATION
          </h2>
          <Link to="/nav">
            <h2 className="text-black font-bold ml-auto mr-4 rounded-3xl hover:bg-transparent hover:border hover:border-[#0095FF] hover:text-black border border-transparent">
              {" "}
              LOGIN{" "}
            </h2>
          </Link>
        </div>
      </nav>
      <div>
        <div class="grid grid-cols-2 gap-4 ">
          <div className="text-white mt-48 ml-20 max-w-lg">
            <h1 className="text-5xl leading-normal">በአቃቂ ቃሊቲ ክፍለ ከተማ</h1>
            <p>
              {" "}
              ከ<span className="font-semibold">2009 ዓ/ም</span> ጀምሮ በልማትና በተለያየ
              ምክንያት ተነሺ የሆኑ{" "}
              <span className="italic">
                {" "}
                የመንግስት ቤት ተከራዮች ፣ደባሎች፣ ጥገኞች፣በህገ-ወጥ ኪራይ ሳከፍሉ የሚኖሩ፣ በህገ-ወጥ ቤት
                የገነቡና በ2003{" "}
              </span>{" "}
              ላይን ማፕ ላይ የሚታዩና የማይታዩ አጠቃላይ መረጃ መያዣ ሲስተም!!!
            </p>
            <div className="mt-10">
              <Link to="/">
                <h2 className="text-black mt-10 bg-white rounded-3xl text-center mx-48 hover:bg-transparent hover:border hover:border-yellow-700 hover:text-white duration-30">
                  {" "}
                  Login{" "}
                </h2>
              </Link>
            </div>
          </div>
          <div className=" bg-white p-4 mx-40 mt-6 shadow-lg rounded-xl">
            <img className="px-6 py-1" src={logo} alt="logo"></img>
            <img className="px-3 py-1 mt-2" src={building} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home