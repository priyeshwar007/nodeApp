 console.log("Starting App");
 const fs = require('fs');
 const os = require('os');
 const note = require('./notes.js');
 const _ = require('lodash');

 var filterArr = _.uniq(['Priyeshwar',1,'Priyeshwar',1,2,3,4,5]);

 console.log(filterArr);
 //console.log(_.isString(true));
 //console.log(_.isString('Priyeshwar'));

 //console.log('Result:',note.add(9,-2));

 //var user = os.userInfo();
 //var res = note.addNote();
 //console.log(res);
 //console.log(user);

 //fs.appendFile('greetings.txt','Hello ${user.username}',function(err){
   // if(err){
   //     console.log('Unable to write to file');
   // }


 //});  