// 变量的解构赋值

// 从数组和对象中提取值，对变量进行赋值，被称为解构
// 数组的解构赋值：按照对应的顺序解构
// 方便提取JSON数据
// 变量交换
// 如果解构不成功，变量的值就等于undefined。
// 遍历Map：for (let [key, value] of map){}


// demo1
// var [a,b,c] = [1,2,3];
// console.log(a,b,c);
// var a = 1,b = 2,c = 3;

// var [a, [b,c]] = [2,[4]]
// console.log(a,b,c);


// demo2  对象的解构赋值
// 名字一一对应,顺序无所谓
// var obj = {
// 	fn: function(){

// 	},
// 	o: {},
// 	arr: [],
// 	str: 'abc'
// };

// var {fn, arr, o, str} = obj; 
// console.log(fn,o,str,arr);

// demo3 交换变量值
// var x = 1;
// var y = 2;

// var [x,y] = [y,x];
// console.log(x,y);

// demo4 解构不成功
// var [foo] = [];
// var [bar, foo] = [1];
// console.log(foo); // undefined

// demo5  遍历Map
// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// } // first is hello  second is world






