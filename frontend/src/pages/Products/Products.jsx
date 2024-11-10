import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductCard from "./ProductCard";
import api from "../../utils/api";
import { Link, useParams } from "react-router-dom";

function Products() {

  const { catname } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/allproducts')
        const response2 = await api.get('/api/allcategory')
        setProducts(response.data.products)
        setCategory(response2.data.categories)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if (catname) {
      const filterData = products.filter((product) => product.category == catname)
      setFilteredProducts(filterData)
    } else {
      setFilteredProducts(products)
    }
  }, [catname, products])

  return (
    <>
      <Header />

      <div>
        {/* rts navigation bar area start */}
        <div className="rts-navigation-area-breadcrumb">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="navigator-breadcrumb-wrapper">
                  <Link to={'/'}>Home</Link>
                  <i className="fa-regular fa-chevron-right" />
                  <a className="current" >
                    {catname == undefined ? "All products" : catname}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rts navigation bar area end */}
        <div className="section-seperator">
          <div className="container">
            <hr className="section-seperator" />
          </div>
        </div>
        {/* shop[ grid sidebar wrapper */}
              <div className="col-xl-9 col-lg-12">
                <div className="filter-select-area">
                  <div className="top-filter">
                    <span>Showing 1–20 of {filteredProducts.length} results</span>
                    <div className="right-end">
                      <span>Sort: Short By Latest</span>
                      <div className="button-tab-area">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link single-button active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="home-tab-pane"
                              aria-selected="true"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                                <rect
                                  x="0.5"
                                  y="9.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                                <rect
                                  x="9.5"
                                  y="0.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                                <rect
                                  x="9.5"
                                  y="9.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3B28"
                                />
                              </svg>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link single-button"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-tab-pane"
                              type="button"
                              role="tab"
                              aria-controls="profile-tab-pane"
                              aria-selected="false"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.5"
                                  y="0.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3C28"
                                />
                                <rect
                                  x="0.5"
                                  y="9.5"
                                  width={6}
                                  height={6}
                                  rx="1.5"
                                  stroke="#2C3C28"
                                />
                                <rect
                                  x={9}
                                  y={3}
                                  width={7}
                                  height={1}
                                  fill="#2C3C28"
                                />
                                <rect
                                  x={9}
                                  y={12}
                                  width={7}
                                  height={1}
                                  fill="#2C3C28"
                                />
                              </svg>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="nice-select-area-wrapper-and-button">
                    <div className="nice-select-wrapper-1">
                      <div className="single-select">
                        <select>
                          <option data-display="All Categories">
                            All Categories
                          </option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                      <div className="single-select">
                        <select>
                          <option data-display="All Brands">All Brands</option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                      <div className="single-select">
                        <select>
                          <option data-display="All Size">All Size </option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                      <div className="single-select">
                        <select>
                          <option data-display="All Weight">All Weight</option>
                          <option value={1}>Some option</option>
                          <option value={2}>Another option</option>
                          <option value={3} disabled>
                            A disabled option
                          </option>
                          <option value={4}>Potato</option>
                        </select>
                      </div>
                    </div>
                    <div className="button-area">
                      <button className="rts-btn">Filter</button>
                      <button className="rts-btn">Reset Filter</button>
                    </div>
                  </div>
                </div>
                <div className="tab-content" id="myTabContent">
                  <div className="row g-4 mt-4">
                    {
                      filteredProducts.map((product, index) => (
                        <ProductCard key={index} product={product} />
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
        
    
        {/* shop[ grid sidebar wrapper end */}
  

      <Footer />
    </>
  );
}

export default Products;
