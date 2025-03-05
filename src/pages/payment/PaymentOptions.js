import React from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const PaymentOptions = () => {
  const location = useLocation();
  const totalAmount = location.state?.total || 0; // Get total amount from location state

  const handlePaymentMethod = (method) => {
    // Here you can handle the payment method selection
    console.log(`Selected payment method: ${method}`);
    // You can redirect to the respective payment processing logic
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Select Payment Method" />
      <div className="pb-10">
        <h1 className="text-2xl font-semibold">Total Amount: Rs {totalAmount}</h1>
        <h2 className="mt-4 text-lg font-semibold">Choose a payment method:</h2>
        <div className="mt-4">
          <button
            onClick={() => handlePaymentMethod("Google Pay")}
            className="w-full h-10 bg-primeColor text-white text-lg mb-2 hover:bg-black duration-300"
          >
            Google Pay
          </button>
          <button
            onClick={() => handlePaymentMethod("UPI")}
            className="w-full h-10 bg-primeColor text-white text-lg mb-2 hover:bg-black duration-300"
          >
            UPI
          </button>
          <button
            onClick={() => handlePaymentMethod("Net Banking")}
            className="w-full h-10 bg-primeColor text-white text-lg mb-2 hover:bg-black duration-300"
          >
            Net Banking
          </button>
          <button
            onClick={() => handlePaymentMethod("Credit/Debit Card")}
            className="w-full h-10 bg-primeColor text-white text-lg mb-2 hover:bg-black duration-300"
          >
            Credit/Debit Card
          </button>
          <button
            onClick={() => handlePaymentMethod("PayPal")}
            className="w-full h-10 bg-primeColor text-white text-lg mb-2 hover:bg-black duration-300"
          >
            PayPal
          </button>
          {/* Add more payment options as needed */}
        </div>
        <Link to="/">
          <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentOptions; 