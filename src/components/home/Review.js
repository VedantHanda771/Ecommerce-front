// src/components/Review.js
import React from 'react';

const Review = ({ name, review, rating }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-gray-600">{review}</p>
      <p className="text-yellow-500">Rating: {rating} ★</p>
    </div>
  );
};

export default Review;