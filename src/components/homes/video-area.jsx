import VideoPopup from "@/src/modals/video-popup";
import React, { useState } from "react";

const VideoArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      <div
        className="tp-support-area tp-support-area-2  p-relative"
        style={{ backgroundImage: `url(/assets/img/avya/club1.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10  m-auto">
              <div className="tpsupport__overlay-content text-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="popup-video mb-60"
                >
                  <i className="fas fa-play"></i>
                </button>
                <div className="tp-section-box tp-section-box-2 white-text p-relative mb-45 text-center">
                  <span className="tp-section-subtitle d-inline-block pre mb-10">
                    intro video
                  </span>
                  <h2 className="tp-section-title">
                    Explore AVYA CLUB 
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"JCCC1Wnk604"}
      />
    </>
  );
};

export default VideoArea;
