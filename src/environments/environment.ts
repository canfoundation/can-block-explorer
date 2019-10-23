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
};
