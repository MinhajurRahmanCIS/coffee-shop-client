import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaEdit } from 'react-icons/fa';
import { IoTrashBinOutline } from "react-icons/io5";
import Swal from 'sweetalert2'

const CoffeeCard = ({ coffee, setCoffee, coffees }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

    const handelDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(c => c._id !== _id);
                            setCoffee(remaining);
                        }
                    })
            }
        });
    };

    return (
        <div className="card card-side bg-[#F5F4F1] shadow-xl rounded-none">
            <figure><img className='hover:opacity-90' src={photo} alt="Movie" /></figure>
            <div className="flex justify-between items-center w-full my-10 pr-4">
                <div>
                    <h2 className="card-title mb-5">{name}</h2>
                    <p className='text-sm mb-2'><strong>Chef :</strong> {chef}</p>
                    <p className='text-sm mb-2'><strong>Category : </strong> {category}</p>
                    <p className='text-sm mb-2'><strong>Category : </strong> {taste}</p>
                    <p className='text-sm mb-2'><strong>supplier : </strong> {category}</p>
                </div>
                <div>
                    <div className="join join-vertical space-y-4">
                        <Link to={`/coffeeDetails/${_id}`} className="btn btn-sm rounded-md bg-[#D2B48C] hover:bg-[#A38E73] 
                        text-white  text-md"><FaRegEye /></Link>
                        <Link to={`/updateCoffee/${_id}`} className="btn  btn-sm rounded-md bg-[#3C393B] hover:bg-[#575356] text-white  text-md"><FaEdit /></Link>
                        <Link onClick={() => handelDelete(_id)} className="btn btn-sm rounded-md bg-[#EA4744] hover:bg-[#F47976] text-white  text-md"><IoTrashBinOutline /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;