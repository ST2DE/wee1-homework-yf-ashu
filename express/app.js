const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.send("hello");
})

app.get('/about_me',function(req,res){
  res.render('about_me');
})


app.listen(3000,function(){
  console.log("開始運行！");
})