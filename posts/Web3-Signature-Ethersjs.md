---
title: 'Sign Message'
metaTitle: 'Mosi-sol @github - Blog'
metaDesc: 'Sign message & verify.'
date: '2023-02-13'
socialImage: images/___.svg
article: 'web3'
tags:
  - 'web3'
  - 'blockchain'
  - 'signature'
---

[Source](https://github.com/mosi-sol/VerifySignature) - 
[Test live](https://mosi-sol.github.io/VerifySignature/index-ethersjs.html)

# SIGNATURE
Sign message by wallet & verify by smart contract.

using `ethersjs` + `javascript`

---

## Review

- Frontend

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>sign|verify - web3js</title>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js" integrity="sha512-/PTXSvaFzmO4So7Ghyq+DEZOz0sNLU4v1DP4gMOfY3kFu9L/IKoqSHZ6lNl3ZoZ7wT20io3vu/U4IchGcGIhfw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->
  <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js" type="application/javascript"></script>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
</head>
<body class="container-fluid">
  <h1 class="my-5">Verify Signature - Ethersjs</h1>

  <button onClick="signMessage()" class="btn btn-primary my-2">Sign Message</button>
  
  <div class="bg-dark text-light p-2">
    <p id="Tier1"></p>
    <p id="Tier2"></p>
    <p id="Tier3"></p>
    <p id="Tier4"></p>
  </div>

  <p class="my-2 px-5 text-primary">
    signature by wallet, verify by contract.
  </p>


  <div class="bg-dark text-warning text-center py-1 mt-1">
    github @mosi-sol &nbsp;&middot;&nbsp; learning perpuses
  </div>

  <script>
    async function signMessage() {
      if (!window.ethereum) return alert("Please Install Metamask");

        // connect and get metamask account
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });

        // message to sign
        const message = "\x19Ethereum Signed Message:\n32the message here... [hard code]";
        console.log({message});
        document.getElementById("Tier1").innerHTML = "message: "+message.toString();
        
        // hash message
        // const hashedMessage = Web3.utils.sha3(message); // ethers.utils.id()
        const hashedMessage = ethers.utils.id(message);
        console.log(hashedMessage);
        document.getElementById("Tier2").innerHTML = "hashedMessage: "+hashedMessage.toString();

        // sign hashed message
        const signature = await ethereum.request({
          method: "personal_sign",
          params: [hashedMessage, accounts[0]],
        });
        console.log({ signature });
        document.getElementById("Tier3").innerHTML = "signature: "+signature.toString();

        // split signature
        const r = signature.slice(0, 66);
        const s = "0x" + signature.slice(66, 130);
        const v = parseInt(signature.slice(130, 132), 16);
        console.log({ r, s, v });
        // document.getElementById("Tier4").innerHTML = "r: "+r.toString()+" \n\ns: "+s.toString()+" \n\nv: "+v.toString();
        document.getElementById("Tier4").innerHTML = `r: ${r.toString()}
        __ s: ${s.toString()}
        __ v: ${v.toString()}`;
      }
    </script>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js" integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF" crossorigin="anonymous"></script></body>
    </html>
```

- Backend

```js
// SPDX-License-Identifier: MIT
pragma solidity 0.8;

contract Verify {

    function VerifyMessage(bytes32 _hashedMessage, uint8 _v, bytes32 _r, bytes32 _s) public pure returns (address) {
    bytes memory prefix = "\x19Ethereum Signed Message:\n32";
    bytes32 prefixedHashMessage = keccak256(abi.encodePacked(prefix, _hashedMessage));
    address signer = ecrecover(prefixedHashMessage, _v, _r, _s);
    return signer;
    }

}
```
