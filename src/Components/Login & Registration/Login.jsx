import React from 'react';
import image from "../../../public/authpage.svg"
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../custom hoocks/useAxios';
import swal from 'sweetalert';
const Login = () => {
    const inputStyle=' w-full mb-3 text-lg focus:outline-none rounded-lg py-2 px-2'
    const{axiosPublic}=useAxios()
    const move=useNavigate()

    // form submittion handle.
    const signupHandle=(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.userEmail.value
        const password=form.userPassword.value
       
        axiosPublic.post("/login",{email,password})
        .then(res=>{
          if(res?.data){
            swal("Login success","","success")
            move("/")
          }
          else{
            swal("Invalid e-mail or password.","","warning")
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
                       
                        <input type="email" name='userEmail' className={inputStyle} placeholder='Your email.'/>
                        <input type="text" name='userPassword' className={inputStyle} placeholder='Enter your password.'/>
                        <button className='btn btn-primary w-full'>Login</button>
                    </form>
                    <h1 className='font-semibold mt-3'>New user? <Link to={"/registration"}><span className='font-bold text-primary'>Signup</span></Link></h1>
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

export default Login;