import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvide/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext)
  const { isLoading, refetch, data: bookingData } = useQuery({
    queryKey: ['bookingData'],
    queryFn: () =>
      fetch(`http://localhost:5000/bookings/${user.email}`)
        .then(res => res.json())

  })
  // console.log(resData)

  if (isLoading) return 'Loading...'


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
              bookingData.data.map((booking,i) =>
                <tr key={booking._id}>
                  <th>
                    <label>
                        {i+1}.
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
                    <button className="btn btn-info btn-xs mr-3">pay Now</button>
                    <button className="btn btn-error btn-xs">Delete Booking</button>
                  </th>
                </tr>)
            }
            {/* <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr> */}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default MyOrders;  