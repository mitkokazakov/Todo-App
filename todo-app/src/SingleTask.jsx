import React from 'react'

import cross from "./images/icon-cross.svg";
import check from "./images/icon-check.svg";

const SingleTask = () => {
  return (
    <div className="group w-full flex items-center bg-[#25273c] text-[#b2b4cd] pt-5 pb-5 pl-3">
          <div className="relative">
            <div className=" relative w-6 h-6 bg-transparent rounded-full border-[2px] cursor-pointer border-[#323449] hover:border-[#70bdfb]">
                <img className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={check} alt="" />
            </div>
          </div>
          <p className="w-full bg-transparent ml-3 tracking-wider"> Morning run on the lake</p>
          <img className="pr-5 opacity-0 cursor-pointer group-hover:opacity-100 duration-500" src={cross} alt="" />
        </div>
  )
}

export default SingleTask
