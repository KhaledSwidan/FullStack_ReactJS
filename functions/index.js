const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config -- appInitialize;
const app = express();

// middleWares;
app.use(cors({origin: true}));
app.use(express.json());

// API Routes;
app.get("/", (req, res) => res.status(200).send("Hello World!"));
app.post("/payments/create", async (req, res) =>
{
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });
  // ok -created;
  res.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
  return "...";
});

// example endpoint;
// http://127.0.0.1:5001/reactjsfullstack-db64e/us-central1/api

// Listen Commands -- firebase;
exports.api = functions.https.onRequest(app);
