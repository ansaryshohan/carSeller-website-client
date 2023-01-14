import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const MyOrders = () => {
  const { user } = useContext(AuthContext)

  // query for loading my orders
  const { isLoading, refetch, data: bookingData } = useQuery({
    queryKey: ['bookingData'],
    queryFn: () =>
      fetch(`https://car-seller-server-nine.vercel.app/bookings/${user.email}`)
        .then(res => res.json())
  });

  const handlePayNow = () => {

  };

  const deleteBooking = (id) => {
    const confirm = window.confirm('do you want to delete the order')
    if (confirm) {

      fetch(`https://car-seller-server-nine.vercel.app/bookings/${id}`, {
        method: "DELETE",
        headers: {
          authorization : `Bearer ${localStorage.getItem("jwt-token")}`
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.data.deletedCount > 0) {
            toast.success('booked product is deleted')
            refetch()
          }
        })
    }
  };


  if (isLoading) return <Spinner />


  return (
    <div>
      <h1 className='text-center py-5 text-4xl font-bold text-orange-600'>this is your orders</h1>
      <div className="overflow-x-auto w-full">

        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Location</th>
              <th>Booking Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              bookingData.data.map((booking, i) =>
                <tr key={booking._id}>
                  <th>
                    <label>
                      {i + 1}.
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={booking.productImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{booking.product_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    ${booking.selling_price}
                  </td>
                  <td>{booking.location}</td>
                  <td>{booking.todayDate}</td>
                  <th>
                    <button
                      className="btn btn-info btn-xs mr-3"
                      onClick={handlePayNow}>
                      pay Now
                    </button>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => deleteBooking(booking._id)}
                    >
                      Delete Booking
                    </button>
                  </th>
                </tr>)
            }

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default MyOrders;  