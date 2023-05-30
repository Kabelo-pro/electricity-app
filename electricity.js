function Electricity() {
    let appliances = {
      Stove: 10,
      Kettle: 5,
      TV: 3,
      Fridge: 13,
    };
  
    let unitsAvailable = 0;
    let totalUnitsBoughtCount = 0;
    let totalAmountSpent = 0;
    let advanceUsed = false;
  
    function topUpElectricity(amount) {
      if (amount === "advance") {
        if (advanceUsed) {
          alert("Advance already used. Pay back the advance to use again.");
          return;
        }
        unitsAvailable += 21;
        totalUnitsBoughtCount += 21;
        totalAmountSpent += 30;
        advanceUsed = true;
      } else {
        unitsAvailable += amount / 2;
        totalUnitsBoughtCount += amount / 2;
        totalAmountSpent += amount;
      }
    }
  
    function getUnitsAvailable() {
      return unitsAvailable;
    }
  
    function useAppliance(appliance) {
      if (unitsAvailable >= appliances[appliance]) {
        unitsAvailable -= appliances[appliance];
        totalUnitsBoughtCount += appliances[appliance];
        totalAmountSpent += appliances[appliance] * 2;
        return true;
      } else {
        return false;
      }
    }
  
    function advanceTaken() {
      return advanceUsed;
    }
  
    function totalAmountSpent() {
      return totalAmountSpent;
    }
  
    function totalUnitsBought() {
      return totalUnitsBoughtCount;
    }
  
    return {
      topUpElectricity,
      getUnitsAvailable,
      useAppliance,
      advanceTaken,
      totalAmountSpent,
      totalUnitsBought,
    };
  }
  