import React, { useState, useEffect } from "react";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const FaqArea = () => {
  const [faqData, setFaqData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${BASEURL}/api/faqs`);
        if (!response.ok) {
          throw new Error("Failed to fetch FAQ data");
        }
        const data = await response.json();
        // Map API data to expected format
        const formattedData = data.docs.map((item, index) => ({
          question: item.question,
          answer: item.answer,
          accordion_id: item.id, // Use API's id field
          show: index === 0 || index === 10, // Show first item in each accordion
        }));
        setFaqData(formattedData);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
        setError("Failed to load FAQs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaqData();
  }, []);

  return (
    <>
      <div className="faq-page-area">
        <div className="container">
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
          ) : faqData.length === 0 ? (
            <div className="text-center py-5">
              <p>No FAQs available at the moment.</p>
            </div>
          ) : (
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="tp-custom-accordio-2">
                  <div className="accordion" id="accordionExample">
                    {faqData.slice(0, 10).map((item, i) => (
                      <div key={i} className="accordion-items">
                        <h2
                          className="accordion-header"
                          id={`heading${item.accordion_id}`}
                        >
                          <button
                            className={`accordion-buttons ${
                              item.show ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.accordion_id}`}
                            aria-expanded={item.show ? "true" : "false"}
                            aria-controls={`collapse${item.accordion_id}`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.accordion_id}`}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={`heading${item.accordion_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {item.answer}
                            <div className="accordio-icon">
                              <i className="flaticon-bubble-chat"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="tp-custom-accordio-2">
                  <div className="accordion" id="accordionExample2">
                    {faqData.slice(5, 10).map((item, i) => (
                      <div key={i} className="accordion-items">
                        <h2
                          className="accordion-header"
                          id={`heading${item.accordion_id}`}
                        >
                          <button
                            className={`accordion-buttons ${
                              item.show ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.accordion_id}`}
                            aria-expanded={item.show ? "true" : "false"}
                            aria-controls={`collapse${item.accordion_id}`}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.accordion_id}`}
                          className={`accordion-collapse collapse ${
                            item.show ? "show" : ""
                          }`}
                          aria-labelledby={`heading${item.accordion_id}`}
                          data-bs-parent="#accordionExample2"
                        >
                          <div className="accordion-body">
                            {item.answer}
                            <div className="accordio-icon">
                              <i className="flaticon-bubble-chat"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FaqArea;
