import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import axios from "axios";
import { Link, json, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../context/cart";
import "../style/cards.css";
import "../style/sidebar.css";
import Swipper from "../components/Swipper";
import ProductSwipper from "../components/ProductSwipper";

const Landing = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  // const handleRangeChange = (e) => {
  //   setRadio([parseFloat(e.target.value), parseFloat(e.target.value) + 1.9]);
  // };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  //getall products

  let swipperProducts = [];

  const getAllProductsForSwipper = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setLoading(false);
      for (
        let i = data?.products.length - 1;
        i >= data?.products.length - 15;
        i--
      ) {
        swipperProducts.push(data?.products[i]);
      }
      console.log(swipperProducts);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data?.products);
      console.log(data?.products[0].photo1);
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  // get total count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  // load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by category
  const handleFilter = (value, id) => {
    let allCecked = [...checked];
    if (value) {
      allCecked.push(id);
    } else {
      allCecked = allCecked.filter((c) => c !== id);
    }
    setChecked(allCecked);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) {
      getAllProducts();
      getAllProductsForSwipper();
    }
    // console.log(products[0].photos);
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filteredProducts();
  }, [checked, radio]);

  // get filtered products
  const filteredProducts = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filter`,
        { checked, radio }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const baseURL = process.env.REACT_APP_API;

  return (
    <div>
      <Layout title={"Home - Healet"}>
        <div className="row bigContainer">
          <div className="col-md-15 ">
            <img
              src="/images/slider-bg.png"
              alt="error"
              width={"100%"}
              height={"700px"}
              className="topBanner"
              // style={{ zIndex: 0 }}
            />
            <h1 className="img-title">Best Jewellery Collection</h1>
            <p className="img-dis">
              Elegance Redefined, Jewels Perfected. Unleash Your Graceful Aura.
              Inspired by Elegance, Crafted with Passion. An Ode to Classic
              Sophistication.
            </p>
            <div>
              {loading ? (
                <div
                  style={{
                    textAlign: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <img
                    width={"300px"}
                    height={"300px"}
                    // style={{ border: "2px solid red" }}
                    src="/images/spinner.gif"
                  />
                </div>
              ) : (
                <div className="container1">
                  <h2>Hot List</h2>
                  <div className="container2">
                    {products?.map((p) => (
                      <div
                        onClick={() => navigate(`/product/${p.slug}`)}
                        className="card "
                        data-aos="flip-up"
                      >
                        <img
                          src={`${baseURL}/${p.photo1}`}
                          className="card-img"
                          height={"220px"}
                          alt={p.name}
                        />
                        <div className="card-body">
                          <p className="card-title">
                            {p.name.substring(0, 40)}...
                          </p>
                          <p className="card-text">
                            {p.description.substring(0, 37)}...
                          </p>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className="price-offer">
                              <p className="price">
                                <i class="fa fa-inr"></i>
                                {p.price}
                              </p>
                              <p className="offerPrice">
                                <i class="fa fa-inr"></i>
                                {Math.floor(
                                  p.price - (p.price * p.offer) / 100
                                )}
                              </p>
                              <p className="offer"> {p.offer}%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="container text-center m-2 p-3">
                    {products && products.length < total && (
                      <button
                        className="btn btn-warning"
                        onClick={(e) => {
                          e.preventDefault();
                          setPage(page + 1);
                        }}
                      >
                        {loading ? "Loading..." : "Loadmore"}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="container my-5 vision">
              <div className="row align-items-center">
                <div className="col-12 col-md-6" data-aos="fade-down-right">
                  <img
                    src="/images/jwl4.png"
                    alt="error"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  className="col-12 col-md-6 d-flex justify-content-center align-items-center"
                  data-aos="fade-down-left"
                >
                  <div
                    className="bg-secondary text-white p-4 visCard"
                    style={{
                      backgroundColor: "rgb(172, 120, 89)",
                      padding: "5px 30px",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p
                      className="mb-0"
                      style={{
                        color: "rgb(248, 245, 245)",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginTop: "25px",
                      }}
                    >
                      You can never go wrong with this classic piece of
                      jewellery. With just the right amount of charm and style,
                      it can take you from a busy day at work to an impromptu
                      night out with colleagues or friends.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div
                  className="col-12 col-md-6 d-flex justify-content-center align-items-center order-2 order-md-1"
                  data-aos="fade-up-right"
                >
                  <div
                    className="bg-secondary text-white p-4 visCard"
                    style={{
                      backgroundColor: "rgb(172, 120, 89)",
                      padding: "5px 30px",
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p
                      className="mb-0"
                      style={{
                        color: "rgb(248, 245, 245)",
                        fontSize: "16px",
                        fontWeight: "600",
                        marginTop: "25px",
                      }}
                    >
                      One of the most versatile forms of ornate designs that
                      goes well with every style and personality. Wear one of
                      these and you do not have to worry about any other
                      accessory.
                    </p>
                  </div>
                </div>
                <div
                  className="col-12 col-md-6 order-1 order-md-2"
                  data-aos="fade-up-left"
                >
                  <img
                    src="/images/jwl5.png"
                    alt="error"
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="abt">
              <img src="/images/abt1.png" alt="" />
              <div className="abt-dis">
                <h2>About Us</h2>
                <p>
                Welcome to Royal Jewells , where elegance meets craftsmanship. We are passionate about creating timeless jewelry pieces that celebrate life’s precious moments. From delicate everyday essentials to luxurious statement designs, our collections are crafted with precision, using the finest materials and an unwavering attention to detail.
                </p>
                <button className="abt-btn" onClick={() => navigate(`/about`)}>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Landing;
