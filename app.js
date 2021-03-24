//Write a function that takes in a number and returns 'even' if the number is even or 'odd' if it is odd.
function evenOrOdd(num)
if (num % 2 == 0) {
    return 'even'
} else {
    return 'odd'
}

//can also be written as a ternary
//return num % 2 ? 'odd' | 'even'
// 
// falsy statments= 0, '', undefined
// truthy statements= everything else
// so since if num=2 then 2/2 =1 that is 'odd'.. 
// if 'odd' is true since 1 is a true value then | 
// if number is even then return 'even'
