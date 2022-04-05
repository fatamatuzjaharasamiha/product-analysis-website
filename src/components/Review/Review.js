
import React from 'react';
import { Card } from 'react-bootstrap';


const Review = (props) => {
    console.log(props.review)
    const { picture, name, review, rating } = props.review
    return (
        <div className='col-lg-4 col-sm-12'>
            <Card className='mt-5 shadow-lg'>
                <div className='d-flex justify-content-center'>
                <Card.Img className='w-50' variant="top" src={picture} />
                </div>
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <Card.Text>
                        <p className=''>Review : {review.slice(0,150)}</p>
                        <h5>Rating : <span className='text-info'>{rating}</span></h5>
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;

