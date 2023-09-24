function doSomeThing(){
    let promise = new Promise();
    let xhr = new XMLHttpRequest();
    xhr.open('GET','Http://coolshell.cn/....',true);

    xhr.onload = function(e){
        if(this.status === 200){
            results = JSON.parse(this.requestText);
            promise.resolve(results);// 调用成功的时候 触发resolve方法
        
        }
    };

    xhr.onerror = function(e){
        promise.reject(e)//失败的时候 调用reject()方法
    }

    xhr.send();
    return promise;
}

function doSomethingElse(){
    console.log("do something else " + result)
}

doSomeThing().then(result => doSomethingElse(result))
       .then(newResult => doThirdThing(newResult))
       .then(finalResult => { console.log(`Got the final result: ${finalResult}`);})
       .catch(failureCallback);