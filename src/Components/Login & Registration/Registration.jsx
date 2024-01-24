import React from 'react';
import image from "../../../public/authpage.svg"
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../custom hoocks/useAxios';
import swal from 'sweetalert';
const Registration = () => {
    const inputStyle=' w-full mb-3 text-lg focus:outline-none rounded-lg py-2 px-2'
    const{axiosPublic}=useAxios()
    const move=useNavigate()

    // form submittion handle.
    const signupHandle=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.userName.value
        const email=form.userEmail.value
        const phoneNumber=form.userPhone.value
        const password=form.userPassword.value
        const role=form.role.value
        axiosPublic.post("/add_a_user",{name,email,phoneNumber,password,role})
        .then(res=>{
            if(res.data){
                swal("Signup successfulll","","success")
            move("/")
            }
            else{
                swal("This email address is already in use.","","warning")
            }
        })
    }
    return (
        <div>
           <div className=' flex justify-center items-center h-[90vh]'>
           <div className='flex flex-col-reverse lg:flex-row px-3 lg:w-[80%] h-full lg:h-[70vh] lg:rounded-xl bg-gray-400 '>
                <div className='h-full lg:w-[50%] flex  justify-center items-center'>
                    <div  className=' lg:w-[50%]'>
                    <form onSubmit={signupHandle}>
                        <input required type="text" name='userName' className={inputStyle} placeholder='Your full name.'/>
                        <input required type="number" name='userPhone' className={inputStyle} placeholder='Your phone number.'/>
                        <input required type="email" name='userEmail' className={inputStyle} placeholder='Your email.'/>
                        <select className={inputStyle} name='role'>
                            <option disabled selected>select your role</option>
                            <option>House Owner</option>
                            <option>House Renter</option>
                        </select>
                        <input required type="text" name='userPassword' className={inputStyle} placeholder='Enter your password.'/>
                        <button className='btn btn-primary w-full'>Signup</button>
                    </form>
                    <h1 className='font-semibold mt-3'>Old user? <Link to={"/login"}><span className='font-bold text-primary'>Login</span></Link></h1>
                    </div>
                </div>
                <div className='h-full lg:w-[50%]'>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
            </div>
           </div>

        </div>
    );
};

export default Registration;