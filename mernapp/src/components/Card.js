import React from "react";
import pic1 from "../assets/pic1.jpeg";
export const Card = () => {
  return (
    <div
      className="card my-2 mx-2"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img src={pic1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">some text</p>
        <div className="container w-100">
          <select className="m-2 h-100 bg-dark text-light rounded">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select className="m-2 h-100 bg-dark text-light rounded">
            <option value="half"> Half</option>
            <option value="full"> Full</option>
          </select>
        </div>
      </div>
    </div>
  );
};
