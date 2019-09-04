// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const chain = '5dad9f713ce25d88d509c54e69820eb5ddda1132fc15107b33b56ad6d7110de5';
export const environment = {
    production: false,
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
        httpEndpoint: 'https://pof4k4f8e2.execute-api.ap-northeast-2.amazonaws.com/test',
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
          big: 'block',
          small: 'explorer'
       },
       nets: [{ name: 'Mainnet', url: 'https://eosweb.net', active: true },
              { name: 'Jungle', url: 'https://jungle.eosweb.net', active: false },
              { name: 'Europechain', url: 'https://xec.eosweb.net', active: false },
              { name: 'WAX', url: 'https://wax.eosweb.net', active: false }],
       disableNets: false,
       voteDonationAcc: 'eoswebnetbp1',
       disableVoteDonation: false,
       version: '2.2.8',
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
};*/

const chain = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';
export const environment = {
    production: true,
    appName: 'WAXweb',
    network: {
        blockchain: 'eos',
        host: 'wax.cryptolions.io',
        port: 443,
        protocol: 'https',
        expireInSeconds: 120,
        chainId: chain
    },
    chain: chain,
    Eos: {
        httpEndpoint: 'https://wax.cryptolions.io',
        chainId: chain,
        verbose: false
    },
    frontConfig: {
       coin: 'WAX',
       bp: 'bp.json',
       tokenContract: 'eosio.token',
       totalBalance: 'WAX',
       convertToUSD: true,
       customBalance: false,
       logo: '/assets/images/wax.png',
       name: {
          big: 'wax',
          small: 'web'
       },
       nets: [{ name: 'Mainnet', url: 'https://eosweb.net', active: false },
              { name: 'Jungle', url: 'https://jungle.eosweb.net', active: false },
              { name: 'Europechain', url: 'https://xec.eosweb.net', active: false },
              { name: 'WAX', url: 'https://wax.eosweb.net', active: true }],
       disableNets: false,
       voteDonationAcc: 'cryptolions1',
       disableVoteDonation: false,
       version: '1.0.0',
       producers: 1000,
       social: [
         { link: 'https://github.com/orange1337/eosweb', icon: 'fa-github' },
         { link: 'https://www.facebook.com/EOSwebnet-199076424068961', icon: 'fa-facebook' },
         { link: 'https://www.reddit.com/user/eosweb', icon: 'fa-reddit-alien' },
         { link: 'https://medium.com/@EoswebN', icon: 'fa-medium' },
         { link: 'https://twitter.com/EoswebN', icon: 'fa-twitter' },
         { link: 'https://t.me/eoswebdevchat', icon: 'fa-telegram-plane' }
       ],
       liveTXenable: true
    }
};
