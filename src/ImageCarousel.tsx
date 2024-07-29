// src/ImageCarousel.tsx

import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel: React.FC = () => {
  return (
    <Carousel>
      {/* Replace with actual image URLs */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cleanedwithasmile.com/wp-content/uploads/2021/11/Cleaning-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Servicii de Curățenie</h3>
          <p>Let us help your employees work in a clean and motivating space.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:1200/1*1YfxwooklostESNInQvIXQ.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Spălare Profesională Geamuri </h3>
          <p>Your home deserves the best care.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.detailingspalatorie.ro/images/tinymce/curatare_tapiterii_tecuci_1200.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Curățare Tapițerie </h3>
          <p>Your home deserves the best care.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.solstra.com.au/wp-content/uploads/elementor/thumbs/DSC4441-1-scaled-qdxc65fel25llt62hcedcj6ehnwghp1ivg4wp2prwo.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Curățare Panouri Solare</h3>
          <p>Cu Apă Demineralizată 100% Pură</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more slides as needed */}
    </Carousel>
  );
};

export default ImageCarousel;