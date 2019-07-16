#!/usr/bin/env ts-node
/*
 * @Author: btbrad
 * @Date: 2019-07-08 22:20:40
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-16 00:19:17
 * @Description:
 */
const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.log('输入不合法!')
  process.exit(2)
}

console.log(a + b)

process.exit(0)
