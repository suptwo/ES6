// Class和Module


// ES5中没有类的概念
// 而是通过构造函数来进行对象的构建以及相关的面向对象操作。
// ES6中新增了class关键字来定义类，更具面向对象语言的语法


// ES5
// function Foo(name) {
//   this.name = name;
// }
// Foo.prototype.getName = function(){
//   return this.name
// };
// var foo = new Foo()

// // ES6
// class Cat { // 声明一个类
//   constructor (name) {
//     this.name = name;
//   }

//   // 直接写方法即可
//   getName () { 
//     return this.name
//   }

// }

// let cat = new Cat('momo');
// console.log(cat.getName()); // momo
// 利用 extends继承
// 在constructor方法内，super指代父类的constructor方法；
// 在其他方法内，super指代父类的同名方法。
// class Momo extends Cat {
//   constructor(color,...rest){
//     super(...rest);  
//     this.color = color;
//   }
//   showColor (){
//     return this.color;
//   }
// } 

// let c1 = new Cat('duoduo');
// let m1 = new Momo('momo2', 'yellow');
// console.log(m1.getName());
// console.log(m1.showColor());

 






















































































