

var toArray = function(string) {
  var array = [],regex = /(\d+)\s\w+\sR(\d+)/;;
  var str = string.replace(/, /g,",");
  str = str.replace(/\.$/, "");
  str = str.split(",");
  str = str.map(function(deal) {var match = regex.exec(deal); return {deal: match[0], quantity: Number(match[1]), price: Number(match[2])};});
  return str;
};

// console.log(toArray(string));

var perAvoPrice = function(array) {
  array.map(function(deal) {return {deal: deal.deal, avgPrice: Number((deal.price/deal.quantity).toFixed(2))};});
};

var minDeal = function(perAvoPrice) {
  return perAvoPrice.reduce(function(a,b) {return Math.min(a.avgPrice,b.avgPrice);});
}
var maxDeal = function(perAvoPrice) {
  return perAvoPrice.reduce(function(a,b) {return Math.max(a.avgPrice,b.avgPrice);});
}
var allDealsAvgPrice = function(array) {
  var sumQ = array.reduce(function(sum, deal){return sum+=deal.quantity;},0);
  var sumP = array.reduce(function(sum, deal){return sum+=deal.price;},0);
  return sumP/sumQ;
};

exports.toArray = function(string) {
  return toArray(string);
};
exports.perAvoPrice = function(string) {
  return perAvoPrice(string);
};
exports.minDeal = function(perAvoPrice) {
  return minDeal(perAvoPrice);
};
exports.maxDeal = function(perAvoPrice) {
  return maxDeal(perAvoPrice);
};
exports.allDealsAvgPrice = function(array) {
  return allDealsAvgPrice(array);
};
