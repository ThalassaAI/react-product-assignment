import React from "react";

function CarouselImage({ id, images = [], title }) {
  const carouselId = `carousel-${id}`;

  return (
    <div id={carouselId} className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`${title} - Image ${index + 1}`}
              style={{ objectFit: "cover", height: "355px" }}
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark bg-opacity-50 rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark bg-opacity-50 rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

export default CarouselImage;
