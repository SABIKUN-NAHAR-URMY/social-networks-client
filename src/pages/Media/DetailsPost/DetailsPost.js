import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaRegHeart, FaRegCommentDots } from "react-icons/fa";

const DetailsPost = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);


    const [update, setUpdate] = useState(false);

    const [comments, setComments] = useState([]);
    const [redirect, setRedirect] = useState(false);

    // const [count, setCount] = useState(0);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handelReact = () => {
        const reactInfo = {
            count: data.reactCount,
            pId: data._id,
            userEmail: user?.email
        }
        fetch('https://social-networks-server.vercel.app/react', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reactInfo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                    toast.success('React successfully');
                    window.location.reload();
                }
            })
    }

    const handelReactionComment = (event) => {
        event.preventDefault();
        const form = event.target;
        // const reaction = form.reaction.value;
        const comment = form.comment.value;

        const commentWrite = {
            postId: data._id,
            comment,
            // reaction: reaction,
            commenter: user?.displayName,
            commenterEmail: user?.email,
            commenterImage: user?.photoURL,
        }

        fetch('https://social-networks-server.vercel.app/comment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentWrite)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                toast("Comment added!");
                setUpdate(true);
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetch(`https://social-networks-server.vercel.app/comments/queryPost?postId=${data?._id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
    }, [data?._id, update]);

    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {
                redirect && <Navigate to="/login" state={{ from: location }} replace />
            }

            <div>
                <div className="mt-10 border border-teal-500 rounded-2xl">
                    <figure><img className='w-full' src={data.picture} alt="" /></figure>
                    <div className="card-body">
                        <p>{data.postText}</p>

                        <div className='flex items-center'>
                            <img src={data?.photoURL} className='w-16 h-16 rounded-full mr-3' alt="" />
                            <p className='font-thin'>Posted By: {data?.userName}</p>

                            <div className='flex items-center justify-center'>
                                <span className='text-3xl text-teal-600'>{data?.reactCount}</span>
                                <span onClick={handelReact}><FaRegHeart className='w-11 h-11 text-teal-600 pr-3 cursor-pointer' ></FaRegHeart></span>
                            </div>
                        </div>

                        <div className="card-actions ">



                            <form onSubmit={handelReactionComment} className='m-10 block lg:flex w-full'>

                                {/* <input type="text" name='reaction' value={} className="input input-bordered w-16 mr-4" /><FaRegHeart className='w-20 h-20 pb-7 pr-3 cursor-pointer' onClick={()=>setCount(count + 1)}></FaRegHeart> */}
                                <textarea name='comment' className="textarea textarea-bordered w-full h-5 mr-4" placeholder="Write Comment"></textarea>

                                <input className='btn bg-gradient-to-r from-teal-700 to-teal-400' type="submit" value="Submit Comment" />
                            </form>

                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-10 border-2  border-teal-500 rounded-2xl'>
                <h1 className='text-3xl font-semibold m-10'>Comments</h1>
                {
                    comments.map(comment => {
                        return (
                            <div key={comment._id}>
                                <div className="m-5 p-4 card bg-base-100 shadow-xl font-bold">
                                    <div className="block lg:flex justify-evenly items-center">
                                        <div className='flex items-center'>
                                            <img className='w-12 h-12 rounded-full mr-3' src={comment.commenterImage} alt="" />
                                            <h2> {comment.commenter}</h2>
                                        </div>
                                        <h2 className='flex items-center'><FaRegCommentDots className='mr-3 w-10 h-10 text-teal-600'></FaRegCommentDots> {comment.comment}</h2>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DetailsPost;