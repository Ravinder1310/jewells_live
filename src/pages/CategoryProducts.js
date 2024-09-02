import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/loader';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';
import "../style/category.css";

const CategoryProducts = () => {
   const params = useParams();
   const [products, setProducts] = useState([]);
   const [category, setCategory] = useState([]);
   const [loading, setLoading] = useState(false);
   const [cart, setCart] = useCart();
   const navigate = useNavigate();

   const min = 10;
   const max = 75;
   
  useEffect(() => {
   if(params?.slug) getProductByCategory()
  },[params?.slug])

   const getProductByCategory = async() => {
    try {
      setLoading(true);
        const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`);
        setLoading(false);
        setProducts(data?.products);
        setCategory(data?.category)
    } catch (error) {
      setLoading(false);
        console.log(error);
    }
   }

  return (
    <Layout title={'Category - Healet'}>
      {/* <h1 className='text-center mt-2' style={{color:"blue"}}>{category?.name}</h1> */}
      {
            loading ? <div style={{textAlign:"center"}}> <img width={'300px'} height={'300px'} src='/images/spinner.gif'/></div> : 
            <div className='categoryContainer mt-3'>
            <h6 className='text-center'>{products?.length} {products?.length > 1 ? 'Products' : 'result'} found</h6>
            <div className='row'>
            <div className="col-md-11">
            <div className="categoryContainer2">
                    {products?.map((p) => (
                      <div
                        onClick={() => navigate(`/product/${p.slug}`)}
                        className="card "
                      >
                        <img
                          src={`${process.env.REACT_APP_API}/${p.photo1}`}
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
            {/* <div className="m-2 p-3">
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
            </div> */}
          </div>
            </div>
        </div>
          }
        
    </Layout>
  )
}

export default CategoryProducts