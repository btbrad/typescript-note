/*
 * @Author: btbrad
 * @Date: 2019-07-02 22:50:18
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-02 23:23:54
 * @Description:
 */
let arr3: number[] = [4, 5, 2, 1, 3]

function select(arr: number[]): number[] {
  for (let index = 0; index < arr.length; index++) {
    let minIndex: number = index
    for (let j = index; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp: number = arr[minIndex]
    arr[minIndex] = arr[index]
    arr[index] = temp
  }
  return arr
}

console.log(select(arr3))
