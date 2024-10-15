// console.log('Heyy Its Ashwini');

// process.on('exit',function(){
//     console.log('Byee');
// })

// console.log(process.platform);


// const {EventEmitter} = require('events');
// const ev=new EventEmitter();
// ev.on('lunch',()=>{
//     console.log('Heyy Its Working');
// })
// ev.emit('lunch');
// ev.emit('lunch');

// const {readFile,readFileSync, read}=require('fs');
// //const txt = readFileSync('./hello.txt','utf8');

// const txt=readFile('./hello.txt','utf-8',(err,txt)=>{
//     console.log(txt)
// });
// //console.log(txt);
// console.log('Heyy Its Ashwini');



const express = require("express");
const { readFile } = require("fs"); // Ensure this line is present

const app = express();

app.get("/", (request, response) => {
  readFile("./home.html", "utf8", (err, html) => {
    if (err) {
      return response.status(500).send("Sorry, out of order");
    }

    response.send(html);
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Server is running at http://localhost:3000")
);
