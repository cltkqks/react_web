const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

function myfilter(origin, callback) {
  var result = [];
  for (var i = 0; i < origin.length; i++) {
    var current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }
  return result;
}
// newWords = words.filter((elem) => elem.length > 6);
newWords = myfilter(words, (elem) => {
  return elem.length > 6;
});
console.log(newWords);
