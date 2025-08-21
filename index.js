// console.log("hello from poo, this is poo. ");
require("dotenv").config();
const http = require("http");
const path = require("path");
const fs = require("fs");

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("hello new poo poo"));

// about route
app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "about.html"))
);

// contact me route
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "public", "contact-me.html"))
);

// use is a catch all.
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});
const PORT = 8080;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// Commented out sections are the manual way of routing server requests without Express

// const server = http.createServer((req, res) => {
//   // console.log(req.url);

//   // if (req.url === "/") {
//   //   fs.readFile(
//   //     path.join(__dirname, "public", "index.html"),
//   //     (err, content) => {
//   //       if (err) throw err;
//   //       res.writeHead(200, { "Content-Type": "text/html" });
//   //       res.end(content);
//   //     }
//   //   );
//   // }
//   if (req.url === "/about") {
//     fs.readFile(
//       path.join(__dirname, "public", "about.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   }
//   if (req.url === "/contact-me") {
//     fs.readFile(
//       path.join(__dirname, "public", "contact-me.html"),
//       (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(content);
//       }
//     );
//   } else {
//     fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
//       if (err) throw err;
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(content);
//     });
//   }
// });

// const PORT = process.env.PORT || 8080;
// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
