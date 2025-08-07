const http= require('http');
const server =http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("hello AAkarsh")
        res.end()
    }
     if(req.url==="/code"){
        res.write("hello AAkarsh coder how are you doing? ???")
        res.end()
    }

})
const port=3000;
server.listen(port,()=>{
    console.log(`Listening at servet ${port}`);
    
})
