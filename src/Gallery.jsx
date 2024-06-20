import React from 'react'

const Gallery = (props) => {
  const gallery1 = props.galleryImage1;
  return (
    <>
       <section className='pt-5'>
        <div className="container-fluid pt-5">
          <div className="row bg-black">
            {gallery1.map((item) => {
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
  )
}

export default Gallery
