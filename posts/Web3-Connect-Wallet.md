---
title: 'Connect Wallet'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Connect wallet to blockchain'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'connect wallet'
---

[Source](https://github.com/sol-app/ethersjs/tree/main/connect)

# CONNECT WALLET
Connect wallet to evm blockchain's.

using `ethersjs` + `javascript`

---

## Review

- Frontend

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  
</head>
<body>
    
    <main class="container my-5">
        <button id="connect" class="btn btn-outline-primary">Connect</button>
        <b id="add" class="lead"></b>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="./app.js"></script>
</body>
</html>
```

- Backend

```js
const initialize = () => {

    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!'); // dev
    } 

    window.onload = async function() {
        this.ethereum.on('accountsChanged', accountChange);
        // ethereum.removeListener('accountsChanged', accountChange);
        afterOnLoad();
    }    

    const add = document.getElementById('add');
    async function afterOnLoad() {
        const provider = new ethers.providers.Web3Provider(window.ethereum); // (window.ethereum, DEFAULT_CHAIN)
        const accounts = await provider.listAccounts();
        accounts[0] != undefined ? 
        handleAccountsChanged(accounts[0]) : // window.ethereum.selectedAddress
        add.innerHTML = "0x0...0";
        accounts[0] != undefined ? 
        handleAccountsChanged(accounts[0]) : 
        conn.innerHTML = "Connect"; 
    }

    const conn = document.getElementById('connect');
    conn.addEventListener('click', () => {
        connection();
    });

    async function connection() {
        window.ethereum.request({ 
            method: 'eth_accounts' 
        }).then(getAccount).catch((err) => {
                console.log(err);
            });
        const provider = new ethers.providers.Web3Provider(window.ethereum); // (window.ethereum, DEFAULT_CHAIN)

        const accounts = await provider.listAccounts();
        console.log(accounts[0]); // dev
        // ---
        // const signer = await provider.getSigner(); 
    }

    async function getAccount() {
        const accounts = await ethereum.request({ 
            method: 'eth_requestAccounts' }).catch((err) => {
                console.log(err.code);
            });
        // ---
        const account = accounts[0];
        handleAccountsChanged(account);
    }

    const accountChange = (a) => {
        accounts = a;
        handleAccountsChanged(a);
        // display(connect, "connected", "Not able to connect");
    }

    function handleAccountsChanged(accounts) {
        conn.innerHTML = "Connected";
        // add.innerHTML = accounts.slice(2,5);
        // add.innerHTML = accounts.substr(2,5);
        add.innerHTML = accounts;
    }

    // == connection end == \\
    // == code start below == \\

}
window.addEventListener('DOMContentLoaded', initialize);
```
