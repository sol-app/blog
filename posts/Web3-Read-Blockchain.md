---
title: 'Read Blockchain'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Read data from blockchain'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'read from blockchain'
---

[Source](https://github.com/sol-app/ethersjs/tree/main/read)

# READ DATA
Read data from blockchain.

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
    
    <header class="container-fluid text-center">
        <h1 class="display-1">ETHERS JS</h1> <span class="text-secondary">EXAMPLE</span>
        <hr>
    </header>

    <main class="container my-5 text-center">
        <button id="connect" class="btn btn-outline-primary">Connect</button>
        <b id="add" class="lead">0x0...0</b>
    </main>
    
    <div class="row p-5 mx-5 rounded shadow-lg text-center" style="border: 1px dashed #bababa;background:#dddddd;">
        <div class="col">
            <button id="balances" class="btn btn-outline-danger">Balance</button>
            <b id="balance" class=" bg-secondary rounded text-light m-3 px-3 py-1">ETH</b>
            <span class="badge text-secondary bg-warning shadow-lg p-2">need to connect</span>
        </div>
        
        <div class="col">
            <button id="chain" class="btn btn-outline-secondary">Chain Id</button>
            <b id="chainId" class=" bg-secondary rounded text-light m-3 px-3 py-1">?</b>
            <span class="badge text-secondary bg-warning shadow-lg p-2">need to connect</span>
        </div>
    </div>

    <div class="container my-5">
        <button id="cods" class="btn btn-primary">check block</button>
        <b class="p-2 badge text-secondary bg-warning m-3">after click button, wait for transaction (or open console). no-need to connect.</b>
        <section id="codeSection" class="bg-dark text-light p-3 mt-3 rounded shadow-lg">click (check block) button</section>
    </div>

    <footer class="container-fluid text-center py-2">
        <hr>
        2023 Ethersjs example - github @mosi-sol
    </footer>

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

    const codeSection = document.getElementById('codeSection');
    const cods = document.getElementById('cods');
    cods.addEventListener('click', () => {
        showBalance();
    });

// const showBalance = async () => {
    async function showBalance() {
        const INFURA_ID = 'your infura key here' // dont reveal this line, use [.env]
        const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)
        
        codeSection.innerHTML = "click (check block) button - please wait";

        console.log("1===========\n");
        const block = await provider.getBlockNumber();
        console.log(`\nBlock Number: ${block}\n`);

        console.log("2===========\n");
        const blockInfo = await provider.getBlock(block);
        console.log(blockInfo);

        console.log("3===========\n");
        const { transactions } = await provider.getBlockWithTransactions(block);

        console.log("4===========\n");
        console.log(`\nLogging first transaction in block:\n`);
        console.log(transactions[0]);

        codeSection.innerHTML = `<p>
        <span class="text-secondary">Block Number:</span> ${block}
        <hr>
        <span class="text-secondary">the.chainId:</span><b class="text-warning"> ${transactions[0].chainId} </b><br />
        <span class="text-secondary">blockInfo.hash:</span> ${blockInfo.hash} <br />
        <span class="text-secondary">blockInfo.time:</span> ${blockInfo.timestamp} <br />
        <span class="text-secondary">blockInfo.parent-hash:</span> ${blockInfo.parentHash} <br />
        <span class="text-secondary">blockInfo.miner:</span> ${blockInfo.miner} <br />
        <hr>
        <span class="text-secondary">Logging first transaction[0] in block (hash):</span><br />
        ${transactions[0].hash}<br />
        <br />
        <span class="text-secondary">transaction.gasPrice:</span><span class="badge text-wrap"> ${transactions[0].gasPrice._hex} </span><br />
        <span class="text-secondary">transaction.from:</span> ${transactions[0].from} <br />
        <span class="text-secondary">transaction.to:</span> ${transactions[0].to} <br />
        <hr>
        <span class="text-secondary">Logging second transaction[1] in block (hash):</span><br />
        ${transactions[1].hash}<br />
        <br />
        <span class="text-secondary">transaction.gasPrice:</span><span class="badge text-wrap"> ${transactions[1].gasPrice._hex} </span><br />
        <span class="text-secondary">transaction.from:</span> ${transactions[1].from} <br />
        <span class="text-secondary">transaction.to:</span> ${transactions[1].to} <br />
        </p>`;
    }

    const balVal = document.getElementById('balance');
    const bal = document.getElementById('balances');
    bal.addEventListener('click', () => {
        getBalance();
    });
    async function getBalance() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const address = window.ethereum.selectedAddress;
        const balance = await provider.getBalance(address);
        console.log(`The ${address} balance: ${ethers.utils.formatEther(balance)}`);
        balVal.innerHTML = `${ethers.utils.formatEther(balance)} ETH`;
    }

    const chainVal = document.getElementById('chainId');
    const chain = document.getElementById('chain');
    chain.addEventListener('click', async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();
        const chainId = network.chainId;
        console.log(chainId);
        chainVal.innerHTML = chainId;
    });
```
