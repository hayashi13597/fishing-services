import React from "react";
import { FaStar } from "react-icons/fa";

type RatingType = {
  title: string;
  rating: number;
  setRating: (value: number) => void;
  hover: number;
  setHover: (value: number) => void;
};

const Rating = ({ title, rating, setRating, hover, setHover }: RatingType) => {
  return (
    <div className="flex items-center gap-3">
      <p>{title}:</p>
      <div className="flex">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
                className="hidden"
              />
              <FaStar
                className={`text-2xl cursor-pointer ${
                  currentRating <= (hover || rating)
                    ? "text-primary"
                    : "text-white"
                }`}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
        <p className="ml-3 text-base text-primary font-medium">
          {rating < 3 ? "Tệ quá" : rating == 3 ? "Bình thường" : "Tuyệt vời"}
        </p>
      </div>
    </div>
  );
};

export default Rating;
