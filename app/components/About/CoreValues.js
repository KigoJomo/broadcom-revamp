import React from "react";
import { FaLightbulb, FaCheckCircle, FaHeadset, FaUsers } from "react-icons/fa";

const values = [
  {
    title: "Innovation",
    description: "We are constantly looking for new ways to improve our products and services.",
    icon: FaLightbulb
  },
  {
    title: "Quality",
    description: "We strive to deliver the highest quality products and services.",
    icon: FaCheckCircle
  },
  {
    title: "Customer Service",
    description: "We are committed to providing the best customer service possible.",
    icon: FaHeadset
  },
  {
    title: "Teamwork",
    description: "We believe that great things are achieved through collaboration.",
    icon: FaUsers
  }
];

const Value = ({ icon, title, description }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full aspect-[9/10] p-6 border flex flex-col items-center justify-center gap-4 text-background     hexagon-clip moving-gradient  hover:scale-105 transition-scale duration-500">
        {React.createElement(icon, { className: "", size: 48 })}

        <h3 className="text-center text-base leading-4">{title}</h3>
      </div>

      <div className="h-4 md:h-12 w-0 border border-dashed border-indigo"></div>

      <p className="text-xs md:text-sm text-center">{description}</p>
    </div>
  );
};

export default function CoreValues() {
  return(
    <section className="py overflow-x-hidden">
      <h1 className="w-fit mx-auto mb-12 lines-header">our core values</h1>

      <div className="values grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
        {values.map((value, index) => (
          <Value key={index} {...value} />
        ))}
      </div>
    </section>
  )
}