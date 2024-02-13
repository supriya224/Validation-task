import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-wrap place-items-center">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <ul className=" container mx-auto justify-between gap-12 flex md:flex px-4  md:justify-center font-semibold font-heading ">
              <li>
                <Link className="hover:text-pink-400 p-2  border-b-2" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-pink-400 p-2  border-b-2"
                  to="/transaction">
                  Transaction
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-pink-400 p-2  border-b-2"
                  to="/about">
                  Data
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
