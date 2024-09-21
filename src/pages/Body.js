
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
<div
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${Top})` }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h3 className="text-xl font-bold">Ready to Start Your Journey?</h3>
          <p className="mt-2 text-center">
            Join our aviation school and take your first steps toward becoming a professional pilot or aviation engineer. Apply now!
          </p>
          <button className="mt-4 bg-yellow-500 px-4 py-2 rounded">
            Apply Now
          </button>
        </div>
      </div>

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

      {/* <<<<<<<>>>>>>></> */}
      <div className="p-2 border border-black mt-3 mx-8 lg:mx-32 flex flex-col lg:flex-row items-center lg:justify-center">
        <p className="lg:w-1/2 text-center lg:text-left mb-4 lg:mb-0">
          “Our team of experienced instructors and aviation professionals is dedicated to providing personalized and comprehensive training programs. 
          With state-of-the-art facilities, including advanced flight simulators and a diverse fleet of aircraft, we offer students an unparalleled learning experience.
           We are passionate about aviation and committed to supporting our students in achieving their flying goals.”
        </p>
        <img src={Mid} alt="Flight Academy" className="w-1/2 max-w-full md:w-1/2  lg:max-w-[300px] lg:w-auto lg:ml-4 mt-4 lg:mt-0" />
      </div>

      <div className='bg-white p-10'>
          <h3 className='mb-3 font-semibold font-mono'>Our Courses</h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              <div className=' border-black  border-4 p-14 allcolor text-white'>
                <h4 className="font-bold">1. Private Pilot License (PPL)</h4>
                <p>Duration: 3 months | Cost: $10,000</p>
              </div>
              <div className='p-14 border-black  border-4  allcolor text-white'>
                <h4 className="font-bold">2. Commercial Pilot License (CPL)</h4>
                <p>Duration: 6 months | Cost: $20,000</p>
              </div>
              <div className='border-black  border-4 p-14   allcolor text-white'>
                <h4 className="font-bold">3. Aviation Engineering</h4>
                <p>Duration: 1 year | Cost: $15,000</p>
              </div>
          </div>
        </div>


      <div className='bg-white p-4'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='p-14'>
            <img src={MId1} alt="Flight Academy" className="w-full max-w-full lg:max-w-[600px]" />
          </div>
          <div className='p-6'>
            At WFS, our top-quality fleet and expert instructors provide the best training experience. Our aircraft are equipped with the latest technology, ensuring safe and effective learning. Our personalized instruction helps students build confidence and skills, preparing them for successful aviation careers.
          </div>
          <div className='p-14 allcolor text-white'>
            <img src={MId2} alt="Flight Academy" className="w-full max-w-full lg:max-w-[300px]" />
          </div>
        </div>
      </div>

      <div id="testimonials" className="bg-gray-200 p-6">
        <h3 className="text-xl font-bold text-center">What Our Students Say</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
            <div className="p-4 bg-white rounded shadow">
              <p className="italic">"The instructors at WFS are amazing. They helped me gain confidence and ace my exams."</p>
              <p className="text-right font-semibold">- John Doe</p>
            </div>
            <div className="p-4 bg-white rounded shadow">
              <p className="italic">"Learning here was an unforgettable experience, with a modern fleet and excellent training!"</p>
              <p className="text-right font-semibold">- Jane Smith</p>
            </div>
        </div>
      </div>

      <div id="contact" className="bg-blue-700 p-6 text-white text-center">
        <h3 className="text-xl font-bold">Contact Us</h3>
        <p>Email: info@wfsacademy.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Location: 123 Aviation Street, Nairobi, Kenya</p>
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

       {/* <div>  Partners </div>  */}
        {/* <div className=' mb-8'> Testimonials  </div> */}
        <div className='bg-gray-100 p-10'>
          <h3 className='mb-3 font-semibold font-mono'>Frequently Asked Questions</h3>
          <div className='p-4'>
              <h4 className='font-bold'>What qualifications do I need to join?</h4>
              <p>We require a high school diploma and a passion for aviation.</p>
          </div>
          <div className='p-4'>
              <h4 className='font-bold'>Do you offer financial aid?</h4>
              <p>Yes, we offer several financial aid packages for eligible students.</p>
          </div>
        </div>


    </div>
  );
}

export default Body;

