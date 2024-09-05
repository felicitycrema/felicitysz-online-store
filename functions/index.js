const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51PfLldI3GLyic3mgs1QhFemurJYAWUeF6QBkTVCfYbUT" +
    "xDgLrRJ8hlZ7yW36L03Nu7sge6PihWHpCj8jsCdILUfu005QYBLYTL");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("Backend Running"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Received for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // If okay created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

