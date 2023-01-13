import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvide/AuthProvider';
import FilledButton from '../../SharedComponent/Buttons/FilledButton';

const AddAProduct = () => {
  const { user } = useContext(AuthContext)
  const imgbbUrl = "https://api.imgbb.com/1/upload?key=33925baffb85e91b514a5e50db64550e"

  const handleOnSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const productName = form.productName.value;
    const purchase = form.purchase.value;
    const selling = form.selling.value;
    const userYears = form.userYears.value;
    const postingDate = form.postingDate.value;
    const description = form.description.value;
    const sellerEmail = user.email;

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
        const productData = {
          productName,
          purchase_price: purchase,
          selling_price: selling,
          userYears,
          description,
          postingDate,
          sellerEmail,
          productPhoto:photoData.data.display_url,
        }
        fetch('http://localhost:5000/addedProduct',{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(photoData)  
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.data.acknowledged){
            toast.success('Product Added successfully');
            form.reset()
          }
        })
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
              <label for="productName" className="text-sm ml-2">Product Name</label>
              <input
                id="productName"
                name='productName'
                type="text"
                placeholder="Your car Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3"
              />
            </div>
            <div className="col-span-full ">
              <label for="image" className="text-sm ml-2">Product Image</label>
              <input
                id="image"
                type="file"
                name='image'
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3 flex-grow  h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300  shadow-sm appearance-none focus:border-blue-300 focus:outline-none focus:shadow-outline pt-2" />
            </div>
            <div className="col-span-full lg:col-span-3 ">
              <label for="purchase" className="text-sm ml-2">Purchased Price</label>
              <input
                id="purchase"
                name='purchase'
                type="text"
                placeholder="purchasing price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" />
            </div>
            <div className="col-span-full  lg:col-span-3">
              <label for="selling" className="text-sm ml-2">Selling Price</label>
              <input
                id="selling"
                name='selling'
                type="text"
                placeholder="selling price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" />
            </div>
            <div className="col-span-full lg:col-span-3 ">
              <label for="usedYears" className="text-sm ml-2">Year of use</label>
              <input
                id="usedYears"
                name='userYears'
                type="text"
                placeholder="year of use"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" />
            </div>
            <div className="col-span-full  lg:col-span-3">
              <label for="postingDate" className="text-sm ml-2">Posting Date</label>
              <input
                id="postingDate"
                name='postingDate'
                type="text"
                value={new Date()}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  p-1 pl-3" disabled />
            </div>

          </div>
          <div className="col-span-full">
            <label for="bio" className="text-sm">Product Details</label>
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