const http= require("http")
const teams =require("./footballcontroller/footballcontroller.js")
port=2222
const server=http.createServer(async(req,res)=>{
     results = await teams() ;
  if(req.url==="/"){
    res.write("welcome to my home page"),
    res.end()
}
else if(req.url==="/allteams"){

    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify(results));
}
else{
    res.end("page not found")
}





    
})
server.listen(port,()=>{
    console.log("my port is working on "+port)
})