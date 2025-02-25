const CC = require("currency-converter-lt");
const Router = require("router");
const express = require("express");

let route = Router();
let app = express();

const convertCurrency = (from, to, amt) => {
  let currencyConverter = new CC({ from, to, amount: amt });
};

// route.post("/currencyConverter", function (req, res) {
//   req.body = { from, to, amt };
//   res.send("hellow bro..!!", from, to, amt);
// });

app.use("/currencyConverter", function (req, res) {
  req.body = { from, to, amt };
  res.send("hellow bro..!!", from, to, amt);
});

app.listen(5000, () => {
  console.log("backend is running on PORT:", 5000);
  // connectDB();
});
