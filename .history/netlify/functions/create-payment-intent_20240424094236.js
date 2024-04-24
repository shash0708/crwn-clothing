require("dotenv").config();


const stripe = require('stripe')('sk_test_51OdtpeSHrlN7ZIYjmBtVuIcxiCTlFhX4FKORDIkNKw3p1U2PZOum8mCDP7Cb5bffFh0xvDju1iAbq5nGHtDtTp0t00t5uQ4Nvn');


exports.handler = async (event) => {
  try {
    const { amount , line1, city, state, postal_code, country } = event.body;



    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'INR',
      description: "Your transaction description here", // Add a valid description
      payment_method_types: ["card"],
      address: {
        line1,
        city,
        state,
        postal_code,
        country,
      }
    
    });

    return {
      statusCode: 200,
      // headers: {
      //   "Access-Control-Allow-Headers": "Content-Type",
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
      // }, 
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};