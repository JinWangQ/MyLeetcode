var isPowerOfThree = function(n) {
  // 1162261467 is 3^19,  3^20 is bigger than int
  return n > 0 && Math.pow(3, 19) % n == 0;
};
