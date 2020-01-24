var num = '266219';

arr = num.split('');


var result = 1;
for(i = 0; i < arr.length; i++){
    result *= arr[i]; 
   
};

console.log(((result ** 3) + '').substring(0, 2))
