import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const DetailsPost = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();

    const [update, setUpdate] = useState(false);

    const [reviews, setReviews] = useState([]);
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
                // setUpdate(true);
            })
            .catch(error => console.error(error))
    }

    // useEffect(() => {
    //     fetch(`https://lens-queen-server.vercel.app/reviews/queryService?serviceName=${data?.name}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setReviews(data);
    //         })
    // }, [data?.name, update]);

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

                                    <form onSubmit={handelReactionComment} className='m-10 flex w-full'>
                                        <textarea name='comment' className="textarea textarea-bordered w-full h-5 mr-4" placeholder="Write Comment"></textarea>
                                        <input type="number" name='rating' placeholder='Rating' className="input input-bordered w-full mr-4" />

                                        <input className='btn bg-gradient-to-r from-teal-700 to-teal-400' type="submit" value="Submit Comment" />
                                    </form>

                                </div>
                            </div>
                        </div>
                        <h1 className='text-xl font-semibold'>Comments</h1>
                        <div className="mt-4 border border-teal-500 rounded-2xl">

                        </div>
                    </div>

            {/* <div className='border-2 rounded-xl'>
                {
                    reviews.map(review => {
                        return (
                            <div key={review._id}>
                                <div className="m-5 card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">ServiceName: {review.serviceName}</h2>
                                        <h2>Review: {review.review}</h2>
                                        <h2>Rating: {review.rating}</h2>
                                        <h2>Reviewer: {review.reviewer}</h2>
                                        <h2>Date and Time: {review.dateAndTime}</h2>
                                        <img className='w-24 rounded' src={review.reviewerImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}
        </div>
    );
};

export default DetailsPost;