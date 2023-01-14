import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvide/AuthProvider';

const Buyers = () => {
  const { user,userRole } = useContext(AuthContext)
  const { isLoading, data: allBuyerData } = useQuery({
    queryKey: ['allBuyerData'],
    queryFn: () =>
      fetch(`http://localhost:5000/buyers?email=${user.email}&role=${userRole}`,{
        headers:{
          authorization:`Bearer ${localStorage.getItem("jwt-token")}`
        }
      })
        .then(res => res.json())

  })
  // console.log(resData)

  if (isLoading) return 'Loading...'


  return (
    <div>
      <h1 className='text-center py-5 text-4xl font-bold text-orange-600'>All Buyers</h1>
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
              allBuyerData.data.map((user, i) =>
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
                    <button className="btn btn-error btn-xs">Delete </button>
                  </th>
                </tr>)
            }
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Buyers;