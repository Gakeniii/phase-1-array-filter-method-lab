// Code your solution here

const drivers = ['Sammy', 'Sarah', 'Sally', 'Sunny']
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()))
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}