import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Rating, Typography } from "@mui/material";
// import { useState } from "react";

const About = () => {
  // const [value, setValue] = useState(0);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <>
      <section>
        <div className="about_heading d-flex align-items-center justify-content-center vh-100">
          <div className="container bg-black text-center" id="about">
            <div className="row">
              <div className="col-lg-6 w-auto">
            <div className="about_header text-white">
              <h2>About</h2>
            </div>
            <div className="heading-content">
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </div>
            <div className="heading-btn">
              <button className="hire-btn">AVAILABLE FOR HIRE</button>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>

      <section className="about-me">
        <div className="container">
        <div className="card mb-3 bg-transparent border-0">
          <div className="row justify-content-evenly">
            <div className="col-lg-4 about-me-img">
              <img
                src="src/assets/images/cameragirl.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-lg-5">
              <div className="card-body p-0">
                <h2 className="card-title ">
                  Professional Photographer from New York
                </h2>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="row g-0 gy-3 text-white my-3 photographer">
                <div className="col-lg-6">
                  <ul className="p-4 p-lg-0 py-0">
                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>Birthday:</strong> <span>1 May 1995</span>
                    </li>

                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li>

                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>Phone:</strong> <span>+123 456 7890</span>
                    </li>
                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>City:</strong> <span>New York, USA</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="p-4 p-lg-0 py-0">
                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>Age:</strong> <span>30</span>
                    </li>
                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>PhEmailone:</strong>{" "}
                      <span>email@example.com</span>
                    </li>
                    <li className="mb-3">
                      <i className="fa-solid fa-greater-than"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <p>
                    Officiis eligendi itaque labore et dolorum mollitia officiis
                    optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                    accusantium dolor incidunt officia tempore. Et eius omnis.
                    Cupiditate ut dicta maxime officiis quidem quia. Sed et
                    consectetur qui quia repellendus itaque neque. Aliquid amet
                    quidem ut quaerat cupiditate. Ab et eum qui repellendus
                    omnis culpa magni laudantium dolores.
                  </p>
                  <p>
                    Recusandae est praesentium consequatur eos voluptatem. Vitae
                    dolores aliquam itaque odio nihil. Neque ut neque ut quae
                    voluptas. Maxime corporis aut ut ipsum consequatur.
                    Repudiandae sunt sequi minus qui et. Doloribus molestiae
                    officiis. Soluta eligendi fugiat omnis enim. Numquam alias
                    sint possimus eveniet ad. Ratione in earum eum magni totam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonial-header">
          <div className="container">
          <h2>TESTIMONIALS</h2>
          <p>What they are saying</p>
        </div>
        <div className="testimonial_review">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <div className="card">
                <Typography component="legend"></Typography>
                <Rating
                  name="half-rating" defaultValue={5.0} precision={0.5}
                />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-white">
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.

                  </p>
                  <div className="owl_carousel_img">
                  <img src="src/assets/images/avatar1.jpg" className="card-img" alt="" />
                  </div>
                  <h3 className="text-white">John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <Typography component="legend"></Typography>
                <Rating
                  name="half-rating" defaultValue={5.0} precision={0.5}
                />{" "}
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-white">
                                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.

                  </p>
                  <div className="owl_carousel_img">
                  <img src="src/assets/images/avatar2.jpg" className="card-img" alt="" />

                  </div>
                  <h3 className="text-white">John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>{" "}
            </div>
            <div className="item">
              <div className="card">
                <Typography component="legend"></Typography>
                <Rating
                  name="half-rating" defaultValue={5.0} precision={0.5}
                />{" "}
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-white">
                                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.

                  </p>
                  <div className="owl_carousel_img">
                  <img src="src/assets/images/avatar3.jpg" className="card-img" alt="" />

                  </div>
                  <h3 className="text-white">John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>{" "}
            </div>
            <div className="item">
              <div className="card">
                <Typography component="legend"></Typography>
                <Rating
                  name="half-rating" defaultValue={5.0} precision={0.5}
                />{" "}
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-white">
                                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.

                  </p>
                  <div className="owl_carousel_img">
                  <img src="src/assets/images/avatar1.jpg" className="card-img" alt="" />

                  </div>
                  <h3 className="text-white">John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>{" "}
            </div>
            <div className="item">
              <div className="card">
                <Typography component="legend"></Typography>
                <Rating
                  name="half-rating" defaultValue={5.0} precision={0.5}
                />{" "}
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-white">
                                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.

                  </p>
                  <div className="owl_carousel_img">
                  <img src="src/assets/images/avatar2.jpg" className="card-img" alt="..." />

                  </div>
                  <h3 className="text-white">John Larson</h3>
                  <h4>Entrepreneur</h4>

                </div>
              </div>{" "}
            </div>
            <div className="item">
              <div className="card">
                <Typography component="legend"></Typography>
                <Rating
                  name="half-rating" defaultValue={5.0} precision={0.5}
                />{" "}
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text text-white">
                                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.

                  </p>
                  <div className="owl_carousel_img">
                  <img src="src/assets/images/avatar3.jpg" className="card-img" alt="" />

                  </div>
                  <h3 className="text-white">John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>{" "}
            </div>
          </OwlCarousel>
          ;
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
