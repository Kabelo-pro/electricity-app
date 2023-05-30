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
var advanceUsedTick = document.querySelector(".advanceUsedTick");

// DOM references for electricity usage radio buttons
const radioBtnUseStove = document.getElementById("stove");
const radioBtnUseTv = document.getElementById("tv");
const radioBtnUseFridge = document.getElementById("fridge");
const radioBtnUseKettle = document.getElementById("kettle");
const useNowBtn = document.querySelector(".btn.useNow");

// Electricity units and amounts
var unitsAvailable = 0;
var totalUnitsBoughtCount = 0;
var totalAmountSpent = 0;
var advanceUsed = false;

// Factory Function instance
const electricity = Electricity();

// Event listener for buying units
buyBtn.addEventListener("click", function () {
  var updatedUnitsAvailable = 0;
  var totalUnits = 0;
  var amountSpent = 0;

  if (radioBtnTen.checked) {
    updatedUnitsAvailable = 7;
    totalUnits = 7;
    amountSpent = 10; // R10.00 for buying 7 units
  } else if (radioBtnTwenty.checked) {
    updatedUnitsAvailable = 14;
    totalUnits = 14;
    amountSpent = 20; // R20.00 for buying 14 units
  } else if (radioBtnFifty.checked) {
    updatedUnitsAvailable = 35;
    totalUnits = 35;
    amountSpent = 50; // R50.00 for buying 35 units
  } else if (radioBtnThirtyAdvance.checked) {
    if (advanceUsed) {
      alert("Advance already used. Pay back the advance to use again.");
      return;
    }
    updatedUnitsAvailable = 21;
    totalUnits = 21;
    amountSpent = 30; // R30.00 for buying 21 units
    advanceUsed = true;
    advanceUsedTick.style.display = "inline-block";
  }

  unitsAvailable += updatedUnitsAvailable;
  totalUnitsBoughtCount += totalUnits;
  totalAmountSpent += amountSpent;

  updateUnitsAvailable();
  updateTotalUnitsBought();
  updateTotalAmountSpent();
});

// Event listeners for appliance usage
radioBtnUseStove.addEventListener("click", function () {
    useAppliance("Stove", 10);
  });
  radioBtnUseTv.addEventListener("click", function () {
    useAppliance("TV", 3);
  });
  radioBtnUseFridge.addEventListener("click", function () {
    useAppliance("Fridge", 13);
  });
  radioBtnUseKettle.addEventListener("click", function () {
    useAppliance("Kettle", 5);
  });
  
  // Helper function to update the units available display
  function updateUnitsAvailable() {
    unitsAvailableSpan.innerHTML = unitsAvailable;
  }
  
  // Helper function to update the total units bought display
  function updateTotalUnitsBought() {
    totalUnitsBought.innerHTML = totalUnitsBoughtCount;
  }
  
  // Helper function to update the total amount spent display
  function updateTotalAmountSpent() {
    totalAmountSpan.innerHTML = totalAmountSpent.toFixed(2);
  }
  
  // Helper function to use an appliance
  function useAppliance(appliance, units) {
    if (unitsAvailable >= units) {
      unitsAvailable -= units;
      updateUnitsAvailable();
      totalUnitsBoughtCount += units;
      updateTotalUnitsBought();
      var currentAmountSpent = Number(totalAmountSpan.innerHTML);
      var amountSpent = units * 2; // Assuming each unit costs R2.00
      totalAmountSpent += amountSpent;
      updateTotalAmountSpent();
    } else {
      alert("Not enough electricity units available.");
    }
  }
  