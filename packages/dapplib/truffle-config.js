require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note pumpkin million hidden ensure sun trust'; 
let testAccounts = [
"0xc14194ff6c5084deb0bf433a73a1a467681a3e4dd480c065385e115743c69c88",
"0x4f5e88c91df28cafd9dad140efccba0320b470d133b87320c909eb6b552e8ec1",
"0x5601d4e569abce5ff6bd06783c74836c059e0dffba4df4d92921bc570bbae9f0",
"0x3ec2196c83c8ad934ba0cfa8fd2ef3f5343219ab9a45720daefe3c552fdb5581",
"0xd3125ee5e30e3dcf361f498943492824d4fa84490dd77bfee3e10451463ab09f",
"0xf7af728e2e08ff91b475e5a55ab939a88659e3fbcb4880d2906451ab41ca55c6",
"0x6d899640eba57e99d48f696241354dabd8d59bd6e578c08163227e5dbc2efd45",
"0x639b019b08a32cf11633e9dd331c0260a7494474af8abede1ec6298272f0cd94",
"0x396ad0bade38650e10b94efb34d611b3a7813142277bc5ead78e6c8660ef4a05",
"0x47500440f6a5c457e0f5810178cdd82b429375abf71ad46e050703ad5b7adec5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


