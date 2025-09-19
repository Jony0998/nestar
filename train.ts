
// TASK ZK:


function printNumbers(): void {
  let num: number = 1;

  function next() {
    console.log(num);
    if (num < 5) {
      num++;
      setTimeout(next, 1000);
    }
  }

  next();  
 
}  


printNumbers();  



// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin
  
// MASALAN: printNumbers(); 