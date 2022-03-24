const functions = require("firebase-functions");
const express=require('express');
const cors=require('cors');
const stripe=require('stripe')('sk_test_51InLW8GaWx1ftVCsqvsegjAmGAGKRhszaI3yqcy2tp3lo9nu3pOYUAeOWJU0CEshoGdGHsqQh5AdT9g270QJoXRY00Ku9LQ3KN');

// --API
// --App config
const app=express();
//--Middlewares
app.use(cors({origin:true}));
app.use(express.json());
// API routes
app.get('/',(request,response)=>response.status(200).send('helo  world'));
app.post('/payments/create',async (request,response)=>{
    const total=request.query.total;
    console.log('Payment Request Recived BooM this payment', total);

    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:"usd"
    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
});
//--listen command
exports.api=functions.https.onRequest(app);