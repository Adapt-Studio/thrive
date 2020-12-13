import React, { Component } from "react"
import Slider from "react-slick"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="/images/food.png" alt="Food Slideshow Image" />
          </div>
          <div>
            <img src="/images/food.png" alt="Food Slideshow Image" />
          </div>
          <div>
            <img src="/images/food.png" alt="Food Slideshow Image" />
          </div>
          <div>
            <img src="/images/food.png" alt="Food Slideshow Image" />
          </div>
          <div>
            <img src="/images/food.png" alt="Food Slideshow Image" />
          </div>
        </Slider>
      </div>
    )
  }
}
