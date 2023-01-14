import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import FilledButton from '../../SharedComponent/Buttons/FilledButton';

const Register = () => {
  const { createUser, updateProfileInfo } = useContext(AuthContext)
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    photoUrl: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
    overall: ""
  })

  // handle name is here
  const handleName = (e) => {
    const name = e.target.value;
    setUserInfo({ ...userInfo, fullName: name })
  }

  // handle photo url
  const handlePhotUrl = (e) => {
    const photo = e.target.files[0];
    setUserInfo({ ...userInfo, photoUrl: photo })
    // console.log(photo)
  }

  // email error handling here..
  const handleEmail = (e) => {
    const email = e.target.value;
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setError({ ...error, emailError: "please provide a valid email" })
      setUserInfo({ ...userInfo, email: "" })
    } else {
      setError({ ...error, emailError: "" })
      setUserInfo({ ...userInfo, email: email })
    }
  }

  // handlings password error here...
  const handlePassword = (e) => {
    const password = e.target.value;

    if (password.length < 6) {
      setError({ ...error, passwordError: "password should be of 6 character" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else if (!/[A-Z]/.test(password)) {
      setError({ ...error, passwordError: "password should have a Capital Letter" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else if (!/[^A-Za-z0-9]/.test(password)) {
      setError({ ...error, passwordError: "password should have a special character" })
      setUserInfo({ ...userInfo, password: "" })
    }
    else {
      setError({ ...error, passwordError: "" })
      setUserInfo({ ...userInfo, password: password })
    }
  }


  const imgbbUrl = "https://api.imgbb.com/1/upload?key=33925baffb85e91b514a5e50db64550e"

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const role = form.select.value;
    const formData = new FormData()
    formData.append('image', userInfo.photoUrl)

    fetch(imgbbUrl,
      {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(photoData => {

        // creating user here
        createUser(userInfo.email, userInfo.password)
          .then((result) => {
            const user = result.user;

            if (user.uid) {

              // updateing profile name and photourl
              updateProfileInfo(userInfo.fullName, photoData.data.display_url)
                .then(() => {
                  // userinfo sending in database
                  const userDocument = {
                    userName: userInfo.fullName,
                    email: userInfo.email,
                    userImage: photoData.data.display_url,
                    role,
                  }
                  //  updataing userinfo in database
                  fetch(`https://car-seller-server-nine.vercel.app/user/${userInfo.email}`, {
                    method: "PUT",
                    headers: {
                      "content-type": "application/json"
                    },
                    body: JSON.stringify(userDocument)
                  })
                    .then(res => res.json())
                    .then(data => {
                      
                      if (data?.data.result.acknowledged) {
                        // jwt token setting in local storage
                        localStorage.setItem('jwt-token', data.data.jwtToken)
                        toast.success(`${role} created successfully`)
                      }
                    })
                })
                .catch(error => { toast.error(error) })
            }

            form.reset()
            navigate('/')
          })

          .catch(err => {
            toast.error(`${err}`)
          })
      })





  }
  return (
    <div className="w-3/5  xl:px-8 mx-auto">
      <div className=" rounded shadow-2xl p-7 sm:p-10">
        <h3 className=" text-3xl font-bold  text-center mb-6 t py-5">
          Registration!
        </h3>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="name"
              className="inline-block mb-1 font-medium"
            >
              Your Full Name
            </label>
            <input
              placeholder="Full Name"
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline"
              name="name"
              onChange={handleName}
            />
          </div>
          <div>
            <label
              htmlFor='photoUrl'
              className="inline-block mb-1 font-medium"
            >
              PhotoURL
            </label>
            <input
              placeholder="your photo url here"
              type="file"
              onChange={handlePhotUrl}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline pt-2"
              name='photUrl'
              accept='image/*'
            />
          </div>

          <select
            className="select w-full my-5 focus:border-blue-300 focus:outline-none focus:shadow-outline border-gray-300"
            name='select'>
            <option value={"Buyer"}>Buyer</option>
            <option>Seller</option>
          </select>

          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="lastName"
              className="inline-block mb-1 font-medium"
            >
              Email
            </label>
            <input
              placeholder="john.doe@example.org"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline"
              name="email"
              onChange={handleEmail}
            />
            {error.emailError ? <p className='text-red-600'>{error.emailError}</p> : <></>}
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="email"
              className="inline-block mb-1 font-medium"
            >
              Password
            </label>
            <input
              placeholder="password"
              required
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline"
              name="password"
              onChange={handlePassword}
            />
            {error.passwordError ? <p className='text-red-600'>{error.passwordError}</p> : <></>}
          </div>
          <div className="flex items-center justify-center w-full mt-5">
            <FilledButton btnType={'submit'} btnClassName={'inline-flex items-center justify-center w-2/4 h-12 px-6  mx-auto font-semibold transition duration-200 rounded shadow-md '}>Register</FilledButton>
          </div>
        </form>
        <p className="text-base text-center sm:px-6 dark:text-gray-400 mt-2">Already have an account?
          <Link
            to='/login'
            className="link link-hover text-[#579BB1] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;