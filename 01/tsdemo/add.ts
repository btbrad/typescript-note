/*
 * @Author: btbrad
 * @Date: 2019-07-02 00:05:36
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-02 00:10:54
 * @Description:
 */
function add(a: string, b: string): string
function add(a: number, b: number): number
function add(a, b): any {
  return a + b
}

console.log(add('a', 'b'))
console.log(add(1, 2))
// console.log(add('m', 3))
