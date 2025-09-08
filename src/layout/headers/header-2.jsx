import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";

const HeaderTwo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="p-relative">
        <div
          className="tp-header-area header-area-space p-relative pt-20 pb-50 d-none d-xl-block"
          style={{ backgroundImage: `url(/assets/img/bg/header-bg.jpg)` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="logo ">
                  <Link href="/">
                    <img src="/assets/img/avya/avyamain1.png" alt="logo"    loading="lazy"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-9">
                <div className="tp-contact-wapper d-flex justify-content-end">
                  <div className="tp-header-contact d-none d-xl-block pr-40">
                    <div className="tp-header-contact-icon d-flex align-items-center">
                      <div>
                        <a href="#">
                          <i className="fas fa-phone"></i>
                        </a>
                      </div>
                      <div className="tp-header-icon-info">
                        <label>Make a call</label>
                        <a href="tel:9802855271">9802855271 / 061-590648</a>
                      </div>
                    </div>
                  </div>
                  <div className="tp-header-contact d-none d-xl-block">
                    <div className="tp-header-contact-icon d-flex align-items-center">
                      <div>
                        <a href="#">
                          <i className="fal fa-envelope-open"></i>
                        </a>
                      </div>
                      <div className="tp-header-icon-info">
                        <label>Email address</label>
                        <a href="mailto:info@avya.club">info@avya.club</a>
                      </div>
                    </div>
                  </div>
                  <div className="tp-header-right ml-30">
                    <Link
                      href="/register"
                      className="tp-btn-simelar ml-20 d-none d-md-block"
                    >
                      Join Us Today
                    </Link>
                    <a
                      href="#"
                      className="tp-menu-toggle tp-header-icon2 ml-20 d-xl-none"
                    >
                      <i className="far fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-header-menu-area d-none d-xl-block">
          <div className="container">
            <div className="header-inner white-bg">
              <div className="row g-0 align-items-center">
                <div className="col-xl-12">
                  <div className="tp-main-menu-2">
                    <nav id="mobile-menu">
                      <NavMenu />
                    </nav>
                  </div>
                </div>
                {/* <div className="col-xl-3  d-xl-block">
                                <div className="tp-search-icon">
                                    <div className="tp-search-wrapper d-flex align-items-center justify-content-end">
                                     <form onSubmit={(e) => e.preventDefault()}>
                                        <i className="fal fa-search"></i>
                                        <input type="text" placeholder="search here..." />
                                     </form>
                                    </div>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          className="tp-header-2-mobile-area d-block d-xl-none"
          style={{ backgroundImage: `url(/assets/img/bg/header-bg.jpg)` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/avya/avya3.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="tp-header-right ml-30">
                  <a
                    href="#"
                    className="tp-btn-simelar ml-20 d-none d-md-block"
                  >
                    Join Us Today
                  </a>
                  <a
                    href="#"
                    onClick={() => setIsOpen(true)}
                    className="tp-menu-toggle tp-header-icon2 ml-20 d-xl-none"
                  >
                    <i className="far fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HeaderTwo;
