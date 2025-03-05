import React from 'react';
import Review from "./Review";

const ReviewSection = () => {
  const reviews = [
    { name: "Alice", review: "Great product! Highly recommend.", rating: 5 },
    { name: "Bob", review: "Good quality, but a bit expensive.", rating: 4 },
    { name: "Charlie", review: "Not what I expected, but decent.", rating: 3 },
    { name: "Diana", review: "Absolutely love it! Will buy again.", rating: 5 },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      {reviews.map((review, index) => (
        <Review key={index} name={review.name} review={review.review} rating={review.rating} />
      ))}
    </div>
  );
};

export default ReviewSection;
