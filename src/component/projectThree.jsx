import React, { useState } from 'react';
import ModalCard from './modal';

const ProjectThree = () => {
  const [appData, setAppData] = useState([
    { id: 1, name: "Rolan Jay Isabida", job: 'Software', image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, name: "James Jay Isabida", job: 'Software', image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "Juan Jay De la Cruz", job: 'Software', image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" }
  ]
)
  const updateUserData = (id, newjob, newname) => {
    
    const newDataPerson = appData.map( (item, index)=> {

      if(id == item.id) {
        return {...item, name : newname, job: newjob}
      }

      return item
    })
    
    setAppData(newDataPerson)
    console.log(`${id}, ${newname}, ${newjob}`)
  }


  return (
    <div className='bg-gray-900 text-gray-50'>
      <div className="max-w-[1200px] mx-auto p-4">
        <h1 className='py-8 text-2xl font-bold'>Second Activity</h1>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">

          {appData.map((item, index) => (
            <div key={index} className="flex bg-white items-center justify-center rounded-lg">
              <div className="p-4 rounded-xl">
                <div className='w-[120px] h-[120px] rounded-full'><img className='w-full h-full object-cover rounded-full' src={item.image} alt="" /></div>
              </div>
              <div className="p-4">
                <p className="text-1xl font-bold text-gray-950">{item.name}</p>
                <p className="text-base text-gray-500 py-2">{item.job}</p>
                <ModalCard id = {item.id} propsupdateUserData = {updateUserData} name = {item.name} job = {item.job} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );

};

export default ProjectThree;
