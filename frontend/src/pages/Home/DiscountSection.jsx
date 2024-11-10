import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import AddtoCart from "../../components/AddtoCart";

function DiscountSection() {

  const [products,setProducts] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(()=>{
    const fetchProducts = async()=>{
      try {
        const response = await api.get("/api/allproducts")
      const filterProduct = response.data.products.filter((product)=> product.type == "productWithDiscount")
      setProducts(filterProduct)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  },[])

  return (
    <>
      {/* rts grocery feature area start */}
      {/* rts grocery feature area end */}
    </>
  );
}

export default DiscountSection;
