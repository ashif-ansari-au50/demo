// Write a program to print the vowels in a particular str given by the
// user. (5 marks)
// Eg Attainu Output: vowels are A, a, i, u

function printOutVowels(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
        result += str[i]
      }
    }
    return (result.replace(/(.)\1+/g, "$1"))
  }
  
  console.log(printOutVowels("Attainu"));

// Q-2) Write a program to print sum of n natural numbers .
// Eg n = 5 (5 marks)
// Output 1 + 2 + 3 + 4 + 5 = 15


  