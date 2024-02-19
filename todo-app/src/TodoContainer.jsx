import React, { useState } from "react";

import sun from "./images/icon-sun.svg";
import SingleTask from "./SingleTask";

const TodoContainer = () => {

    const [activeState, setActiveState] = useState();

  return (
    <div className="w-[90%] mr-auto ml-auto text-white flex flex-col justify-center items-center gap-5 absolute top-10 right-0 left-0 ">
      <div className=" flex justify-between items-center w-full">
        <p className=" text-3xl font-bold tracking-widest">T O D O</p>

        <img className="w-6 h-6 cursor-pointer" src={sun} alt="" />
      </div>

      <div className="w-full flex items-center bg-[#25273c] text-white rounded-md pl-3">
        <div>
          <div className="w-6 h-6 bg-transparent rounded-full border-[2px] border-[#323449]"></div>
        </div>
        <input
          className="w-full bg-transparent pt-5 pb-5 pr-7 pl-3 border-none outline-none"
          type="text"
          placeholder="Add new task"
        />
      </div>

      <div className="w-full rounded- flex flex-col divide-y divide-[#36384d]">

        <SingleTask isChecked={true}/>
        <SingleTask isChecked={false}/>
        <SingleTask isChecked={true}/>

        

        <div className="w-full flex justify-between items-center bg-[#25273c] text-[#51526e] pt-5 pb-5 pl-3 pr-5 shadow-2xl">
          <p className=" tracking-widest text-[14px]">5 items left</p>

          <p className=" tracking-widest text-[14px] hover:text-white cursor-pointer">Clear Completed</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-5 bg-[#25273c] text-[#4c4e63] pt-5 pb-5 pl-3 pr-5 shadow-2xl">
        <p onClick={() =>{setActiveState(0)}} className={`tracking-widest cursor-pointer text-[16px] hover:text-white ${activeState == 0 ? 'text-[#4d7ad2] hover:text-[#4d7ad2]' : null}`}>All</p>
        <p onClick={() =>{setActiveState(1)}} className={`tracking-widest cursor-pointer text-[16px] hover:text-white ${activeState == 1 ? 'text-[#4d7ad2] hover:text-[#4d7ad2]' : null}`}>Active</p>
        <p onClick={() =>{setActiveState(2)}} className={`tracking-widest cursor-pointer text-[16px] hover:text-white ${activeState == 2 ? 'text-[#4d7ad2] hover:text-[#4d7ad2]' : null}`}>Completed</p>
      </div>

      <p className="text-[#4c4e63] mt-10 tracking-wide">Drag and drop to reorder the list</p>
    </div>
  );
};

export default TodoContainer;
