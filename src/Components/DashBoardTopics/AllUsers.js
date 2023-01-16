import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaDollarSign, FaSearch, FaSellsy, FaUserGraduate } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const AllUsers = () => {
  const { user, userRole } = useContext(AuthContext)
  const { isLoading, data: allUserData, refetch } = useQuery({
    queryKey: ['allUserData'],
    queryFn: () =>
      fetch(`https://car-seller-server-nine.vercel.app/allusers?email=${user.email}&role=${userRole}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`
        }
      })
        .then(res => res.json())

  })



  if (isLoading) return <Spinner/>


  return (
    <div>
      <h1 className='text-center py-5 text-4xl font-bold text-orange-600'>All Users</h1>
      <div className="overflow-x-auto w-full">

        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              allUserData.data.map((user, i) =>
                <tr key={user._id}>
                  <th>
                    <label>
                      {i + 1}.
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.userImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.userName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.email}
                  </td>
                  <td>{user.role}</td>
                  <th>
                   {
                    user.role==="Admin"?
                    <FaUserGraduate/>:
                    user.role==="Seller"?
                    <FaSearch/> :
                    <FaDollarSign/>
                   }
                  </th>
                </tr>)
            }
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default AllUsers;