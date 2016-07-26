// Promise对象
// http://liubin.org/promises-book/
// 利用Promise是解决JS异步执行时候回调函数嵌套回调函数的问题,更简洁地控制函数执行流程
// ES6的Promise对象是一个构造函数，用来生成Promise实例
// 所谓Promise对象,就是代表了未来某个将要发生的事件,通常是一个异步操作
// 实例化的Promise有3个状态: 等待（pending）、已完成（fulfilled）、已拒绝（rejected）
// 实例化的Promise的状态,只可能从"等待"转到"完成"态或者"拒绝"态，不能逆向转换，同时"完成"态和"拒绝"态不能相互转换
// 它的好处在于,有了Promise对象,就可以将异步操作以同步操作的流程表达出来,避免了层层嵌套的回调函数

// 基础使用
// let p = new Promise (function(resolve, reject){
//   setTimeout(function(){
//     reject(); // 成功
//   }, 500);
// });

// p.then(function(){
//   console.log('成功');
// },function(){
//   console.log('失败');
// });

// then方法
// then方法每一次都是返回不同的Promise实例
// then的第一个参数是成功回调,这个成功回调的参数为,上一个Promise实例执行resolve方法的参数
// 一般来说,then方法会返回当前的promise,如果在then方法里面return 一个新的Promise实例,那么此时的then返回的就是新的Promise实例,利用这个特性,就可以实现多层回调

// fn("args", function(a) {
//  fn1("foo", function(b) {
//   fn2("bar", function(c) {
//    fn3("baz", function(d) {
//      alert(a+b+c+d)
//     })
//    })
//   })
// })

// new Promise(function(resolve , reject) {
//     resolve('成功1');
// }).then(function(val) {
// 	console.log(val);
// 	return new Promise(function(resolve , reject) {
// 	  resolve('成功2');
// 	});
// }).then(function(val) {
//     console.log(val);
//     return new Promise(function(resolve , reject) {
//       resolve('成功3');
//     });
// }).then(function(val) {
// 	console.log(val);
// 	return new Promise(function(resolve , reject) {
// 	  resolve('成功4');
// 	});
// }).then(function(val) {
//     console.log(val+'2222');
// });

// catch方法 捕获错误信息
// catch方法和失败回调时一样的
// 如果上一个异步函数抛出了错误了
// 错误会被捕获,并执行catch方法或者失败回调
// Promise中的错误是会一层层传递的,如果错误没有没有被捕获会一直传递,直到被捕获为止
// new Promise(function(resolve,rejected){
// 	var img = new Image();
// 	// img.src="http://www.paipai.com/sdssds.jpg";   //这个会失败
// 	img.src="http://yc0.autoimg.cn/imgs/yc/mnt/banner/201607/20160718145616.jpg" //这个会成功
// 	img.onload = function(){
// 	    resolve();
// 	}
// 	img.onerror = function(){
// 	    rejected();
// 	}
// })
// .then(function(){
//     console.log("图片加载成功!")
// })
// .catch(function(){
//     console.log("图片加载失败!")
// })

// Prpmise的四个方法
// Promise.all();Promise.race();Promise.resolve();Promise.reject()

// Promise.all(iterable)
// 用来将多个Promise实例包装成一个新的Promise实例
// 返回一个Promise对象,当iterable参数里所有的Promise都被解决后,该Promise也会被解决
// 要注意all方法是Promise函数的方法,不是实例的方法,参数是一个数组,数组里面全是Promise的实例,参数要求拥有iterator接口
// 如果参数中的任何一个promise为reject的话，则整个Promise.all调用会立即终止，并返回一个reject的新的promise对象
// 同时开始、并行执行的
// let p = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve('p+');
//     // console.log('p');
//   },20);
// });

// let p1 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     // resolve('p1+');
//     reject('p1+')
//     // console.log('p1');
//   },200);
// });

// let p2 = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve('p2+'); 
//     // console.log('p2');
//   },2000);
// });

// // 等p p1 p2全部都为成功的状态时候 p3状态才为成功
// // 有一个为失败。立马终止
// let p3 = Promise.all([p,p1,p2]); 

// p3.then(function(val){
//   console.log(val);
//   console.log('成功');
// },function(val){
//   console.log(val);
//   console.log('失败');
// }).catch(function(err){
// 	console.log(err);
// })

// Promise.race(iterable)
// Promise.race方法同样是将多个Promise实例,包装成一个新的Promise实例。
// 只要有一个Promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理。

// function timerPromisefy(delay) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve(delay);
//         }, delay);
//     });
// }
// // 任何一个promise变为resolve或reject 的话程序就停止运行
// Promise.race([
//     timerPromisefy(90),
//     timerPromisefy(32),
//     timerPromisefy(64),
//     timerPromisefy(128)
// ]).then(function (value) {
//     console.log(value);    // => 32
// });

// Promise.all() 和 Promise.race()
// 接收一个promise对象数组为参数。
// Promise.all 在接收到的所有的对象promise**都变为** FulFilled 或者 Rejected 状态之后才会继续进行后面的处理
// 只要**有一个**Promise对象进入 FulFilled 或者 Rejected 状态的话，就会继续进行后面的处理

// Promise.resolve()
// 一般情况下我们都会使用 new Promise() 来创建promise对象,但是除此之外我们也可以使用其他方法
// 静态方法Promise.resolve(value) 可以认为是 new Promise() 方法的快捷方式。
// Promise.resolve(promise)
// Promise.resolve(thenable)
// Promise.resolve(object)
// 根据接收到的参数不同，返回不同的promise对象。

// demo1
// Promise.resolve(42);
// new Promise(function(resolve){
//     resolve(42);
// });

// Promise.resolve(42).then(function(value){
//     console.log(value);
// });

// 参数是一个Promise实例
// Promise.resolve(promise)
// 如果参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例

// 参数是一个thenable对象
// Promise.resolve(thenable)
// thenable对象指的是具有then方法的对象
// Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法。
// let thenable = {
//   then: function(resolve, reject) {
//     resolve(89);
//   }
// };

// let p1 = Promise.resolve(thenable);
// p1.then(function(value) {
//   console.log(value);  // 89
// });

// 参数不是具有then方法的对象，或根本就不是对象
// Promise.resolve(object)
// 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved。

// var p = Promise.resolve('Hello');

// p.then(function (s){
//   console.log(s)
// });
// Hello
//上面代码生成一个新的Promise对象的实例p。由于字符串Hello不属于异步操作（判断方法是它不是具有then方法的对象），返回Promise实例的状态从一生成就是Resolved，所以回调函数会立即执行。Promise.resolve方法的参数，会同时传给回调函数。

// Promise.reject() 
// Promise.reject(reason)方法也会返回一个新的Promise实例
// 该实例的状态为rejected。它的参数用法与Promise.resolve方法完全一致。
"use strict";