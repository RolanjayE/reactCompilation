import React, { useState } from 'react';

const ProjectTwo = ({ data }) => {

  const [itemData, setItemData] = useState(data);
      
  return (
    <div className='bg-gray-50 w-full'>

        <div className="p-4">
            <h1 className='py-8 text-2xl font-bold'>First Activity</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-sm">

                { itemData.map((items, index) => (
                    <div key={index} className="max-h-200px shadow-lg">
                        <div>
                            <img className='object-cover h-[200px] w-full rounded-xl' src={items.image} alt="" />
                        </div>
                        <p className="text-1xl font-bold text-gray-600 p-4">{items.title}</p>
                    </div>
                ))}

            </div>
        </div>

    </div>
  );
};

export default ProjectTwo;
