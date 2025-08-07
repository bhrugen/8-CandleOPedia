function Carousel() {
  return (
    <>
      {/* Add floating animation styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
        `}
      </style>

      <div
        id="heroCarousel"
        className="carousel slide mb-4"
        data-bs-ride="carousel"
        data-bs-interval="6000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* First Slide - Elegant Dark Theme */}
          <div className="carousel-item active">
            <div
              className="py-5 d-flex align-items-center"
              style={{
                minHeight: "600px",
                height: "600px",
                background:
                  "linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #2c3e50 50%, #1a252f 75%, #0f171d 100%)",
                position: "relative",
              }}
            >
              {/* Animated floating elements */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "10%",
                  width: "100px",
                  height: "100px",
                  background: "rgba(255, 193, 7, 0.1)",
                  borderRadius: "50%",
                  filter: "blur(20px)",
                  animation: "float 6s ease-in-out infinite",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "20%",
                  left: "15%",
                  width: "60px",
                  height: "60px",
                  background: "rgba(220, 53, 69, 0.1)",
                  borderRadius: "50%",
                  filter: "blur(15px)",
                  animation: "float 4s ease-in-out infinite reverse",
                }}
              ></div>

              {/* Subtle overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.1)",
                  pointerEvents: "none",
                }}
              ></div>

              <div className="container h-100">
                <div className="row align-items-center w-100 h-100">
                  <div className="col-lg-7">
                    <div className="mb-4">
                      <span className="badge bg-gradient bg-warning text-dark fs-6 px-3 py-2 rounded-pill">
                        <i className="bi bi-fire me-2"></i>New Arrivals
                      </span>
                    </div>
                    <h1 className="display-2 fw-bold mb-4 text-white">
                      Illuminate Your
                      <span className="d-block text-warning fst-italic">
                        Moments
                      </span>
                    </h1>
                    <p className="lead mb-4 text-white-50 fs-4">
                      Transform your space with our premium collection of
                      artisanal candles.
                      <span className="text-warning fw-semibold">
                        Crafted with passion
                      </span>
                      , designed for elegance.
                    </p>

                    {/* Feature highlights */}
                    <div className="row mb-4">
                      <div className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <small className="text-white-50">
                            100% Natural Wax
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          <small className="text-white-50">
                            Long Lasting Fragrance
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-3 flex-wrap">
                      <a
                        href="/cart"
                        className="btn btn-warning btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
                        style={{
                          background:
                            "linear-gradient(45deg, #ffc107, #ffb300)",
                          border: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <i className="bi bi-basket me-2"></i>Shop Now
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-5 d-none d-lg-block text-center">
                    <div className="position-relative">
                      {/* Main feature card */}
                      <div
                        className="card bg-gradient shadow-lg border-0"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <div className="card-body p-5 text-center">
                          <div className="mb-4">
                            <i className="bi bi-gem display-1 text-warning"></i>
                          </div>
                          <h3 className="text-white mb-3">Premium Quality</h3>
                          <p className="text-white-50 mb-4">
                            Each candle is carefully hand-poured with the finest
                            ingredients
                          </p>
                          <div className="row text-center">
                            <div className="col-6">
                              <div className="border-end border-light border-opacity-25">
                                <h4 className="text-warning mb-0">50+</h4>
                                <small className="text-white-50">Scents</small>
                              </div>
                            </div>
                            <div className="col-6">
                              <h4 className="text-warning mb-0">24h</h4>
                              <small className="text-white-50">Burn Time</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide - Cool Blue Gradient */}
          <div className="carousel-item">
            <div
              className="py-5 d-flex align-items-center"
              style={{
                minHeight: "600px",
                height: "600px",
                background:
                  "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)",
                position: "relative",
              }}
            >
              {/* Animated floating elements */}
              <div
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "10%",
                  width: "80px",
                  height: "80px",
                  background: "rgba(13, 202, 240, 0.15)",
                  borderRadius: "50%",
                  filter: "blur(15px)",
                  animation: "pulse 4s ease-in-out infinite",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "10%",
                  right: "20%",
                  width: "120px",
                  height: "120px",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "50%",
                  filter: "blur(25px)",
                  animation: "float 5s ease-in-out infinite",
                }}
              ></div>

              {/* Overlay for better text readability */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.2)",
                  pointerEvents: "none",
                }}
              ></div>

              <div className="container h-100">
                <div className="row align-items-center w-100 h-100">
                  <div className="col-lg-7">
                    <div className="mb-4">
                      <span className="badge bg-info text-white fs-6 px-3 py-2 rounded-pill">
                        <i className="bi bi-shield-check me-2"></i>Quality
                        Assured
                      </span>
                    </div>
                    <h1 className="display-2 fw-bold mb-4 text-white">
                      Premium
                      <span className="d-block text-info fst-italic">
                        Quality
                      </span>
                    </h1>
                    <p className="lead mb-4 text-white fs-4">
                      Every candle is crafted with the finest materials and
                      attention to detail.
                      <span className="text-info fw-semibold">
                        Experience the difference
                      </span>{" "}
                      in every flame.
                    </p>

                    {/* Feature highlights */}
                    <div className="row mb-4">
                      <div className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-award-fill text-info me-2"></i>
                          <small className="text-white-50">
                            Award Winning Design
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-star-fill text-info me-2"></i>
                          <small className="text-white-50">
                            5-Star Rated Products
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-3 flex-wrap">
                      <a
                        href="/cart"
                        className="btn btn-info btn-lg rounded-pill px-5 py-3 fw-bold shadow-lg"
                        style={{
                          background:
                            "linear-gradient(45deg, #0dcaf0, #0aa2c0)",
                          border: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <i className="bi bi-star me-2"></i>Explore Quality
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-5 d-none d-lg-block text-center">
                    <div className="position-relative">
                      {/* Main feature card */}
                      <div
                        className="card bg-gradient shadow-lg border-0"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <div className="card-body p-5 text-center">
                          <div className="mb-4">
                            <i className="bi bi-award display-1 text-info"></i>
                          </div>
                          <h3 className="text-white mb-3">Award Winning</h3>
                          <p className="text-white-50 mb-4">
                            Recognized for excellence in craftsmanship and
                            design
                          </p>
                          <div className="row text-center">
                            <div className="col-6">
                              <div className="border-end border-light border-opacity-25">
                                <h4 className="text-info mb-0">98%</h4>
                                <small className="text-white-50">
                                  Satisfaction
                                </small>
                              </div>
                            </div>
                            <div className="col-6">
                              <h4 className="text-info mb-0">5★</h4>
                              <small className="text-white-50">Rating</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third Slide - Sunset Gradient */}
          <div className="carousel-item">
            <div
              className="py-5 d-flex align-items-center"
              style={{
                minHeight: "600px",
                height: "600px",
                background:
                  "linear-gradient(135deg, #fc466b 0%, #3f5efb 50%, #8e2de2 100%)",
                position: "relative",
              }}
            >
              {/* Animated floating elements */}
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "15%",
                  width: "90px",
                  height: "90px",
                  background: "rgba(255, 193, 7, 0.2)",
                  borderRadius: "50%",
                  filter: "blur(18px)",
                  animation: "float 7s ease-in-out infinite",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "10%",
                  width: "70px",
                  height: "70px",
                  background: "rgba(255, 255, 255, 0.15)",
                  borderRadius: "50%",
                  filter: "blur(12px)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              ></div>

              {/* Overlay for better text readability */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0,0,0,0.3)",
                  pointerEvents: "none",
                }}
              ></div>

              <div className="container h-100">
                <div className="row align-items-center w-100 h-100">
                  <div className="col-lg-7">
                    <div className="mb-4">
                      <span className="badge bg-light text-dark fs-6 px-3 py-2 rounded-pill">
                        <i className="bi bi-heart me-2"></i>Handcrafted
                      </span>
                    </div>
                    <h1 className="display-2 fw-bold mb-4 text-white">
                      Artisan
                      <span className="d-block text-warning fst-italic">
                        Collection
                      </span>
                    </h1>
                    <p className="lead mb-4 text-white fs-4">
                      Discover our handcrafted candles made with love and
                      passion.
                      <span className="text-warning fw-semibold">
                        Each piece tells a unique story
                      </span>{" "}
                      of craftsmanship.
                    </p>

                    {/* Feature highlights */}
                    <div className="row mb-4">
                      <div className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-brush-fill text-warning me-2"></i>
                          <small className="text-white-50">
                            Hand-Poured Design
                          </small>
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-heart-fill text-warning me-2"></i>
                          <small className="text-white-50">
                            Made with Love
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex gap-3 flex-wrap">
                      <a
                        href="/cart"
                        className="btn btn-light btn-lg rounded-pill px-5 py-3 text-dark fw-bold shadow-lg"
                        style={{
                          background:
                            "linear-gradient(45deg, #ffffff, #f8f9fa)",
                          border: "none",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <i className="bi bi-palette me-2"></i>Browse Collection
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-5 d-none d-lg-block text-center">
                    <div className="position-relative">
                      {/* Main feature card */}
                      <div
                        className="card bg-gradient shadow-lg border-0"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        <div className="card-body p-5 text-center">
                          <div className="mb-4">
                            <i className="bi bi-brush display-1 text-warning"></i>
                          </div>
                          <h3 className="text-white mb-3">Handmade</h3>
                          <p className="text-white-50 mb-4">
                            Carefully crafted by skilled artisans with attention
                            to detail
                          </p>
                          <div className="row text-center">
                            <div className="col-6">
                              <div className="border-end border-light border-opacity-25">
                                <h4 className="text-warning mb-0">100+</h4>
                                <small className="text-white-50">Designs</small>
                              </div>
                            </div>
                            <div className="col-6">
                              <h4 className="text-warning mb-0">♥</h4>
                              <small className="text-white-50">
                                Made with Love
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
