var object = {
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
};

function createFruitMap(object) {
var track = {};
var map = Object.keys(object).reduce(function(arr, key){
  Object.keys(object[key]).forEach(function(item) {
      if (!track[item]) {
        track[item] = 1;
        return arr.push({fruit: item, suppliers: [{supplier: key, price: object[key][item]}]});
      } else {
        var fruit = arr.find(function(a){return a.fruit===item;});
        fruit.suppliers.push({supplier: key, price: object[key][item]});
      }
    });
  return arr;
},[]);
// console.log(map);
for (var i=0; i<map.length; i++) {
  // console.log("This is map[i].suppliers",map[i].suppliers);
  var min = map[i].suppliers.reduce(function(a,b) {console.log("this is a",a);return Math.min(a, b.price);},map[i].suppliers[0].price);
  var max = map[i].suppliers.reduce(function(a,b) {return Math.max(a, b.price);},map[i].suppliers[0].price);
  // console.log("this is min",min);
  // console.log("this is max",max);
  var minSellers = map[i].suppliers.filter(function(supplier){return supplier.price===min;});
  var maxSellers = map[i].suppliers.filter(function(supplier){return supplier.price===max;});
  map[i].cheapest = minSellers;
  map[i].expensive = maxSellers;
  // console.log("This is minSellers",minSellers);
  // console.log("This is maxSellers",maxSellers);
}
// console.log(map);
return map;
}

// var cheapestOfAll = function(object) {
//   var fruitMap = createFruitMap(object);
//   return fruitMap.reduce(function(a,b){
//     return Math.min(a.shops.reduce(function(a,b){return Math.min(a.price,b.price);}),b.shops.reduce(function(a,b){return Math.min(a.price,b.price);}));
//   });
// };

exports.createFruitMap = function(object) {
  return createFruitMap(object);
};
// console.log(createFruitMap(object));
createFruitMap(object);
