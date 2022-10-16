// What will be the Time Complexity of these code snippet?
// Q - 1 )Below are nested “K” for loops
n= Number(prompt("Enter the limit"))
for(let i=0;i<n;i++){
 for(let j=0;j<n;i++) {
for(let m=0;m<n;i++) {
//… … … K loops in total …
for(let z=0;z<n;i++) {
console.log("Hello World");
}
}
 }
}
 ANS :- THERE ARE N FOR NESTED AND  K FOR NESTED LOOPS SO 
        THE time compelxity  IS O(n^K)

//Q-2)
N= Number(prompt("Enter the limit"))
M= Number(prompt("Enter the limit"))
a = b = 0
for(let i=0;i<N;i++){
a = a + 1
}
for(let j=0;j<M;j++)
b = b + 1

ANS :-  THERE ARE 2 LOOPS M AND N THEN N RUNS FOR N TIMES AND M RUNS FOR M TIMES SO IT WILL BECOME (n+m) 
        TIME COMPELXITY for this is O(n+m)

