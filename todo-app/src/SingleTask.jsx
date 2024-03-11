import React, { useEffect, useState } from "react";

import cross from "./images/icon-cross.svg";
import check from "./images/icon-check.svg";

const SingleTask = ({ isChecked, title, id, setTodo}) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, []);

  function OnClickRoundBtn() {
    //setChecked(!checked);

    setTodo((prevArr) => {
      let newArr = prevArr.map((x) => {
        if (x.id == id) {
          if (x.isFinished == false) {
            return { ...x, isFinished: true };
          } else {
            return { ...x, isFinished: false };
          }
        } else {
          return x;
        }
      });

      return newArr;
    });
  }

  function OnClickDeleteButton() {
    setTodo((prevArr) => {
      let newArr = prevArr.map((x) => {
        if (x.id == id) {
          return { ...x, isDeleted: true };
        } else {
          return x;
        }
      });

      return newArr;
    });
  }


  return (
    <div
      className="group w-full flex items-center bg-[white] text-[#323449] pt-5 pb-5 pl-3 dark:bg-[#25273c] dark:text-[#b2b4cd] cursor-grab"
      
    >
      <div className="relative">
        <div
          className={`relative w-6 h-6 ${
            isChecked
              ? "bg-gradient-to-r from-[#70bdfb] to-[#a476e8] border-none"
              : "bg-transparent border-[#a3a4b5] dark:border-[#484a61]"
          } rounded-full border-[1px] cursor-pointer hover:border-[#70bdfb] duration-500`}
          onClick={OnClickRoundBtn}
        >
          <img
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
              isChecked ? "opacity-100" : "opacity-0"
            } duration-500`}
            src={check}
            alt=""
          />
        </div>
      </div>
      <p
        className={`w-full bg-transparent ml-3 tracking-wider duration-500 ${
          isChecked ? "line-through text-[#4c4e63]" : ""
        }`}
      >
        {title}
      </p>
      <img
        className="pr-5 opacity-0 cursor-pointer group-hover:opacity-100 duration-500"
        src={cross}
        alt=""
        onClick={OnClickDeleteButton}
      />
    </div>
  );
};

export default SingleTask;
