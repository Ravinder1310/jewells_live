import React from "react";
import Layout from "../components/layouts/Layout";

const About = () => {
  return (
    <Layout title={"About us - Healet"}>
      <div className="row contactus ">
        <div className="col-md-5 ">
          <img
            src="/images/aboutUs.png"
            alt="contactus"
            style={{ width: "100%", height: "240px" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Royal Jewells, where elegance meets craftsmanship. We are passionate about creating timeless jewelry pieces that celebrate life’s precious moments. From delicate everyday essentials to luxurious statement designs, our collections are crafted with precision, using the finest materials and an unwavering attention to detail.

</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
