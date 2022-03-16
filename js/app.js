// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (we declare a variable -tbody;
// we also use d3.select to tell JavaScript to look for the <tbody> tags in HTML)
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello();

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }