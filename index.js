
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

// function capitalizeLetters(str){
//     const strArr = str.toLowerCase().split(' ');

//     for(let i=0; i<strArr.length; i++){
//         strArr[i] = strArr[i].substring(0,1).toUpperCase()+strArr[i].substring(1);
//     }
//     return strArr.join(' ');
    
// }
// const output = capitalizeLetters('i love javascript');
// console.log(output);


// let numbers = [4, 9, 16, 25]
// let newArr = numbers.map(Math.sqrt)
// console.log(newArr);
// document.getElementById('root').innerHTML = newArr

// const ages = [32, 45, 18, 16, 40]
// document.getElementById('root').innerHTML = ages.filter(myFunc);

// function myFunc(age){
//     return age >= 18;
// }

// const ages = [32, 33, 16, 40];

// document.getElementById("root").innerHTML = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

const numbers = [10, 15, 17, 25, 28];

// const doc = document.getElementById('root')
//     doc.innerHTML = numbers.map(myFunc);

//     function myFunc(num){
//         return num * num
//     }

//     doc.innerHTML = numbers.filter(myFunction);

//     function myFunction(numb){
//         return numb >= 16
//     }

// function revString(str) {
//     const strArr = str.split('');
//     return strArr.reverse()
     

// }

// const output = revString('Hello')
// document.getElementById('root').innerHTML = (output)
// const output = revString("Hello")
// const result = document.getElementById('root');
// result.innerHTML = output

// function revString(str){
//     const strArr = str.split('');
//     return strArr.reverse()
// }

// function revString(str){
//     const strArr = str.split('')
//     strArr.reverse();
//     console.log(strArr)
//     document.getElementById('root').innerHTML = strArr
// }

// revString("Hello")

// function revString(str){
//     const strArr = str.split('');
//     strArr.reverse();
//     return strArr.join('')
// }

// const output = revString("Hello")
// document.getElementById('root').innerHTML = output

// function revString(str){
//     return str.split('')
//                 .reverse()
//                 .join('')
// }

// const output = revString("Hello")
// document.getElementById('root').innerHTML = output

// const revString = (str)=> str.split('').reverse().join('')

// const output = revString("Hello")
// document.getElementById('root').innerHTML = output;

// function reverseString(str){
//     let revString = ''
//     for (let i = str.length-1; i>=0; i--){
//         revString = revString + str[i]
//         console.log(revString)
//     }
//     return revString

// }
// const output = reverseString("Hello");
// document.getElementById('root').innerHTML = output


// function reverseString(str){
//     let revString = '';
//     for (i=str.length-1; i>=0; i--){
//         revString = revString + str[i]
//     } return revString
// }

// const output = reverseString('Hello');
// document.getElementById('root').innerHTML = output

// function reverseString(str){
//     let revString = ''
//     for (i=0; i<str.length; i++){
//         revString = str[i] + revString;
//         console.log(revString)
//     }
//     return  revString
// }

// const output = reverseString('Hello');
// document.getElementById('root').innerHTML = output

// const cars = ["swift", "nano", "BMW", "rangrover", "ferrari"];

// let text = ''
// for(let i=0; i<cars.length; i++){
//     text += cars[i] + "<br>";        
// }

// document.getElementById('root').innerHTML = text;

// let text = ""
// for (let i = 0; i < 5; i++){
//     text += "The number is " + [i] + "<br/>"
//     console.log(text)
// }

// document.getElementById("root").innerHTML = text;

// function reverseString(str){
//     const strArr = str.split('');
//         strArr.reverse();
//         return strArr.join('')

// }

// const output = reverseString('Hello')
// document.getElementById('root').innerHTML = output;

// function reverseString(str){
//     let revString = '';
//     for(let i = 0; i<str.length; i++){
//         revString = str[i] + revString;
//     }
//     return revString
// }

// const output = reverseString("HELLO")
// document.getElementById('root').innerHTML = output

// function reverseString(str){
//     let revString = '';
//     for(let i=str.length;  i++){
//         revString = str[i] + revString;
//     }
//     return revString
// }

// const output = reverseString("HELLO")
// document.getElementById('root').innerHTML = output

// function reverseString(str){
//     let revString = ''
//     for (let char of str){
//         revString = char + revString;
//     }
//     return revString;
// }

// const output = reverseString('Hello')
// document.getElementById('root').innerHTML = output

// function reverseString(str){
//     let revString = ""
//     for (let char of str){
//         revString = char + revString
//     }
//     return revString
// }
//  const output = reverseString("Hello");
//  document.getElementById('root').innerHTML = output;

// function reverseString(str){
//     let revString = ""
//     let newStr = str.split('');
//     newStr.forEach(function(char){
//         revString = char + revString
//     })
//     return revString;
// }
// const output = reverseString("Hello");
// document.getElementById('root').innerHTML = output;

// function isPalindrome(str){
//     let newStr = str.split('').reverse().join('');
//     return newStr === str;
// }

// const output = isPalindrome("racecar");
// document.getElementById('root').innerHTML = output

// function isPalindrome(str){
//     let newStr = "";
//     for (let i = 0; i<str.length; i++){
//         newStr = str[i] + newStr
//     }return newStr === str
// }

// const output = isPalindrome("racecar");
// document.getElementById('root').innerHTML = output

// function revInt(int){
//         const reverseInt = int.toString().split('').reverse().join(''); 
//             return parseInt(reverseInt)
// }

// const output = revInt(1234);
// document.getElementById('root').innerHTML = output

// function reverseInt(int){
//     const revInt = int.toString().split('').reverse().join('');
//                 return parseInt(revInt)*Math.sign(int)
//             }

// const output = reverseInt(-12345)
// document.getElementById('root').innerHTML = output

// function capitalizeLetters(str){
//     const strArr = str.toLowerCase().split(' ')

//     for(let i = 0; i<strArr.length; i++){
//         strArr[i] = strArr[i].substring(0,1)
//         .toUpperCase() + strArr[i].substring(1);
//     }
//     return strArr.join(' ')
// }

// const output = capitalizeLetters('i LOve javascript');
// document.getElementById('root').innerHTML = output

function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');
    for(let i = 0; i<str.length; i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);

    }return strArr.join(' ');
}

const output = capitalizeLetters('i love javascript')
document.getElementById('root').innerHTML = output;
