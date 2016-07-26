// Generator函数
// 基本概念：生成器函数用于生成生成器(Generator)

// 写法类似于变通函数；function命令与函数名之间有一个星号
// 函数内使用yield定义遍历器的每个成员
// 执行它时会返回一个函数状态的遍历器。


// demo1 
// function * gen() {
//   yield "1";
//   yield "2";
//   yield "3";
// }

// demo2
// 这个玩意儿如果运行的话，会返回一个Iterator实例，然后在执行Iterator实例的next()方法
// 那么这个函数才开始真正运行，并把yield后面的值包装成固定对象并返回，直到运行到函数结尾，
// 最后在返回undefined

// function* gen() {
//   yield "1";
//   yield "2";
//   yield "3";
// }

// var it = gen();
// console.log(it); //  "Generator {  }"
// console.log(it.next()); // {value: "1", done: false}
// console.log(it.next()); // {value: "2", done: false}
// console.log(it.next()); // {value: "3", done: false}
// console.log(it.next()); // {value: undefined, done: true}


// demo3
// yield
// Generator函数返回的Iterator运行的过程中
// 如果碰到了yield,就会把yield后面的值返回
// 此时函数相当于停止了,下次再执行next()方法的时候
// 函数又会从上次退出去的地方重新开始执行
// 如果把yield和return一起使用的话，那么return的值也会作为最后的返回值
// 如果return语句后面还有yield， 那么这些yield不生效
// function* gen() {
//   yield 0;
//   yield 1;
//   return 2; // 作为返回值
//   yield 3; // 不执行
// };
// var it = gen();
// console.log(it.next(),it.next(),it.next(),it.next());


// yield*
// yield*这种语句让我们可以在Generator函数里面再套一个Generator
// 当然在一个Generator里面调用另外的Generator需要使用: yield* 函数()
// function* foo() {
//   yield 0;
//   yield 1;
// }
// function* bar() {
//   yield 'x';
//   yield* foo(); 
//   yield 'y';
// }
// for (let v of bar()){
//   console.log(v);
// };


// demo4
// 不能在非Generator函数中使用yield
// 报错 
// var arr = [1, [[2, 3], 4], [5, 6]];
// var flat = function* (a) {
//   a.forEach(function (item) {
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   })
// };

// for (var f of flat(arr)){
//   console.log(f);
// }

// 改进1
// var arr = [1, [[2, 3], 4], [5, 6]];
// var flat = function* (a) {
//   var length = a.length;
//   for (var i = 0; i < length; i++) {
//     var item = a[i];
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// };
// for (var f of flat(arr)) {
//   console.log(f);
// }

// 改进2
// 数组的forEach改成Generator函数
// var arr = [1, [[2, 3], 4], [5, 6]];
// Array.prototype.forEach = function* (callback) {
//   for(var i=0; i<this.length; i++) {
//     yield* callback(this[i],i ,this[i]);
//   }
// }
// var flat = function* (a) {
//   yield* a.forEach(function* (item) {
//     if (typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   })
// };

// for (var f of flat(arr)){
//   console.log(f);
// }


// Iterator的return的值不会被for...of循环到
// 也不会被扩展符遍历到,以下Demo的return 2 和yield 3完全不生效了
// function* gen() {
//   yield 0;
//   yield 1;
//   return 2;
//   yield 3;
// };
// let g = gen();
// console.log([...g]); //输出：[ 0, 1 ]
// for(let foo of g) {
//   console.log( foo ); //输出 0, 1
// }







// next()方法
// yield句本身没有返回值，或者说总是返回undefined。
// next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值
// 如果给next方法传参数
// 那么这个参数将会作为上一次yield语句的返回值
// 这个特性在异步处理中是非常重要的，因为在执行异步代码以后
// 有时候需要上一个异步的结果， 作为下次异步的参数

// function* gen(x) {
//   var y = 3 * (yield(x + 1));
//   var z = yield (y / 3);
//   return (x + y + z);
// };
// var a = gen(8);
// a.next() // Object{value:9, done:false}
// a.next() // Object{value:NaN, done:false}
// a.next() // Object{value:NaN, done:true}

// var a = gen(8);
// a.next() // Object{value:9, done:false}
// a.next(6) // Object{value:6, done:false} 3 x 6 / 3
// a.next(8) // Object{value:34, done:true} 8 + 18 + 8

// throw方法()
// 如果执行Generator 的throw()方法，在Iterator执行到yield 语句
// 写在try{}语句块中，那么这个错误会被内部的try{}catch(){}捕获
// var g = function* () {
//   try {
//     yield;
//   } catch (e) {
//     console.log('内部捕获', e);
//   }
// };

// var i = g();
// i.next();

// try {
//   i.throw('a');
//   i.throw('b');
// } catch (e) {
//   console.log('外部捕获', e);
// }
// 内部捕获 a  被Generator函数体内的catch语句捕获
// 外部捕获 b  由于Generator函数内部的catch语句已经执行过了，不会再捕捉到这个错误了，所以这个错误就被抛出了Generator函数体，被函数体外的catch语句捕获。


// return()方法
// 如果执行Iterator的return()方法
//  那么这个迭代器的返回会被强制设置为迭代完毕
// 执行return()方法的参数就是这个Iterator的返回值，此时done的状态也为true
// function* gen() {
//   yield 0;
//   yield 1;
//   yield 2;
//   yield 3;
// };
// var g = gen();
// console.log(g.return("heheda")); //输出：{ value: 'heheda', done: true }


// Generator 函数的this

// Generator函数总是返回一个遍历器
// ES6规定这个遍历器是Generator函数的实例，也继承了Generator函数的prototype对象上的方法。

// 以下代码表明，Generator函数g返回的遍历器obj
// 是g的实例，而且继承了g.prototype。
// 但是，如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象。
// function * g(){};
// g.prototype.hello = function() {
//   return 'hello';
// };

// var obj = g();
// console.log(obj instanceof g )
// console.log(obj.hello()) // hello


// function * g(){
//   this.name = 'momo'
// };

// var obj = g();
// console.log(obj.name ) // undefined

// 不能跟new 命令用在一起
// function* F() {
//   yield this.x = 2;
//   yield this.y = 3;
// }

// new F() //  TypeError: F is not a constructor


// 实际使用
// ajax的异步处理,利用生成器的特性
// 不但可以用于ajax的异步处理,也能够用于浏览器的文件系统filesystem的异步

// console.log("执行到这儿啦");先被执行
// 然后才出现了ajax的返回结果,也就说明了Generator函数是异步的　　　
//  "use strict";
// function* main() {
//   var result = yield request("http://www.filltext.com?rows=10&f={firstName}");
//   console.log(result);
//   //do 别的ajax请求;
// }

// function request(url) {
//   var r = new XMLHttpRequest();
//   r.open("GET", url, true);
//   r.onreadystatechange = function () {
//       if (r.readyState != 4 || r.status != 200) return;
//       var data = JSON.parse(r.responseText);
//       //数据成功返回以后， 代码就能够继续往下走了;
//       it.next(data);
//   };
//   r.send();
// }

// var it = main();
// it.next();
// console.log("执行到这儿啦");


// 利用Generator函数，可以在任意对象上部署iterator接口
// function* iterEntries(obj) {
//   let keys = Object.keys(obj);
//   for (let i=0; i < keys.length; i++) {
//     let key = keys[i];
//     yield [key, obj[key]];
//   }
// }

// let myObj = { foo: 3, bar: 7 };

// for (let [key, value] of iterEntries(myObj)) {
//   console.log(key, value); //输出：foo 3 ， bar 7
// }




































































































