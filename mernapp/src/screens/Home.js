import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/Card";
export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");
  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    console.log(response[0], response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <form className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </form>
            </div>
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900x700/?burger&pizza"
                className="d-block w-100"
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?cake"
                className="d-block w-100"
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900x700/?ravioli"
                className="d-block w-100"
                alt="..."
                style={{
                  filter: "brightness(30%)",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className=" container  mx-2">
        {foodCat &&
          foodCat.map((data) => {
            return (
              <div className="row mb-3">
                <div className="mx-2 fs-3" key={data._id}>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem &&
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((filterItems) => {
                      return (
                        <div
                          key={filterItems._id}
                          className="col-12 cold-md-6 col-lg-3"
                        >
                          {" "}
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          />{" "}
                        </div>
                      );
                    })}
              </div>
            );
          })}

        {/* <div className="m-3 col-md-4">
        </div> */}
        {/* <div className="m-3 col-md-4">
          <Card />
        </div>
        <div className="m-3 col-md-4">
          <Card />
        </div> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
