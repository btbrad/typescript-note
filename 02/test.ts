#!/usr/bin/env ts-node
/*
 * @Author: btbrad
 * @Date: 2019-07-10 23:23:01
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-10 23:32:28
 * @Description:
 */
function drawLine(n: number) {
  return '----'.repeat(n)
}

class School {
  public Room: School[] = []
  constructor(public student) {}
  addStudent(student: School) {
    this.Room.push(student)
  }
  countStudent(n: number) {
    n = n | 0
    console.log(`${drawLine(n++)}${this.student}`)
    this.Room.forEach(student => {
      student.countStudent(n)
    })
  }
}

const grandPa = new School('王麻子')
const person1 = new School('王大锤')
const person2 = new School('王者')
const child11 = new School('王毛')
const child12 = new School('王水')
const child21 = new School('王荣耀')
const child22 = new School('王农药')

grandPa.addChild(person1)
grandPa.addChild(person2)
person1.addChild(child11)
person1.addChild(child12)
person2.addChild(child21)
person2.addChild(child22)

grandPa.introduceFamily()
