var words = require('./words')
var counts = words.map(word => {
  const uniqueLetters = Object.keys(word.split('').reduce((counts, letter) => {
    const o = {}
    o[letter] = 1
    return Object.assign({}, counts, o)
  }, {}))
  console.log(word, uniqueLetters)
  return uniqueLetters
}).reduce((counts, uniqueLetters) => {
  const c = Object.assign({}, counts)
  uniqueLetters.forEach(letter => {
    c[letter] = (c[letter] || 0) + 1
  })
  return c
}, {})
const entries = Object.keys(counts).map(letter => {
  const count = counts[letter]
  return {letter, count}
}).sort((a, b) => a.count - b.count)
console.log(entries.map(e => e.letter + ' ' + e.count).join('\n'))
