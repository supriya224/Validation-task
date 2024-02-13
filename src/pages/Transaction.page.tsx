/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { IState } from "../Interface/InputInterface";
// import { dataRef } from "../firebase.config";

const TransactionPage: React.FC<{
  db: import("firebase/firestore").Firestore;
}> = ({ db }) => {
  const [inputValue, setInputValue] = useState<IState | any>({
    user: {
      username: "",
      wallet: "",
      amount: ""
    }
  });
  const [user, setUsers] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue({
      user: {
        ...inputValue.user,
        [event.target.name]: event.target.value
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue.user.username?.trim()) {
      setError("Please enter a username.");
      return;
    }

    if (!inputValue.user.wallet?.trim()) {
      setError("Wallet Address should not be empty.");
      return;
    }

    const amount = parseFloat(inputValue.user.amount || " ");
    if (Number.isNaN(amount) || amount < 0 || amount > 10000) {
      setError("Please enter a valid amount between 0 and 10,000.");
      return;
    }
    // dataRef.ref().child("all").push(inputValue);
    setError(null);
    console.log(inputValue.user);
    console.log("Successfully submitted data!");

    try {
      const docRef = await addDoc(collection(db, "users"), inputValue);
      console.log("wallet  data saved successfully:", docRef.id);
      setInputValue({ username: "", wallet: "", amount: "" });
    } catch (err) {
      console.error("Error saving wallet data:", err);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col rounded-xl bg-transparent my-32 border-2 px-12 py-12 bg-clip-border shadow-none">
        <h4 className="block font-sans text-3xl font-semibold leading-snug tracking-normal antialiased">
          User's wallet
        </h4>
        <p className="block my-2 font-sans text-base font-normal leading-relaxed antialiased">
          Enter your wallet details here.....
        </p>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          method="POST"
          onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px] mb-5">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                type="text"
                name="username"
                value={inputValue.user.username}
                onChange={handleChange}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                User Name
              </label>
              {error && (
                <p className="text-red-500 text-xs">{` Should be must username `}</p>
              )}
            </div>
            <div className="relative h-11 w-full min-w-[200px] mb-5">
              <input
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="wallet"
                type="text"
                value={inputValue.user.wallet}
                onChange={handleChange}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Wallet Address
              </label>
              {error && (
                <p className="text-red-500 text-xs">{` Wallet address field cannot be empty `}</p>
              )}
            </div>
            <div className="relative h-11 w-full min-w-[200px] mb-5">
              <input
                type="number"
                name="amount"
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                value={inputValue.user.amount}
                onChange={handleChange}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Amount
              </label>
              {error && (
                <p className="text-red-500 text-xs">{` Please enter a valid amount between 0 and 10,000. `}</p>
              )}
            </div>
          </div>
          <button
            className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-5 px-6 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
            // onClick={submitData}
            data-ripple-light="true">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransactionPage;
