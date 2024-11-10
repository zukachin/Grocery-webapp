import React, { useEffect, useState } from "react";
import CatCard from "../../components/CatCard";
import FeaturedCard from "../../components/FeaturedCard";
import api from "../../utils/api";

function WeeklySection() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/allproducts')
        // console.log(response)
        const filterData = response.data.products.filter((product) => product.type == "weeklyBestSellingGroceries")
        setProducts(filterData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <>
      {/* best selling groceris */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content" id="myTabContent">
                {/* first tabs area start*/}
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row g-4">
                    {
                      products.map((product, index) => (
                        <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                          <FeaturedCard product={product} />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
  
      {/* best selling groceris end */}
    </>
  );
}

export default WeeklySection;
