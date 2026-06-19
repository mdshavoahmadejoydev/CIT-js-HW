//1st homework (nestate if else)

let havePc = "Yes";
let knowHtmlCss = "Yes";
let sscComplite = "Yes";
let watchFullTime = "Yes";

if (havePc == "Yes") {
  if (knowHtmlCss == "Yes") {
    if (sscComplite == "Yes") {
      if (watchFullTime == "Yes") {
        console.log("You will get free online course");
      } else {
        console.log("You should first make a habit of learning by watching videos online.");
      }
    } else {
      console.log("You first pass SSC. Then you will get the course.");
    }
  } else {
    console.log("You should know basic HTML and CSS first for the future.")
  }
} else{
  console.log("You don't deserve a free course.");
}


// homework (create a mark sheet conditions use by "else if")

// let marks = '80';
let marks = prompt("enter your mark....");
if (marks == '') {
  console.log("Opps! Marks can never be string....");
}else if (marks < 0) {
  console.log("Opps! Marks can never be subtracted from the exam paper....");
} else if (marks < 33) {
  console.log("Sorry! Your result was failed");
} else if (marks < 40) {
  console.log("Your result was (D) grade");
} else if (marks < 50) {
  console.log("Your result was (C) grade");
} else if (marks < 60) {
  console.log("Your result was (B) grade");
} else if (marks < 70) {
  console.log("Your result was (A-) grade");
}else if (marks < 80) {
  console.log("Your result was (A) grade");
} else if (marks < 100) {
  console.log("Congratulations, Your result was (A+) grade");
} else {
  console.log("Your information is not correct.....")
}