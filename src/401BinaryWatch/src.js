/**
 * @param {number} num
 * @return {string[]}
 */
/**
 * go though each time and check if it's digits equals to the given number
 * push the time into result when match.
 *
 * "h * 64 + m" means the binary form of the time
 * e.g the time is 1:01, there should be 2 LED on
 * h = 1, m = 1 => 1000001(in binary form) h * 64 equals to h << 6
 * if it's "h * 60 + m" => 111101 (incorrect binary form)
 */
var readBinaryWatch = function(num) {
  let times = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      let time =
        h * 64 + m == 0 ? 0 : (h * 64 + m).toString(2).match(/1/g).length;
      if (time === num) {
        if (m < 10) m = "0" + m;
        times.push(h + ":" + m);
      }
    }
  }
  return times;
};
