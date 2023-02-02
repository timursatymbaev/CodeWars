function solution(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    let character = string.charAt(i)
    if (character === character.toUpperCase()) {
      result += ' '
    }
    result += character
  }
  return result
}
