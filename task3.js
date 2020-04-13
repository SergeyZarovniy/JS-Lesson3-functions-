// // - створити функцію яка виводить масив.

// function printArr(array) {
//     console.log(array);
//         for (const element of array ) {
//            console.log(element);
//     }
//  }
//  printArr([25,65,88,9,78,23,147,69]);

// // - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

// function randomValEditor() {
//     let emptyArr = [];
//     for (let i = 0; i < 25; i++) {
//         let randomVal = parseInt(Math.random()*100);
//         emptyArr.push(randomVal)
//     }
//     console.log(emptyArr);
// }
// randomValEditor()

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// function smallestNumber(a,b,c) {
//     let smallestNam = Math.min(a,b,c)
//     console.log(smallestNam)
//     return smallestNam
// }
// smallestNumber(560,50,100);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// function bigestOneVal(a,b,c) {
//     let bigestVal = Math.max(a,b,c)
//     console.log(bigestVal);
// }
// bigestOneVal(236,589,897)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше.

// function returnMinPrintMax(...arg) {
//    console.log(Math.max(...arg))
//     return Math.min(...arg)
// }
// returnMinPrintMax(52,56,777,888,9633,2003,41,7)
// let minVal = returnMinPrintMax(52,56,777,888,9633,2003,41,7)
// console.log(minVal);

// // - створити функцію яка виводить масив.

// function printArray(array) {
//     console.log(array);
//     for ( const item of array) {
//         console.log(item);
//     }
// }
// printArray([23,58,98,44,1111,268,5511,563])

// - створити функцію яка повертає найбільше число з масиву.

// function biggestOne(arr) {
//     return Math.max(...arr)
// }
// biggestOne([106,223,897,156,20,64,19,73,33,61,55])
// // let bigestFromArr = biggestOne([106,223,897,156,20,64,19,73,33,61,55]);
// // console.log(bigestFromArr);

// - створити функцію яка повертає найменьше число з масиву.

// function returnSmallest(arr) {
//     return Math.min(...arr)
// }
// returnSmallest([52,36,47,896,20,3369,1,23,7])
// let smallestNum =returnSmallest([52,36,47,896,20,3369,1,23,7])
// console.log(smallestNum);

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function sumatorVal(arr) {
//     let sumNum = arr.reduce((previousValue, currentValue) => {
//         return previousValue + currentValue;
//     })
//     console.log(sumNum);
// }
// sumatorVal([106,223,897,156,20,64,19,73,33,61,55])

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function middleVal(arr) {
//     let midVal = arr.reduce((previousValue, currentValue) => {
//         return previousValue + currentValue / arr.length;
//     })
//     console.log(Math.floor(midVal));
// }
// middleVal([55,78,1,566,25,10,103,856,222,33,11])

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let userArr =[
//     {name:'Victor',age:27,sex:'male',wife:false},
//     {name: 'Serghei',age:28, sex: 'male',wife: true},
//     {name:'Ivan',age:27, sex:'male', wife:false},
//     {name:'Andrey',age:23, sex:'male',wife:false}
//     ];
// //First
// function counterObj(array) {
//     let count = 0;
//     for (const item of array) {
//         if (typeof item === 'object') {
//             count++
//         }
//     }
//     return count;
// }
// const sumObj = counterObj(userArr);
// console.log(sumObj);
//Second
// function returnQuantityObj(array) {
//     return array.length
// }
// returnQuantityObj(userArr)
// let quanVal = returnQuantityObj(userArr)
// console.log(quanVal);
//Second



// - Створити функцію яка приймає масив будь яких объектів, та повертає загальну кількість полів в них.

// function counterKeys(arrey) {
//     let count = 0;
//     for (const item of arrey) {
//         if (typeof item === 'object') {
//             for (const keys in item) {
//                 count++
//             }
//         }
//     }
//     return count;
// }
// const sumKeys = counterKeys(userArr);
// console.log(sumKeys);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let arr1 = [22,55,88,77];
// let arr2 = [11,44,77,66];
// function sumArrs (arrey1,arrey2) {
//     let result = [];
//     for (let i = 0; i < arrey1.length;i++) {
//         result.push(arrey1[i]+arrey2[i]);
//     }
//     return result
// }
// console.log(sumArrs(arr1,arr2));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.

// function workerWithZeros(arrey) {
//     let zeroArr = [];
//     let numbArr = [];
//     for (let i = 0; i < arrey.length; i++) {
//         if (arrey[i] === 0) {
//             zeroArr.push(arrey[i])
//         } else {
//             numbArr.push(arrey[i])
//         }
//     }
//     return numbArr.concat(zeroArr)
// }
// console.log(workerWithZeros([1,0,6,0,3] ));
// console.log(workerWithZeros([0,1,2,3,4] ));
// console.log(workerWithZeros([0,0,1,0]  ));





