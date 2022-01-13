var express = require("express");
var bodyParser = require("body-parser");

server = express();

server.use(express.static("finalterm"));

server.use(bodyParser.urlencoded());
server.use(bodyParser.json());

var DB = require("nedb-promises");
var Contact = DB.create("contact.db")

var Picturebook = DB.create("picturebook.db")

var Recipe = DB.create("recipe.db")

//Picturebook.insert( { href: "applebook.html", imgSrc: "imagesfinal/素材/網站設計_繪本目錄-2.png" });

//Recipe.insert( { href: "#recipe1", imgSrc: "imagesfinal/素材/網站設計_目錄-1.png" });


server.post("/contact_me", function (req, res) {
    console.log(req.body);
    //check 
    Contact.insert(req.body);
    res.end()
})

server.post("/recipe/section2", function (req, res) {
  //Recipe.find({}).then((result)=>{
    //  res.send(result);
  //}) 
  section2s= [
          { href: "#recipe1", imgSrc: "imagesfinal/素材/網站設計_目錄-1.png" },
          { href: "#recipe2", imgSrc: "imagesfinal/素材/網站設計_目錄-2.png" },
          { href: "#recipe3", imgSrc: "imagesfinal/素材/網站設計_目錄-3.png" },
          { href: "#recipe4", imgSrc: "imagesfinal/素材/網站設計_目錄-4.png" },
          { href: "#recipe5", imgSrc: "imagesfinal/素材/網站設計_目錄-5.png" },
      ]
      res.send(section2s);
})

server.post("/picturebook/section2", function (req, res) {
    Picturebook.find({}).then((result)=>{
         res.send(result);
     })
   })

server.listen(8080, function () {
    console.log("Server is running at port: 8080!!")
})
