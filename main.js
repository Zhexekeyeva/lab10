let lab1=[5,5,5,5,10,10]
let lab2=[5,5,5,5,5,5,10]
let lab3=[5,10,10,15]
let lab4_5=[10,5,5,5,5,5,10,10,10,10,5]
let lab6=[5,5,10,5,5,10]
let lab8=[5,10,10,10,5]

let quiz1=[32]

function get_sum(lab) {
   let sum = 0
   for (let i = 0; i < lab.length; i++) {
       sum += lab[i];  
}
  return sum;
}

let sum1 = get_sum(lab1)
let sum2 = get_sum(lab2)
let sum3 = get_sum(lab3)
let sum4_5 = get_sum(lab4_5)
let sum6 = get_sum(lab6)
let sum8 = get_sum(lab8) 
let sums = sum1+sum2+sum3+sum4_5+sum6+sum8


function main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1) {
    let sum1 = get_sum(lab1)
    let sum2 = get_sum(lab2)
    let sum3 = get_sum(lab3)
    let sum4_5 = get_sum(lab4_5)
    let sum6 = get_sum(lab6)
    let sum8 = get_sum(lab8) 
    let sums = sum1 + sum2 + sum3 + sum4_5 + sum6 + sum8
    quiz1 = 32
    total_score = quiz1 + sums*3/14
    results = {sum1, sum2, sum3, sum4_5, sum6, sum8, quiz1, total_score}
    return results
 }

console.log (main(lab1, lab2, lab3, lab4_5, lab6, lab8, quiz1));
