const chain = '5dad9f713ce25d88d509c54e69820eb5ddda1132fc15107b33b56ad6d7110de5';
export const environment = {
    production: true,
    appName: 'CANBlockExplorer',
    network: {
        blockchain: 'eos',
        host: 'api-testnet.canfoundation.io',
        port: 8443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'https://api-testnet.canfoundation.io:8443',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'CAT',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'CAT',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/canweb.png',
       name: {
          big: 'can',
          small: 'explorer'
       },
       nets: [{ name: 'CAN-Main-net', url: 'https://explorer.canfoundation.io/', active: true },
         { name: 'CAN-Test-net', url: 'https://explorer-test.canfoundation.io/', active: false }],
       disableNets: false,
       voteDonationAcc: 'lecle.bp',
       disableVoteDonation: false,
       version: '1.0.0',
       producers: 1000,
       social: [
        { link: 'https://github.com/canfoundation', icon: 'fa-github' },
        { link: 'https://www.facebook.com/canfoundation.io', icon: 'fa-facebook' },
        { link: '', icon: 'fa-reddit-alien' },
        { link: '', icon: 'fa-medium' },
        { link: '', icon: 'fa-twitter' },
        { link: 'https://t.me/cryptobadge_usergroup', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};
