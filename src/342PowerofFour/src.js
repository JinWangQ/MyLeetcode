// The power of 4 in binary form is started with 1 and the flowing are 0s like 100(4) 10000(16)
// and the length of flowing 0 can be divided by 2
var isPowerOfFour = function(num) {
  if (num <= 0) return false;
  const n = num.toString(2).slice(1);
  if (n.includes("1") || n.length % 2) return false;
  return true;
};
