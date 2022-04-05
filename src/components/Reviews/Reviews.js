import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews)
    return (
        <div className='mt-4'>
            <h1>What our Customers Say!!!</h1>
            <div className='row m-5'>
                
            {
                reviews.map(review=><Review key={review.id} review={review}></Review>)
            }
            
            </div>
        </div>
    );
};

export default Reviews;