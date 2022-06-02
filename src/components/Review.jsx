import React from 'react';
import '../styles/Review.css'

function Review(props) {
  return (
    <div className='review-container'>
      <img src={require(`../images/review-${props.image}.png`)} alt='Review spiderman' className='image-review' />
      <div className='review-text-container'>
        <p className='name'>
          <strong>{ props.name }</strong> at <i>{ props.country }</i>
        </p>
        <p className='job'>
          { props.job }
          </p>
        <p className='review'>
          "{ props.review }"
        </p>
      </div>
    </div>
  );
}

export default Review;