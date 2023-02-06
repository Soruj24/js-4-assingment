
// This is a input Nambar
const numbar = 5;

function mindGame(numbar) {
    const multiplication = numbar * 3;
    const addition = multiplication + 10;
    const division = addition / 2;
    const subtraction = division - 5;

    return subtraction;
}
console.log(mindGame(numbar))

// const texts = 'Soruj Mahmud';

// function evenOdd(texts) {
//     const text = texts.length;

//     if (text % 2 === 0) {
//        return 'even'
//    }
//     else {
//         return 'odd'
//    }

// }
// console.log(evenOdd(texts));

// const num = -15;

// function isLGSeven(num) {
//     const sub = num - 7;
//     if (sub < 7) {
//         return sub;
//     }
//     else if (7 < sub) {
//         return sub*2
//     }
// }
// console.log(isLGSeven(num));


// const arrayNumaber = [2, -5, -7, -13];

// function findingBadData(arrayNumaber) {

//     let element = 0;

//     for (let i = 0; i < arrayNumaber.length; i++) {
//         const index = arrayNumaber[i];
//         if (index<0) {
//             element++;
//         }
//     }
//     return element;
// }

// console.log(findingBadData(arrayNumaber));




// function gemsToDiamond(first,second,third) {
//     const first1 = first * 21;
//     const second2 = second * 32;
//     const third3 = third * 43;

//     const totalGems = first1 + second2 + third3;
    
//     if (totalGems < 1000) {
//         console.log(totalGems);
//     }
//     else if (2000 < totalGems) {
//         const gems = totalGems - 2000;
//         console.log(gems);
//     }

// }

// gemsToDiamond(100, 5, 1);

