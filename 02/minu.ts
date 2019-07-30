#!/usr/bin/env ts-node
/*
 * @Author: btbrad
 * @Date: 2019-07-16 23:18:26
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-16 23:30:59
 * @Description:
 */
const m: number = parseInt(process.argv[2])
const n: number = parseInt(process.argv[3])

if (Number.isNaN(m) || Number.isNaN(n)) {
  console.log('invalid input')
  process.exit(1)
} else {
  console.log(m - n)
  process.exit(0)
}
