var fs = require('fs')

fs.open('testData.txt','w+',function(err,fd){
    fd.writeFile('这是写入的内容',function(err,written,buffer){
        console.log('我写入了' + written + '字节');
        console.log(buffer);
    })
})