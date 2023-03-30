function saturdayFun(dActivity = "roller-skate") {
    return `This Saturday, I want to ${dActivity}!`
  }
  
  const mondayWork = function(dActivity = "go to the office") {
    return `This Monday, I will ${dActivity}.`
  }
  
  function wrapAdjective(highlight = "*") {
    return function(adjective = "special") {
      return `You are ${highlight}${adjective}${highlight}!`
    }
  }
