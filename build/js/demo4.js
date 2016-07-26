// 各种扩展
// 字符串扩展
// 数值扩展
// 数组扩展
// 对象扩展
// 函数扩展

// +++++++++++++++++++++++++++++++++++++++
// 字符串扩展
// 模板字符串
// 字符串方法

// 模板字符串
// 模板字符串（template string）是增强版的字符串，用反引号（`）标识。
// 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
// 代码中的字符串用反引号(`)表示，如果需要引入变量则使用${变量名}
// 在{}中可以进行运算，也可以引用对象属性。

// demo1
// var name ='fish2';
// var age = 18;
// var str = '你的名字是：'+name+'你的年龄是：'+age;
// console.log(str);
// var str = `你的名字是：${name}你的年龄是：${age}`;
// console.log(str);

// 字符串方法
// 传统上，JavaScript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法。
// includes() 返回布尔值，是否找到了参数字符串
// startsWith() 返回布尔值，参数字符串是否在源字符串的头部
// endsWith() 返回布尔值,参数字符串是否在源字符串的尾部

// demo1
// var str2 = 'yangche';
// console.log(str2.includes('i')); // ture  false
// console.log(str2.startsWith('yang')); // true false
// console.log(str2.endsWith('e1')); // true false

// +++++++++++++++++++++++++++++++++++++++

// 数值扩展
// ES6提供了新的表示二进制和八进制数据的写法
// ES6将ES5中的全局方法isFinite(),isNaN(),parseInt(), parseFloat()移到Number上。逐步减少全局方法,使语言逐步模块化。
// Number.isFinite(),Number.isNaN(),Number.parseInt(), Number.parseFloat()
// Math新增方法

// demo1
// var num = 0b11;
// console.log(num); // 3
// var num2 = 0o11;
// console.log(num2); // 9

// Math.trunc(n) 去除一个数的小数部分
// Math.sign(b) 判断一个数是正数、负数还是0.
// Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
// Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
// Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
// Math.cbrt(x) 返回x的立方根
// Math.clz32(x) 返回x的32位二进制整数表示形式的前导0的个数
// Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
// Math.expm1(x) 返回eˆx - 1
// Math.fround(x) 返回x的单精度浮点数形式
// Math.hypot(...values) 返回所有参数的平方和的平方根
// Math.imul(x, y) 返回两个参数以32位整数形式相乘的结果
// Math.log1p(x) 返回1 + x的自然对数
// Math.log10(x) 返回以10为底的x的对数
// Math.log2(x) 返回以2为底的x的对数
// Math.tanh(x) 返回x的双曲正切（hyperbolic tangent)

// +++++++++++++++++++++++++++++++++++++++
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Array_comprehensions
// 数组的扩展
// Array.from() 伪数组转换数组
// Array.of() 把参数转化成数组
// arr.find() 找出**第一个**符合条件的数组成员
// arr.findIndex() 符合的索引值
// arr.fill() 填充
// 返回遍历器的三个实例方法  arr.ectries() arr.keys() arr.values()

// demo1
// 伪数组转换成数组
// var aDivs = document.getElementsByTagName('div');
// var aEle = [].slice.call(aDivs);
// console.log(aDivs instanceof Array);// false
// console.log(aEle instanceof Array); // true
// console.log(aDivs);

// var aDivs = document.getElementsByTagName('div');
// var aEle = Array.from(aDivs);
// console.log(aEle);
// var s = 'yangcheche';
// var aArr = Array.from(s);
// console.log(aArr);

// demo2
// Array.of(); 把参数转成数组
// var aArr = new Array(3); // [] 长度是3
// console.log(aArr); // []
// console.log(aArr.length);
// var aArr2 = Array.of(1,2,3,4);
// console.log(aArr2); // [1,2,3,4]

// arr.find() 
// 找出**第一个**符合条件的数组成员
// 遍历整个数组，遍历过程中调用回调函数，如果回调函数的返回值为true，则返回当前正在遍历的元素。
// 如果所有元素都不符合条件则返回undefined

// demo3
// var arr = [2,1,3,0,0,2];
// var n = arr.find(function(val,index){
// console.log(arguments);
// 	return val > 3
// });
// console.log(n); 

// arr.findIndex();
// 遍历整个数组，遍历过程中调用回调函数，如果回调函数的返回值为true，则返回该数组元素的位置。
// 如果所有元素都不符合条件则返回-1

// demo4
// var arr = [2,1,3,11,4,5];
// var n2 = arr.findIndex(function(val,index,arr){
// 	return val > 7
// })
// console.log(n2); // 返回符合条件的值的索引

// demo5
//arr.fill() //不需要再用for循环填充了。
// var arr = [1,2,3,4,5];
// arr.fill(6,2,4); // 填充内容，其实位置，结束位置 不包括结束位置
// console.log(arr);

// demo6
// for of循环
// var arr = [1,2,3,4,5];
// var str = 'yangche';
// var obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// } 
// 对象是没有遍历接口的 后面会讲

// for (var val of obj) {
// 	console.log(val);
// }

// demo7
// 返回遍历器的三个实例方法  arr.entries() arr.keys() arr.values()
// var arr = [1,4,3,4,5]
// for(let index of arr.keys()){ // key值遍历
// 	console.log(index);
// }

