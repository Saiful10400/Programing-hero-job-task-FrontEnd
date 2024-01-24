import React, { useState } from 'react';
import "./banner.css"
const Banner = () => {
    // range handle.
    const[range,setRange]=useState(0)
    const rangeHandle=(e)=>{
        setRange(e.target.value)
    }
    return (
        <div id='banner' className='w-full h-[50vh]'>
            <div className='w-full h-full bg-gradient-to-r from-[#ffffff] to-[#ffffff00] '>
            <form>
                <label className='flex gap-2' htmlFor="city">
                    City name:
                    <input id='city' className='border rounded-lg text-sm px-[2px] py-[2px] focus:outline-none' type="text" />
                </label>
                <label className='flex gap-2 my-4'>
                    room details:
                    <input   placeholder='bedrooms' className='border rounded-md w-[70px] text-sm px-[2px] py-[2px] focus:outline-none' type="text" />
                    <input   placeholder='bathrooms' className='border rounded-md w-[90px] text-sm px-[2px] py-[2px] focus:outline-none' type="text" />
                    <input   placeholder='room size' className='border rounded-md w-[70px] text-sm px-[2px] py-[2px] focus:outline-none' type="text" />
                </label>
                <label className='flex gap-2'>
                Rent per month:
                    <input onChange={rangeHandle} defaultValue={0} min="1000" max="15000" step="500"  className='border rounded-lg text-sm px-[2px] py-[2px] focus:outline-none' type="range" />
                    <span>{range}</span>
                </label>
                <button className='btn btn-secondary btn-sm mt-5'>Search</button>
            </form>
            </div>
        </div>
    );
};

export default Banner;