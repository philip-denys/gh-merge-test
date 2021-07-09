// create function to get highest number and console.log it
// create function to get lowest number and console.log it
// create function to get average of numbers and console.log it
// create function to get sum of numbers and console.log it
// create function to get product of numbers and console.log it
// create function to get factorial of number and console.log it
// create function to get average of numbers and console.log it
// create function to get sum of numbers and console.log it
// create function to get product of numbers and console.log it
// create function to get factorial of number and console.log it
// create function to get average of numbers and console.log it
// create function to get sum of numbers and console.log it
// create function to get product of numbers and console.log it
// create function to get factorial of number and console.log it
// create function to get average of numbers and console.log it
// create function to get sum of numbers and console.log it
// create function to get product of numbers and console.log it

function getHighestNumber(arr) {
    var highestNumber = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > highestNumber) {
            highestNumber = arr[i];
        }
    }
    console.log(highestNumber);
}

function getLowestNumber(arr) {
    var lowestNumber = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < lowestNumber) {
            lowestNumber = arr[i];
        }
    }
    console.log(lowestNumber);
}
function getAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    console.log(average);
}

function getSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

function getProduct(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    console.log(product);
}

function getFactorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(factorial);
}

getHighestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getLowestNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
getFactorial(10);

