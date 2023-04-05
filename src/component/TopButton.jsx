import React from "react";

const TopButton = () => {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Melbourne",
    },
    {
      id: 4,
      title: "Perth",
    },
    {
      id: 5,
      title: "Brisbane",
    },
  ];

  return;
  <div className="flex items-center justify-around my-6">
    {cities.map((city) => {
      <button className="text-white text-lg font-medium">{city.title}</button>;
    })}
  </div>;
};

export default TopButton;
