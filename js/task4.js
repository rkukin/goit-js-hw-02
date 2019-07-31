"use strict";

const findLongestWord = string => {
  let longestIndex = 0;
  const words = string.split(" ");

  console.log(words);
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestIndex) {
      longestIndex = i;
      console.log(words[i], words[longestIndex]);
    }
  }
  return words[longestIndex];
};

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
