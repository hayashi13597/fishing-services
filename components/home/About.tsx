import React from "react";

import AboutItem from "./components/AboutItem";
import { goToUSList } from "../../constants";

const About = () => {
  return (
    <section>
      <h2 className="text-center font-bold text-4xl pb-2 mb-8 ">
        Tại sao phải đến với chúng tôi?
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        {goToUSList.map((item, index) => (
          <AboutItem
            item={item}
            key={`product-${index}`}
            isRight={index % 2 == 1}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
