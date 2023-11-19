const express = require("express");
var app = express();
app.use(express.json());

app.post("/post", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  if (data == "ra") {
    res.send({ status: "yes that is the right data..." });
  }
});

app.listen(3000, () => {
  console.log("server is working properly....");
});
