import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import UserMenu from "../../components/layouts/UserMenu";
import { useAuth } from "../../context/auth";
import "./userDetails.css";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import Swipper2 from "../../components/Swipper2";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [auth] = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();


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

  useEffect(() => {
      getAllProducts();
    // console.log(products[0].photos);
  }, []);

   const baseURL = process.env.REACT_APP_API;

  return (
    <Layout title={"Dashboard - U-Look"}>
      <div className="menuAndSliderContainer">
        <div className="menuAndSlider">
          <div className="col-md-3 userMenuAnd" style={{padding:"20px"}}>
            <UserMenu />
          </div>
            <div className="userDetails">
               <Swipper2/>
            </div>
        </div>
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
                  <h3 style={{textAlign:"center"}}>Hot List</h3>
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
                </div>
              )}
            </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
