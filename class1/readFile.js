// 1. 导入 fs 模块来 操作文件

const { Console } = require('console')
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件
// 参数1 ： 读取文件的存放路径
// 参数2 : 读取文件的目录


fs.readFile('./11/data.txt', 'utf8', (err, data) => { 
    if(err){
        console.log("----")
        // 打印成功的结果
        console.log(data)
    }
})


var dataText = "new Line context"
fs.writeFile('./data2.txt',dataText,function(err){
    if(err) 
      console.log(err)
});


// CompletableFuture<Integer> future = CompletableFuture.completedFuture(0);
//         future.whenComplete((e,v)->{
//  😂 真是让人难受

