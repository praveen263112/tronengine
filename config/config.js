let ABI = {"entrys":[{"outputs":[{"type":"address"}],"constant":true,"name":"admin","stateMutability":"View","type":"Function"},{"stateMutability":"Nonpayable","type":"Constructor"},{"outputs":[{"type":"trcToken"},{"type":"uint256"},{"type":"address"}],"payable":true,"name":"betAmount","stateMutability":"Payable","type":"Function"},{"inputs":[{"name":"toAddress","type":"address"},{"name":"tokenvalue","type":"uint256"},{"name":"id","type":"trcToken"}],"name":"transferToken","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"getAdminAddress","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"accountAddress","type":"address"}],"name":"getTokenBalance","stateMutability":"View","type":"Function"}]};

let config = {
  hostname: 'localhost',
  port: 3000,
  fullNode : 'https://api.shasta.trongrid.io', //https://api.trongrid.io
  solidityNode : 'https://api.shasta.trongrid.io', //https://api.trongrid.io
  eventServer : 'https://api.shasta.trongrid.io', //https://api.trongrid.io
  setAddress : 'TV5Ure6cmQHphm9vyxdqy9rdgji4a4oQm2', // Contract admin address
  contractAddress : 'TQfMqtxq29o8uNwFnFZv548uGmdqnPowEz', //Deployed contract address
  privateKey : 'bb8577cea15388ce50ff011e6eacd65b13c7ea672e1c90930fc88d34d2b98275', //Private key of client address
  clientAddress: "TV5Ure6cmQHphm9vyxdqy9rdgji4a4oQm2", //Client address where tokens are stored
  tokenId:"1000015", //Id of the token stored in contract or client address
  contractAbi: ABI.entrys
};

module.exports = config;
