const fs = require('fs')

fs.readFile('./testData.txt','utf-8',function(err,dataStr){
    if(err){
        console.error("some code error",err)
    }else{
        var dataArry = dataStr.split(' ')
        var result = dataArry.join('\n')
        fs.writeFile('result.data',result,function(error){
            if(error){
                console.error("error when write file" ,error)
            }
        })
    }
})

// 📍 🦘 