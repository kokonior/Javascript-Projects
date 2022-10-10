//load http module
var http = require("http");
http
  .createServer(function (request, response) {
    //http header
    //tell the browser everything is okey with status code 200 and data text
    response.writeHead(200, { "Content-Type": "text/plain" });
    // write the text to your body page
    // send the body and header to the server
    response.end("Hello my server");
    //tell the server which port you are running
  })
  .listen(3000);
//print the message on console
console.log("Server running at port 3000");
