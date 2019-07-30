/*
 * @Author: btbrad
 * @Date: 2019-07-22 23:40:16
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-23 00:47:16
 * @Description:
 */
{
  // 初始化变量
  let n1: string = ''
  let n2: string = ''
  let operator: string = ''
  let result: string = ''

  // 创建容器
  let calc = document.createElement('div')
  calc.classList.add('calc')
  document.body.appendChild(calc)

  // 创建界面
  let output = document.createElement('div')
  output.classList.add('output')
  let span = document.createElement('span')
  output.appendChild(span)
  span.textContent = '0'
  calc.appendChild(output)

  // 定义getResult
  let getResult = (n1: string, n2: string, operator: string): string => {
    let number1: number = Number(n1)
    let number2: number = Number(n2)
    switch (operator) {
      case '+':
        return (number1 + number2).toString()
      case '-':
        return (number1 - number2).toString()
      case '*':
        return (number1 * number2).toString()
      case '÷':
        return (number1 / number2).toString()
      default:
        return '输入操作符不合法'
    }
  }

  // 添加监听事件
  calc.addEventListener('click', event => {
    if (event.target instanceof HTMLButtonElement) {
      const text = event.target.textContent
      // 如果点击的是数字
      if ('0123456789'.indexOf(text) > -1) {
        // 如果运算读存在
        if (operator) {
          // 则为第二个运算数
          n2 += text
          span.textContent = n2
        } else {
          // 运算符不存在，则为第一个字符串
          result = ''
          n1 += text
          span.textContent = n1
        }
        // 如果不是数字 是四则运算符其中之一
      } else if ('+-*÷'.indexOf(text) > -1) {
        if (result) {
          n1 = result
          result = ''
        }
        operator = text
      } else if ('='.indexOf(text) > -1) {
        result = getResult(n1, n2, operator)
        n1 = ''
        n2 = ''
        operator = ''
        span.textContent = result
      } else if (text === 'Clear') {
        result = ''
        n1 = ''
        n2 = ''
        operator = ''
        span.textContent = '0'
      } else {
        console.log('invalid input')
      }
      console.log(
        'n1-' + n1,
        'n2-' + n2,
        'operator-' + operator,
        'result-' + result
      )
    }
  })

  // 定义createButton
  let createButton = (
    text: string | number,
    container: HTMLElement,
    className: string
  ) => {
    let button = document.createElement('button')
    button.textContent = text.toString()
    className && button.classList.add(className)
    container.appendChild(button)
  }

  // 初始化按钮
  let textLists: Array<Array<string | number>> = [
    ['Clear', '÷'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '=']
  ]

  // 循环创建按钮
  textLists.forEach((textList: Array<string | number>) => {
    let div = document.createElement('div')
    div.classList.add('row')
    textList.forEach((text: number | string) => {
      createButton(text, div, `text-${text}`)
    })
    calc.appendChild(div)
  })
}
