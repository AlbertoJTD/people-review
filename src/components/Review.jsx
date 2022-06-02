import React from 'react';

function Review() {
  return (
    <div className='review-container'>
      <img src={require('../images/review-spiderman.png')} alt='Review spiderman' className='review-image' />
      <div className='review-text-container'>
        <p className='name'>Spiderman</p>
        <p className='job'>Super-hero</p>
        <p className='review'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Amet minima iusto nostrum fugit omnis ex nemo. Officia dolorem aperiam blanditiis
          sed! Quae earum quidem quod maxime aliquam nihil quasi dolores?
        </p>
      </div>
    </div>
  );
}

export default Review;