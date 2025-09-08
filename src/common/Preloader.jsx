import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="preloader">
        <div className="preloader-content">
          {/* Branding with Logo and Supporting Text */}
          <div className="preloader-brand">
            <img
              src="/assets/img/avya/avya.png"
              alt="Avya Club Logo"
              className="preloader-logo"
            />
            <small className="preloader-supporting-text">
              <div>Under the management of</div>
              <div>Vyayam Fitness Pvt. Ltd.</div>
            </small>
          </div>
          {/* Spinner */}
          <div
            className="spinner-border preloader-spinner"
            role="status"
            style={{ borderColor: "#3DBBAD", borderRightColor: "transparent" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #ffffff; /* White background */
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .preloader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .preloader-brand {
          animation: fadeIn 1s ease-in-out;
        }

        .preloader-logo {
          max-width: 150px; /* Adjust based on your logo size */
          height: auto;
        }

        .preloader-supporting-text {
          color: #333333; /* Dark color for contrast on white background */
          font-size: 0.9rem;
          font-weight: 400;
          margin-top: 10px;
          line-height: 1.1;
          display: block;
        }

        .preloader-spinner {
          width: 4rem;
          height: 4rem;
          border-width: 0.4rem;
          animation: spin 1s linear infinite, pulse 1.5s ease-in-out infinite;
        }

        /* Fade-in animation for branding */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Pulse animation for spinner */
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(61, 187, 173, 0.7); /* #3DBBAD */
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 20px 10px rgba(61, 187, 173, 0.3);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(61, 187, 173, 0.7);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .preloader-logo {
            max-width: 120px;
          }

          .preloader-supporting-text {
            font-size: 0.8rem;
          }

          .preloader-spinner {
            width: 3rem;
            height: 3rem;
            border-width: 0.3rem;
          }
        }
      `}</style>
    </>
  );
};

export default Preloader;
