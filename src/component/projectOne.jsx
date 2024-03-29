import React from 'react'

const projectOne = () => {
  return (
    <div>
      <div className="bg-gray-900">
         <div className='max-w-[1200px] mx-auto h-screen flex items-center justify-center'>
            <div className='w-full md:max-w-[600px] mx-auto text-center '>
                <h1 className='font-bold text-white py-4 font-4xl'>WELCOME TO MY REACT PROJECT <br /> <span className='text-yellow-200 md:text-5xl text-3xl'>COMPILATION</span></h1>
                <p className="py-4 text-base text-gray-100">Hello, my name is <span className='text-orange-200 text-1xl'>[Your Full Name]</span> and I am currently studying at Ginggog City Colleges. My goal is to [Put your goal here]. In five years, I envision myself as [What you would become in 5 years].</p>
                <button className="bg-purple-800 hover:bg-gray-500 border-white py-2 px-6 rounded-sm text-white text-base font-bold my-4">What I Learn</button>
            </div>
            
         </div>
      </div>
    </div>
  )
}

export default projectOne
