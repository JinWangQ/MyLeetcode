/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * another nice solution in Java
 * // a/b = e^(ln(a))/e^(ln(b)) = e^(ln(a)-ln(b)) 
 * class Solution {
    public:
        int divide(int dividend, int divisor) {
            if(dividend==0)  return 0;
            if(divisor==0)  return INT_MAX;
            
            double t1=log(fabs(dividend));
            double t2=log(fabs(divisor));
            long long result=double(exp(t1-t2));
            if((dividend<0) ^ (divisor<0))  result=-result;
            if(result>INT_MAX)  result=INT_MAX;
            return result;
        }
    };
 * 
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }
    var sign = dividend > 0 ^ divisor > 0;
    var res = 0;

    dividend = Math.abs(dividend);
    subtract(Math.abs(divisor), 1);

    function subtract(divisor, multiple) {
        //this part make divisor as big as it can
        //multiple records the times divisor enlarge
        if (dividend > divisor) {
            subtract(divisor + divisor, multiple + multiple);
        }
        //let the dividend substract the enlarged divisor
        //the sum of the multiples is the result
        if (dividend >= divisor) {
            dividend -= divisor;
            res += multiple;
        }
    }

    return sign ? -res : res;
};