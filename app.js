const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://aditi-admin:project2@cluster1.yykfk.mongodb.net/todolistDB" , { useNewUrlParser : true , useUnifiedTopology: true,});

const itemsSchema = {
  name : String
};

const Item = mongoose.model("Item" , itemsSchema);

const listSchema = {
  name : String,
  item : [itemsSchema]
};

const List = mongoose.model("List" , listSchema);

app.get("/" , function(req,res){

  Item.find({},function(err , foundItems){

        res.render("list",{listTitle : "Today" , newItem : foundItems });
  });
});

app.get("/:customListName",function(req,res){
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name: customListName} , function(err ,foundList){
    if(!err){
      if(!foundList){
        const list = new List({
          name : customListName,
        });
        list.save();
        res.redirect("/" + customListName);

      }else{
        res.render("list",{listTitle : foundList.name , newItem : foundList.item });
      }
    }
  })

});

app.post("/",function(req,res){

  const itemName = req.body.n1;
  const listName = req.body.list;

  const item = new Item({
    name : itemName
  });

  if(listName==="Today"){
    item.save();
    res.redirect("/");
  }else{
    List.findOne({name : listName},function(err ,foundList){
      foundList.item.push(item);
      foundList.save();
      res.redirect("/"+listName);
    });
  }

});

app.post("/delete" , function(req,res){
  const checkedId = req.body.checkbox;
  const listName = req.body.listName;

  if(listName==="Today"){
    Item.findByIdAndRemove(checkedId , function(err){
      if(!err){
        console.log("success");
        res.redirect("/");
      }
    })
  }else{
    List.findOneAndUpdate({name : listName},{$pull : {item : {_id : checkedId}}} , function(err , foundList){
      if(!err){
        res.redirect("/" + listName);
      }
    });
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4040;
};

app.listen(port , function(){
  console.log("Server has started Successfully.");
});
