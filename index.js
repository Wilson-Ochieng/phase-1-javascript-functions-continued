// code your solution here

function saturdayFun(kazi = "roller-skate") {
    return `This Saturday, I want to ${kazi}!`;
  }
  
  const mondayWork = function (kazi = "go to the office") {
    return `This Monday, I will ${kazi}.`;
  };
  
  function wrapAdjective(string = "*") {
    return function (feels = "special") {
      return `You are ${string}${feels}${string}!`;
    };
  }
  wrapAdjective()();