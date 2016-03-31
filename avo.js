var string = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50."

var toArray = function(string) {
  var array = [],regex = /(\d+)\s\w+\sR(\d+)/;;
  var str = string.replace(/, /g,",");
  str = str.replace(/\.$/, "");
  str = str.split(",");
  str = str.map(function(deal) {var match = regex.exec(deal); return [Number(match[1]),Number(match[2])];});
  return str;
};

var deals = function(string) {
  var str = string.replace(/, /g,",");
  str = str.replace(/\.$/, "");
  return str.split(",");
};


exports.toArray = function(string) {
  return toArray(string);
};
exports.deals = function(string) {
  return deals(string);
};
