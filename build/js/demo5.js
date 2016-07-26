// Set和Map数据结构
// 遍历接口

// 新增数据结构set,类似于数组，但是成员的值是唯一的。添加重复的值不会改变原结构中的内容
// set.size  实例的成员个数
// set.add(value) 为Set的实例添加值
// set.delete(value) 删除Set实例的值
// set.has(value) 判断传入的参数是否为set的成员
// set.clear() 清除set中所有成员

// demo1
// var set = new Set([1,1,1,3,54,67,3]);
// console.log(set); // 1 , 3 , 54 ,67

// console.log(set.size); // 4
// set.add(9)
// console.log(set);
// set.delete(9);
// console.log(set);

// console.log(set.has(9)); // false

// set.clear();
// console.log(set); // {}

// 传一个字符串
// var set = new Set('yangcheyang');
// console.log(set);

// +++++++++++++++++++++++++++++++++++++++

// 新增Map数据结构
// 类似于对象，是一个键值对的集合,但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
// 出现重复的。后面覆盖前面的
// 允许以一个对象做为键值
// map.set(key,value)
// map.size
// map.get()
// map.has()
// map.delete()
// map.clear()
// map.keys()    返回键名的遍历器。
// map.values()  返回键值的遍历器。
// map.entries() 返回所有成员的遍历器。

// demo1
// var map = new Map([['name','yang']]);
// console.log(map); // {"name" => "yang"}

// var map = new Map([['name','yang'],['age',18],['age',20]]);
// console.log(map); // {"name" => "yang", "age" => 20}

// var obj = {
//   a: 1
// }
// var map = new Map([['name','yang'],[obj,90]]);
// console.log(map); // {"name" => "yang", Object {a: 1} => 90}

// demo2
// let map2 = new Map();

// let obj2 = {id:1};
// map2.set(obj2,'hello');
// map2.set('hello', 'world');
// console.log(map2.has(obj2)) // true
// console.log(map2.get(obj2)) // hello

// demo3
// let map = new Map([['name','yang'],['age',18],['age',20]]);
// for (let key of map.keys()){
//   console.log(key); //  name age
// }

// let map = new Map([['name','yang'],['age',18],['age',20]]);
// for (let value of map.values()) {
//   console.log(value); // yang 20
// }

// let map = new Map([['name','yang'],['age',18],['age',20]]);
// for (let [key, value] of map.entries()){
//   console.log(key,value); // name yang   age 20
// }

// +++++++++++++++++++++++++++++++++++++++
// Iterator 遍历接口
// Iterator是一种接口规格 任何数据结构只要部署了这个接口就可以使用for...of进行遍历操作
// Iterator接口的目的是为所有数据结构提供一种统一访问的机制
// 当执行for...of循环时遍历某种结构时，会自动寻找Iterator接口
// ES6中的默认Iterator接口部署在结构的Symbol.iterator上，对应的键值是一个函数，该函数返回一个遍历器对象
// 有三类数据结构有原生的Iterator接口：数组，Set和Map，某些类似数组对象。

// Symbol 数据类型 
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };

// for (let key in obj){
//   console.log(key); // 获取key
//   console.log(obj[key]); // 获取value
// }

// of 后面遍历的是一个遍历接口
// for(let value of obj) {
//   console.log(value); //Uncaught TypeError: obj[Symbol.iterator] is not a function
// }

// Symbol 数据类型
// 一种新的原始数据类型Symbol，表示独一无二的ID。它通过Symbol函数生成。
// demo1
// let s0 = Symbol();
// console.log(s0); // Symbol()  注意没有new
// console.log(typeof s0); // symbol  是一种数据类型

// let s1 = Symbol('test');
// console.log(s1); // Symbol(test)

// let s1 = Symbol('test');
// let s2 = Symbol('test');
// console.log(s1 === s2); // false
// demo2
// 部署遍历接口
// Object.prototype[Symbol.iterator] = function(){ 
//   var keys = Object.keys(this);
//   var _self = this;
//   var index = 0;
//   return {
//     next(){
//       if(index < keys.length){
//         return {value:_self[keys[index++]],done:false};
//       }else{
//         return {value:undefined,done:true};
//       }
//     }
//   };
// }

// for (let value of obj){
//   console.log(value); // 1,2,3,4
// }
"use strict";