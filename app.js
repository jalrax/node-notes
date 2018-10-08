console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const res = notes.add(29, 0);

console.log(res);
//const user = os.userInfo();
//
//console.log(user, 'user');
//
//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (error) => {
//  if (error) {
//    console.log('error');
//  }
//});
//

