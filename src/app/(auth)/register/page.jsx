"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        // console.log(data, "data");

        const { name, email, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            image: photo,
            password: password,
            callbackURL: "/",
        })

        // console.log("Response", {res, error});
        if (error) {
            alert(`${error.message}!!!`)
        }
        if (res) {
            alert("Signed Up Successfully!!")
        }
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-10 rounded-xl bg-white my-10'>
                <h2 className='font-bold text-3xl text-center'>Register your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)} action="">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="name" className="input" {...register("name", { required: "Name Field must contain the users name" })} placeholder="Type your Name" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" {...register("photo", { required: "Photo URL Field must contain the users Image" })} placeholder="Type your photo url" />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" {...register("email", { required: "Email Field must contain the users email" })} placeholder="Type your email" />
                        {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input" {...register("password", { required: "Password Field Must need to be filled" })} placeholder="Type your password" />

                        <span className='absolute right-9 top-4 text-xl cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white rounded-lg">Register</button>

                    <p className='mt-4'>Already have an account? <Link href={'/login'} className='text-blue-500'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;