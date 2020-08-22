function highestNumPosition(array) {

  //[row,col]
  // write you code here...
  if(array.length==0){
    return [0,0]
  }
  let maxNumsArrayObj = [] ;
  let container = [] ;

  // loop though rows and get the max number and its position (column)
  for (let i =0; i<array.length; i++){
    let maxNum = Math.max(...array[i])
    // get the position (column) of each max number
    let position = array[i].indexOf(maxNum)
    maxNumsArrayObj[i] = {position,maxNum}
  }
  // run forEach, push max nums of these arrays in a container
  maxNumsArrayObj.forEach((item)=>{
    container.push(item.maxNum)
  })
  //find the max of the numbers in the container
  let max = Math.max(...container)

  // find the position of this max number in  maxNumsArrayObj
  let columnObj = maxNumsArrayObj.find((item=>item.maxNum===max))

  //the position property will give us the column REF line 15
  let column = columnObj.position;

  // the index of max inside container will give u the row
  let row = container.indexOf(columnObj.maxNum)

  return [row,column]
   
}
 // sample
// console.log(highestNumPosition([
//    [66, 3, 9], 
//    [ 1, 8, 98], 
//    [7, 9, 7]
//   ]))

module.exports = highestNumPosition;