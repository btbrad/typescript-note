/*
 * @Author: btbrad
 * @Date: 2019-07-02 21:49:38
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-02 22:27:12
 * @Description:
 *
 */
var arr1 = [5, 4, 3, 2, 1];
function bubble(arr) {
    var flag = true;
    for (var index = 0; index < arr.length - 1; index++) {
        for (var j = 0; j < arr.length - index - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (flag) {
            break;
        }
    }
    return arr;
}
console.log(bubble(arr1));
