import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUserEdit, FaInfoCircle, FaRegAddressCard, FaEnvelope, FaUniversity, FaBriefcase, FaRegHeart, FaLanguage } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import coverImg from '../../images/flower.jpg';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const About = () => {
    const { user, loading } = useContext(AuthContext);

    // const [update, setUpdate] = useState(false);

    // const [comments, setComments] = useState([]);

    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    console.log(users);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/queryEmail?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[user?.email])

    const handelEditAbout = aboutData => {
        console.log(aboutData);

        fetch(`http://localhost:5000/users/${user?.email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(aboutData)
        })
            .then(data => {
                console.log(data);
                if (data.statusText === "OK") {
                    toast("About me Updated!");
                    window.location.reload();
                }

            })
            .catch(error => console.error(error))

    }

    if(loading){
        return <Loading></Loading>
    }


    return (
        <div>

            <div className="card w-2/3 mx-auto shadow-xl">

                <div className='relative'>
                    <figure><img className='w-full' src={coverImg} alt="" /></figure>
                    <div className="avatar absolute -bottom-14 left-5">
                        <div className="w-48 rounded-full">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div>
                </div>
                <p className='mt-20 text-3xl font-bold mx-16'>{users[0]?.name}</p>

                <div className='text-end mr-16'>
                    <label htmlFor="my-modal-3" className="btn border-none bg-gradient-to-r from-teal-700 to-teal-400 font-bold">Edit Profile <FaUserEdit className='ml-4'></FaUserEdit></label>
                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative  border-4 border-teal-500">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleSubmit(handelEditAbout)} className='grid grid-cols-1 gap-3'>
                                <textarea {...register("bio")} className="textarea textarea-bordered w-full" placeholder='bio'></textarea>
                                <input type="text"
                                    {...register("name")} className="input input-bordered w-full" placeholder='name' />
                                <input type="email"
                                    {...register("email")} className="input input-bordered w-full" placeholder='email' />
                                <input type="text"
                                    {...register("university")} className="input input-bordered w-full" placeholder='university' />

                                <input type="text"
                                    {...register("address")} className="input input-bordered w-full" placeholder='address' />

                                <input type="text"
                                    {...register("workExp")} className="input input-bordered w-full" placeholder='work experience' />

                                <input type="text"
                                    {...register("interests")} className="input input-bordered w-full" placeholder='interests' />

                                <input type="text"
                                    {...register("languages")} className="input input-bordered w-full" placeholder='languages' />

                                <input type="submit" value="Save Changes" className="btn bg-gradient-to-r from-teal-700 to-teal-400 input-bordered w-full" />

                            </form>
                        </div>
                    </div>
                </div>

                <div className='mx-16'>
                    <h1 className='text-2xl font-semibold mb-4 flex items-center'><FaInfoCircle className='mr-4'></FaInfoCircle>Bio: </h1>
                    <p className='mb-4'>{users[0]?.bio ? users[0]?.bio : <>Please edit profile.</>}</p>

                    <h1 className='text-2xl font-semibold mb-4 flex items-center'><FaEnvelope className='mr-4'></FaEnvelope>Email: </h1>
                    <p className='mb-4'>{users[0]?.email ? users[0]?.email : <>Please edit profile.</>}</p>

                    <h1 className='text-2xl font-semibold mb-4 flex items-center'><FaUniversity className='mr-4'></FaUniversity>University: </h1>
                    <p className='mb-4'>{users[0]?.university ? users[0]?.university: <>Please edit profile.</>}</p>

                    <h1 className='text-2xl font-semibold mb-4 flex items-center'><FaRegAddressCard className='mr-4'></FaRegAddressCard>Address: </h1>
                    <p className='mb-4'>{users[0]?.address ? users[0]?.address: <>Please edit profile.</>}</p>

                    <h1 className='text-2xl font-semibold mb-4 flex items-center'><FaBriefcase className='mr-4'></FaBriefcase>Work Experiences: </h1>
                    <p className='mb-4'>{users[0]?.workExp ? users[0]?.workExp: <>Please edit profile.</>}</p>

                    <h1 className='text-2xl font-semibold mb-4 flex items-center'><FaRegHeart className='mr-4'></FaRegHeart>Interests: </h1>
                    <p className='mb-4'>{users[0]?.interests ? users[0]?.interests : <>Please edit profile.</>}</p>

                    <h1 className='text-2xl font-semibold mb-4 flex items-center'><FaLanguage className='mr-4'></FaLanguage>Language: </h1>
                    <p className='mb-4'>{users[0]?.languages ? users[0]?.languages : <>Please edit profile.</>}</p>
                </div>
            </div>

        </div>
    );
};

export default About;