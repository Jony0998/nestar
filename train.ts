// (JONY)


function areParenthesesBalanced(str: string): boolean {
  const stack: string[] = [];

  for (const char of str) {
    if (char === '(') stack.push(char);
    else if (char === ')') {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}


console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); 
console.log(areParenthesesBalanced("qavs(balans(da(emas))")); 



// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori 
// balansda ekanligini aniqlasin.
//  Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true


// ZO-TASK:


// function areParenthesesBalanced(str: string): boolean {
//   const balance = [...str].reduce((acc, ch) => {
//     if (acc < 0) return acc; // tezda to‘xtash
//     if (ch === "(") return acc + 1;
//     if (ch === ")") return acc - 1;
//     return acc;
//   }, 0);

//   return balance === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); 
// console.log(areParenthesesBalanced("(not balanced"));



// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin.
//  Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true


// function areArraysEqual<T>(a: T[], b: T[]): boolean {
//   return a.length === b.length &&
//          a.every((element, index) => element === b[index]);
// }

// console.log(areArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); 
// console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4])); 





// Shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini 
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false

// TASK ZN:

// function rotateArray<T>(arr: T[], index: number): T[] {
//   const cut = arr.splice(index); 
//   arr.unshift(...cut);
//   return arr;
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 8, 9], 6)); 

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.

// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];



// TASK ZM:

// function reverseInteger(son: number): number {
//   const result = son.toString().split('').reverse().join('');
//   return parseInt(result);
// }
 
// console.log(reverseInteger(123456789)); 


// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.




// TASK ZK:

// function printNumbers(): void {
//   let num: number = 1;

//   function next() {
//     console.log(num);
//     if (num < 5) {
//       num++;
//       setTimeout(next, 1000);
//     }
//   }

//   next();  
 
// }  


// printNumbers();  

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin
  
// MASALAN: printNumbers(); 