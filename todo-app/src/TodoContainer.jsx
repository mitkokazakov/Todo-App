import React from "react";

import sun from "./images/icon-sun.svg";
import cross from "./images/icon-cross.svg";

const TodoContainer = () => {
  return (
    <div className="w-[90%] mr-auto ml-auto text-white flex flex-col justify-center items-center gap-5">
      <div className=" flex justify-between items-center w-full">
        <p className=" text-3xl font-bold tracking-widest">TODO</p>

        <img className="w-6 h-6" src={sun} alt="" />
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

      <div className="w-full rounded-md flex flex-col divide-y divide-[#36384d]">
        <div className="w-full flex items-center bg-[#25273c] text-white pt-5 pb-5 pl-3">
          <div>
            <div className="w-6 h-6 bg-transparent rounded-full border-[2px] border-[#323449]"></div>
          </div>
          <p className="w-full bg-transparent ml-3"> Morning run on the lake</p>
          <img className="pr-5" src={cross} alt="" />
        </div>

        <div className="w-full flex items-center bg-[#25273c] text-white pt-5 pb-5 pl-3">
          <div>
            <div className="w-6 h-6 bg-transparent rounded-full border-[2px] border-[#323449]"></div>
          </div>
          <p className="w-full bg-transparent pl-3"> Morning run on the lake</p>
          <img className="pr-5" src={cross} alt="" />
        </div>

        <div className="w-full flex items-center bg-[#25273c] text-white pt-5 pb-5 pl-3">
          <div>
            <div className="w-6 h-6 bg-transparent rounded-full border-[2px] border-[#323449]"></div>
          </div>
          <p className="w-full bg-transparent pl-3"> Morning run on the lake</p>
          <img className="pr-5" src={cross} alt="" />
        </div>

        <div>
          <p>5 items left</p>

          <p>Clear Completed</p>
        </div>
      </div>

      <div>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div>

      <p>Drag and Drop to reorder</p>
    </div>
  );
};

export default TodoContainer;
