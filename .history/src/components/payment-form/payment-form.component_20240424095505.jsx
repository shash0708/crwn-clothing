import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = ({ customerDetails }) => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    try {
      const response = await fetch("https://localhost:8888/.netlify/functions/create-payment-intent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          amount: 10000,
          description: "Your transaction description here",
          line1:"1234",
          city:"qwert",
          state:"sdf",
          postal_code:"234556",
          country:"qwert",
        }),
      });

      const { paymentIntent: { client_secret } } = await response.json();

      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: "shashank",
          },
        },
      });

      if (paymentResult.error) {
        // Handle payment failure
        console.error(paymentResult.error);
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          // Handle successful payment
          console.log('Payment successful');
        }
      }
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
