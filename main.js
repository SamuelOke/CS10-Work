// TITLE
'use strict';

// Global Variables
let numAgain = 0;
let numDonut = 0;
let numCoffee = 0;
let numPrize = 0;

// Event Listeners
document.getElementById('mainImg').addEventListener('click', rollUp); // Main function
document.getElementById('5Times').addEventListener('click', rollFive); // roll 5 Times 
document.getElementById('UntilPrize').addEventListener('click', untilAPrize); // Roll until 1 Prize
document.getElementById('500Donuts').addEventListener('click', until500Donuts); //Roll until 500 Donuts
document.getElementById('end').addEventListener('click', endSimulation);
document.getElementById('start').addEventListener('click', startSimulation)

function rollUp() {
    let Input = document.getElementById('input').value;

    if (Input == 'British Columbia') {
        let randNum = Math.random(); // Random number Simulator

        // Simulate Results
        if (randNum < 0.7) {
            console.log('Sorry! Roll Again!'); // Text for Console Viewers
            numAgain++;
            document.getElementById('again').innerHTML = numAgain; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/again.jpg'></img>"; // Print Image of Item
        } else if (randNum < 0.8) {
            console.log('Congrats! You won a donut!'); // Text for Console Viewers
            numDonut++;
            document.getElementById('donut').innerHTML = numDonut; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/donut.jpg'></img>";  // Print Image of Item
        } else if (randNum < 0.9) {
            console.log('Congrats! You won a coffee!'); // Text for Console Viewers
            numCoffee++;
            document.getElementById('coffee').innerHTML = numCoffee; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/coffee.jpg'></img>";// Print Image of Item
        } else {
            console.log('BIG CONGRATULATIONS! YOU WON THE GRAND PRIZE'); // Text for Console Viewers
            numPrize++;
            document.getElementById('prize').innerHTML = numPrize; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/prize.jpg'></img>";// Print Image of Item
        }
    } else if (Input == 'Alberta') {
        let randNum = Math.random();

        // Simulate Results
        if (randNum < 0.15) {
            console.log('Sorry! Roll Again!'); // Text for Console Viewers
            numAgain++;
            document.getElementById('again').innerHTML = numAgain; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/again.jpg'></img>";// Print Image of Item
        } else if (randNum < 0.55) {
            console.log('Congrats! You won a donut!'); // Text for Console Viewers
            numDonut++;
            document.getElementById('donut').innerHTML = numDonut; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/donut.jpg'></img>";// Print Image of Item
        } else if (randNum < 0.95) {
            console.log('Congrats! You won a coffee!'); // Text for Console Viewers
            numCoffee++;
            document.getElementById('coffee').innerHTML = numCoffee;// Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/coffee.jpg'></img>";// Print Image of Item
        } else {
            console.log('BIG CONGRATULATIONS! YOU WON THE GRAND PRIZE'); // Text for Console Viewers
            numPrize++;
            document.getElementById('prize').innerHTML = numPrize; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/prize.jpg'></img>";// Print Image of Item
        }
    } else if (Input == 'Saskatchewan') {
        let randNum = Math.random();

        // Simulate Results
        if (randNum < 0.70) {
            console.log('Sorry! Roll Again!'); // Text for Console Viewers
            numAgain++;
            document.getElementById('again').innerHTML = numAgain; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/again.jpg'></img>";// Print Image of Item
        } else if (randNum < 0.71) {
            console.log('Congrats! You won a donut!'); // Text for Console Viewers
            numDonut++;
            document.getElementById('donut').innerHTML = numDonut;// Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/donut.jpg'></img>";// Print Image of Item
        } else if (randNum < 0.72) {
            console.log('Congrats! You won a coffee!'); // Text for Console Viewers
            numCoffee++;
            document.getElementById('coffee').innerHTML = numCoffee; // Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/coffee.jpg'></img>";// Print Image of Item
        } else {
            console.log('BIG CONGRATULATIONS! YOU WON THE GRAND PRIZE'); // Text for Console Viewers
            numPrize++;
            document.getElementById('prize').innerHTML = numPrize;// Update variable number
            document.getElementById('results').innerHTML += "<img src ='images/prize.jpg'></img>";// Print Image of Item
        }
    }
}

function rollFive() {
    for (let n = 0; n < 5; n++) {
        rollUp();
    }
}

function untilAPrize() {
    while (numPrize < 1) {
        rollUp();
    }
}

function until500Donuts() {
    let count = 0;
    while (numDonut < 500) {
        rollUp();
        count++
    }
    console.log('Count: ' + count);
}
