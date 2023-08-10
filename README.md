# Hardhat + Alchemy + TypeScript Starter Template

<div align="center">
  <h2>Made with ❤ by <a href="https://github.com/roqqetmedia">Roqqet Media</a></h2> 
</div>

## 🤝 Features

- hardhat 2
- alchemy

## ⌨️ Installation

Install NPM packages

```shell
yarn install
# or
npm install
```

## 🌐 How to Deploy a Smart Contract to the Sepolia Testnet

Learn how to deploy smart contracts to the Sepolia testnet, the preferred Ethereum blockchain for testing decentralized applications.

## 🔑 Create Your App and Obtain an API Key

To get started, create your account on Alchemy by clicking on this link: \*\*
https://dashboard.alchemy.com/signup/?a=deploy-to-sepolia

After creating an Alchemy account, you can generate an API key by creating an app. With this key, we can make requests to the Sepolia test network.
To create an app, click on the "_Create App_" button located in your Alchemy Dashboard.

<img src="https://i.imgur.com/ieVCyTQ.png" alt="Create App" >

Name and describe your app, select _Ethereum_ as the chain, and _Sepolia_ as the network. Finally, _create the app_.

<img src="https://i.imgur.com/8BTUMJF.png" alt="Create App Form" >

## 🦊 Setting Up Your Ethereum Account

To send and receive transactions on Ethereum, you'll need an Ethereum account.
To get started, you can [**download Metamask**](https://metamask.io/download/) for free and create an account. Once you have an account, you'll need to switch to the _Sepolia Network_.

Follow the steps below to switch:

<img src="https://i.imgur.com/xo6RoDK.png" alt="Metamask account" >
<img src="https://i.imgur.com/VfTmljf.png" alt="Metamask account network" >

In the blank boxes, enter the details mentioned in the [**Sepolia Testnet**](https://docs.alchemy.com/docs/choosing-a-web3-network#sepolia-testnet) section. Then, click "_Save_" and you're all set.

<img src="https://i.imgur.com/liu6YFT.png" alt="Metamask network form" >

## 🪙 Adding Ether from a Sepolia Faucet

To deploy our smart contract on the test network, we need some fake Eth. To get Eth, you can visit the [**Sepolia faucet**](https://sepoliafaucet.com/) and enter your Sepolia account address. Then click on "_Send Me Eth_". It may take a while to receive your fake Eth because of network traffic. You should see the Eth in your Metamask account soon after.

<img src="https://i.imgur.com/JSd2Ye6.png" alt="copy Metamast account" >

## ⚙️ Integrate Metamask and Alchemy with Your Project

To send any transaction from your virtual wallet, you need to sign it with your unique private key. But how can you securely provide your program with this permission? The solution is simple: you can safely store your private key (as well as your Alchemy API key) in an environment file.

To get private key from your metamask wallet,

To get HTTP URL from your alchemy account, see the below steps.

For your _private key_, [**follow these instructions**](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key). And for the _HTTPS URL_, just check out the steps below.

<img src="https://i.imgur.com/Rc4Kuo1.png" alt="alchemy app" >
<img src="https://i.imgur.com/ZTisOGj.png" alt="alchemy view key" >
<img src="https://i.imgur.com/TxtlASW.png" alt="alchemy api" >

Your `.env` file should look like this:

    ALCHEMY_TESTNET_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
    TESTNET_PRIVATE_KEY=your-private-key

- you can copy `.env.example` file as well.

## 🚀 Deploying Contract

Let's deploy our smart contract. Open your command line and enter the following command:

```
npx hardhat run deployments/deploy.js --network sepolia
```

After executing the previous command, you should see something like this:

```
Contract Deployed to Address: 0xD80C8976a4EB599b11c831a5470f95CfBD0E99D5
```

Go to the [**Sepolia etherscan**](https://sepolia.etherscan.io/) and search for our contract with the printed address.

<img src="https://i.imgur.com/pcjTJDE.png" alt="Sepolia etherscan" >

We should able to see that it has been deployed successfully.

<img src="https://i.imgur.com/S5uNxpD.png" alt="Sepolia etherscan creation" >

Ensure that the _From address_ matches your _Metamask account address_. The _To address_ should display "_Contract Creation_", but upon clicking the transaction, we will see our contract address in the _To field_.

You can check the deployment status in the [**Alchemy Dashboard**](https://dashboard.alchemy.com/signup/?a=deploy-to-sepolia).

Go to your app, scroll to the bottom, and you will see something like this.

<img src="https://i.imgur.com/ro3tX8a.png" alt="alchemy dashboard api" >

## 🔰 Deploy on local network

```shell
npx hardhat run scripts/deploy.ts
```

After executing the previous command, you should see something like this:

```
Contract Deployed to Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## 🧪 Testing contracts

`npx hardhat test`
