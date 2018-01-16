const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    '',
    ''
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from: ' + accounts[0]);
    //update to reference initial value that gets put in the constructor.  deploy({data: bytecode, arguments: []})
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log(interface);
    console.log('contract deployed to: ', result.options.address);
};
deploy();