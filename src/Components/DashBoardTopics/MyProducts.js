import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const MyProducts = () => {
  const { user } = useContext(AuthContext)
  // react query for data fetching
  const { isLoading, refetch, data: productData } = useQuery({
    queryKey: ['productData'],
    queryFn: () =>
      fetch(`https://car-seller-server-nine.vercel.app/addedProduct/${user.email}`)
        .then(res => res.json())
  })

  // advertise button handler
  const handleAdvetise = () => {
  }

  // product delete button handler
  const deleteProduct = (id, productName) => {
    const confirm = window.confirm('do you want to delete the Product')
    if (confirm) {
      fetch(`https://car-seller-server-nine.vercel.app/addedProduct/${id}?productName=${productName}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt-token")}`
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
  }


  if (isLoading) return <Spinner/>

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
              <th>Year of Use</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              productData.data.map((product, i) =>
                <tr key={product._id}>
                  <th>
                    <label>
                      {i + 1}.
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.product_name}</div>
                        <div className="font-normal">{product.category}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>purchase price:  $ <span className='line-through'>{product.original_price}</span></div>
                    <div className='text-xl font-semibold'>Selling price:  ${product.selling_price}</div>
                  </td>
                  <td>{product.location}</td>
                  <td>{product.years_of_use}</td>
                  <td>{product.status}</td>
                  <th>
                    <button
                      className="btn btn-info btn-xs mr-3"
                      onClick={handleAdvetise}>Advertise</button>
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => deleteProduct(product._id, product.product_name)}>Delete Product</button>
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