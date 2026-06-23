let m = prompt("Enter your namota start: ");
let n = prompt("Enter your namota end: ");

for(let i = m; i <= n; i++) {
  console.log("=======", i, "er ghor er namta start");
  for(j = 1; j <= 10; j++) {
    console.log(i+" X "+j+" = "+i*j)
  }
  console.log("=======", i, "er ghor er namta ");
}