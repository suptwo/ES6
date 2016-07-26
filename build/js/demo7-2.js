// Module 模块
// 先来一个users.js
// modules是ES6引入的最重要一个特性。 
// modules规范分两部分,一部分是如何导出,一部分是如何导入。
// 直接引用会报错。
// 借助webpack 来实现

// 基本用法
// 导出
// export xxxx
// 导入
// import xxx

// 模块基础
// 一个ES6的模块是一个包含了 JS 代码的文件
// ES6里没有所谓的module关键字,一个文件就是一个模块
// export 在模块中声明的任何东西都是默认私有的,如果你想对其他模块公开,你必须 export 那部分代码
// 当你运行一个包含 import 声明的模块,被引入的模块会先被导入并加载,然后根据依赖关系,每一个模块的内容会使用深度优先的原则进行遍历。跳过已经执行过的模块,以此避免依赖循环。

// 导出表
// export {xxx, xxx, xx}
// 导出表不一定要出现在文件的第一行,它可以出现在模块顶级作用域中的任何一行
// 你可以写多个导出表,也可以在列表中再写上其他 export 声明,只要没有变量名被重复导出即可。

// 不过值得注意的一点是,如果你直接用babel编译,执行是会报错的。因为 babel 并不会完全编译 modules
// 他只是把 ES6 的modules语法编译成了 CMD 的语法，所以还需要用 browserify 之类的工具再次编译一遍。 

// export { name1, …, nameN };
// export { variable1 as name1, …, nameN };
// export let name1, …, nameN; // also var
// export let name1 = …, …, nameN; // also var, const

// export default expression;
// export default function (…) { … } // also class, function*
// export default function name1(…) { … } // also class, function*
// export { name1 as default, … };

// export * from …;
// export { name1, …, nameN } from …;
// export { import1 as name1, …, nameN } from …;

// demo1
// import {name, name2, name3} from './users.js';
// console.log(name, name, name2, name3);
// console.log('1111');

// // 注意：{name, name1, name2, name3}是import的特有语法 不是解构语法

// // demo2
// import * as lib from './users.js';
// console.log(lib.sq(2));
"use strict";