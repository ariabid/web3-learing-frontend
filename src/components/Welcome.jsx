import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-indigo-200 border-none text-xl"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="md:p-20 py-12 px-4">
        <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto SepoliaETH
        </h1>
        {!currentAccount && (
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-indigo-600 p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
        )}

        <div className="w-full">
          <div className="flex justify-between items-center p-3 w-full my-5 bg-gray-500/30">
            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
              <SiEthereum fontSize={21} color="#fff" />
            </div>

            <p className="text-white font-semibold text-lg mt-1">Sepolia Ethereum</p>
            <p className="text-white font-light text-sm">
              {shortenAddress(currentAccount)}
            </p>
          </div>
          <div className="p-5 w-full flex flex-col justify-start items-center">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            <button
              type="button"
              onClick={handleSubmit}
              className="flex items-center justify-center text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-md cursor-pointer bg-indigo-800"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader />{" "}
                  <span className="ml-2 text-gray-400">Sending...</span>
                </>
              ) : (
                <>Send Now</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
