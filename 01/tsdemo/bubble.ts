/*
 * @Author: btbrad
 * @Date: 2019-07-02 21:49:38
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-02 22:27:12
 * @Description:
 *
 */
let arr1: number[] = [5, 4, 3, 2, 1]

function bubble(arr: number[]): number[] {
  let flag: boolean = true
  for (let index = 0; index < arr.length - 1; index++) {
    for (let j = 0; j < arr.length - index - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false
        let temp: number = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if (flag) {
      break
    }
  }
  return arr
}

console.log(bubble(arr1))
