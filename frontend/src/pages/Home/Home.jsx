import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = ({ page }) => {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (page === "menu") {
      setTimeout(() => {
        document
          .getElementById("explore-menu")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    if (page === "mobile-app") {
      setTimeout(() => {
        document
          .getElementById("app-download")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }

    if (page === "contact") {
      setTimeout(() => {
        document
          .getElementById("footer")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [page]);

  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />

      <FoodDisplay category={category} />

      <AppDownload />
    </div>
  );
};

export default Home;
