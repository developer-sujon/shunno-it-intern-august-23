/**
 * Valid Anagram
 * @description Check to see if two provided strings are anagrams of each other.One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @example Input: s = "anagram", t = "nagaram" Output: true
 * @example Input: s = "rat", t = "car"  Output: false
 */

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const sCharacter = checkCharacterAndValue(s);
  const tCharacter = checkCharacterAndValue(t);

  for (const character in sCharacter) {
    if (sCharacter[character] !== tCharacter[character]) return false;
  }
  return true;
};

const checkCharacterAndValue = (buildChar) => {
  const CharacterMap = {};
  for (const char of buildChar) {
    CharacterMap[char] = CharacterMap[char] + 1 || 1;
  }
  return CharacterMap;
};

console.log(isAnagram("anagram", "nagaran"));
