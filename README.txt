// About the project

first create a package.json file using 
npm init -y

        --------------------------------------------------

// now create a file name server.js 
Step1 : write console.log('hello'); and 
in terminal : node ./js/server.js
if it gives you the output, You Successed.

        --------------------------------------------------

Step2 : go on package.json and inside the scripts object,
add a new key value : ,"serve":"node ./js/server.js"

now in terminal : npm run serve
if it gives you the output, You Successed.

        --------------------------------------------------

Step3 : install express.js, a node.js framework that helps you to create node application easily.
terminal : npm i express 

this will create a folder name node_modules inside the parent folder

        --------------------------------------------------


Step4 : rewrite the server.js  
        either you can copy paste the code from express.js getstarted code or write it by yourself
        we'll write : )

        i. first create an variable name 'express' and require the express package that is inside the node_modules
        Code : 
        const express = require('express');

        ii. now create another variable name it 'app' and call the express
        Code :
        const app = express()

        iii. now make that app listen and inside that listen function there will be two arguments - 1st is the portNumber[in our case, we will use port 3000] and 2nd will be a callback function that will print something when we Successed 
        Code :
        app.listen(3000,()=>{
            console.log('Node API is running on port 3000');
        });

        iv. check it by using run serve 
        Code : npm run serve  [Successed]

        v. Now question is how can you access this website through your web browser ??
        for that we will make use of route of the app which is done by having a get function which has 2 arguments, 1st is the url[we will use '/' root directory] and 2nd will be a callback function and in callback function there are again 2 arguments- req,res
        For example : if you want to send something to the client then we will use res.send('blah..');
        now if you open the web brower you will get "cannot \GET" because you have to make the server stop and then you have to start it again
        Code : 
        [above the listen function]:
        app.get('/',(req,res)=>{
            res.send('Hello Node API');
        })
        [Successed]

        vi. Now lets use git and for those things which we don't want to be uploaded in git will just be ignored by make a file inside them : ".gitignore" and now in that enter the folder name
        Code :
        git init

        after ignoring node_modules, we will add every files in git
        Code :
        git add .