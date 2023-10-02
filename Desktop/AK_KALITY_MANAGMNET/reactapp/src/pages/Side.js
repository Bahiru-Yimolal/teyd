import React from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { RiDashboardFill } from "react-icons/ri";

const Side = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    {
      title: "Team Leader",
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Add Team Leader" },
        { title: "Edit Team Leader" },
        { title: "Team Leader Detail" },
      ],
    },
    {
      title: "Project",
      spacing: true,
      submenu: true,
      submenuItems: [
        { title: "Add Project" },
        { title: "Edit Project" },
        { title: "Project Detail" },
      ],
    },
    {
      title: "User",

      submenu: true,
      submenuItems: [
        { title: "Add User" },
        { title: "Edit User" },
        { title: "User Detail" },
      ],
    },
    { title: "Login", spacing: true },
  ];
  return (
    <div className="flex">
      <div
        className={`h-screen bg-[#0095FF]  p-5 pt-8 ${
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
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                className={`text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white hover:text-black rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                }`}
                key={index}
              >
                <span className="text-2xl block float-left">
                  {" "}
                  <RiDashboardFill />{" "}
                </span>
                <span
                  className={`text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && (
                  <BsChevronDown
                    className=""
                    onclick={() => {setSubmenuOpen(!submenuOpen)}}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && (
                <ul>
                  {menu.submenuItems.map((submenuItem, index) => (
                    <li
                      key={index}
                      className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white hover:text-black rounded-md"
                    >
                      {submenuItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>

      <div className="p-7">
        <h1 className="text-2xl text-semibold">DashBoard</h1>
      </div>
    </div>
  );
};

export default Side;
