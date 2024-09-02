import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import AdminMenu from "../../components/layouts/AdminMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [prdLength, setPrdLength] = useState(0);
  const [ctgLength, setCtgLength] = useState(0);
  const [ordLength, setOrdLength] = useState(0);
  const [pendingPrd, setPendingPrd] = useState(0);
  const [canceledPrd, setCanceledPrd] = useState(0);
  const [deliveredPrd, setDeliveredPrd] = useState(0);
  const [shippedPrd, setShippedPrd] = useState(0);

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
      );
      setOrdLength(data.length);
      setOrder(data);

      for(let i=0;i<data.length;i++){
        if(data[i].status === "Processing"){
          setPendingPrd((pendingPrd) => pendingPrd++);
        }else if(data[i].status === "Cancel"){
          setCanceledPrd(canceledPrd++);
        }else if(data[i].status === "Shipped"){
          setShippedPrd(shippedPrd++);
        }else{
          setDeliveredPrd(deliveredPrd++);
        }
        // console.log(data[i].status);
        
      }
      // console.log(data.length);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [pendingPrd,canceledPrd,deliveredPrd,shippedPrd]);


  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      setLoading(false);
      setPrdLength(data.total)
      // console.log(data.total);
      
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
        setCtgLength(data.category.length);
        console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
      getAllProducts();
      getAllCategory();
  },[]);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3 mb-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Collection</h4>
                  <p className="fs-3">300</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Products</h4>
                  <p className="fs-3">{prdLength}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Categories</h4>
                  <p className="fs-3">{ctgLength}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Orders</h4>
                  <p className="fs-3">{ordLength}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Pending Orders</h4>
                  <p className="fs-3">{pendingPrd}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Shipped Orders</h4>
                  <p className="fs-3">{shippedPrd}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Delivered Orders</h4>
                  <p className="fs-3">{deliveredPrd}</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                <div className="border p-3 rounded text-center bg-success-subtle text-success-emphasis">
                  <h4 className="text-primary-emphasis">Total Canceled Orders</h4>
                  <p className="fs-3">{canceledPrd}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
