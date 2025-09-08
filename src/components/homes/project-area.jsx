import ImagePopup from "@/src/modals/ImagePopup";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const setting = {
  dots: false,
  centerMode: true,
  centerPadding: "500px",
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "350px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "150px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 778,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
      },
    },
  ],
};

const ProjectArea = () => {
  const sliderRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASEURL}/api/photos?limit=1000`);
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data = await response.json();
        const photoItems = data.docs || [];
        // Remove duplicates based on photo URL
        const uniquePhotos = photoItems.filter(
          (item, index, self) =>
            index === self.findIndex((t) => t.photo.url === item.photo.url)
        );
        // Sort descending by createdAt (latest first)
        uniquePhotos.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        // Take only the first 50 items
        const latestPhotos = uniquePhotos.slice(0, 20);

        setPhotos(latestPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
        setError("Failed to load photos. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, []); // Empty dependency array to prevent continuous fetching

  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const images = photos.map((item) => `${BASEURL}${item.photo.url}`);

  return (
    <>
      <div className="project-area">
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
          <div className="tp-project-active tp-team-space">
            <Slider {...setting} ref={sliderRef}>
              {photos.map((item, i) => (
                <div key={item.id || i} className="project-item slick-center">
                  <img
                    src={`${BASEURL}${item.photo.url}`}
                    alt={item.photo.alt || "Project Image"}
                  />
                  <button
                    onClick={() => handleImagePopup(i)}
                    style={{ cursor: "pointer" }}
                    className="popup-image"
                  >
                    <i className="fal fa-plus"></i>
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      {isOpen && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
};

export default ProjectArea;
