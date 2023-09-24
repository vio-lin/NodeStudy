var fs = require('fs')
var readerStream = fs.createReadStream('input.txt')
var writerStream = fs.createWriteStream('output.txt')

// 管道操作
// 读取input.txt的文件内容 写入到 output.txt文件中
readerStream.pipe(writerStream)
console.log('程序执行完毕');