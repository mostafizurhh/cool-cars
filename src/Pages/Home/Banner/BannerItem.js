import React from 'react';

const BannerItem = ({ slide }) => {
    const { id, image, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='gradient'>
                <img src={image} alt='' className="w-full" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/4">
                <h5 className='text-6xl text-white font-bold'>Affordable <br />
                    Price For Car <br />
                    Servicing</h5>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-white text-xl w-2/3'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 bottom-1/3">
                <button className="btn btn-sm btn-error mr-5">Error</button>
                <button className="btn btn-sm btn-ghost btn-outline btn-secondary">Button</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;