//OT input for user
const ot = 2.5;
//Seniority input for user
const seniority = 2;

//0-1 hour
const otMultiplier1 = 2;
//2-3 hour
const otMultiplier2 = 2.1;
//>4 hour
const otMultiplier3 = 3;

//0-1 years && 1-2 years
const seniorMultiplier1 = 1;
//2-3 years && 3-4 years
const seniorMultiplier2 = 1.1;
//4-5 years && 5-6 years
const seniorMultiplier3 = 1.2;
//>6
const seniorMultiplier4 = 1.7;

//fucntion to calculate 1st hour
function firstTierHour(firstTier, seniorMultiplier, otMultiplier){
    var firstTierHour = (firstTier * seniorMultiplier) * otMultiplier1 * 20;
    console.log("First tier hour: " + firstTierHour);
    return firstTierHour;
}

//function to calculate 2nd hour
function secondTierHour(secondTier, seniorMultiplier, otMultiplier){
    var secondTierHour = (secondTier * seniorMultiplier) * otMultiplier2 * 20;
    console.log("Second tier hour: " + secondTierHour)
    return secondTierHour;
}

//function to calcute 3rd or more hour
function thirdTierHour(thirdTier, seniorMultiplier, otMultiplier){
    var thirdTierHour = (thirdTier * seniorMultiplier) * otMultiplier3 * 20;
    console.log("Third tier hour: " + thirdTierHour)
    return thirdTierHour;
}

//function to send relevant data when OT input is filtered
function filterOT(ot){
    var firstValue = 0;
    var secondValue = 0;
    var thirdValue = 0;
    var values;
    
    if(ot >= 4){
        firstValue = 1;
        secondValue = 3;
        thirdValue = ot - 4;
    } else if(ot >= 2 && ot < 4){
        firstValue = 1;
        secondValue = ot - 1;
        thirdValue = 0;
    } else if(ot > 0 && ot < 2){
        firstValue = ot;
        secondValue = 0;
        thridValue = 0;
    }
    values = {firstValue: firstValue, secondValue: secondValue, thirdValue: thirdValue};
    console.log("Values: " , values);
    return values;
}

//function to send relevant data when seniority input is filtered
function filterSeniority(seniority){
    var senior = 0;
    
    if(seniority >= 6){
        senior = seniorMultiplier4;
    } else if(seniority >= 4 && seniority < 6){
        senior = seniorMultiplier3;
    } else if(seniority >= 2 && seniority < 4){
        senior = seniorMultiplier2;
    } else if(seniority > 0 && seniority < 2){
        senior = seniorMultiplier1;
    }
    console.log("Seniority multiplier: " + senior);
    return senior;
}

//function to calculate total overtime wages
function totalOTwages(otTime, yearsWorked){
    var value = filterOT(otTime);
    var seniority = filterSeniority(yearsWorked);
    
    var totalOTwage = firstTierHour(value.firstValue, seniority, ot) + secondTierHour(value.secondValue, seniority, ot) + thirdTierHour(value.thirdValue, seniority, ot);
    
    return totalOTwage;
}

console.log("Total overtime wages for the day is " + totalOTwages(ot, seniority));