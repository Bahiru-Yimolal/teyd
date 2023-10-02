import React from 'react'
import { BsArrowLeftShort,BsChevronDown } from "react-icons/bs";
import { useState } from 'react';
import logo from "../assets/logo.jpg";
import { RiDashboardFill } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";
import { PiUsersFour } from "react-icons/pi";
import { Link,useNavigate, NavLink } from "react-router-dom";
import App from '../App';
import NavPages from './NavPages';
import Dashboard from './Dashboard';
const SideNavBar = () => {
     const navigate = useNavigate();
    const [open,setOpen] = useState(true);
     const [submenuOpenTeam, setSubmenuTeamOpen] = useState(false);
     const [submenuOpenProject, setSubmenuProjectOpen] = useState(false);
     const [submenuOpenUser, setSubmenuUserOpen] = useState(false);
  return (
    <div className="flex">
      <div
        className={`min-h-screen bg-[#0095FF]  p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`text-[#0095FF] bg-white text-3xl absolute -right-3 top-9 rounded-full border border-[#0095FF] cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        ></BsArrowLeftShort>
        <div className="inline-flex">
          <img
            className={`w-10 h-11 cursor-pointer rounded block float-left mr-2 duration-500 ${
              !open && "rotate-[360deg]"
            }`}
            src={logo}
            alt="logo"
          ></img>
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            አ/ቃ/ክ/ከ{" "}
          </h1>
        </div>
        <NavLink
          to={"/nav/dash"}
          className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md mt-10"
        >
          <span className="text-2xl block float-left">
            {" "}
            <RiDashboardFill />{" "}
          </span>
          <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
            Dashboard
          </span>
        </NavLink>
        <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md mt-9">
          <span className="text-2xl block float-left">
            {" "}
            <GrUserAdmin />{" "}
          </span>
          <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
            Team Leader
          </span>
          <BsChevronDown
            className={`${submenuOpenTeam && "rotate-180"}`}
            onClick={() => {
              setSubmenuTeamOpen(!submenuOpenTeam);
            }}
          />
        </div>
        {submenuOpenTeam && open && (
          <div>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              Add Team Leader
            </div>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              Edit Team Leader
            </div>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              Team Leader Detail
            </div>
          </div>
        )}
        <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md mt-9">
          <span className="text-2xl block float-left">
            {" "}
            <GoProjectSymlink />{" "}
          </span>
          <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
            Project
          </span>
          <BsChevronDown
            className={`${submenuOpenProject && "rotate-180"}`}
            onClick={() => {
              setSubmenuProjectOpen(!submenuOpenProject);
            }}
          />
        </div>
        {submenuOpenProject && open && (
          <div>
            <NavLink
              to={"pro"}
              className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md"
            >
              Add Project
            </NavLink>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              Edit Project
            </div>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              Project Detail
            </div>
          </div>
        )}
        <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md mt-2">
          <span className="text-2xl block float-left">
            {" "}
            <PiUsersFour />{" "}
          </span>
          <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>
            User
          </span>
          <BsChevronDown
            className={`${submenuOpenUser && "rotate-180"}`}
            onClick={() => {
              setSubmenuUserOpen(!submenuOpenUser);
            }}
          />
        </div>
        {submenuOpenUser && open && (
          <div>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              Add User
            </div>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              Edit User
            </div>
            <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-12 hover:bg-white hover:text-black rounded-md">
              User Detail
            </div>
          </div>
        )}
        <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md mt-9">
          <span className="text-2xl block float-left">
            {" "}
            <AiOutlineLogout />{" "}
          </span>
          <Link
            to={"home"}
            className={`text-base font-medium flex-1 ${!open && "hidden"}`}
          >
            Logout
          </Link>
        </div>
      </div>

      <div className="p-7">
        <>Dashboard</>
      </div>
      
    </div>
  );
}


export default SideNavBar 