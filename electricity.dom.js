// DOM element(s) references

// DOM references for electricity buying buttons 
const radioBtnTen = document.getElementById("ten");
const radioBtnTwenty = document.getElementById("twenty");
const radioBtnFifty = document.getElementById("fifty");
const radioBtnThirtyAdvance = document.getElementById("advance");
const buyBtn = document.querySelector(".btn");

// DOM references for electricity available displays 
var unitsAvailableSpan = document.querySelector(".total.unitsAvailable");
var totalUnitsBought = document.querySelector(".total.totalUnits");
var totalAmountSpan = document.querySelector(".total.totalAmount");

// DOM references for electricity usage radio buttons 

const radioBtnUseStove = document.getElementById(".ten");
const radioBtnUseTv = document.getElementById(".twenty");
const radioBtnUseFridge= document.getElementById(".fifty");
const radioBtnUseKettle = document.getElementById(".advance");

// Factory Function instance 
const electricity =  Electricity();


// DOM events here 

buyBtn.addEventListener("click", function () {
    if (radioBtnTen.checked) {
      var currentUnitsAvailable = Number(unitsAvailableSpan.innerHTML);
      updatedUnitsAvailable = currentUnitsAvailable + 7;
      totalUnits = 7;
      var amountSpent = 10; // R10.00 for buying 7 units
    } else if (radioBtnTwenty.checked) {
      var currentUnitsAvailable = Number(unitsAvailableSpan.innerHTML);
      updatedUnitsAvailable = currentUnitsAvailable + 14;
      totalUnits = 14;
      var amountSpent = 20; // R20.00 for buying 14 units
    } else if (radioBtnFifty.checked) {
      var currentUnitsAvailable = Number(unitsAvailableSpan.innerHTML);
      updatedUnitsAvailable = currentUnitsAvailable + 35;
      totalUnits = 35;
      var amountSpent = 50; // R50.00 for buying 35 units
    } else if (radioBtnThirtyAdvance.checked) {
      var currentUnitsAvailable = Number(unitsAvailableSpan.innerHTML);
      updatedUnitsAvailable = currentUnitsAvailable + 21;
      totalUnits = 21;
      var amountSpent = 30; // R30.00 for buying 21 units
    }
  
    unitsAvailableSpan.innerHTML = updatedUnitsAvailable;
    totalUnitsBought.innerHTML = totalUnits;
  
    var currentAmountSpent = Number(totalAmountSpan.innerHTML);
    var totalAmount = currentAmountSpent + amountSpent;
    totalAmountSpan.innerHTML = totalAmount.toFixed(2);
  });
  
  