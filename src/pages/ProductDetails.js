import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useCart } from '../context/cart'
import toast from 'react-hot-toast'
import ProductImages from '../components/ProductImage'
import "../style/details.css"

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if(params?.slug) getProduct();
  },[params?.slug])

 // get products
 const getProduct = async() => {
  try {
    const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${params.slug}`);
    setProduct(data?.product)
    getSimilarProducts(data?.product._id, data?.product.category._id)
  } catch (error) {
    console.log(error);
  }
 }

// get similar product
const getSimilarProducts = async(pid,cid) => {
  try {
    const {data} = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/similar-product/${pid}/${cid}`)
    setSimilarProducts(data?.products)
  } catch (error) {
    console.log(error);
  }
}

  return (
    <Layout>
      <div className='product-details-container'>
        <div className='prContainer'>
          <ProductImages product={product}/>
          <div className='col-md-5 product-details-info'>
            <h1 className='text-center product-title'>{product.name}</h1>
            
            <h4 className='prod-price'>Price:  <i class="fa fa-inr" style={{color:"grey"}}></i> <span style={{color:"grey",marginLeft:"-10px"}}>{product.price}</span></h4>
            {/* <h4 className='prod-category'>Category: {product.category?.name}</h4> */}
            <p className='prod-dis'>{product.description}</p>
            <div className='rating d-flex flex-wrap'>
              <div className='product-rating'>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='far fa-star'></i>
              </div>
              <span className='px-2'>4.3 (516 reviews)</span>
            </div>
            <button className='btn btn-secondary ms-1'
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem('cart',JSON.stringify([...cart, product]))
              toast.success("Item added to Cart");
            }}
            >Add to Cart</button>
          </div>
        </div>
        <hr style={{marginTop:"50px"}}/>
        <div className='row container'>
          <h6>Have a look on Similar products</h6>
          {similarProducts.length < 1 && (<p className='text-center'>No similar product found</p>)}
          <div className="productContainer2">
                    {similarProducts?.map((p) => (
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
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails