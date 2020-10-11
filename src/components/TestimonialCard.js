import React from "react";

const TestimonialCard = ({ name, avatar, testimonial, order }) => (
  <div className={`testimonial ${order}`}>
    <div className="testimonial__user">
      <div className="testimonial__user-info">
        <img className="testimonial__user-pic" src={avatar} alt="Avatar Testimonial" />
        <div className="testimonial__user-name">
          <p>{name}</p>
          <p className="testimonial__user-tag">Verified Buyer</p>
        </div>
      </div>
      <div className="testimonial__user-review">
        <p>{testimonial}</p>
      </div>
    </div>
    
  </div>
)

export default TestimonialCard;