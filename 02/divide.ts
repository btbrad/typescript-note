#!/usr/bin/env ts-node
/*
 * @Author: btbrad
 * @Date: 2019-07-16 23:50:19
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-17 00:02:32
 * @Description:
 */

const c: number = +process.argv[2]
const d: number = +process.argv[3]

if (Number.isNaN(c) || Number.isNaN(d) || d === 0) {
  console.log('invalid input')
  process.exit(1)
}

console.log(c / d)
