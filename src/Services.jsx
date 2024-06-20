// import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Rating, Typography } from "@mui/material";

const Services = () => {

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
        <div className="about_heading d-flex align-items-center vh-100">
          <div className="container bg-black text-center" id="about">
            <div className="about_header text-white">
              <h2>Services</h2>
            </div>
            <div className="heading-content">
              <p>
              Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
              </p>
            </div>
            <div className="heading-btn">
              <button className="hire-btn">AVAILABLE FOR HIRE</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
<div className="container">
<div className="testimonial-header text-center">
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
  )
}

export default Services
