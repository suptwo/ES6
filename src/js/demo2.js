// let 
// const 
// 块级作用域

// ++++++++++++++++++++++++++++++++++++++++++++++

// let 声明变量 继 var 之后，新的变量定义方法
// 声明的变量所在的作用域为块级。即在let 命令所在的代码块内有效
// 声明的变量不存在变量提升。即没有预解析
// 声明的变量不允许重复声明，否则会报错。

// demo1
// for (let i = 0;i < 10;i++){
//     //doSomething
//     console.log(i); // 0-9
// }
// console.log(i); // i is not defined

// ++++++++++++++++++++++++++++++++++++++++++++++

// const 声明变量
// const 更容易被理解: const 也就是 constant 的缩写 常数
// const关键字来声明常量
// 声明的常量不能被修改
// 声明的常量为块级作用域
// 声明的常量不存在提升且不可以重复声明
// 如果常量保存的是一个对象，那么对象的属性是可以被修改的。
// 由于在 ES6 之前的 ECMAScript 标准中，并没有原生的实现，所以在降级编译中，会马上进行引用检查，然后使用 var 代替

// demo1
// const foo = 'bar'

// foo = 'newvalue'

// const a = {
// 	a: 'bb'
// };
// a.a = 11
// a.b = 22
// console.log(a.b);


// ++++++++++++++++++++++++++++++++++++++++++++++
// 块级作用域
// let 实际上就为JavaScript新增了块级作用域。
// 一对{}包括的区域成为代码块，一个变量或者函数只在该区域才起作用
// 在 ES6之前 JavaScript 没有块级作用域 用封闭空间模拟
// ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。但是，浏览器没有遵守这个规定
// ES6引入了块级作用域，明确允许在块级作用域之中声明函数


// 最熟悉的例子 选项卡
// demo1

// var aButtons = document.querySelectorAll('button');
// var oOutput = document.querySelector('#output');

// for (let i = 0; i < aButtons.length; i++) {
// 	aButtons[i].onclick = function(){
// 		console.log(i); // 4 没有这个按钮
// 		oOutput.innerText = aButtons[i].innerText;
// 	};
// }
// console.log(i); // 4 没有这个按钮
// Cannot read property 'innerText' of undefined



// 查看编辑后的js，实现方法一目了然，通过传值的方法防止了 i 的值错误。

