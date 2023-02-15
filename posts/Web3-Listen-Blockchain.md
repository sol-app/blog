---
title: 'Listen Events'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Listen Events from transactions.'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'listen events'
---

[Source](https://github.com/sol-app/ethersjs/tree/main/listen-event)

# LISTEN EVENTS
Listen Event's from transactions on targeted smartcontract.

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
        <h1 class="display-1">ETHERS JS</h1> <span class="text-secondary">listen to the events from smart contract</span>
        <hr>
    </header>

        
    <div class="container my-5">
        <button id="lisBtn" class="btn btn-outline-primary">Events listener</button>
        <span class="text-small mx-5 bg-warning p-2 rounded shadow-lg">DAI latest transfers (eth mainnet)</span>
        <span class="badge text-light bg-secondary shadow-lg p-2">no-need to connect</span>
        <p id="listener" class=" bg-dark rounded text-light m-3 px-3 py-1">dai last 2 block transfers</p>
    </div>


    <footer class="container-fluid text-center py-2">
        <hr>
        2023 Ethersjs example - github @mosi-sol
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="./event.js"></script>
</body>
</html>
```

- Backend

```js
const initialize = () => {
    
const INFURA_ID = 'paste your key here'; // dont reveal this line, use [.env]
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);
    const ERC20_ABI = [
        "function name() view returns (string)",
        "function symbol() view returns (string)",
        "function totalSupply() view returns (uint256)",
        "function balanceOf(address) view returns (uint)",
    
        "event Transfer(address indexed from, address indexed to, uint amount)"
    ];
    
    const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; // DAI Contract (et mainnet)
    const contract = new ethers.Contract(address, ERC20_ABI, provider);
    
    const main = async () => {
        listener.innerHTML = "dai last 2 block transfers - please wait";
        const block = await provider.getBlockNumber();
    
        const transferEvents = await contract.queryFilter('Transfer', block - 1, block);
        console.log(transferEvents);
        console.log(transferEvents.length);
        j = transferEvents.length;
        if(j != 0){
            listener.innerHTML = `<b>dai transfers count: ${j}<br /> transfer data:</b><hr>`;
            for(i=0; i < j; i++){
                console.log(`${transferEvents[i].blockHash}\n`);
                document.getElementById("listener").innerHTML += `<b>block hash</b>: ${transferEvents[i].blockHash}`;
                document.getElementById("listener").innerHTML += "<br />";
                document.getElementById("listener").innerHTML += `<b>from</b>: ${transferEvents[i].args[0]}`;
                document.getElementById("listener").innerHTML += "<br />";
                document.getElementById("listener").innerHTML += `<b>to</b>: ${transferEvents[i].args[1]}`;
                document.getElementById("listener").innerHTML += "<br />";
                document.getElementById("listener").innerHTML += `<b>amount</b>: ${ethers.utils.formatEther(transferEvents[i].args[2])} <b>of DAI</b>`;
                document.getElementById("listener").innerHTML += "<hr>";
            }
        } else {
            console.log(`not transaction in this 2 last block\n`);
            listener.innerHTML = `not transaction in this 2 last block<br />`;
        }
      }

    const lisBtn = document.getElementById('lisBtn');
    const listener = document.getElementById('listener');
    lisBtn.addEventListener('click', () => {
        main();
    });

}
window.addEventListener('DOMContentLoaded', initialize);
```
