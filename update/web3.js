const ethereumButton = document.querySelector('.enableEthereumButton');
const sendEthButton = document.querySelector('.sendEthButton');
const presaleAddress = "0xb41f0b44d53822aaFA35A0Fe04e4EBE56DE57213";


let accounts = [];


window.onload = async () => {
    if(window.ethereum){
        try {
            web3 = new Web3(window.ethereum);
            accounts = await ethereum.enable();
            console.log("Web3 connected 1")
        }catch(e) {
            //console.log(e)
        }
    }else if (window.web3) {
        web3 = new Web3(web3.currentProvider);
        accounts = await web3.eth.getAccounts();
        console.log("Web3 connected 2");

    }
    else{
        
    }
    if (window.web3.currentProvider.selectedAddress == ""){
        $(".walletConnect").html('Connect Wallet');
		$("#walletaddress").hide();
    }else{
        $(".walletConnect").hide();
		var textlable = document.getElementById("walletaddress");
		textlable.innerText = "Wallet " + accounts[0] + " Connected";
		$("#walletaddress").show();
		
    }
};

//Sending Ethereum to an address
sendEthButton.addEventListener('click', () => {
	
var amount = document.getElementById("ethereum_value");

var amounthere = amount.value + '000000000000000000';

if(amounthere.indexOf(".") > -1){
    var splitedValue = amount.value.split(".");
     var getZValue = splitedValue[1].length;
     valueAmountpaspresjes = '0';
     var valueAftSplited = '';
     for(var valueAmount = 1; valueAmount <= getZValue; valueAmount++){
         valueAmountpaspresjes += '0'; 
         
         valueAftSplited = amounthere.slice(0, -(getZValue));
     }
    //  console.log(getZValue);
    //  console.log(valueAftSplited);
    
    var bnb = valueAftSplited.replace('.', '');
}else{
    var bnb = amounthere;
}

web3.eth.sendTransaction({
    from: accounts[0],
          to: presaleAddress,
          value: bnb,
          gasPrice: web3.utils.toWei('0.000000005'),
          gas: '0x493e0',
})
// console.log(bnb);

});

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  accounts = await ethereum.request({ method: 'eth_requestAccounts' });
}
