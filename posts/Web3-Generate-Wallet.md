---
title: 'Generate Wallet'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Generate wallet: phrase, private & public key'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'wallet'
---

[Source](https://github.com/sol-app/web3-wallet/tree/main/generate-wallet)

# GENERATE WALLET
Generate wallet: secret phrase, private & public key


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
    <title>Recover Wallet | ethersjs</title>
    <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
    
    <header class="container-fluid text-center">
        <h1 class="display-1">ETHERS JS</h1> <span class="text-secondary">Generate unique Private & Public & seed phrase</span>
        <hr>
    </header>

    <main class="container w-75 my-5 text-center">
        <button id="generate" class="btn btn-outline-primary">Generate</button>

        <div class="list-group list-group-checkable d-grid gap-2 border-0 w-auto my-3">
            <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
              Public key
              <span id="pubkey" class="d-block small opacity-75 lead">the unique public key for transaction</span>
            </label>
          
            <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios2">
              Private key
              <span id="prvkey" class="d-block small opacity-75">the unique secret private key, don`t share it</span>
            </label>
          
            <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios3">
              MNemonic
              <span id="nemonic" class="d-block small opacity-75">unique secret mnemonic, don`t share it</span>
            </label>
        </div>
    </main>

    <p class="crt text-secondary bg-light shadow-lg py-1 my-1 text-center">
        you can download this code from <a href="https://github.com/sol-app/web3-wallet/tree/main/generate-wallet" class="text-primary">this <span id="brakechain" class="fa"></span></a> repo and use it offline.
    </p>

    <footer class="container-fluid text-center py-2">
        <hr>
        2023 Ethersjs example - github @mosi-sol
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="./generate.js"></script>
</body>
</html>
```

- Backend

```js
const initialize = () => {

    const prvkey = document.getElementById('prvkey');
    const pubkey = document.getElementById('pubkey');
    const nemonic = document.getElementById('nemonic');

    document.querySelector(".crt").style.visibility = "hidden";

    const generate = document.getElementById('generate');
    generate.addEventListener('click', () => {
        document.querySelector(".crt").style.visibility = "visible";
        const Nwallet = ethers.Wallet.createRandom();
        pubkey.innerHTML = Nwallet.address; // public key
        prvkey.innerHTML = Nwallet.privateKey; // private key
        nemonic.innerHTML = Nwallet.mnemonic.phrase; // nmemonic
    });

    function brakechain() {
        var a;
        a = document.getElementById("brakechain");
        a.innerHTML = "&#xf0c1;";
        setTimeout(function () {
            a.innerHTML = "&#xf127;";
          }, 1000);
      }
      brakechain();
      setInterval(brakechain, 2000);

}
window.addEventListener('DOMContentLoaded', initialize);

```
