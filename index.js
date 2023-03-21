let A = 20;
let B = 60;
let C = 10;

console.log("nilai A:" + A);
console.log("nilai B:" + B);
console.log("nilai C:" + C);

let arr = [A, B, C];
arr.sort(function(x,y) {
    return x-y;
});

console.log("ascending: " + arr);
arr.reverse();
console.log("descending: " + arr);

let max = Math.max(A, B, C);
console.log("Nilai MAX: " + max);

let min = Math.min(A, B, C);
console.log("Nilai MIN: " + min);

let average = (A + B + C) / 3 ;
console.log("rata-rata: " + average.toFixed(2));