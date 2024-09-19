<div align="center">
  <h1>Crypto Demo App</h1>
</div>

# Table of Contents
- [Introduction](#introduction)
- [Architecture](#architecture)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup and Run](#setup-and-run)


## Introduction
- Overview of the Crypto Demo App.
- A simple demo app that interacts with the Ethereum blockchain using MetaMask. This app showcases basic wallet functionality, such as viewing the wallet balance and sending ETH transactions.

## Architecture

- **Frontend:** React.js with Web3.js integration.
- **Blockchain:** Ethereum public node via Infura.


## Features

- **MetaMask Integration:** Connects to the user's MetaMask wallet.
- **Balance Display:** Shows the ETH balance of the connected wallet.
- **Send ETH:** Allows users to send ETH transactions to any recipient address.
- **Transaction Status:** Provides feedback on the success or failure of transactions.

## Prerequisites

- **Node.js:** Ensure that Node.js and npm (Node Package Manager) are installed on your system. You can download them from [nodejs.org](https://nodejs.org/).
- **MetaMask:** Install MetaMask extension for your browser. [MetaMask](https://metamask.io/).
- **Infura Project ID:** Sign up at [Infura](https://infura.io/) to get a free API key.

## Setup and Run

```sh
git clone https://github.com/shahnawaz-pabon/crypto-demo-app.git
cd crypto-demo-app
npm install
npm start
```

This will start the app and open it in your default browser at [http://localhost:3000](http://localhost:3000).

**NOTE:**

- Ensure MetaMask is installed and connected to your browser.
- Connect your MetaMask wallet.
- The app should display your wallet balance and allow you to send ETH.