import React from 'react'


const Contact = () => {
    
  return (
    
      <>
      <div className=' py-12 bg-gradient-to-r from-green-500 to-green-900 h-screen'>
  <form id='contactform' className="max-w-md mx-auto mt-16 mb-15 p-4 bg-white shadow-lg rounded flex flex-col">
    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        required
        minLength={3}
        placeholder='Enter Your Name'
        className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        required
        placeholder='Enter Valid Email'
        className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="phone" className="block mb-1">
        Phone No
      </label>
      <input
        type="tel"
        id="phone"
        required
        maxLength={10}
        placeholder='Enter Phone No'
        pattern="[0-9]{10}"
        className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block mb-1">
        Message
      </label>
      <textarea
        id="message"
        required minlength="10"
        placeholder='Enter Message'
        className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
    <button
      type="submit"
      className=" py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      Submit
    </button>
  </form>
  </div>
</>
    )
}


export default Contact
