import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../assets/more/logo1.png';
import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
import cups1 from '../assets/cups/1.png';
import cups2 from '../assets/cups/2.png';
import cups3 from '../assets/cups/3.png';
import cups4 from '../assets/cups/4.png';
import cups5 from '../assets/cups/5.png';
import cups6 from '../assets/cups/6.png';
import cups7 from '../assets/cups/7.png';
import cups8 from '../assets/cups/8.png';
import CoffeeCard from './CoffeeCard';
const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffee] = useState(loadedCoffees);
    return (
        <div>
            <div className="bg-[url('/src/assets/more/15.jpg')]">
                <div className="flex justify-center items-center">
                    <img className="w-20 h-20 " src={logo} alt="logo" />
                    <h1 className='text-white text-4xl'>Espresso Emporium</h1>
                </div>
            </div>
            <div className="hero min-h-96 bg-[url('/src/assets/more/3.png')]">
                <div className="hero-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="text-5xl font-bold ">Hello there</h1>
                        <p className="py-6">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className="btn bg-[#E3B577]
                         hover:bg-[#FFD59D] rounded-none border-none font-bold">Learn More</button>
                    </div>
                </div>
            </div>

            <div className='bg-[#ECEAE3] flex justify-evenly'>
                <div className='w-96 p-5'>
                    <img className='h-16 w-16' src={icon1} alt="" />
                    <h1 className='text-[#331A15] font-bold'>Awesome Aroma</h1>
                    <p className='text-sm'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='w-96 p-5'>
                    <img className='h-16 w-16' src={icon2} alt="" />
                    <h1 className='text-[#331A15] font-bold'>Awesome Aroma</h1>
                    <p className='text-sm'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='w-96 p-5'>
                    <img className='h-16 w-16' src={icon3} alt="" />
                    <h1 className='text-[#331A15] font-bold'>Awesome Aroma</h1>
                    <p className='text-sm'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='w-96 p-5'>
                    <img className='h-16 w-16' src={icon4} alt="" />
                    <h1 className='text-[#331A15] font-bold'>Awesome Aroma</h1>
                    <p className='text-sm'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>

            <div className="bg-[url('/src/assets/more/1.png')] mt-16">
                <div className='text-center'>
                    <p>--- Sip & Savor ---</p>
                    <h1 className='text-[#331A15] text-5xl font-semibold'>Our Popular Products</h1>
                    <Link to='/addCoffee' className='btn btn-sm mt-5 bg-[#63352B] hover:bg-[#763F34] text-white  border-none rounded-none'>Add Coffee</Link>
                </div>

                <div className='m-14'>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {
                            coffees.map(coffee => <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                setCoffee={setCoffee}
                                coffees={coffees}
                            >
                            </CoffeeCard>)
                        }
                    </div>
                </div>
            </div>

            <div>
                <div className='text-center'>
                    <h1 className='text-[#331A15] text-5xl font-semibold'>Follow on Instagram</h1>
                </div>

                <div className='m-14'>
                    <div className='grid grid-cols-4 gap-5 md:gap-x-20 md:gap-y-10 lg:gap-x-40 lg:gap-y-10'>
                        <img className='hover:opacity-90' src={cups1} alt="" />
                        <img className='hover:opacity-90' src={cups2} alt="" />
                        <img className='hover:opacity-90' src={cups3} alt="" />
                        <img className='hover:opacity-90' src={cups4} alt="" />
                        <img className='hover:opacity-90' src={cups5} alt="" />
                        <img className='hover:opacity-90' src={cups6} alt="" />
                        <img className='hover:opacity-90' src={cups7} alt="" />
                        <img className='hover:opacity-90' src={cups8} alt="" />
                    </div>
                </div>
            </div>

            <footer className="footer p-10 bg-[url('/src/assets/more/13.jpg')] text-base-content">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
                <div>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="div-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn bg-[#331A15] hover:bg-[#4C2820] text-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
            </footer>
        </div>
    );
};

export default Home;