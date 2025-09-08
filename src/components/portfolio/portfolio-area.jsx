import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ImagePopup from "@/src/modals/ImagePopup";
const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const PortfolioArea = () => {
  const [allItems, setAllItems] = useState([]); // Store the full dataset
  const [items, setItems] = useState([]); // Store filtered items for display
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASEURL}/api/photos?limit=1000`);
        if (!response.ok) {
          throw new Error("Failed to fetch portfolio data");
        }
        const data = await response.json();
        const portfolioItems = data.docs || [];

        // Extract unique categories
        const uniqueCategories = [
          "All",
          ...new Set(portfolioItems.map((item) => item.category.toUpperCase())),
        ];
        setCategories(uniqueCategories);

        // Remove duplicate items based on photo URL
        const uniqueItems = portfolioItems.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.photo.url === item.photo.url)
        );
        setAllItems(uniqueItems); // Store full dataset
        setItems(uniqueItems); // Set initial display items

      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setError("Failed to load portfolio items. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPortfolioData();
  }, []);

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      setItems(allItems); // Reset to full dataset
    } else {
      const filteredItems = allItems.filter(
        (item) => item.category.toUpperCase() === cateItem
      );
      setItems(filteredItems);
    }
  };

  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const img = items.map((item) => `${BASEURL}${item.photo.url}`);

  return (
    <>
      <div className="tp-portfolio-area pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="tp-port-button masonary-menu">
                {categories.map((cate, i) => (
                  <button
                    onClick={() => filterItems(cate)}
                    key={i}
                    className={`${cate === activeCategory ? "active" : ""}`}
                  >
                    <span>{cate}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          ) : (
            <div className="row grid mixitup-active pt-40">
              <motion.div layout className="row grid mixitup-active pt-40">
                {items.map((item, i) => (
                  <motion.div
                    key={item.id || i}
                    layout
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-xl-4 col-lg-6 col-md-6 grid-item cat3 cat5"
                  >
                    <div className="tp-port-item mb-30">
                      <div className="tp-case-img">
                        <div className="fix">
                          <img
                            src={`${BASEURL}${item.photo.url}`}
                            alt={item.photo.alt || "Portfolio Image"}
                            className="img-fluid w-100"
                              loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="tp-port-content">
                        <h3 className="port-title">
                          <Link href="/">Portfolio Item</Link>
                        </h3>
                      </div>
                      <div className="tp-port-icon">
                        <button
                          className="popup-image"
                          onClick={() => handleImagePopup(i)}
                        >
                          <i className="far fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
          {/* <div className="portfolio-button text-center mt-10">
            <Link className="tp-btn" href="/">
              Load More <i className="fal fa-plus"></i>
            </Link>
          </div> */}
        </div>
      </div>

      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
};

export default PortfolioArea;
