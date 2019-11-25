let ABI = {"entrys":[{"outputs":[{"type":"address"}],"constant":true,"name":"admin","stateMutability":"View","type":"Function"},{"stateMutability":"Nonpayable","type":"Constructor"},{"outputs":[{"type":"trcToken"},{"type":"uint256"},{"type":"address"}],"payable":true,"name":"betAmount","stateMutability":"Payable","type":"Function"},{"inputs":[{"name":"toAddress","type":"address"},{"name":"tokenvalue","type":"uint256"},{"name":"id","type":"trcToken"}],"name":"transferToken","stateMutability":"Nonpayable","type":"Function"},{"outputs":[{"type":"address"}],"constant":true,"name":"getAdminAddress","stateMutability":"View","type":"Function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"accountAddress","type":"address"}],"name":"getTokenBalance","stateMutability":"View","type":"Function"}]};

let config = {
  hostname: 'localhost',
  port: 3000,
  fullNode : 'https://api.shasta.trongrid.io',
  solidityNode : 'https://api.shasta.trongrid.io',
  eventServer : 'https://api.shasta.trongrid.io',
  setAddress : 'TV5Ure6cmQHphm9vyxdqy9rdgji4a4oQm2',
  contractAddress : 'TGLtXFvT1vJCxFjzwXyhScep3riGsghctx',
  privateKey : 'bb8577cea15388ce50ff011e6eacd65b13c7ea672e1c90930fc88d34d2b98275',
  clientAddress: "TV5Ure6cmQHphm9vyxdqy9rdgji4a4oQm2",
  tokenId:"1000015",
  contractAbi: ABI.entrys
};

module.exports = config;
