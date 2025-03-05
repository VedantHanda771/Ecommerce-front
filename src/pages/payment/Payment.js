import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_PUBLIC_STRIPE_KEY"); // Replace with your Stripe public key

const Payment = () => {
  const location = useLocation();
  const totalAmount = location.state?.total || 0; // Get total amount from location state
  const [amount] = useState(totalAmount); // Set initial amount to totalAmount (no manual input)
  const [selectedMethod, setSelectedMethod] = useState(""); // State to hold selected payment method

  const handlePayment = async (e) => {
    e.preventDefault();
    const stripe = await stripePromise;

    // Check if the selected method is not Cash on Delivery
    if (selectedMethod !== "Cash on Delivery") {
      // Create a payment intent on your server (you need to implement this)
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }), // Send the amount to your server
      });

      const { clientSecret } = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        clientSecret,
      });

      if (error) {
        console.error("Error:", error);
      }
    } else {
      // Handle Cash on Delivery logic here
      console.log("Cash on Delivery selected. Proceeding with order confirmation.");
      // You can add additional logic for COD here, such as confirming the order without payment
    }
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>
        <p className="text-lg font-semibold">Total Amount: Rs {amount}</p> {/* Display total amount with Rs */}
        
        {/* Payment Options */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Choose a payment method:</h2>
          <div className="flex flex-col space-y-2">
            {["UPI", "Net Banking", "Credit/Debit Card", "PayPal", "Cash on Delivery"].map((method) => (
              <div key={method} className="flex items-center justify-between">
                <button
                  onClick={() => setSelectedMethod(method)}
                  className={`w-48 h-12 text-lg rounded-lg shadow-md transition duration-300 ${selectedMethod === method ? "bg-green-600 text-white" : "bg-primeColor text-white"} hover:bg-gray-800`}
                >
                  {method}
                </button>
                <button
                  onClick={() => {
                    setSelectedMethod(method);
                    // No need to call handlePayment here, just select the method
                  }}
                  className="ml-2 w-32 h-12 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Buttons */}
        <div className="flex flex-col items-center mt-4">
          <form onSubmit={handlePayment} className="w-full flex justify-center">
            <button
              type="submit"
              className="w-48 h-12 bg-primeColor text-white text-lg rounded-lg shadow-md hover:bg-black duration-300"
              disabled={!selectedMethod} // Disable button if no method is selected
            >
              Pay Now
            </button>
          </form>
          <Link to="/">
            <button className="w-48 h-12 bg-primeColor text-white text-lg mt-4 rounded-lg shadow-md hover:bg-black duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
