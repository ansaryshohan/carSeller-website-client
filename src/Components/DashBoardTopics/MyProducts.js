import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvide/AuthProvider';

const MyProducts = () => {
  const { user } = useContext(AuthContext)
  const { isLoading, refetch, data: productData } = useQuery({
    queryKey: ['productData'],
    queryFn: () =>
      fetch(`http://localhost:5000/addedProduct/${user.email}`)
        .then(res => res.json())
  })

// console.log(productData)

  if (isLoading) return 'Loading...'

  return (
    <div>
    <h1 className='text-center py-5 text-4xl font-bold text-orange-600'>This is your Products</h1>
    <div className="overflow-x-auto w-full">

      <table className="table w-full">

        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Location</th>
            <th>Posting Time</th>
            <th>Year of Use</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            productData.data.map((product,i) =>
              <tr key={product._id}>
                <th>
                  <label>
                      {i+1}.
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.productPhoto} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product.productName}</div>
                    </div>
                  </div>
                </td>
                <td>
                 <div>purchase price:  $ <span className='line-through'>{product.purchase_price}</span></div>
                 <div className='text-xl font-semibold'>Selling price:  ${product.selling_price}</div>
                </td>
                <td>{product.location}</td>
                <td>{product.postingDate.split("G")[0]}</td>
                <td>{product.usedYears}</td>
                <th>
                  <button className="btn btn-info btn-xs mr-3">Advertise</button>
                  <button className="btn btn-error btn-xs">Delete Product</button>
                </th>
              </tr>)
          }
          
        </tbody>

      </table>
    </div>

  </div>
  );
};

export default MyProducts;