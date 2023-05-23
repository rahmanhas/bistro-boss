import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, SetReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => SetReviews(data))
    }, [])
    return (
        <section className='my-10'>
            <SectionTitle
                subHeading="what our client say"
                heading="Testimonial "
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <div>
                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}
                            >
                                <div className='text-center m-10'>
                                    <div className='flex justify-center items-center my-10'>
                                    <Rating
                                        style={{ maxWidth: 150 }}
                                        
                                        value={review.Rating}
                                        readOnly
                                    />
                                    </div>
                                    <p>{review.details}</p>
                                    <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;