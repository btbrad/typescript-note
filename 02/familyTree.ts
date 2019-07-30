#!/usr/bin/env ts-node
/*
 * @Author: btbrad
 * @Date: 2019-07-10 22:56:17
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-10 23:22:22
 * @Description:
 */
function createTabs(n: number) {
  return '----'.repeat(n)
}

class Person {
  public Children: Person[] = []
  constructor(public name) {}
  addChild(child: Person): void {
    this.Children.push(child)
  }
  introduceFamily(n?: number): void {
    n = n || 0
    console.log(`${createTabs(n++)}${this.name}`)
    this.Children.forEach(child => {
      child.introduceFamily(n)
    })
  }
}

const grandPa = new Person('王麻子')
const person1 = new Person('王大锤')
const person2 = new Person('王者')
const child11 = new Person('王毛')
const child12 = new Person('王水')
const child21 = new Person('王荣耀')
const child22 = new Person('王农药')

grandPa.addChild(person1)
grandPa.addChild(person2)
person1.addChild(child11)
person1.addChild(child12)
person2.addChild(child21)
person2.addChild(child22)

grandPa.introduceFamily()
