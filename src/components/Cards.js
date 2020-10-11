import React from "react";
import TestimonialCard from "./TestimonialCard";
import Colton from "../images/image-colton.jpg";
import Irene from "../images/image-irene.jpg";
import Anne from "../images/image-anne.jpg";

const userTestimonials = [
  '"We needed the same printed design as the one we had ordered the week prior. Not only did they find the original order, but we also received it in  time. Excellent!"',
  '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery"',
  '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone"'
]

const Cards = () => (
  <div className="cards__container">
    <TestimonialCard avatar={Colton} name="Colton Smith" testimonial={userTestimonials[0]} order="user-1" />
    <TestimonialCard avatar={Irene} name="Irene Roberts" testimonial={userTestimonials[1]} order="user-2" />
    <TestimonialCard avatar={Anne} name="Anne Wallace" testimonial={userTestimonials[2]} order="user-3" />
  </div>
)

export default Cards;
