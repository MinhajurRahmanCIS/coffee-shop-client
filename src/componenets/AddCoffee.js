import React from 'react';
import logo from '../assets/more/logo1.png';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
    const handelAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photo
        };

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: 'success!',
                        text: 'Coffee Added',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    }
                    )
                }
            });
    };
    return (
        <div>
            <div className="bg-[url('/src/assets/more/15.jpg')]">
                <div className="flex justify-center items-center">
                    <img className="w-20 h-20 " src={logo} alt="logo" />
                    <h1 className='text-white text-4xl'>Espresso Emporium</h1>
                </div>
            </div>
            <div className='bg-[#F4F3F0] p-24'>
                <div className='text-center'>
                    <h1 className='text-3xl font-extrabold mb-5'>Add a Coffee</h1>
                    <p className='text-md'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handelAddCoffee}>
                    <div className='md:flex gap-4 mb-2'>
                        <div className='form-control md:w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Coffee Name</span>
                            </label>
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered rounded-none w-full" name='name' required />
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Chef</span>
                            </label>
                            <input type="text" placeholder="Enter coffee chef" className="input input-bordered rounded-none w-full" name='chef' required />
                        </div>
                    </div>
                    <div className='md:flex gap-4 mb-2'>
                        <div className='form-control md:w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Supplier</span>
                            </label>
                            <input type="text" placeholder="Enter coffee supplier" className="input input-bordered rounded-none w-full" name='supplier' required />
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Taste</span>
                            </label>
                            <input type="text" placeholder="Enter coffee taste" className="input input-bordered rounded-none w-full" name='taste' required />
                        </div>
                    </div>

                    <div className='md:flex gap-4 mb-2'>
                        <div className='form-control md:w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Category</span>
                            </label>
                            <input type="text" placeholder="Enter coffee category" className="input input-bordered rounded-none w-full" name='category' required />
                        </div>
                        <div className='form-control md:w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Details</span>
                            </label>
                            <input type="text" placeholder="Enter coffee details" className="input input-bordered rounded-none w-full" name='details' required />
                        </div>
                    </div>

                    <div className='mb-8'>
                        <div className='form-control w-full'>
                            <label className="label">
                                <span className="label-text font-semibold">Photo</span>
                            </label>
                            <input type="text" placeholder="Enter photo URL" className="input input-bordered rounded-none w-full" name='photo' required />
                        </div>
                    </div>

                    <input className="btn btn-block text-md bg-[#D2B48C] border-[#331A15] hover:bg-[#FFDFB4] hover:border-[#331A15]" type="submit" value="Add Coffee" />
                </form>
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

export default AddCoffee;