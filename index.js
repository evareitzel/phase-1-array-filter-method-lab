// Code your solution here

function findMatching(drivers, name){
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers, firstLetter){
    return drivers.filter(driver => driver.charAt(0) === firstLetter.charAt(0));
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string);
}