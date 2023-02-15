---
title: 'Donation'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Buy me a cofee, using cryptocurrency.'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'donation'
---

[Source](https://github.com/sol-app/Donation) - 
[Test live](https://sol-app.github.io/Donation/)

# DONATION
Using cryptocurrency for donating to a targeted wallet.

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
    <title>Web3 test</title>
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
    <script src="app.js" type="application/javascript"></script>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <style>
    input[type=number] {
      width:75px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <b class="navbar-brand px-3">Donation</b>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
          </ul>
        </div>
    </nav>

    <main role="main" class="container mb-5">
      <div class="row">
        <div class="card text-center col-4 offset-4" style="width: 18rem;">
          <img src="https://thumbs.dreamstime.com/b/donate-headline-block-isolated-white-42254781.jpg" class="card-img-top" alt="github @mosi-sol">
          <div class="card-body">
            <h5 class="card-title">Buy Me A Coffee</h5>
            <button id="addressButton" class="btn btn-sm btn-primary" role="button">Connect &raquo;</button>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <label for="quantity" class="bg-warning p-1">How much donate ( 0.1 to 50 )</label>
            </li>
            <li class="list-group-item">
              <input type="number" id="quantity" name="quantity" min="0.1" max="50" step="0.1" value="0.1">
            </li>
          </ul>
          <div class="card-body">
            <button id="sendEthButton" class="btn btn-sm btn-dark" role="button">Donate Now &raquo;</button>
          </div>
        </div>
        <div class="col-8 offset-2 mt-5 lead text-center bg-secondary text-light">
          You are: <b class="" id="showAccount">0x0..0</b>
        </div>
      </div>
    </main>

    <footer class="bg-dark p-5 mt-5 text-center" role="footer">
        <p class="lead text-light">Mosi-sol wallet: 0x65D7aA0b674C05ff721F8628404C353be2CA89d4</p>
    </footer>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>
```

- Backend

```js
const initialize = () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    }    
    // ===========

    window.onload = function() {
        if(window.ethereum) {
            ethereum.on('accountsChanged', handleAccountsChanged);    
            ethereum.removeListener('accountsChanged', handleAccountsChanged);
            synch();
        }
        else{
            console.log("please install metamask");
            alert("please install metamask");
        }
    }
    // ===========

    function synch() {
        window.ethereum.request({ 
            method: 'eth_accounts' 
        })
            .then(getAccount)
            .catch((err) => {
                console.log(err);
                showAccount.innerHTML = "0x0...0";
            });
        provider = new ethers.providers.Web3Provider(window.ethereum);
    }

    const addressButton = document.getElementById('addressButton');
    addressButton.addEventListener('click', () => {
        getAccount();
        ethereum.on('accountsChanged', handleAccountsChanged);    
        ethereum.removeListener('accountsChanged', handleAccountsChanged);
    });

    async function getAccount() {
        const accounts = await ethereum.request({ 
            method: 'eth_requestAccounts' }).catch((err) => {
                console.log(err.code);
            });
        // ---
        const signer = await provider.getSigner();
        const account = accounts[0];
        handleAccountsChanged(account);
        addressButton.innerHTML = "Connected";
        accountsCheck = account;
    }

    function handleAccountsChanged(accounts) {
        showAccount.innerHTML = accounts;
    }

    const cheker = document.getElementById('sendEthButton');
    cheker.addEventListener('click', () => {
        senEthNow();
    });

    let accountsCheck = [];
    const senEthNow = async () => {
        accountsCheck = await ethereum.request({ method: 'eth_requestAccounts' });
        handleAccountsChanged(accountsCheck);
        let val = document.getElementById("quantity").value;
        let fund = Number(val * 1e18).toString(16);
        ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
            // from: accountsCheck[0],
            from: window.ethereum.selectedAddress,
            to: '0x65D7aA0b674C05ff721F8628404C353be2CA89d4',
            value: fund.toString(),
            },
        ],
        })
        .then((txHash) => alert(txHash))
        .catch((error) => console.error);
    }

    async function setAccount() {
        accountsCheck = await ethereum.request({ method: 'eth_requestAccounts' });
        handleAccountsChanged(accountsCheck);
        let val = document.getElementById("quantity").value;
        let fund = Number(val * 1e18).toString(16);
        console.log(donated);
    }

};
window.addEventListener('DOMContentLoaded', initialize);
```
