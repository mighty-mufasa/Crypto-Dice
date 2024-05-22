const listCoin = document.querySelector(".list-option");
const coinValue = document.querySelector(".coin-value");

const balance = document.querySelector(".balance");
const up = document.querySelector(".up-arrow");
const balancePage = document.querySelector(".balancePage");

const coinImages = {
  BTC: document.querySelector(".btc-img"),
  ETH: document.querySelector(".eth-img"),
  XRP: document.querySelector(".xrp-img"),
  LTC: document.querySelector(".ltc-img"),
  BCH: document.querySelector(".bch-img"),
  DOGE: document.querySelector(".doge-img"),
  USDT: document.querySelector(".usdt-img"),
  DAI: document.querySelector(".dai-img"),
  USDC: document.querySelector(".usdc-img"),
  INR: document.querySelector(".inr-img"),
};

// Function to hide all coin images
function hideAllCoinImages() {
  for (const coin in coinImages) {
    //  console.log(coin, coinImages[coin]);
    coinImages[coin].style.display = "none";
    if (coin === "BTC") {
      coinImages["BTC"].style.display = "inline-block";
    }
  }
}

hideAllCoinImages();
// Function to get the value of the selected coin
function getCoinValue(coin) {
  switch (coin) {
    case "BTC":
      return 0.00000301;
    case "ETH":
      return 0.00006601;
    case "XRP":
      return 0.38;
    case "LTC":
      return 0.024;
    case "BCH":
      return 0.044;
    case "DOGE":
      return 1.29;
    case "USDT":
      return 0.201;
    case "DAI":
      return 0.201;
    case "USDC":
      return 0.201;
    case "INR":
      return 17.0;
    default:
      return 0;
  }
}

const nameOfBalance = () => {
  const coin = listCoin.value;
  //  console.log(coin, getCoinValue(coin));
  coinValue.value = getCoinValue(coin); // Update coin value

  // Hide all coin images
  hideAllCoinImages();

  // Show the selected coin image
  if (coinImages[coin]) {
    coinImages[coin].style.display = "inline-block";
  }
};

// Add event listener to the dropdown menu
listCoin.addEventListener("change", nameOfBalance);

// Balance page
balance.addEventListener("click", () => {
  balancePage.classList.toggle("active");
});

up.addEventListener("click", () => {
  balancePage.classList.remove("active");
});

// Manual and Auto click buttons

const Manual = document.querySelector(".m");
const Auto = document.querySelector(".a");
const AutoDisplay = document.querySelector(".auto");
const StopProfitLoss = document.querySelector(".stop-profit-loss");
const RollDiceDisplay = document.querySelector(".btn-role");
const AutoBtnRoleDisplay = document.querySelector(".auto-btn-role");

Manual.addEventListener("click", () => {
  Manual.style.backgroundColor = "white";
  Auto.style.backgroundColor = "rgb(240, 248, 255)";
  AutoDisplay.style.display = "none";
  StopProfitLoss.style.display = "none";
  AutoBtnRoleDisplay.style.display = "none";
  RollDiceDisplay.style.display = "inline-block";
});

Auto.addEventListener("click", () => {
  Auto.style.backgroundColor = "white";
  Manual.style.backgroundColor = "rgb(240, 248, 255)";
  AutoDisplay.style.display = "inline-block";
  AutoDisplay.style.display = "flex";
  StopProfitLoss.style.display = "inline-block";
  StopProfitLoss.style.display = "flex";
  RollDiceDisplay.style.display = "none";
  AutoBtnRoleDisplay.style.display = "inline-block";
});

// Create Dice Roll implementation .........................

const betAmount = document.querySelector(".betAmount");
const profitAmount = document.querySelector(".profitAmount");
const exchangeNumber = document.querySelector(".exchangeNumber");
const exchange = document.querySelector(".exchange");
let rollEx = document.querySelector(".rollEx");
const multiplierNumber = document.querySelector(".multiplierNumber");
let percentageNumber = document.querySelector(".percentageNumber");
const rangeNumber = document.querySelector(".rangeNumber");
const rollDice = document.querySelector(".btn-role");
const result = document.querySelector(".result");

let isRollOver = true;
let multiplierValue;

const GENERATED_NUMBER_LIMIT = 98;
const MINIMUM_ROLL = 1;

const BetAmount = document.querySelector(".betAmount");

