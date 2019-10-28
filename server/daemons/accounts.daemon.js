/*
	Accounts stat daemon
*/
const { SETTINGS_DB, STATS_ACCOUNT_DB, log, config, request } = require('./header')('accounts_daemon');
const { asyncWrapper, asyncForEach } = require('../utils/main.utils');
const wrapper = new asyncWrapper(log);

async function getAccountAggregation(){
	let settings = await wrapper.toStrong(SETTINGS_DB.findOne({}));
	if (!settings){
		settings = new SETTINGS_DB();
		await wrapper.toStrong(settings.save());
	}

  await saveAccounts({
    accounts: [{
      name: 'eosio',
    }],
  });

  settings.accounts = await wrapper.toStrong(STATS_ACCOUNT_DB.estimatedDocumentCount());

	await wrapper.toStrong(settings.save());
	
	log.info('===== END accounts aggregation', settings);
	process.exit(0);
}


async function getAccounts(account) {

  let [err, data] = await wrapper.to(request(`${config.historyChain}/v2/history/get_created_accounts?account=${encodeURIComponent(account)}`));
  if (err) return log.error('---- getAccounts', account, 'error:', err);

  try {
    data = JSON.parse(data);
  } catch (e) {
    console.error('getAccounts JSON.parse', e);
    return;
  }

  log.info('get children of:', account, data.accounts.length);
  if (data.accounts.length) await saveAccounts(data);
}

async function saveAccounts(data) {
  if (!data || !data.accounts || !data.accounts.length) {
    log.error('Wrong data accounts data!!');
    return;
  }

  await asyncForEach(data.accounts, async (elem) => {
    let query = { account_name: elem.name };
    let [err] = await wrapper.to(STATS_ACCOUNT_DB.updateOne(query, query, { upsert: true }));
    if (err) {
      return log.error('saveAccounts', elem, err);
    }

    await getAccounts(elem.name);
  });
}

getAccountAggregation();





