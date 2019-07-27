/*
 * @Author: btbrad
 * @Date: 2019-07-22 23:40:16
 * @LastEditors: btbrad
 * @LastEditTime: 2019-07-23 00:43:44
 * @Description:
 */
{
    // 初始化变量
    var n1_1 = '';
    var n2_1 = '';
    var operator_1 = '';
    var result_1 = '';
    // 创建容器
    var calc_1 = document.createElement('div');
    calc_1.classList.add('calc');
    document.body.appendChild(calc_1);
    // 创建界面
    var output = document.createElement('div');
    output.classList.add('output');
    var span_1 = document.createElement('span');
    output.appendChild(span_1);
    span_1.textContent = '0';
    calc_1.appendChild(output);
    // 定义getResult
    var getResult_1 = function (n1, n2, operator) {
        var number1 = Number(n1);
        var number2 = Number(n2);
        switch (operator) {
            case '+':
                return (number1 + number2).toString();
            case '-':
                return (number1 - number2).toString();
            case '*':
                return (number1 * number2).toString();
            case '÷':
                return (number1 / number2).toString();
            default:
                return '输入操作符不合法';
        }
    };
    // 添加监听事件
    calc_1.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var text = event.target.textContent;
            console.log(text);
            // 如果点击的是数字
            if ('0123456789'.indexOf(text) > -1) {
                // 如果运算读存在
                if (operator_1) {
                    // 则为第二个运算数
                    n2_1 += text;
                    span_1.textContent = n2_1;
                }
                else {
                    result_1 = '';
                    n1_1 += text;
                    span_1.textContent = n1_1;
                }
            }
            else if ('+-*÷'.indexOf(text) > -1) {
                if (result_1) {
                    n1_1 = result_1;
                    result_1 = '';
                }
                operator_1 = text;
            }
            else if ('='.indexOf(text) > -1) {
                result_1 = getResult_1(n1_1, n2_1, operator_1);
                n1_1 = '';
                n2_1 = '';
                operator_1 = '';
            }
            else if (text === 'Clear') {
                result_1 = '';
                n1_1 = '';
                n2_1 = '';
                operator_1 = '';
            }
            else {
                console.log('invalid input');
            }
        }
    });
    // 定义createButton
    var createButton_1 = function (text, container, className) {
        var button = document.createElement('button');
        button.textContent = text.toString();
        className && button.classList.add(className);
        container.appendChild(button);
    };
    // 初始化按钮
    var textLists = [
        ['Clear', '÷'],
        [7, 8, 9, '*'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '=']
    ];
    // 循环创建按钮
    textLists.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            createButton_1(text, div, "text=" + text);
        });
        calc_1.appendChild(div);
    });
}
