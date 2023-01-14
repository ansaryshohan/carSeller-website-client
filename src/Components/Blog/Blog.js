import React from 'react';
import HeadTitle from '../../SharedComponent/HeadTitle/HeadTitle';

const Blog = () => {
  return (
    <div>
      {/* Head title component is here */}
      <HeadTitle title='Blog' />

      <div>
        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. What are the different ways to manage a state in React application?</h1>
          <p className='text-lg font-normal pl-4'>States can be managed in different ways. <br />The built-in way that React provides for setting component states is by using setState(). <br /> states can be managed by:<br />

            1. Hooks<br />
            2. Context Api<br />
          </p>
        </div>

        {/* question no-2 */}
        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. How does prototypical inheritance works?</h1>
          <p className='text-lg font-normal pl-4'>JavaScript is a prototype-based, Object Oriented programming language. meaning that objects and methods can be shared, extended, and copied.<br />
            When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. How prototypical inheritance works: <br />

            1. The property [[Prototype]] is internal and hidden, but there are many ways to set it.
            One of them is to use the special name __proto__. <br />
            2. The prototypical inheritance can not go through circle. it will give error. <br />
            3.the value of __proto__ can either be an object or null. <br />
            4. The prototype is only used for reading properties.
            Write/delete operations work directly with the object..
          </p>
        </div>

        {/*question no-3 */}
        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. What is unit test? Why should we write unit test?</h1>
          <p className='text-lg font-normal pl-4'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system.
            <br /> We should write unit test for:
            <br />
            1. Checking our work. <br />
            2. Text driven development. <br />
            3. For code documentation.
          </p>
        </div>


        {/* question no 4 */}
        <div className='w-4/5 mx-auto pl-10 py-8 border  mt-10  shadow-xl mb-5 rounded-xl'>
          <h1 className='text-xl font-medium text-[#028090] mb-3'>Q. React vs Angular vs Vue?</h1>
          <p className='text-lg font-normal pl-4'>
           1.REACT: React is a JavaScript library. Maintains a Virtual DOM.<br /> 
           2.ANGULAR: Angular is a complete framework build on TypeScript.A superset of JavaScript.<br />
            3.VUE: Vue is a framework of JavaScript. its simplified and offer flexibility. </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;