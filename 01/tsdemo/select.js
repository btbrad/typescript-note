/*
 * @Author: btbrad
 * @Date: 2019-07-02 22:50:18
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-02 23:23:54
 * @Description:
 */
var arr3 = [4, 5, 2, 1, 3];
function select(arr) {
    for (var index = 0; index < arr.length; index++) {
        var minIndex = index;
        for (var j = index; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        var temp = arr[minIndex];
        arr[minIndex] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
console.log(select(arr3));
