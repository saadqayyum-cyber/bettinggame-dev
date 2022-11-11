import Image from "next/image";
import React, { useContext } from "react";
import {
  SystemProgram,
  Transaction,
  LAMPORTS_PER_SOL,
  PublicKey,
} from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import Loader from "./Loader";
import { SharedContext } from "../context/SharedContext";
import axios from "axios";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [amount, setAmount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const { connection } = useConnection();
  const wallet = useWallet();

  const { placeOrder, getSelectedTeams } = useContext(SharedContext);

  const toAddress = process.env.NEXT_PUBLIC_RECEIVER_ADDRESS;
  const pay = async () => {
    try {
      setLoading(true);

      if (!wallet.publicKey) {
        alert("Please Connect Wallet");
        setLoading(false);
        return;
      }

      // ---------------------------------------
      // Do Payment
      // ---------------------------------------

      // Get Live Conversion rate from API
      // USD to SOL

      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
      );

      const oneSolToUSD = data.solana.usd;
      const oneUSDToSol = 1 / oneSolToUSD;

      const finalPriceUSDToSol = oneUSDToSol * amount;

      if (!toAddress) return alert("To Address Cannot be Null");
      const instruction = SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(toAddress),
        lamports: (LAMPORTS_PER_SOL * finalPriceUSDToSol).toFixed(0),
      });
      const transaction = new Transaction();
      transaction.add(instruction);
      const tx = await wallet.sendTransaction(transaction, connection);
      await connection.confirmTransaction(tx, "processed");

      // ---------------------------------------
      // Upload Data to Backend
      // ---------------------------------------
      await placeOrder({
        userAddress: wallet.publicKey,
        orderItems: getSelectedTeams(),
        payment: finalPriceUSDToSol.toFixed(4),
        transactionId: tx,
      });

      setLoading(false);
      setShowModal(false);
      alert("Order Placed Sucessfully!");
      window.location.reload();
    } catch (error) {
      setLoading(false);
      alert(error);
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Submit Parlay
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative  flex-auto">
                  <div className="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                      Select your Bet Amount
                    </h5>

                    <ul className="my-4 space-y-3">
                      <li>
                        <a
                          onClick={() => setAmount(1)}
                          className={
                            "flex items-center p-3 text-base font-bold  cursor-pointer text-gray-900 bg-gray-50 rounded-lg  group hover:shadow dark:bg-gray-600  dark:text-white " +
                            (amount === 1 &&
                              "bg-black text-white dark:bg-black")
                          }
                        >
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Bet $1
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setAmount(5)}
                          className={
                            "flex items-center p-3 text-base font-bold  cursor-pointer text-gray-900 bg-gray-50 rounded-lg  group  dark:bg-gray-600  dark:text-white " +
                            (amount === 5 &&
                              "bg-black text-white dark:bg-black")
                          }
                        >
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Bet $5
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => setAmount(10)}
                          className={
                            "flex items-center p-3 text-base font-bold cursor-pointer text-gray-900 bg-gray-50 rounded-lg  group hover:shadow dark:bg-gray-600  dark:text-white " +
                            (amount === 10 &&
                              "bg-black text-white dark:bg-black")
                          }
                        >
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Bet $10
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*footer*/}

                <div className="flex bg-gray-700  items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  {!loading ? (
                    <div className="">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={pay}
                      >
                        PAY
                      </button>
                    </div>
                  ) : (
                    <div className="">
                      <Loader />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
