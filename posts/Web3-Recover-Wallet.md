---
title: 'Recover Wallet'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Recover wallet by phrase'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'recover wallet'
---

[Source](https://github.com/sol-app/web3-wallet/tree/main/recover-wallet)

# RECOVER WALLET
Recover wallet by using secret phrase.


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
  
</head>
<body>
    
    <header class="container-fluid text-center">
        <h1 class="display-1">ETHERS JS</h1> <span class="text-secondary">Recover Private & Public key by using seed phrase</span>
        <hr>
    </header>

    <main class="container w-75 my-5 text-center">
        <button id="recovering" class="btn btn-outline-primary">Recover</button>
        <div class="my-3">
        <label for="inputs" class="text-secondary">put seed freez by space between words - 12 words</label>
        <input type="text" id="inputs" class="form-control text-center border-secondary" value="" placeholder="put seed here ..." />
        </div>
        <p class="lead">Private key: <b id="prvkey" class="text-small">0x0...0</b></p>
        <p class="lead">Public key: <b id="pubkey" class="text-small">0x0...0</b></p>
        <p class="text-secondary my-5">example seed: "update upper gold family bamboo match helmet bronze become absurd blur domain"</p>
    </main>

    <p class="text-secondary my-5 text-center">you can download this code from <a href="https://github.com/sol-app/web3-wallet/tree/main/recover-wallet" class="text-dark fw-bold">[this]</a> repo and use it offline.</p>

    <footer class="container-fluid text-center py-2">
        <hr>
        2023 Ethersjs example - github @mosi-sol
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="./recover.js"></script>
</body>
</html>
```

- Backend

```js
const initialize = () => {

    const prvkey = document.getElementById('prvkey');
    const pubkey = document.getElementById('pubkey');
    const inputs = document.getElementById('inputs');
    const recovering = document.getElementById('recovering');
    recovering.addEventListener('click', () => {
        let mnemonic = inputs.value;
        let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
        prvkey.innerHTML = mnemonicWallet.privateKey;
        pubkey.innerHTML = mnemonicWallet.address;
    });

}
window.addEventListener('DOMContentLoaded', initialize);
```