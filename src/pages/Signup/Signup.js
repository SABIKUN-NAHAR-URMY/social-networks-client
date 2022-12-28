import React from 'react';
import { useForm } from 'react-hook-form';
// import Particles from 'react-tsparticles';
import { Link } from 'react-router-dom';

const Signup = () => {
    // const provider = new GoogleAuthProvider();
    const { register, formState: { errors }, handleSubmit } = useForm();
    // const { createUser, updateUser, googleProvider } = useContext(AuthContext);
    // const [signupError, setSignupError] = useState('');
    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || '/';

    // const handelSignUp = data => {
    //     console.log(data);
    //     setSignupError('');
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             toast.success('Create user successfully');
    //             const userInfo = {
    //                 displayName: data.name
    //             }
    //             updateUser(userInfo)
    //                 .then(() => { 
    //                     saveUser(data.name, data.email, data.value);
    //                 })
    //                 .catch(error => console.error(error))
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setSignupError(error.message);
    //         })
    // }

    // const saveUser = (name, email, value) => {
    //     const user = { name, email, value };
    //     fetch('https://watchbd-server.vercel.app/users', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             navigate(from, { replace: true });
    //         })
    // }

    // const handelGoogleLogin = ()=>{
    //     const value = 'Buyer';
    //     googleProvider(provider)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //         saveUser(user?.displayName, user?.email, value);
    //         if(user?.acknowledged === true){
    //             toast.success('Create user successfully');
    //         }
    //         else{
    //             toast.success('Already User Created');
    //         }
    //     })
    //     .catch(error => console.error(error))
    // }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:m-32 border rounded-lg gap-8'>

            {/* <Particles
            options={{
                background: {
                    color: "#0e387a",
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true
                    },

                },
                particles: {
                    color: {
                        value: "9fafca"
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 400,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 1,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        },
                        value: 1
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 0.5,
                        },
                        value: 1,
                    },
                },
            }}
            /> */}
 
            <div className='m-32'>
                <h1 className='text-4xl font-bold'>Make Cool Friends !!!</h1>
                <p className='mt-10 text-xl font-thin'>Social networks template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more.</p>

                  <p className='mt-7 text-xl font-thin'> Why are you waiting for? </p>
            </div>

            <div className='w-96 pl-12 py-11'>
                <h2 className='text-4xl font-bold text-center'>Sign Up</h2>
                <form >
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name",
                                { required: "Name is required" })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email",
                                { required: "Email Address is required" })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                                })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full mt-3">
                        <select name="" id="" {...register("value")} className="input input-bordered w-full">
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    </div>
                    <input className='btn w-full mt-5 bg-gradient-to-r from-teal-500 to-teal-300' value='Signup' type="submit" />
                    {/* {
                        signupError && <p className='text-red-600'>{signupError}</p>
                    } */}
                </form>
                <p className='text-sm text-center'>Already have an account? <Link className='text-teal-500' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full hover:bg-teal-400 hover:text-white'>
                    CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Signup;