function isPalindrome(word) {
  // Implementation of the isPalindrome function
  // Check if the word is empty or a single character, it's considered a palindrome
  if (word.length <= 1) {
    return true;
  }
  
  // Compare the first and last characters of the word
  // If they are not equal, the word is not a palindrome
  if (word[0] !== word[word.length - 1]) {
    return false;
  }
  
  // Recursively check the substring excluding the first and last characters
  return isPalindrome(word.slice(1, -1));
}

module.exports = isPalindrome;