import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import FilledButton from '../../SharedComponent/Buttons/FilledButton';

const AddAProduct = () => {
  const { user } = useContext(AuthContext)
  const navigate= useNavigate()
  const imgbbUrl = "https://api.imgbb.com/1/upload?key=33925baffb85e91b514a5e50db64550e"


  const handleOnSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const productName = form.productName.value;
    const purchase = form.purchase.value;
    const selling = form.selling.value;
    const usedYears = form.usedYears.value;
    const postingDate = form.postingDate.value;
    const description = form.description.value;
    const location = form.location.value;
    const category = form.category.value;
    const sellerEmail = user.email;
    const seller_name = user.displayName;


    // console.log(postingDate, productName, purchase, sellerEmail, selling, usedYears, location)
    // image adding to imgbb
    const image = form.image.files[0];
    const formData = new FormData()
    formData.append('image', image)

    fetch(imgbbUrl,
      {
        method: 'POST',
        body: formData
      })
      .then(res => res.json())
      .then(photoData => {

        // product data posting in the database.
        if (photoData.success) {
          const productData = {
            product_name: productName,
            category,
            img: photoData.data.display_url,
            description,
            original_price: purchase,
            selling_price: selling,
            location,
            years_of_use: usedYears,
            seller_name,
            posting_time: postingDate,
            sellerEmail,
            status:"unsold"
          }
          fetch('https://car-seller-server-nine.vercel.app/addedProduct', {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(productData)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.data.acknowledged) {
                toast.success('Product Added successfully');
                form.reset()
                navigate("/dashboard/myproduct")
              }
            })
        }
        else {
          toast.error('please provide a valid photo')
        }
      })
  }

  return (
    <section className="p-6 bg-[#D2DAFF] text-gray-500 w-3/5 mx-auto">
      <h1 className='text-center py-5 text-4xl font-bold text-orange-600'>Add Your Product</h1>
      <form
        className="container flex flex-col mx-auto space-y-12 w-3/5 "
        onSubmit={handleOnSubmit}>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full ">
            <div className="col-span-full ">
              <label htmlFor="productName" className="text-sm ml-2">Product Name</label>
              <input
                id="productName"
                name='productName'
                type="text"
                placeholder="Your car Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3"
              />
            </div>
            <div className="col-span-full ">
              <label htmlFor="image" className="text-sm ml-2">Product Image</label>
              <input
                id="image"
                type="file"
                name='image'
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3 flex-grow  h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300  shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline pt-2" />
            </div>
            <div className="col-span-full ">
              <label htmlFor="category" className="text-sm ml-2">Product Category</label>
              <select
                id='category'
                className="select w-full my-5 focus:border-blue-300 focus:outline-none focus:shadow-outline border-gray-300"
                name='category'>
                <option value={"Micro Buses"}>Micro Buses</option>
                <option>Luxury Cars</option>
                <option>Electric Cars</option>
              </select>
            </div>
            <div className="col-span-full lg:col-span-3 ">
              <label htmlFor="purchase" className="text-sm ml-2">Purchased Price</label>
              <input
                id="purchase"
                name='purchase'
                type="text"
                placeholder="purchasing price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" />
            </div>
            <div className="col-span-full  lg:col-span-3">
              <label htmlFor="selling" className="text-sm ml-2">Selling Price</label>
              <input
                id="selling"
                name='selling'
                type="text"
                placeholder="selling price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" />
            </div>
            <div className="col-span-full lg:col-span-3 ">
              <label htmlFor="usedYears" className="text-sm ml-2">Year of use</label>
              <input
                id="usedYears"
                name='usedYears'
                type="text"
                placeholder="year of use"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" />
            </div>
            <div className="col-span-full  lg:col-span-3">
              <label htmlFor="postingDate" className="text-sm ml-2">Posting Date</label>
              <input
                id="postingDate"
                name='postingDate'
                type="text"
                value={new Date()}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" disabled />
            </div>
            <div className="col-span-full  ">
              <label htmlFor="location" className="text-sm ml-2">Location</label>
              <input
                id="location"
                name='location'
                type="text"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" />
            </div>

          </div>
          <div className="col-span-full">
            <label htmlFor="bio" className="text-sm">Product Details</label>
            <textarea
              id="bio"
              name='description'
              placeholder=" your car description in brief"
              className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>

            <div className='flex justify-center items-center w-full mt-5'>
              <FilledButton btnType={'submit'} btnClassName={'inline-flex items-center justify-center w-3/4 h-12 px-6  mx-auto font-semibold transition duration-200 rounded shadow-md '}>Add Product</FilledButton>
            </div>
          </div>

        </fieldset>
      </form>
    </section>
  );
};

export default AddAProduct;