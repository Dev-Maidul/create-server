
import http, { IncomingMessage, Server, ServerResponse } from "http";
import path from "path";

const server:Server=http.createServer((req:IncomingMessage, res:ServerResponse)=>{
    console.log("server is running at :");

    if(req.url=="/" && req.method=="GET"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(
            JSON.stringify({
                message:"Hello from Node server...",
                path:req.url
            })
        )
    }
});

server.listen(3000,()=>{
    console.log(`Server running on port ${3000}`);
})