// const spacetime = require('./builds/spacetime.cjs')
import spacetime from './src/index.js'

let s = spacetime()
// s = s.year(2020)
// s = s.dayOfYear(366);
// console.log(s.dayTime());
console.log(s.json())

let s = spacetime('03/31/2002', 'America/Denver')
console.log(s.iso())
