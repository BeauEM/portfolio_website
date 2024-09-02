import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { companies, testimonials } from "@/data";

const Testimonials = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading py-10">
        Kind Words From <span className="text-purple">Satisfied</span> Clients
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
          <div>
            {companies.map((company) =>)}
          </div>
      </div>
    </div>
  );
};

export default Testimonials;
