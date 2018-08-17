/**
 * @param {number} n
 * @return {number}
 * a fibonacci problem
 * the number of way to get node n = (n-1) + (n-2)
 * can also use array 
 * n[0]=0; n[1]=1; n[2]=2;
 * n[i] = n[i-1] + n[i-2];
 */
var climbStairs = function(n) {
    //base cases
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    let res = 0,
        one_step_before = 2,
        two_steps_before = 1;

    for (let i = 2; i < n; i++) {
        res = one_step_before + two_steps_before;
        two_steps_before = one_step_before;
        one_step_before = res;
    }
    return res;
};