/**
 * @param {number} n
 * @return {number}
 */
/**
 * step 1. the number n located has how many digits
 * 0 - 9 9 * 1, 1 digit
 * 10 - 99 90 * 2, 2 digits
 * 100 - 999 900 * 3, 3 digits
 */
/**
 * step 2. the number n located
 */
/**
 * step 3. find out n
 */

var findNthDigit = function(n) {
  let base = 9,
    digits = 1;

  // step 1.  find out how many digits the number n located
  while (n - base * digits > 0) {
    n -= base * digits;
    base *= 10;
    digits++;
  }

  // step 2. find out the number n located
  let index = n % digits;
  if (index === 0) {
    index = digits;
  }
  let num = 1;
  for (let i = 1; i < digits; i++) {
    num *= 10;
  }
  num += index === digits ? ~~(n / digits) - 1 : ~~(n / digits);

  //step 3. find out the specific number
  for (let i = index; i < digits; i++) {
    num = ~~(num / 10);
  }
  return num % 10;
};
