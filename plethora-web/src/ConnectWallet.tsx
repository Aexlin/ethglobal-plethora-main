import Timer from "./Timer";
import React from "react";

interface ConnectWalletProps {
}

const connectWallet = async () => {
  try {
    const { ethereum } = window as any;

    if (!ethereum) {
      alert("Get MetaMask -> https://metamask.io/");
      return;
    }
  
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
    console.log("Connected", accounts[0]);
  } catch (error) {
      console.log(error)
  }
}

export default function ConnectWallet(props: ConnectWalletProps) {
  return (
    <button onClick={connectWallet}>
				Connect Wallet
		</button>
  )
}
