import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Orders = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const handleRefundClick = () => {
    setMessage("Please order something first.");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Orders" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Your Orders</span>{" "}
          Here you can view and manage your orders. If you have any questions regarding your orders, please contact our support team.
        </h1>
        <button 
          onClick={handleRefundClick} 
          className="w-52 h-10 bg-red-500 text-white hover:bg-red-700 duration-300 mb-4"
        >
          Request Refund
        </button>
        {message && <p className="mt-4 text-red-500">{message}</p>}
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 mt-4">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
