"use client"

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async (data) => {
        console.log(data, "data");

        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
            callbackURL: "/",
        })

        // console.log("Response", {res, error});
        if (error) {
            alert(`${error.message}!!!`)
        }
        if (res) {
            alert("Signed In Successfully!!")
        }
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center'>Login your account</h2>
                <form className='space-y-4' onSubmit={handleSubmit(handleLoginFunc)} action="">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" {...register("email", { required: "Email Field must contain the users email" })} placeholder="Type your email" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} className="input" {...register("password", { required: "Password Field Must need to be filled" })} placeholder="Type your password" />
                        <span className='absolute right-4 top-4 text-xl cursor-pointer' onClick={() => setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 text-white rounded-lg">Login</button>

                    <p className='mt-4'>Don't have an account? <Link href={'/register'} className='text-blue-500'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;