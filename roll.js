var randString = require('randomatic');
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

var serverSeed = randString('*',50);
console.log(serverSeed);

hash.update(serverSeed);
var digest = hash.digest('hex');

console.log(digest);

var buffer = new Buffer(digest, 'hex');
var number = buffer.readUIntBE(0,3);

var roll = number % 10000;
console.log(roll / 100);
