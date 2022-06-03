import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const pages = [
    { title: "Homepage", destination: "/" },
    { title: "Profile", destination: "/profile" },
  ];

  return (
    <nav
      className="h-20 pl-40 pr-20 py-5 text-gray-300 flex flex-row justify-between"
      style={{ backgroundColor: "#21252B" }}
    >
      <div className="logo-container mr-20">
        <h1 className=" font-bold text-4xl text-yellow-500">MED</h1>
      </div>

      <div className="container-100 hidden md:flex justify-between grow list-none mt-3 font-bold ">
        <li className="flex space-x-10">
          {pages.map((element, index) => {
            return (
              <ul
                key={index}
                className="hover:cursor-pointer hover:text-white "
              >
                <Link to={element.destination}> {element.title} </Link>
              </ul>
            );
          })}
        </li>

        <section className="space-x-5">
          <button className=" bg-slate-500 p-1 rounded-md hover:text-white hover:font-bold">
            SignIn
          </button>
          <button className=" bg-slate-500 p-1 rounded-md hover:text-white hover:font-bold">
            SignUp
          </button>
        </section>
      </div>

      <div className="icon mt-3 md:hidden hover:cursor-pointer hover:bg-zinc-700/100 ">
        <MenuIcon></MenuIcon>
      </div>
    </nav>
  );
};

export default Navigation;
