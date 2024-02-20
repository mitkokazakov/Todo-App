import React, { useEffect, useState } from "react";

import cross from "./images/icon-cross.svg";
import check from "./images/icon-check.svg";

const SingleTask = ({ isChecked, title, id, setTodo }) => {
  const [checked, setChecked] = useState(isChecked);

  useEffect(() => {
    setChecked(isChecked);
  }, []);

  function OnClickRoundBtn() {
    setChecked(!checked);

    setTodo((t) => {
      let current = t.find((x) => x.id == id);

      if (current.isFinished == true) {
        current.isFinished = false;
      } else {
        current.isFinished = true;
        console.log(true);
      }
    });
  }

  function OnClickDeleteButton() {
    setTodo((t) => {
      let current = t.find(x => x.id == id);

      current.isDeleted = true;

      // return t.filter((obj) => {
      //   return obj.id != id;
      // });

      // let newTodo = t.filter((obj) =>{
      //   return obj.id != id;
      // })

      // return newTodo;
    });
  }

  return (
    <div className="group w-full flex items-center bg-[#25273c] text-[#b2b4cd] pt-5 pb-5 pl-3">
      <div className="relative">
        <div
          className={`relative w-6 h-6 ${
            checked
              ? "bg-gradient-to-r from-[#70bdfb] to-[#a476e8]"
              : "bg-transparent"
          } rounded-full border-[2px] cursor-pointer border-[#323449] hover:border-[#70bdfb] duration-500`}
          onClick={OnClickRoundBtn}
        >
          <img
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
              checked ? "opacity-100" : "opacity-0"
            } duration-500`}
            src={check}
            alt=""
          />
        </div>
      </div>
      <p
        className={`w-full bg-transparent ml-3 tracking-wider duration-500 ${
          checked ? "line-through text-[#4c4e63]" : ""
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
