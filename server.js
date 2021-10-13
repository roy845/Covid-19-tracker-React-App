const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pg = require ('pg');
const path = require('path');
const PORT = process.env.PORT || 3001;


//db connection postgres
var client = new pg.Client({
  user: "qtkiicponziuuy",
  password: "9f660858b81609ac1edd62ff7a70b32cb2aa40cbce366464e09c05b5378068a2",
  database: "d1tts93g76h36g",
  port: 5432,
  host: "ec2-3-222-24-200.compute-1.amazonaws.com",
  ssl: {rejectUnauthorized: false}
}); 


//for saving cookies
const corsOptions = {
  origin:true,
  credentials:true,
};


//middleWare
app.use(cors(corsOptions))
app.use(express.json())//req.body
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
  
  res.sendFile(__dirname+"/client/build/index.html",);
})

app.get("/favicon.ico",(req,res)=>{
  
  res.sendFile(__dirname+"/client/build/favicon.ico",);
})

if(process.env.MODE_ENV === "production"){
  app.use(express.static('client/build'));
}


//Routes//

//Create a user
app.post ('/insertUser', async (req, res) => {
    try {
     
        const {email,password} = req.body.user;
          
        await client.query('SELECT email from public."users" where email=$1',
        [email],(err, result) => {
          console.log(err,result);
          if(result.rowCount>0)
          res.send("alreadyExistsUser")
          else{
            const userToInsert = client.query(
              'INSERT INTO public."users" (email,password) VALUES($1,$2)',[email,password],  
              (err, result) => {
                console.log(err, result);
               res.json(userToInsert);
      
              });
          }

        });
 
      
    } catch (error) {
      console.log (error);
    }
  });



  app.post ('/getUser', async (req, res) => {
    try {
      const {email,password} = req.body.user
      console.log(req.body.user)
     
      client.query('SELECT * from public."users" where email=$1 and password=$2',[email,password],  
        (err, result) => {
          console.log(err, result);
          if(result.rowCount===0)
          res.send("userNotFound")
          else{ 
            res.cookie('email',result.rows[0].email,{maxAge:1*60*60*1000,httpOnly:false});
            res.cookie('password',result.rows[0].password,{maxAge:1*60*60*1000,httpOnly:false})
            res.send("userFound")
           // res.json(foundUser) 
             
          }

         

        });
    } catch (error) {
      console.log (error);
    }
  });

  //check if user is connected
  app.get ('/isConnected', async (req, res) => {
    try {

    if(req.cookies["email"]!==undefined && req.cookies["password"]!==undefined )
    {
        
         res.send("userIsConnected")
         
    }
    else{
      res.send("userIsNotConnected")
    }
       
    } catch (error) {
      console.log (error);
    }
  });


   //clear cookies
   app.get ('/clearCookies', async (req, res) => {
    try {

    if(req.cookies["email"]!==undefined && req.cookies["password"]!==undefined )
    {
      res.clearCookie("email");
      res.clearCookie("password");
      res.send("cookiesCleared")
         
    }
  
       
    } catch (error) {
      console.log (error);
    }
  });


  

app.listen(PORT);
console.log("listening.... on port 3001");
client.connect()
.then(() => console.log("client Connected to database successfuly"))