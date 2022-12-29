import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const About = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>

            <div className="card w-2/3 mx-auto shadow-xl">

                <div className='relative'>
                    <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="" /></figure>
                    <div className="avatar absolute -bottom-14 left-5">
                        <div className="w-48 rounded-full">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div>
                </div>
                <p className='mt-20 text-3xl font-bold mx-16'>{user?.displayName}</p>
                <p className='text-lg font-thin mx-16'>{user?.displayName}</p>

                <div className='text-end mr-16'>
                    <button className="btn border-none bg-gradient-to-r from-teal-700 to-teal-400 font-bold">Edit Profile <Link className='ml-4'><FaUserEdit></FaUserEdit></Link></button>
                    {/* Name, email, university, address */}
                </div>

                <div className='mx-16'>
                    <h1 className='text-2xl font-semibold mb-4'>Personal Information: </h1>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>

                    <h1 className='text-2xl font-semibold mb-4'>Email: </h1>
                    <p className='mb-4'>socialnetworks@gmail.com</p>

                    <h1 className='text-2xl font-semibold mb-4'>University: </h1>
                    <p className='mb-4'>socialnetworks@gmail.com</p>

                    <h1 className='text-2xl font-semibold mb-4'>Address: </h1>
                    <p className='mb-4'>socialnetworks@gmail.com</p>

                    <h1 className='text-2xl font-semibold mb-4'>Work Experiences: </h1>
                    <p className='mb-4'>socialnetworks@gmail.com</p>

                    <h1 className='text-2xl font-semibold mb-4'>Interests: </h1>
                    <p className='mb-4'>socialnetworks@gmail.com</p>

                    <h1 className='text-2xl font-semibold mb-4'>Language: </h1>
                    <p className='mb-4'>Bengali, English</p>
                </div>
            </div>

        </div>
    );
};

export default About;