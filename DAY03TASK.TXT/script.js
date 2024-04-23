  /////// anonymous function & IFHE functions ///////

  // a.Print odd numbers in an array
 (()=>{
    let a = [1,2,3,5,8,7,9,10,11,12];
    for (let i=0;i<a.length;i++){
        if (a[i] % 2 !=0){
            console.log(a[i]);
                }
    }
})()
//output
1
3
5
7
9
11

// b.Convert all the strings to title caps in a string array

let arr = ["Mahi","Sugu","IMmanuvel","benny","duke"];
arr = (function() { 
    let newarr = []
    for (let val of arr) {
        val = val.toLowerCase()
        newarr.push(val.charAt(0).toUpperCase() + val.slice(1));
    }
    return newarr;
})();
console.log(arr);

//ouput
// [ 'Mahi', 'Sugu', 'Immanuvel', 'Benny', 'Duke' ]

// c.Sum of all numbers in an array
let arr1 = [5,5,5,5,5,5]
let arr_sum = function() { 
    let sum = 0
    arr1.forEach((x)=>{
        sum += x
    })
    return sum
}()

console.log(arr_sum)

//output
// 30

// d.Return all the prime numbers in an array

let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
arr2 = (function() {
    let temp = [] 
    for(let num of arr2){
        if(num >= 2) 
        {   
            let flag = true  
            for (let k = 2; k < num; k++){
                if( num % k == 0)
                    flag = false;
            }
            if(flag!==false) 
                temp.push(num)
        }
    }
    return temp;
})();

// output  
// [2,3,5,7,11,13]

// e.Return all the palindromes in an array

(function() { 
    let arr = ["sugar","wow","salt","maa","Mahi","woo"]
    arr.forEach((x)=>{
        let flag = true
        for(let i=0, j=x.length-1; i<x.length/2; i++,j--)
        {   
            if(x[i]!==x[j])
            {
                flag = false
                break;
            }   
        }
        if(flag === true)
            console.log(x)
    })
})()

// output
// wow
 
// f.Return median of two sorted arrays of the same size

const array1 = [2, 3, 5, 8];
const array2 = [10, 12, 14, 16, 18, 20];
let median = (arr1,arr2) => {
    let arr3 = arr1.concat(arr2);
    arr3.sort(function(a, b){return a-b})
    if((arr3.length)%2!=0){
        return arr3[((arr3.length+1)/2)-1];    
    }
    else{
        return (arr3[parseInt((arr3.length-1)/2)] + arr3[parseInt((arr3.length+1)/2)])/2;
    }
        
}
console.log(median(array1,array2))

//output
// 11

//g.Remove duplicates from an array

let arr3 = [1,1,2,2,3,3,4,4,5,5,66,77,88];
arr3 = (function() {
    let temp = []
    for(let num of arr3){
        let flag = true;
        for(let val of temp){
            if(val == num){
                flag = false; 
                break
            }
        }
        if(flag){
            temp.push(num);
        }
    }
    return temp;
})();

//output
// [1,2,3,4,5,66,77,88]

// h.Rotate an array by k times

let k = 5

let arr4 = [1,2,3,4,5,6,7,8,9,10,11,12]

let arr4_flip = function() {  
    if(k%2!=0)
        for(let i=0, j = arr4.length-1; i<arr4.length/2;i++,j--) {
            [arr4[i],arr4[j]] = [arr4[j],arr4[i]]
        }
    return arr4
}()

console.log(arr4_flip)
//output
// [12,11,10,9,8,7,6,5,4,3,2,1]

/// ** arrow function** ///

// a.Print odd numbers in an array

let arr5 = [12,13,2,32,7,3,45]
arr5.forEach((x)=>{
    if(x%2!==0)
        console.log(x);
})

//output
13
7
3
45

// b.Convert all the strings to title caps in a string array

let arr6 = ["Mahi","Sugu","IMmanuvel","benny","duke"];
let i = 0;
arr6.forEach((x)=>
{
    arr6[i] = (x.charAt(0).toUpperCase() + x.toLocaleLowerCase().slice(1));
    i++;
})
console.log(arr6);
//OUTPUT
//[Mahi,Sugu,Immanuvel,Benny,Duke]

// c.Sum of all numbers in an array
let arr7 = [5,5,5,5,5,5]
let sum = 0
arr7.forEach((x)=>{
    sum += x
})
console.log(sum)

//output
//30

// d.Return all the prime numbers in an array
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let prime = (arr) => {
    let temp = [] 
    for(let num of arr){
        if(num >= 2) 
        {   
            let flag = true  
            for (let k = 2; k < num; k++){
                if( num % k == 0)
                    flag = false;
            }
            if(flag!==false) 
                temp.push(num)
        }
    }
    return temp;
}
console.log(prime(array)); 
//output
//[2,3,5,7,11,13]

// e.Return all the palindromes in an array

let arr8 = ["sugar","wow","salt","maa","Mahi","woo"]

arr8.forEach((x)=>{
    let flag = true
    for(let i=0, j=x.length-1; i<x.length/2; i++,j--)
    {   
        if(x[i]!==x[j])
        {
            flag = false
            break;
        }   
    }
    if(flag === true)
        console.log(x)
})
//output
// woo



















