import React from 'react';
import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className="hero my-8">
            <div className="hero-content flex-col md:flex-row">
                <div className='relative md:w-1/2'>
                    <img src={img2} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={img1} alt='' className="absolute right-10 top-1/2 w-3/5 rounded-lg shadow-2xl" />
                </div>
                <div className='md:w-1/2'>
                    <p className='text-orange-600 font-bold text-2xl mt-14 mb-3'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified & of experience
                        in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-1 capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-sm btn-info mt-3">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;