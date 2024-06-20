import React from "react";
import Header from "./Header";

const Home = (props) => {
  const gallery = props.galleryImage;

  return (
    <>
    <Header />
      <section>
        <div className="container-fluid">
          <div className="row bg-black">
            {gallery.map((item) => {
              return (
                <>
                  <div className="col-lg-3 col-md-3">
                    <div className="gallery-images">
                      <img src={item.image} className="img-fluid" alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
