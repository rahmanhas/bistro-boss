import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <div className='featured-item text-white pt-10'>
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia similique quos a nemo beatae minima, qui, accusantium ab eaque porro tenetur accusamus repudiandae voluptas quas maxime! Suscipit dignissimos eligendi debitis doloribus unde fugit commodi necessitatibus cum nihil tempore voluptatibus explicabo adipisci fugiat totam aliquid ipsa iure facilis, accusamus soluta consectetur!</p>
                    <button className='btn btn-outline'> Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;