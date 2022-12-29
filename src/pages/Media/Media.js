import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserFriends, FaPenSquare, FaUsers, FaLandmark } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import userImg from '../../images/user.jpg';

const Media = () => {
    const { user, logOut } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbKey;
    const navigate = useNavigate();

    const handelAddProduct = data => {
        console.log(data);
        const image = data.picture[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.url);
            })
    }


    const handelLogOut = () => {
        logOut()
            .then(() => { 
                navigate('/login');
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {/* <div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title mb-7">{user?.displayName}</h2>
                        <ul>
                            <Link className="card-title mb-7"><li className='flex items-center'><FaUserFriends className='mr-4'></FaUserFriends>Friends</li></Link>
                            <Link className="card-title mb-7"><li className='flex items-center'><FaPenSquare className='mr-4'></FaPenSquare>All Post</li></Link>
                            <Link className="card-title mb-7"><li className='flex items-center'><FaUsers className='mr-4'></FaUsers>Groups</li></Link>
                            <Link className="card-title mb-7"><li className='flex items-center'><FaLandmark className='mr-4'></FaLandmark>MarketPlace</li></Link>
                        </ul>
                    </div>
                </div>
            </div> */}

            <div className='col-span-2 m-5 mt-14 lg:mt-0'>
                <div className='mt-10 border border-teal-500 rounded-2xl'>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='text-xl font-thin'>Create Post!</p>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-3" className="btn bg-gray-100 hover:bg-teal-400 hover:text-white rounded-full font-thin text-emerald-400">What's on your mind?</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative  border-4 border-teal-500">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <form onSubmit={handleSubmit(handelAddProduct)} className='grid grid-cols-1 gap-3'>
                                        <textarea {...register("postText")} className="textarea textarea-bordered w-full" placeholder="What's on your mind?"></textarea>
                                        <input type="file"
                                            {...register("picture")} className="input input-bordered w-full" />
                                        <input type="submit" value="Post" className="btn bg-gradient-to-r from-teal-700 to-teal-400 input-bordered w-full" />

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-5 mt-5 hidden lg:block'>
                <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <div className="avatar online">
                                    <div className="w-24 rounded-full">
                                        <img src={user?.photoURL} alt='' />
                                    </div>
                                </div>
                            </figure>

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{user?.displayName}</h2>

                        <div className="card-actions">
                            <button onClick={handelLogOut} className="btn border-none bg-gradient-to-r from-teal-700 to-teal-400">LogOut</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Media;