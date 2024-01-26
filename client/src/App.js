import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tracker from "./pages/Tracker";
import Navbar from "./components/Navbar";
import { useSDK } from "@metamask/sdk-react";
import PatientRecordsABI from "./contract/PatientRecords.json";
import Web3 from "web3";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);

        const contractAddress = "0x7180cbd0a056d3dE9c324703fbFC68a784587788";
        const contractInstance = new web3Instance.eth.Contract(
          PatientRecordsABI,
          contractAddress
        );
        setContract(contractInstance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } else {
        console.error("Web3 not found");
      }
    };

    init();
  }, []);

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };
  return (
    <>
      <Navbar account={account} connected={connected} btnClick={connect} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
    </>
  );
};

export default App;
