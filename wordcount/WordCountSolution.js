function wordCount(arrayOfStrings) {
   
   let result={};
    for (let index in arrayOfStrings){
        if(arrayOfStrings[index] in result){
            result[arrayOfStrings[index]]+=1;
        }else{
            result[arrayOfStrings[index]]=1;
        }
        
    } return result;

} 

module.exports = wordCount;