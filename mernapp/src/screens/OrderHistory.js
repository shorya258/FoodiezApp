import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OrderHistory() {
  const [orderData, setOrderData] = useState("");
  const fetchMyOrder = async () => {
    console.log(localStorage.getItem("userEmail"));
    await fetch("http://localhost:5000/api/orderHistory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("userEmail"),
      }),
    }).then(async (res) => {
      let response = await res.json();
      await setOrderData(response);
    });
  };
  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <div className="row"></div>
        {orderData &&
          Array(orderData).map((data) => {
            return data.orderData ? (
              data.orderData.order_data
                .slice(0)
                .reverse()
                .map((item) => {
                  return item.map((arrayData) => {
                    return (
                      <div>
                        {arrayData.Order_date ? (
                          <div className="m-auto mt-5">
                            {(data = arrayData.Order_date)}
                            <hr />
                          </div>
                        ) : (
                          <div className="col-12 col-md-6 col-lg-3">
                            <div
                              className="card mt-2"
                              style={{ width: "18rem", maxHeight: "500px" }}
                            >
                              {/* <img
                                src={arrayData.img}
                                className="card-img-top"
                                alt="..."
                                style={{ height: "150px", objectFit: "fill" }}
                              /> */}
                              <div className="card-body m-2">
                                <h5 className="card-title">{arrayData.name}</h5>
                                <div
                                  className="container w-100 p-0"
                                  style={{ maxHeight: "100px" }}
                                >
                                  <span className="m-1">{arrayData.qty}</span>
                                  <span className="m-1">{arrayData.size}</span>
                                  <span className="m-1">{data}</span>
                                  <hr />
                                  <div className="d-inline ms-2 h-100 w-20 fs-5">
                                    Rs. {arrayData.price}.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  });
                })
            ) : (
              <div className="container">
                <h2>Your previous orders will appear here!</h2>
              </div>
            );
          })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
