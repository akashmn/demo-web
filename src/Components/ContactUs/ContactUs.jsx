import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import emailjs from 'emailjs-com';
import Contactus from '../../assets/Contact us.svg'
import Title from '../../assets/title.svg';
import Navbar from '../../Pages/LandingPage/Navbar/Navbar';
import Footer from '../../Pages/LandingPage/Footer/Footer';
import { useState } from "react";






function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    console.log('Form data:', formData);

    emailjs.sendForm('service_3uyk8ra', 'template_mpsi88p', e.target, 'hbZttVeeBI9zfYmCc')
      .then((res) => {
        console.log(res);
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const formInputs = e.target.form.elements;
      const currentInputIndex = Array.from(formInputs).indexOf(e.target);
      const nextInput = formInputs[currentInputIndex + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div className='h-screen w-full font-Armata mt-5 bg-black' id='contact'>
      <Navbar />
    <div className='flex items-center md:hidden'>
      <div className='flex items-center pl-8'>
        <div className='inline-block w-5 h-16 bg-[#080AA4] relative'></div>
        <img className='absolute w-52 h-[25px] pl-2.5' data-aos="flip-up" data-aos-duration="750" src={Contactus}alt="" />
      </div>
    </div>
    <div className="text-white w-full flex justify-center items-center">
      <div className='flex flex-col-reverse md:flex-row md:space-x-6 md:space-y-0 space-y-6 w-full p-8 rounded-xl justify-center items-center md:items-baseline'>
        <div className='flex flex-col space-y-4 justify-center items-baseline'>
          <div className='md:text-xl lg:text-2xl mb-4 md:mb-6 lg:mb-8'>
            <div className='items-center hidden md:block mt-4'>
              <div className='flex items-center'>
                <div className='inline-block w-5 h-16 bg-[#080AA4] relative' data-aos="flip-up" data-aos-duration="750"></div>
                <img className='absolute w-52  pl-2.5'  data-aos="flip-up" data-aos-duration="750" src={Contactus}alt="" />
              </div>
            </div>
          </div>
          <div className='flex text-2xl   md:text-lg flex-col space-y-4 m-4 sm:ml-[0px]'>
            <div className='mb-4 flex  '>
              <img className='pt-2 w-44 h-[25px] ' src={Title} alt="We're here" />
            </div>
            <div className='mb-4  flex flex-row items-baseline'>
              <FaLocationDot />
              <span className='pl-1.5  text-lg'>College of Engineering Chengannur
                <br />
                Chengannur P.O.
                <br />
                Alappuzha District.
              </span>
            </div>
            <div className='  mb-4 text-lg inline-flex space-x-2 items-center'>
              <FaPhoneAlt />
              <span>+91-479-2454125</span>
            </div>
            <div className='mb-4   text-lg  inline-flex space-x-2 items-center'>
              <IoMail />
              <span>mail.foces@gmail.com</span>
            </div>
          </div>
          <div className='flex space-x-3  sm:space-x-2 text-lg space-y-16 items-center'>
            <div></div>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-1 rounded-md">
              <FaFacebookF className="mx-2" />
            </a>
            <div className="border-r-2 border-white h-6"></div>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-1 rounded-md">
              <FaXTwitter className="mx-2" />
            </a>
            <div className="border-r-2 border-white h-6"></div>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
              <FaInstagram style={{ height: '25', width: '25' }} className="mx-0.5" />
            </a>
            <div className="border-r-2 border-white h-6"></div>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black p-1 rounded-md">
              <FaLinkedinIn className="mx-2" />
            </a>
          </div>
        </div>
        <div className=''>
          <div className='pl-[18px] font-medium flex flex-col space-y-4 md:mb-[-15px] items-center'>
            <div className='text-lg'>
              Got some unique ideas that you want to implement or improve?
            </div>
            <div className='font-semibold'>
              SHARE WITH US!
            </div>
          </div>
          <div className='p-4'>
            <form className='flex flex-col space-y-1 text-black' onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" id="name" name="name" className='text-sm text-white'>Name</label>
              </div>
              <div>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} onKeyDown={handleKeyDown} className='w-full rounded-lg px-4 py-2 mt-2' />
              </div>
              <div>
                <label htmlFor="user_email" id="user_email" name="user_email" className='text=-sm text-white'>Email</label>
              </div>
              <div>
                <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} onKeyDown={handleKeyDown} className='w-full rounded-lg px-4 py-2 mt-2' />
              </div>
              <div>
                <label htmlFor="subject" id="subject" name="subject" className='text-sm text-white'>Subject</label>
              </div>
              <div>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} onKeyDown={handleKeyDown} className='w-full rounded-lg px-4 py-2 mt-2' />
              </div>
              <div>
                <label htmlFor="message" id="message" name="message" className='text-sm text-white'>Tell us more about your idea here !!</label>
              </div>
              <div className="relative">
                <textarea type="text" name="message" placeholder="" value={formData.message} onChange={handleInputChange} onKeyDown={handleKeyDown} className='w-full rounded-lg px-4 py-2 mt-2' />
                <button type='submit' className='text-black bg-white absolute bottom-2 right-2'><IoSend /></button>
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer />
  </div>
  

  );

}

export default ContactUs;