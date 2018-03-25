const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.render('about_me');
})

app.get('/about_me',function(req,res){
//     res.send(req.query.name);
    var user = {name:req.query.name }
  res.render('about_me',{user:user});
})


app.get('/about',function(req,res){
//     res.send(req.query.name);
    var user = {name:req.query.name }
  res.render('about',{user:user});
})

app.listen(3000,function(){
  console.log("start server on port 3000！");
})