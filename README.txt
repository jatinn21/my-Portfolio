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

        vi. Now lets use git and for those things which we don't want to be uploaded in git will just be ignored by make a file inside them : ".gitignore" and now in that enter the "/folder_name"
        Code :
        git init

        after ignoring node_modules, we will add every files in git
        Code :
        git add .


        now if any changes are made and want ot push it in github : 
        git add -A 
        then commit 
        git commit -m "message"
        then push 
        git push origin master


        v. install nodemon
        this will retart our server automatically whenever any changes have been made.
        Code 
        npm i nodemon -D
        
        now go on package.json and inside the scripts add: 
        ,"dev" : "nodemon ./js/server.js"
        now instead of writing 'npm run serve', we will write 'npm run dev'


        --------------------------------------------------

Step5 : now connect your app with mongodb Database
        to use it first install mongoose package
        Code :
        npm i mongoose
        
        then inside this package inside your server.js

        then we can connect it with mongodb using mongoose and mongodb ConnectionString

Step6 : now go to cluster connect > Drivers > copy the ConnectionString
        in our case :
        mongodb+srv://jatinn21:mongodb123@cluster0.y8lhgt2.mongodb.net/?retryWrites=true&w=majority

        then console.log(if successed)else catch the error and console.log(error)
        [successed]

Step7 : Now if you want to save the data in the Database , you have to make an model for instance if i want to save info about product, I will create product model so i can save info about product in Database as [product data] and this product data will interact with product model via the connection that we have made before


        i. create models folder in the project and inside that make a tabledata js file for ex if you are working on a product info then inside the model, you'll make a product.js file

        ii. inside the product.js  bring mongoose package and then create a schema using mongoose.schema and inside the schema, we will determine each field.
        
        iii. once schema is made, make a product model using mongoose.model(nameOfTheModel,SchemaVariableName)

