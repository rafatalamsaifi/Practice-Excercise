
// function cube(number){
//     console.log(number * number * number);
// };
// cube(4);

// function message(){
//     console.log("Hello");
// };
// message();

// function reverseString(str){
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }
//  const output = reverseString("Hello");
// console.log(output);


// function reverseString(str){
//     const strArr = str.split('');
//     strArr.reverse();
//     console.log(strArr);
//     return strArr.join('');
// }
//  const output = reverseString("Hello");
// console.log(output);


// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// const output = reverseString("Hello")
// console.log(output)


// function sum(a,b){
//     return(a+b);
// };
// a = sum(12,13)
// console.log(a);

// function reverseString(str){
//     let revString = '';
//     for(let i = str.length-1; i>= 0; i--){
//         revString = revString + str[i];
//     }
//     return revString;
// }
// const output = reverseString("Hello")
// console.log(output)

// function reverseString (str){
//     let revString = '';
//     for(
//         let i = 0; i<str.length; i++){
//             revString = str[i] + revString;
//         }
//         return revString;
// }
// const output = reverseString("Hello");
// console.log(output);

// function reverseString (str){
//    let revString = '';
//    for(let char of str){
//     revString = char + revString;
//    }
//    return revString;
//    }
// const output = reverseString("Hello");
// console.log(output);

// function reverseString(str){
//     let revString = '';
//     str.split('').forEach(function(char){
//         revString = char + revString;
//     });
//     return revString;
// }
// const output = reverseString("Hello");
// console.log(output);

// function is(str){
//     const revString = str.split('').reverse().join('');
//     return revString === str;
// }
// const output = is("racecar");
// console.log(output)

// function reverseInt(int){
//     const revString = int.toString().split('').reverse().join('');
//     return parseInt(revString)*Math.sign(int);
// }
// const output = reverseInt(-12345);
// console.log(output);


// function string(str){
//     let string = str.split('');
//     console.log(string);
// } 
// let output = string("Rafat");
// console.log(output);

function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');

    for(let i=0; i<strArr.length; i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase()+strArr[i].substring(1);
    }
    return strArr.join(' ');
    
}
const output = capitalizeLetters('i love javascript');
console.log(output);