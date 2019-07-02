/*
 * @Author: btbrad
 * @Date: 2019-07-02 23:29:14
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-02 23:51:44
 * @Description:
 */
interface Man {
  sex: Sex
  length: number
}

interface Woman {
  sex: Sex
  depth: number
}

enum Sex {
  male,
  female
}

function marry(a: Man, b: Woman): [Man, Woman] {
  if (a.sex === b.sex) {
    throw new Error('同行婚姻暂不合法')
  } else {
    return [a, b]
  }
}

let Jack = {
  sex: Sex.male,
  length: 18
}

let Maria = {
  sex: Sex.female,
  depth: Infinity
}

let Hank = {
  sex: Sex.male,
  depth: -18
}

console.log(marry(Jack, Maria))
console.log(marry(Jack, Hank))
