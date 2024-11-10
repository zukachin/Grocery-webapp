import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CatCard from "../../components/CatCard";
import FeaturedSection from "./FeaturedSection";
import DiscountSection from "./DiscountSection";
import WeeklySection from "./WeeklySection";
import WeekendSection from "./WeekendSection";
import TopTrendingSection from "./TopTrendingSection";

import Banner from "../../components/Banner";
import Category from "./Category";

function Home() {
  const categoryItems = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Header />

      {/* Banner area */}
      <div className="background-light-gray-color rts-section-gap bg_light-1 pt_sm--20">
        <Banner />
        {/* Category area */}
        <Category />
      </div>
        

      {/* Other sections */}
      <FeaturedSection />
      <DiscountSection />
      <WeeklySection />
      <WeekendSection />
      <TopTrendingSection />

      <Footer />
    </>
  );
}

export default Home;
