import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const Notice = () => {
  const [noticeImg, setNoticeImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchNotice = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASEURL}/api/notice`);
        const data = response.data.docs || [];
        const activeNotice = data.find((item) => item.isActive);
        if (activeNotice && activeNotice.img?.url) {
          setNoticeImg(`${BASEURL}${activeNotice.img.url}`);
          setShow(true);
        }
      } catch (err) {
        console.error("Error fetching notice:", err);
        setError("Failed to load notice. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotice();
  }, []);

  if (isLoading || !noticeImg || error) return null;

  return (
    <>
      {/* Modal */}
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="noticeModalLabel"
        aria-hidden={!show}
        style={show ? { backgroundColor: "rgba(0, 0, 0, 0.6)" } : {}}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content" style={styles.modalContent}>
            <div className="modal-header border-0 p-2 position-relative">
              <button
                type="button"
                className="btn-close "
                onClick={() => setShow(false)}
                style={styles.closeButton}
                aria-label="Close"
              >
                {" "}
                &times;{" "}
              </button>
            </div>
            <div className="modal-body p-1">
              <Link href={"/register"}>
                <img
                  src={noticeImg}
                  alt="Notice"
                  className="img-fluid rounded"
                  style={styles.image}
                    loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .btn-close {
          background-size: 1.5em;
          opacity: 0.8;
          transition: opacity 0.2s;
        }
      `}</style>
    </>
  );
};

// Inline styles for modal customization
const styles = {
  modalContent: {
    backgroundColor: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 10,
    color: "#fff", // makes the "X" white
    background: "red", // red circular background
    border: "none",
    borderRadius: "50%", // makes it circular
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "auto",
    maxHeight: "80vh", // Limit height to avoid overflow on small screens
  },
};

export default Notice;
