import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='d-flex align-items-center m-5 p-5 bg-body rounded'>
                <div className='text-start'>
                    <h1 className='fw-bold fs-1'>Your favorite watch</h1>
                    <h1 className='fw-bold text-info fs-1'>Your best watch</h1>
                    <p className='fs-5'>A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides for management and telemetry.The goal of a smartwatch is to provide users with information in a convenient, easy-to-view format.</p>
                </div>
                <div className='w-75'>
                    <img src="https://multimedia.bbycastatic.ca/multimedia/products/500x500/138/13864/13864605.jpg" alt="" />
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='fw-bold'>Customer Reviews(3)</h2>

                <button type="button" class="btn btn-dark">See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;