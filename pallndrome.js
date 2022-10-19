let num = 121;

let str = num.toString();

let count="";

for(let i=str.length-1;i>=0;i--){

  count=count+str[i];

}
(count==num)?console.log("Pallindrome"):console.log("Not Pallindrome");

