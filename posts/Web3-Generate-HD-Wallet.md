---
title: 'Generate HD-Wallet'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Generate HD-wallet: phrase, private & public key, nested wallet address'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'hd-wallet'
---

[Source](https://github.com/sol-app/web3-wallet/tree/main/generate-hdwallet)

# GENERATE HD-WALLET
Generate wallet: secret phrase, private & public key + generate nested wallet.


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
    <title>HD-Wallet & nested | ethersjs</title>
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
        <div class="row">
            <div class="col-12 mb-3">
                <button class="btn btn-primary mb-3" onclick="location.reload()">Reload / Renew</button>
                <h3 class="h3">MNemonic</h3>
                <p class="lead bg-light p-2 rounded border shadow-lg" id="nemonic">" same secret seed phrase for all nested "</p>
            </div>
            <div class="col-6">
                <h2 class="mb-5">Wallet</h2>
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
                </div>
            </div>
            <div class="col-6">
                <h2 class="mb-5">HDWallet</h2>
                <button id="generate2" class="btn btn-outline-primary">Generate</button>

                <div class="list-group list-group-checkable d-grid gap-2 border-0 w-auto my-3">
                    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
                    Public key
                    <span id="pubkey2" class="d-block small opacity-75 lead">the unique public key for transaction</span>
                    </label>
                
                    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios2">
                    Private key
                    <span id="prvkey2" class="d-block small opacity-75">the unique secret private key, don`t share it</span>
                    </label>
                </div>
            </div>
            <div class="col-12" id="nested">
                <hr>
                <p class="lead" id="created">create 5 new wallet "nested by HD-Wallet"</p>
                <button id="generateNestedWallet" class="btn btn-success">generate</button>
                <ul id="wal1" class="list-group list-group-checkable d-grid gap-2 border-0 w-auto my-3 text-center"></ul>
                <p class="text-secondary" id="info">usecase of nested: in the crypto wallet or exchanges</p>
            </div>
        </div>
    </main>

    <p class="crt text-secondary bg-light shadow-lg py-1 my-1 text-center">
        you can download this code from <a href="https://github.com/sol-app/web3-wallet/tree/main/generate-hdwallet" class="text-primary">this repo <span id="brakechain" class="fa"></span></a>  and use.
    </p>

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
    const prvkey = document.getElementById('prvkey');
    const pubkey = document.getElementById('pubkey');
    const nemonic = document.getElementById('nemonic');
    const prvkey2 = document.getElementById('prvkey2');
    const pubkey2 = document.getElementById('pubkey2');

    const generate = document.getElementById('generate');
    const generate2 = document.getElementById('generate2');

    document.querySelector("#nested").style.visibility = "hidden";

    const Nwallet = ethers.Wallet.createRandom();
    let node = ethers.utils.HDNode.fromMnemonic(Nwallet.mnemonic.phrase);

    generate.addEventListener('click', () => {
        pubkey.innerHTML = Nwallet.address; // public key
        prvkey.innerHTML = Nwallet.privateKey; // private key
        nemonic.innerHTML = Nwallet.mnemonic.phrase; // nmemonic

        let phras = ethers.utils.mnemonicToSeed(Nwallet.mnemonic.phrase);
        console.log("mnemonic to seed: ", phras);

        let entropy = ethers.utils.mnemonicToEntropy(Nwallet.mnemonic.phrase);
        console.log("entropy: ", entropy); // Convert a mnemonic phrase to its entropy, according to BIP-39.
    });

    generate2.addEventListener('click', () => {

        pubkey2.innerHTML = node.address; // public key
        prvkey2.innerHTML = node.privateKey; // private key
        nemonic.innerHTML = node.mnemonic.phrase; // nmemonic

        document.querySelector("#nested").style.visibility = "visible";

        console.log(`
        address: ${node.address}\n
        chain code: ${node.chainCode}\n
        finger print: ${node.fingerprint}\n
        finger print: ${node.parentFingerprint}\n
        private key: ${node.privateKey}\n
        public key: ${node.publicKey}\n
        extended key: ${node.extendedKey}\n
        depth: ${node.depth}\n
        index: ${node.index}\n
        mnemonic phrase: ${node.mnemonic.phrase}\n
        mnemonic path: ${node.mnemonic.path}\n
        mnemonic locale: ${node.mnemonic.locale}\n
        `);
    });

    const wal1 = document.getElementById('wal1');
    generateNestedWallet.addEventListener('click', () => {
        node.neuter(); // remove 1st hdw private...

        let text = "";
        for (let i = 0; i < 5; i++) {
            let j = i + 1;
            const derivedNode = node.derivePath(`m/13'/11'/0'/${i}`);
            text += `<label class="list-group-item rounded-3 py-2" for="listGroupCheckableRadios${j}">public key ${j}<span id="" class="d-block small opacity-75 lead">` + derivedNode.address + "</span><span>";
            text += `<br />private key ${j}<span id="" class="d-block small opacity-75">` + derivedNode.privateKey + "</span></label>";
            text += '<hr>';
            document.querySelector("#generateNestedWallet").style.visibility = "hidden";
        }
        text += '<div class="mb-5"></div>';
        document.getElementById("wal1").innerHTML = text;

        document.getElementById('created').innerHTML = "5 nested wallet has been created";
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
