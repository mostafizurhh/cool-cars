import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { id, image, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='gradient'>
                <img src={image} alt='' className="w-full rounded-lg" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 top-5 left-5 md:left-8 md:top-1/4 lg:left-24 lg:top-1/4 ">
                <h5 className='text-xl md:text-5xl lg:text-6xl text-white font-bold md:w-1/2 '>Affordable Price For Car Servicing</h5>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 top-20 left-5 md:left-8 md:top-1/2 lg:left-24 ">
                <p className='text-white text-xl md:w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-5 bottom-1/4 md:left-8 md:bottom-1/3 lg:left-24 ">
                <button className="btn btn-sm bg-orange-700 mr-5 text-whiter">Discover More</button>
                <button className="btn btn-sm btn-outline btn-secondary">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;