 import React from 'react'
 import components from '../../components';

const Timeline = () => {
  return (
    <article className="conatianer-100 flex  ">
       <div className=" w-1/5 hidden md:block">
       </div>
       <button className="w-4/6 grow bg-gray-700 h-auto my-20 py-10 px-2 text-center  md:px-40" style={{backgroundColor: "#21252B"}}>
          {/* all post in time-line */}
          <components.CreatePost></components.CreatePost>
       </button>
       <div className="w-2/4 md:w-96">
          {/* creete chat box  */}
       </div>


    </article>
  )
}

export default Timeline;