// var arr = [1,4,3,4,5]
// for (let ele of arr.values()){ // value 值遍历
// 	console.log(ele);
// }

// for (let [index, ele] of arr.entries()) {
// 	console.log(index, ele); // 输出索引和值
// }

// +++++++++++++++++++++++++++++++++++++++
// 对象扩展
// 属性的简洁表示法
// 允许在定义字面量对象时，使用表达式作为对象的属性名，通过把表达式放在方括号内
// 新增Object.is()判断传入的参数是否是相等的，相对于运算符===有两个不同：一是+0不等于-0，二是NaN等于自身

// 新增Object.assign(target [,source1 ... sourceN])方法; 将source对象的可枚举属性赋值到target对象上。
// 注意：如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

// demo1
// function fn(x, y){
// 	x++;
// 	y++;
// return {
// 	x: x,
// 	y: y
// }

// 	return {x, y} //简洁的导出
// }
// console.log(fn(1, 2));

// var obj = {
// 	name: 'yangche',
// 	showName: function(){
// 		return this.name;
// 	}

// 	showName(){ // 简洁的输出
// 		return this.name
// 	}
// };

// console.log(obj.showName());

// demo2
// var sex = '男';
// var person = {
// 	name:'yang1che',
// 	[sex]:false,
// 	['get'+'name'](){
// 		return this.name;
// 	}
// };

// console.log(person.getname());
// console.log(person[sex])

// demo3
// console.log(0 === -0); // true
// console.log(Object.is(0, -0)); // false
// console.log(NaN === NaN); // false
// console.log(Object.is(NaN, NaN)); // true

// demo4
// var obj1 = {};
// var obj2 = {
// 	name:'qian'
// };
// var obj3 = {
// 	name:'duoduo',
// 	age:34
// }
// Object.assign(obj1,obj2,obj3); // 出现重名的后面的会把前面的干掉

// console.log(obj1); //  {name: "duoduo", age: 34}

// +++++++++++++++++++++++++++++++++++++++
// 函数扩展
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 参数默认值
// 扩展运算符
// 箭头函数

// demo1 设置默认参数
// 设置一个默认值 默认值必须是尾参数。是一个可以被忽略的参数。

// function fn(a, b) {
// 	return {a, b};
// }
// console.log(fn(1,2)); // {a: 1, b: 2}

// function ajax(options) {
// 	var opt = {
// 		type: options.type || 'get'// 设置默认参数
// 	}
// }

// function fn(a, b=32) { 
// 	return {a,b}
// }
// console.log(fn(3)); // {a: 3, b: 32}
// console.log(fn(3,78)) // {a: 3, b: 78}

// function fn(a,b,c,...rest){
// 	console.log(rest); // [4, 5, 55, 6, 32] c后面的参数
// 用于获取函数的多余参数
// 注意：rest后边不能再有其他参数，否则会报错。
// }
// console.log(fn(1,2,3,4,5,55,6,32));

// demo1  扩展运算符
// 将一个数组转换为用逗号分隔的参数序列
// var arr = [1,2,3,4,5];
// console.log(Math.max.apply(null, arr)); // 获取数组中最大值
// console.log(Math.max(...arr)); // 相当于把数组变成了1,2,3,4,5
// var str = 'yangche';
// var arr2 = [...str];
// console.log(...str);
// console.log(arr2);// ["y", "a", "n", "g", "c", "h", "e"]

// 箭头函数
// 不是用来替代原有函数的，用来作为回调函数使用。
// 1、函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象。
// 2、不可以当作构造函数，不可以使用new命令，否则会抛出一个错误。
// 3、该函数体内不存在arguments。

// arr.sort(function(){}); // ES5
// arr.sort((a,b)=> a - b) // ES6

// demo1
// var f = a => a + 1;

// 等同于
// var f = function(a){
// 	return a + 1;
// }
// console.log(f());// NaN
// console.log(f(1));// 2

// 有多个参数
// var f = (a, b) => a + b;
// console.log(f(1,5));

// var obj = {
// 	f : (a,b) => {
// 	 return a + b;
// 	}
// }
// console.log(obj.f(1,9));

// this指向
// 在箭头函数出现之前，每个新定义的函数都有其自己的  this 值
// 构造函数的 this 指向了一个新的对象；
// 严格模式下的函数的 this 值为 undefined；
// 如果函数是作为对象的方法被调用的，则其 this 指向了那个调用它的对象

// function Person() {
// 构造函数 Person() 定义的 `this` 就是新实例对象自己
//   this.age = 2;
//   setInterval(function growUp() {
//     console.log(this); // 指向全局
//     this.age++; 
//     console.log(this.age); // NaN 严格模式下this 值为 undefined
//   }, 1000);
// }

// var p = new Person()
// var name = '111'
// var obj2 = {
// 	name:'qian',
// 	fn:()=>{
// 		// console.log(this);
// 		alert(this.name)
// 	}
// };
// obj2.fn()
// function Person(){
//   this.age = 2;

//   setInterval(() => {
//     this.age++; // |this| 正确地指向了 person 对象
//     console.log(this);
//   }, 1000);
// }
// var p = new Person();
"use strict";