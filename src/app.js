const express = require("express");

const app = express();

// this arrow function is called request handler.
// app.use((req, res) => {
//   res.send("Hello from the server.");
// });

app.use("/", (req, res) => {
  res.send("Hello from the server. You are on the Home Page");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server. You are on Test Page");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
