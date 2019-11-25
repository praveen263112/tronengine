# TronEngine

Tronengine is a transaction server that helps in initiating TRC10 token transfer in Tron Blockchain. The tokens can be transferred from the CONTRACT or from the client address.


## Pre-requisite
NodeJS v12.13.0

## Installation

```bash
npm install
npm start
```

## API End points

The webservices are created using the Express framework. The following endpoints are available so far.

1) To transfer tokens to a given address  /POST http://localhost:3000/transfer
   Sample input :
   {
     "address":"TTFBXaJcTXYnzY2KdLSz5oAkzyN8XZCJd7",
     "amount" : "10"
   }

2) Fetch transaction details /GET http://localhost:3000/transaction/:txId
   Sample : http://localhost:3000/transaction/f35863e2b67712e03c86a339d4a5ff4eecafa24de48ec49ae87053cf213c0aa6
