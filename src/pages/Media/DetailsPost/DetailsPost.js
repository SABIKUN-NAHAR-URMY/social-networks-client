import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const DetailsPost = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);

    const [update, setUpdate] = useState(false);

    const [comments, setComments] = useState([]);
    const [redirect, setRedirect] = useState(false);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handelReactionComment = (event) => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const comment = form.comment.value;

        const commentWrite = {
            postId: data._id,
            comment,
            rating,
            commenter: user?.displayName,
            commenterEmail: user?.email,
            commenterImage: user?.photoURL,
        }

        fetch('http://localhost:5000/comment', {
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
        fetch(`http://localhost:5000/comments/queryPost?postId=${data?._id}`)
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

                                <div className="card-actions ">

                                    <form onSubmit={handelReactionComment} className='m-10 block lg:flex w-full'>
                                        <textarea name='comment' className="textarea textarea-bordered w-full h-5 mr-4" placeholder="Write Comment"></textarea>
                                        <input type="number" name='rating' placeholder='Rating' className="input input-bordered w-full mr-4" />

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
                                <div className="m-5 p-4 card bg-base-100 shadow-xl">
                                    <div className="block lg:flex justify-between items-center">
                                        
                                        <h2>Comment: {comment.comment}</h2>
                                        <h2>Rating: {comment.rating}</h2>
                                        <div className='flex items-center'>
                                        <img className='w-12 h-12 rounded-full' src={comment.commenterImage} alt="" />
                                        <h2> {comment.commenter}</h2>
                                        </div>
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