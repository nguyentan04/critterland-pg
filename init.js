// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const EvmChains = window.EvmChains;
const Fortmatic = window.Fortmatic;
  
 // Web3modal instance
let web3Modal
  
 // Chosen wallet provider given by the dialog window
let provider;
  
  
 // Address of the selected account
let selectedAccount;
let balanceBnb;
const env = {
    BSCSCAN: "https://testnet.bscscan.com/address/",
    TOKEN: ""
};
   
 /**
  * Setup the orchestra
  */
function init() { 
    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);

    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {
        walletconnect: {
            package: window.WalletConnectProvider.default,
            options: {
                rpc: {
                    '1': 'https://bsc-dataseed1.defibit.io',
                    '56': 'https://bsc-dataseed1.defibit.io',
                },
            }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
    });
}
 
 init();
 
 /**
  * Kick in the UI action after Web3modal dialog has chosen a provider
  */
async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);

    console.log("Web3 instance is", web3);  

    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];  

    // Go through all accounts and get their ETH balance
    const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);   
    balanceBnb = humanFriendlyBalance;

    //update data
    selectedAccount = selectedAccount.substring(0, 15)+"...";
    _popup.getChildByTag(config.popup_default).getChildByTag(config.popup_wallet).setString(selectedAccount);
    _popup.getChildByTag(config.popup_default).getChildByTag(config.popup_wallet_balance).setString(balanceBnb+" BNB");
    });

    // Because rendering account does its own RPC commucation
    // with Ethereum node, we do not want to display any results
    // until data for all accounts is loaded
    await Promise.all(rowResolvers);
}
   
   
   
/**
* Fetch account data for UI when
* - User switches accounts in wallet
* - User switches networks in wallet
* - User connects wallet initially
*/
async function refreshAccountData() {
    await fetchAccountData(provider);
}

   
/**
* Connect wallet button pressed.
*/
async function onConnect() {

    console.log("Opening a dialog", web3Modal);
    try {
    provider = await web3Modal.connect();
    } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
    fetchAccountData();
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
    fetchAccountData();
    });

    await refreshAccountData();
}
   
/**
* Disconnect wallet button pressed.
*/
async function onDisconnect() {

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if(provider.close) {
    await provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    provider = null;
    }

    _popup.getChildByTag(config.popup_default).getChildByTag(config.popup_wallet).setString(lb.wallet_address_value);
    _popup.getChildByTag(config.popup_default).getChildByTag(config.popup_wallet_balance).setString(lb.coin_info_value);

}