require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stool response mean protect gloom dry flock gauge'; 
let testAccounts = [
"0x69334970916096791c3e6e3189f8af7c34b68f2f8ce46de69ba00f38c79b7261",
"0xadc1a11f8023bbeded5a25cea77988cdb100414484faf6d705ae0091d12a0a0b",
"0xbd4c16f84c6a7993b7b9ae623cfa43f48194bf181cda6ad7b90a8c90cd443e86",
"0x4958c1ee8e57851762ea63c0087eccd0229e88a369a74c4137100c5f1ef04787",
"0xec06ae2cee506d20e5aa913639b1102e70c23d7220c3e478707c25b506b197ab",
"0xd6e3e73e4292208f23acf35f7dab44a7d3539edf4beb70592535a972ed231ccc",
"0x08bedb0d2fd12d28c7a4e6fcf7df083f753853548df8e354e77d5cf734f8eee8",
"0x6f911ad00cce0e34a83c77d44050a366189ffb7dbe729fc8ee0b6b62baa0a73a",
"0xe22246f2022c054f68fe6ca25060688c7b00300ad48289b9aefb4d94f24d667f",
"0x6bfc593b0cab6e91954e19c7aa23faf921db3bd902c3063658b08c0b64e4934f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

