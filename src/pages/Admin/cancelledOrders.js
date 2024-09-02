// components/DeliveredOrders.js
import { useEffect, useState } from "react";
import AdminMenu from "../../components/layouts/AdminMenu";
import Layout from "../../components/layouts/Layout";
import { useAuth } from "../../context/auth";
import { Select } from "antd";
import axios from "axios";
import moment from "moment";

function CanceledOrders() {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);

  const getOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/all-orders`
      );
      setLoading(false);
      const canceledOrders = data.filter(order => order.status === "Cancel");
      setOrders(canceledOrders);
      console.log(canceledOrders);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/auth/order-status/${orderId}`,
        { status: value
         }
      );
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout>
      <div className='container-fluid m-3 p-3'>
        <div className='row'>
          <div className='col-md-3'>
            <AdminMenu />
          </div>
          <div className='col-md-9 text-center'>
            <h2>All Canceled Orders List</h2>
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
                  src="/images/spinner.gif"
                  alt="Loading..."
                />
              </div>
            ) : (
                <div className="col-md-11" style={{ marginTop: "30px" }}>
                {orders.length > 0 ? (
                  orders?.map((o, i) => (
                    <div className="border shadow" key={o._id}>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Status</th>
                            <th scope="col">Buyer</th>
                            <th scope="col">Order Date</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Items</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{i + 1}</td>
                            <td>
                              <Select
                                bordered={false}
                                onChange={(value) => handleChange(o._id, value)}
                                defaultValue={o?.status}
                              >
                                {status.map((s, i) => (
                                  <Option key={i} value={s}>
                                    {s}
                                  </Option>
                                ))}
                              </Select>
                            </td>
                            <td>{o?.buyer?.name}</td>
                            <td>{moment(o?.createdAt).fromNow()}</td>
                            <td>{o?.payment.success ? "Success" : "Failed"}</td>
                            <td>{o?.products?.length}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="container">
                        {o?.products?.map((p) => (
                          <div className="row mb-2 p-3 card flex-row" key={p._id}>
                            <div className="col-md-4">
                              <img
                                src={`${process.env.REACT_APP_API}/${p.photo1}`}
                                className="card-img-top"
                                alt={p.name}
                                width="100px"
                                height="100px"
                              />
                            </div>
                            <div className="col-md-8">
                              <p>{p.name}</p>
                              <p>{p.description.substring(0, 30)}</p>
                              <p>Price : Rs. {p.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div>There is not not Canceled orders</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CanceledOrders;
