var assert = require('assert');
var avo = require('../avo');
var string = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50."

describe("AVO", function(){

  it("should split the string (given as parameter) into an array of objects containing information on deal, quantity, and price for each deal. Prices and quantities should be numbers", function(){
    var result = avo.toArray(string)[0];
    assert.deepEqual(result, {deal: "1 for R3", quantity: 1, price: 3});
  });

  it("should split the string (given as parameter) into an array of objects containing information on deal, quantity, and price for each deal. Prices and quantities should be numbers", function(){
    var result = avo.toArray(string)[0];
    assert.deepEqual(result, {deal: "1 for R3", quantity: 1, price: 3});
  });

  it("should split the string (given as parameter) into an array of objects containing information on deal, quantity, and price for each deal. Prices and quantities should be numbers", function(){
    var result = avo.toArray(string)[0];
    assert.deepEqual(result, {deal: "1 for R3", quantity: 1, price: 3});
  });

  it("should split the string (given as parameter) into an array of objects containing information on deal, quantity, and price for each deal. Prices and quantities should be numbers", function(){
    var result = avo.toArray(string)[0];
    assert.deepEqual(result, {deal: "1 for R3", quantity: 1, price: 3});
  });

});
