
let m = Number(prompt("Enter your namota start: "));
let n = Number(prompt("Enter your namota end: "));
let rejectNum = Number(prompt("Enter your reject number-"));

for (let i = m; i <= n; i++) {
  if (i != rejectNum) {
    console.log("=======", i, "er namta start =========");
    for (j = 1; j <= 10; j++) {
      if(i*j != 30) {
        if(i*j != 40) {
          if (i*j != 50) {
            console.log(i + " X " + j + " = " + i * j);
          }
        }
      }
    }
    if (i < n) {
      console.log("=======", i, "er namta end ========");
    } else {
      console.log("======= All namta end ========");
    }
  }
}