const mulRs = () => {
  const betAmountValue = parseFloat(betAmount.value) || 0;
  const coinValueFloat = parseFloat(coinValue.value) || 0;
  
  // const StopProfit = parseFloat(stopProfit.value) || 0;
  // const StopLoss = parseFloat(stopLoss.value) || 0;

  if (result.textContent === "You win!" ) {
    if(betAmountValue >= coinValueFloat ){
      betAmountValue.style.display = "readonly";
    }else{
      const winBy = (betAmountValue * parseFloat(winInputValue.value) / 100).toFixed(8);
    console.log("RS", winBy);
    console.log("ok", (betAmountValue + parseFloat(winBy)).toFixed(8));
    
    const betAmountval = (betAmountValue + parseFloat(winBy)).toFixed(8);
    const multiplierResult = ((parseFloat(multiplierValue) - 1) * betAmountValue).toFixed(8);
    console.log(parseFloat(multiplierValue) - 1);

    console.log("Bet Amount:", betAmountValue);
    console.log("Multiplier Value:", parseFloat(multiplierValue));
    console.log("Multiplier Result:", multiplierResult);

    const resultMultiple = parseFloat(multiplierResult);
    const WinresultTotal = resultMultiple + coinValueFloat;
    coinValue.value = WinresultTotal.toFixed(8);
    betAmount.value = parseFloat(betAmountval).toFixed(8);
    }
  } else {
    if(betAmountValue >= coinValueFloat ){
      betAmountValue.style.display = "readonly";
    }else{
      const lossResultTotal = (coinValueFloat - betAmountValue).toFixed(8);
      coinValue.value = lossResultTotal;
  
      const betResult = betAmountValue - (betAmountValue * parseFloat(lossInputValue.value) / 100);
      console.log("Adjusted Bet Amount after Loss:", betResult.toFixed(8));
      betAmount.value = betResult.toFixed(8);
    }
    }
  };

// win/lose
const generatedNumber = () => {
  const randomNumber =
    Math.floor(Math.random() * GENERATED_NUMBER_LIMIT) + MINIMUM_ROLL;
  console.log("Generated number: ", randomNumber);

  const rangeValue = parseFloat(rangeNumber.value);
  const winCondition = isRollOver
    ? randomNumber > rangeValue
    : randomNumber < rangeValue;
  if (winCondition) {
    result.textContent = "You win!";
    result.style.color = "green";
  } else {
    result.textContent = "You lose!";
    result.style.color = "red";
  }

  if (balance.value == "0.00000000") {
    console.log("End of Balance");
  }

  mulRs();
};

// range value getter
const getRangeNumber = () => {
  const rangeValue = parseFloat(rangeNumber.value);

  percentageNumber.value = rangeValue;
  exchangeNumber.value = rangeValue;
  // console.log(percentageNumber.value);

  calculateMultiplier(rangeValue);
};

// Calculate multiplier
const calculateMultiplier = (rangeValue) => {
  multiplierValue = isRollOver
    ? GENERATED_NUMBER_LIMIT / (99 - rangeValue)
    : GENERATED_NUMBER_LIMIT / rangeValue;
  multiplierNumber.value = multiplierValue.toFixed(4);
};

//  Roll Over and Roll Under

const rollExchange = () => {
  isRollOver = !isRollOver;
  rollEx.textContent = isRollOver ? "Roll Over" : "Roll Under";

  getRangeNumber();
};

const winChance = () => {
  if (rollEx.textContent === "Roll Over") {
    percentageNumber.value = GENERATED_NUMBER_LIMIT - percentageNumber.value;
  }
};

// Event listeners
rollDice.addEventListener("click", generatedNumber);
rangeNumber.addEventListener("input", getRangeNumber);
rangeNumber.addEventListener("input", winChance);
exchange.addEventListener("click", rollExchange);
exchange.addEventListener("click", winChance);

// Auto Roll Dice  Events  ......
const winReset = document.querySelector(".win-reset");
const winBy = document.querySelector(".win-by");
const lossReset = document.querySelector(".loss-reset");
const lossBy = document.querySelector(".loss-by");

const stopProfit = document.querySelector(".stop-on-profit");
const stopLoss = document.querySelector(".stop-on-loss");

const winInputValue = document.querySelector("#winVal");
winInputValue.disabled = true;

const lossInputValue = document.querySelector("#lossVa");
lossInputValue.disabled = true;

const getWinResetEvent = () => {
  winReset.style.backgroundColor = "white";
  winBy.style.backgroundColor = "rgb(240, 248, 255)";
  winInputValue.disabled = true;
};

const getWinByEvent = () => {
  winBy.style.backgroundColor = "white";
  winReset.style.backgroundColor = "rgb(240, 248, 255)";
  winInputValue.disabled = false;

  
};

const getLossResetEvent = () => {
  lossReset.style.backgroundColor = "white";
  lossBy.style.backgroundColor = "rgb(240, 248, 255)";
  lossInputValue.disabled = true;
};

const getLossByEvent = () => {
  lossBy.style.backgroundColor = "white";
  lossReset.style.backgroundColor = "rgb(240, 248, 255)";
  lossInputValue.disabled = false;
};

winReset.addEventListener("click", getWinResetEvent);
winBy.addEventListener("click", getWinByEvent);
lossReset.addEventListener("click", getLossResetEvent);
lossBy.addEventListener("click", getLossByEvent);

// Auto Roll Dice game function........................

const autoBtnRole = document.querySelector(".auto-btn-role");

const autoRollEvent = () => {
  setInterval(() => {
    generatedNumber();
  }, 100);
};

autoBtnRole.addEventListener("click", autoRollEvent);

// Initial setup

getRangeNumber();
