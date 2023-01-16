import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const Buyers = () => {
  const { user, userRole } = useContext(AuthContext)
  const { isLoading, data: allBuyerData, refetch } = useQuery({
    queryKey: ['allBuyerData'],
    queryFn: () =>
      fetch(`https://car-seller-server-nine.vercel.app/buyers?email=${user.email}&role=${userRole}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`
        }
      })
        .then(res => res.json())
  })

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete the buyer");
    if (confirm) {
      fetch(`https://car-seller-server-nine.vercel.app/buyers/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.data.deletedCount > 0) {
            toast.success("the buyer is deleted")
            refetch()
          }
        })
    }
  }

  if (isLoading) return <Spinner/>


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
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => handleDelete(user._id)}>Delete </button>
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