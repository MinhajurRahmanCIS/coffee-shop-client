import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/more/logo1.png';
import error from '../assets/404/404.gif';

const FourOFourPage = () => {
    return (
        <div>
            <div className="bg-[url('/src/assets/more/15.jpg')]">
                <div className="flex justify-center items-center">
                    <img className="w-20 h-20 " src={logo} alt="logo" />
                    <h1 className='text-white text-4xl'>Espresso Emporium</h1>
                </div>
            </div>
            
            <div className='hero min-h-screen'>
            <img src={error} alt="" />
            </div>
            
            <div className='flex justify-center mb-5'>
            <Link to='/' className='mt-5 btn bg-[#331A15] hover:bg-[#4C2820] text-white'>Go To Back</Link>
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
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn bg-[#331A15] hover:bg-[#4C2820] text-white join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default FourOFourPage;