import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <img src="imagenes/inicio/puna2.jpg"  alt="" />
          </div>
          <div>
            <img src="imagenes/inicio/vicuñas.jpg"  alt="" />
          </div>
          <div>
            <img src="imagenes/inicio/puna2.jpg"  alt="" />
          </div>
          <div>
            <img src="imagenes/inicio/puna2.jpg"  alt="" />
          </div>
          <div>
            <img src="imagenes/inicio/puna2.jpg"  alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}