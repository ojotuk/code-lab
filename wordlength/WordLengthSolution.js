function wordLength(arr) {
//code goes here
/*result={};
for (let index in arr){
    
      result[arr[index]]=arr[index].length;
    
}
return result
}
*/ 
//OR
    const result={};
    for (let value of arr){
        result[value]=value.length;
    }
    return result;
    
}
//console.log(wordLength(['abc','bb','bb']))
//module.exports = wordLength;