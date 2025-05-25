import './App.css';
import Home from './components/home';
import { useEffect, useState } from 'react';
import {BrowserProvider, JsonRpcProvider, Contract } from 'ethers'
import ABI from './components/DIDCard.json';
const contractAddress = '0xYourContractAddressHere'; // Replace with your contract address

function App() {
  const [wallet, setWallet] = useState(false);
  const [contract, setContract] = useState(false);

  const Connect = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }
    try {
      const provider =new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const accounts = await signer.getAddress();
      setWallet(accounts);
    } catch (error) {
      console.error('Error connecting with wallet:', error);
    }
  }

  useEffect(() => {
    const init = async () => {
      if (!window.ethereum) {
        alert('Please install MetaMask!');
        return;
      }
      try {
        const provider =new JsonRpcProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');
        const contracts = new Contract(contractAddress, ABI.abi, provider);
        setContract(contracts);
      } catch (error) {
        console.error('Error connecting with contract:', error);
      }
    }
    init();
  }, []);



  return (
    <Home Connect={Connect} wallet={wallet} contract={contract}/>
  );
}

export default App;
