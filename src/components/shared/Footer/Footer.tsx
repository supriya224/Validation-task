/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";

function Footer() {
  return (
    <footer className="bg-white mt-44 dark:bg-gray-900 w-full">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="/kkk">
            <img
              className="w-auto h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt=""
            />
          </a>

          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="/fff"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit">
              {" "}
              Teams{" "}
            </a>

            <a
              href="/ggg"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit">
              {" "}
              Privacy{" "}
            </a>

            <a
              href="/lll"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit">
              {" "}
              Cookies{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
