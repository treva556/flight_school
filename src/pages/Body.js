
import React from 'react';
import '../App.css';
import Top from '../Assets/top.jpeg';
import Mid from '../Assets/2.jpeg';
import MId1 from '../Assets/3mid.jpeg';
import MId2 from '../Assets/4mid.jpeg';
import Last from '../Assets/last.jpeg';

function Body() {
  return (
    <div className="App">
      <img src={Top} alt="Description" className="w-full h-auto" />
      <div className="p-6 bg-slate-200"> 
        Dis:
        <p className="font-serif">This Website Is a Template and Not to Be Used For Professional Purposes</p> 
      </div>
      <div className="allcolor text-white mr-2 ml-2 rounded-xl">
        <div className="p-2">
          <h2 className="text-xl font-bold underline">About Us</h2>
          At Wise School, we are dedicated to providing top-tier flight training and aviation services. Our mission is to cultivate skilled, safe, and knowledgeable pilots through innovative training methods and a commitment to excellence.
        </div>
      </div>
      <div className="p-8 border border-black mt-3 mx-8 lg:mx-32 flex flex-col lg:flex-row items-center lg:justify-center">
        <p className="lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
          “Our team of experienced instructors and aviation professionals is dedicated to providing personalized and comprehensive training programs. With state-of-the-art facilities, including advanced flight simulators and a diverse fleet of aircraft, we offer students an unparalleled learning experience. We are passionate about aviation and committed to supporting our students in achieving their flying goals.”
        </p>
        <img src={Mid} alt="Flight Academy" className="w-full max-w-full lg:max-w-[300px] lg:w-auto lg:ml-4 mt-4 lg:mt-0" />
      </div>
      <div className='bg-white p-10'>
        <h3 className='mb-3 font-semibold font-mono'>Our Services</h3>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='p-14 allcolor text-white'>
            1
          </div>
          <div className='p-14 allcolor text-white'>
            2
          </div>
          <div className='p-14 allcolor text-white'>
            3
          </div>
        </div>
      </div>
      <div className='bg-white p-4'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='p-14'>
            <img src={MId1} alt="Flight Academy" className="w-full max-w-full lg:max-w-[400px]" />
          </div>
          <div className='p-6'>
            At WFS, our top-quality fleet and expert instructors provide the best training experience. Our aircraft are equipped with the latest technology, ensuring safe and effective learning. Our personalized instruction helps students build confidence and skills, preparing them for successful aviation careers.
          </div>
          <div className='p-14 allcolor text-white'>
            <img src={MId2} alt="Flight Academy" className="w-full max-w-full lg:max-w-[200px]" />
          </div>
        </div>
      </div>
      <div className='bg-white p-4'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2'>
          <div className='p-4'>
            <h4 className='text-xl font-bold'>Student Accommodation</h4>
            <p>We offer comfortable, modern accommodations close to our training facilities. Our well-equipped lodging includes high-speed internet and other amenities to make your stay enjoyable. This ensures that students can focus on their training and have a stress-free experience.</p>
          </div>
          <div className='p-14'>
            <img src={Last} alt="Flight Academy" className="w-full max-w-full lg:max-w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;