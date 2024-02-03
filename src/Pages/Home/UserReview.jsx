import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UserReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2500/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  var settings = {
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    focus: 1.4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          className: "center",
          centerMode: true,
          centerPadding: "50px",
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto overflow-hidden mt-32 mb-20 ">
      <div>
        <p className="text-center text-2xl font-semibold font-montserrat">
          _ What Prople Are Saying _
        </p>
      </div>
      <Slider {...settings} className="overflow-hidden ">
        {reviews.map((singleReview, idx) => (
          <div key={idx} className="p-5 ">
            <div className="card space-y-3  bg-base-100 shadow-xl p-3">
              <p className="text-xl font-playfair pt-7 font-semibold">
                {singleReview.feedbackTitle}
              </p>
              <div className="flex justify-center">
                <img
                  className="rounded-full w-44 h-44"
                  src={singleReview.userImage}
                  alt=""
                />
              </div>
              <p className="text-xl font-semibold font-playfair">
                {singleReview.userName}
              </p>
              <div className="flex justify-center">
                <Rating
                  style={{ maxWidth: 130 }}
                  value={singleReview.rating}
                  // itemStyles={myStyles}
                  readOnly
                />
              </div>
              <p className="text-md  font-medium text-gray-700">
                {singleReview.description}
              </p>
              <p className="text-lg font-playfair text-gray-500 font-semibold">
                {singleReview.reviewDate}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UserReview;
