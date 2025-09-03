

import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;


const TeamArea = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${BASEURL}/api/trainers`);
        setTeamMembers(response.data.docs || []);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <>
      <div className="tp-team-area pt-115 pb-80">
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
          ) : teamMembers.length === 0 ? (
            <div className="text-center py-5">
              <p>No team members available at the moment.</p>
            </div>
          ) : (
            <div className="row">
              {teamMembers.map((item, i) => (
                <div key={item.id || i} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tp-team-item mb-30">
                    <div className="tp-team-img p-relative">
                      <div className="fix">
                        <img
                          src={`${BASEURL}${item.img?.url}`}
                          alt={item.img?.alt || item.name || "Team Member"}
                        />
                      </div>
                      <div className="tp-team-overlay">
                        <div className="team-overlay-icon">
                          <Link className="team-icon-main" href="/team-details">
                            <i className="fal fa-plus"></i>
                          </Link>
                          <div className="team-icon-bottom">
                            {item.socialLinks?.instagram && (
                              <a
                                href={item.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            )}
                            {item.socialLinks?.google && (
                              <a
                                href={item.socialLinks.google}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-google"></i>
                              </a>
                            )}
                            {item.socialLinks?.facebook && (
                              <a
                                href={item.socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-team-designation text-center pt-35">
                      <h5 className="client-name">
                        {item.name || "Team Member"}
                      </h5>

                      {item.Profession || "Unknown Position"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TeamArea;
