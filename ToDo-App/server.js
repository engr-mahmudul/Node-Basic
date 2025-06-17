const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Welcome to ToDo App server");
  } else if (req.url === "/todos" && req.method === "GET") {
    res.end("All todos");
  } else if (req.url === "/todos/create-todo" && req.method === "POST") {
    res.end("Todo Created");
  } else {
    res.end("Route Not Found");
  }
});

server.listen(5000, "localhost", () => {
  console.log("Server Listing to port 5000");
});
