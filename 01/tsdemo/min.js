/*
 * @Author: btbrad
 * @Date: 2019-07-01 23:45:37
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-01 23:50:15
 * @Description:
 */
var arr = [23, 345, 5, 667, 87];
function findMin(arr) {
    return Math.min.apply(Math, arr);
}
console.log(findMin(arr));
