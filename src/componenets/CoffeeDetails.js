import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import logo from '../assets/more/logo1.png';
const CoffeeDetails = () => {
    const coffeeDetails = useLoaderData();
    const { name, chef, supplier, taste, category, details, photo } = coffeeDetails;
    return (
        <div>
            <div className="bg-[url('/src/assets/more/15.jpg')]">
                <div className="flex justify-center items-center">
                    <img className="w-20 h-20 " src={logo} alt="logo" />
                    <h1 className='text-white text-4xl'>Espresso Emporium</h1>
                </div>
            </div>
            <div className="hero mt-10">
                <div className="hero-content flex-row">
                    <img src={photo} className="max-w-sm rounded-lg" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{details}</p>
                        <p><strong>Chef :</strong> {chef}</p>
                        <p><strong>Category : </strong>{category}</p>
                        <p><strong>Taste : </strong>{taste}</p>
                        <p><strong>Supplier :</strong> {supplier}</p>
                        <Link to='/' className='mt-5 btn w-full bg-[#331A15] hover:bg-[#4C2820] text-white'>Go To Back</Link>
                    </div>
                </div>
            </div>

            <footer className="footer p-10 bg-[url('/src/assets/more/13.jpg')] text-base-content mt-64">
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

export default CoffeeDetails;