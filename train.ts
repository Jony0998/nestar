// (JONY)



// TASK ZM:

function reverseInteger(son: number): number {
  const result = son.toString().split('').reverse().join('');
  return parseInt(result);
}
 
console.log(reverseInteger(123456789)); 


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