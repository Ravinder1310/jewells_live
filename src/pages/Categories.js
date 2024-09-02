import React from "react";
import Layout from "../components/layouts/Layout";
import useCategory from "../hooks/useCategory";
import "../style/categoryCard.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import Swipper from "../components/Swipper";

const Categories = () => {
  const categoryImages = [
    "/images/rng.png",
    "/images/nspn.png",
    "/images/er4.png",
    "/images/bngl4.png",
    "/images/brclt4.png",
    "/images/pnd4.png",
    "/images/mngl4.png",
  ];

  const categories = useCategory();
  return (
    <Layout title={"Categories - Healet"}>
       <div className="categoryLeftbar">
        <img src="/images/catBanner.gif" alt="banner"/>
        <TypeAnimation
      sequence={[
        'Unleash Your Inner Sparkle', // Types 'One'
        2000, // Waits 1s
        'Discover the Extraordinary in Detail', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Let Your Style Speak Uniquely', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      // cursor={true}
      repeat={Infinity}
      style={{ fontSize: '3em', display: 'inline-block',position:"relative",zIndex:1,top:"-300px",left:"25%",color:"white" }}
    />
        <h3>Top categories</h3>
        <div className="categoryCardContainer">
          {categories?.map((c, i) => (
            <Link
              to={`/category/${c.slug}`}
              className="text-light text-decoration-none"
            >
              <div className="categoryCard" key={c._id}>
                <img width={"100%"} src={categoryImages[i]} alt="error" />
                <h2>{c.name}</h2>
              </div>
            </Link>
          ))}
        </div>
        <Swipper/>
      </div>
    </Layout>
  );
};

export default Categories;
