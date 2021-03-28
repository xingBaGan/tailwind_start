const res = require('./db.json')
var fs = require('fs');
function formatSource(name, zipNames) {
  let result = [];
  for ([key, val] of Object.entries(res[name])) {
    val['id'] = key
    if (zipNames)
      zipNames.forEach((key) => {
        if (val[key])
          val[key] = Object.keys(val[key])
      })
    result.push(val)
  }
  return result;
}
// console.log(formatSource('categories', ["forums"]))
// console.log(formatSource('forums', ["threads"]))
// console.log(formatSource('threads', ["contributors", "posts"]))
// console.log(formatSource('posts'))
// console.log(formatSource('users', ["posts", "threads"]))
let data = {};
data.categories = formatSource('categories', ["forums"])
data.forums = formatSource('forums', ["threads"])
data.threads = formatSource('threads', ["contributors", "posts"])
data.users = formatSource('users', ["posts", "threads"])
function writeData(value) {
  var str = JSON.stringify(value, "", "\t");
  fs.writeFile('./json.json', str, function (err) {
    if (err) {
      console.error(err);
    }
    console.log('写入成功!');
  })
}
writeData(data)
