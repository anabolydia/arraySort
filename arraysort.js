let num =[1,2,3,4,5,6,7,8,'a']
num.sort(function arraySort(num) {
  if (num%2==0) {
     return 'Even' ,num; 
  }
   if (num%2==1) {
       return 'odd',num;
   } else {
       return 'Char', num;
       
   }
});


module.exports = arraySort;