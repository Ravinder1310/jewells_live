import React, { useState } from 'react'
import Layout from '../components/layouts/Layout'
import { useSearch } from '../context/Search'
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "../style/search.css"

const Search = () => {

    const [values, setValues] = useSearch();
    const [cart, setCart] = useCart();
    const navigate = useNavigate()
    console.log(values);

  return (
    <Layout title={"Search Results - Healet"}>
        <div className='search-container'>
        <div className="searchContainer2">
                    {values.results?.map((p) => (
                      <div
                        onClick={() => navigate(`/product/${p.slug}`)}
                        className="card"
                      >
                        <img
                          src={`${process.env.REACT_APP_API}/${p.photo1}`}
                          className="card-img"
                          height={"250px"}
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
    </Layout>
  )
}

export default Search