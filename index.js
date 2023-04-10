const returnFirstTwoDrivers = (drivers) => {
  const firstTwo = [];
  for (let i = 0; i < 2; i++) {
    firstTwo.push(drivers[i]);
  }
  return firstTwo;
};
const returnLastTwoDrivers = (drivers) => {
  const lastTwo = [];
  for (let i = drivers.length - 2; i < drivers.length; i++) {
    lastTwo.push(drivers[i]);
  }
  return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return (fareMultiplier = () => integer * integer);
}

const fareDoubler = (int) => int *2 
const fareTripler = (int) => int *3 

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers);
};
