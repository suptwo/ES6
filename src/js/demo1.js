// 官网: https://babeljs.io/
// babel编译文件
// babel index.js --out-file a.js  

// babel编译目录
// src 源  build 编译目录
// babel src --out-dir build
// 在package.json文件里面配置  babel src -d build   此处 -d 是 --out-dir



// demo1
// console.log('++++++++++');

// alert('111')



// demo2
// 查看build/index.js 原版输出的

// const sum = (a, b) => a + b;

// let x = sum (1, 2);




// demo3
// 安装预设 presets
// npm install --save-dev babel-preset-es2015
// 配置babel
// {"presets":['es2015']}
// ./node_modules/.bin/babel src -wd build  持续监听

// const sum = (a, b) => a + b;

// let x = sum (1, 2);







