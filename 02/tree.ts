#!/usr/bin/env ts-node
/*
 * @Author: btbrad
 * @Date: 2019-07-17 00:44:13
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-17 01:07:35
 * @Description:
 */
function createPrefix(n: number): string {
  return '----'.repeat(n)
}

class Vip {
  public children: Vip[] = []
  constructor(public name) {}
  sayHi(): void {
    console.log(this.name)
  }
  addChild(child: Vip): void {
    this.children.push(child)
  }
  introduceFamily(n?: number): void {
    n = n || 1
    console.log(`${createPrefix(n)}${this.name}`)
    this.children.forEach(child => {
      child.introduceFamily(n + 1)
    })
  }
}

let p = new Vip('王根基')
let p1 = new Vip('王乾')
let p11 = new Vip('王春')
let p12 = new Vip('王夏')
let p2 = new Vip('王坤')
let p21 = new Vip('王秋')
let p22 = new Vip('王冬')

p.addChild(p1)
p.addChild(p2)
p1.addChild(p11)
p1.addChild(p12)
p2.addChild(p21)
p2.addChild(p22)

p.introduceFamily()
