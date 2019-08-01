"use strict";

const checkForSpam = string => {
  let phrase = string.toLowerCase();

  if (phrase.indexOf("sale") !== -1 || phrase.indexOf("spam") !== -1) {
    return true;
  }

  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
