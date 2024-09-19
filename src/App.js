import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './App.css';

const App = () => {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const infuraUrl = 'https://mainnet.infura.io/v3/559c3b87c3574add9e17c77263da695e';

  useEffect(() => {
    loadWeb3();
  }, []);

  // Load Web3 and connect to MetaMask
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        loadBalance(accounts[0]);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log("Non-Ethereum browser detected. Install MetaMask.");
    }
  };

  // Load wallet balance
  const loadBalance = async (account) => {
    const web3 = new Web3(infuraUrl);  // Use Infura public node
    const balance = await web3.eth.getBalance(account);
    setBalance(web3.utils.fromWei(balance, 'ether')); // Convert from wei to ETH
  };

  // Handle sending ETH transaction
  const sendTransaction = async () => {
    if (!recipient || !amount) {
      setTransactionStatus("Recipient address and amount are required.");
      return;
    }
    
    const web3 = window.web3;
    const transactionParameters = {
      to: recipient, // Required: recipient address
      from: account, // Required: sender's address (MetaMask account)
      value: web3.utils.toHex(web3.utils.toWei(amount, 'ether')) // Convert amount to wei
    };

    try {
      await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });
      setTransactionStatus('Transaction successful!');
    } catch (error) {
      setTransactionStatus("Transaction failed: " + error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Demo App</h1>
        <p>Interact with the Ethereum blockchain using MetaMask.</p>
      </header>

      <main className="App-main">
        {account ? (
          <div className="Account-info">
            <h2>Connected Account</h2>
            <p className="Account-address">{account}</p>
            <p>Balance: <span className="Balance">{balance} ETH</span></p>
            
            <section className="Transaction-section">
              <h3>Send ETH</h3>
              <input
                type="text"
                placeholder="Recipient Address"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="Input-field"
              />
              <input
                type="text"
                placeholder="Amount (ETH)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="Input-field"
              />
              <button onClick={sendTransaction} className="Submit-button">Send</button>
              {transactionStatus && <p className="Transaction-status">{transactionStatus}</p>}
            </section>
          </div>
        ) : (
          <p className="Connect-message">Please connect to MetaMask.</p>
        )}
      </main>
      
      <footer className="App-footer">
        <p>Built with 💙 by SHAHNAWAZ HOSSAN</p>
      </footer>
    </div>
  );
};

export default App;
