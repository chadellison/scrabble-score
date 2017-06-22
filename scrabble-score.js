const RUBRIC = {
  1:  ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2:  ["D", "G"],
  3:  ["B", "C", "M", "P"],
  4:  ["F", "H", "V", "V", "W", "Y"],
  5:  ["K"],
  8:  ["J", "X"],
  10: ["Q", "Z"]
}

let points = [1, 2, 3, 4, 5, , 8, 10]
let score = function score(word) {
  total = 0;

  if(word === null || word === '') {
    return 0
  }

  word.split("").forEach(function(char) {
    points.forEach(function(points) {
      total += includeChar(points, char);
    })
  })
  return total;
}

includeChar = function(value, char) {
  if(RUBRIC[value].includes(char.toUpperCase())) {
    return value;
  } else {
    return 0;
  }
}

module.exports = score
