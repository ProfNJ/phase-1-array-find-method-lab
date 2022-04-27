// code your solution here
function findWin(element){
    return element.result === 'W';
}

function superbowlWin(arr){
   let f = arr.find(findWin);
   if (f){
       return f.year;

   }else{
       return undefined;
   }

}

