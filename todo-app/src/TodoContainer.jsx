import React, { useEffect, useState } from "react";

import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";


import SingleTask from "./SingleTask";

import todo from "./todolist.js";

const TodoContainer = () => {
  const [activeState, setActiveState] = useState(1);

  const [todolist, setTodolist] = useState(todo);

  const [inputTask, setInputTask] = useState("");

  const [filtered, setFiltered] = useState(0);

  const [theme, setTheme] = useState('dark');
  

  useEffect(() => {
    //setTodolist(todo);

    if (todolist) {
      setFiltered(
        todolist.filter((t) => {
          return t.isFinished == false && t.isDeleted == false;
        }).length
      );
    }
  }, [todolist, activeState]);

  function ClearAllCompletedTasks() {
    setTodolist((t) => {
      return t.filter((task) => {
        if (task.isFinished == true) {
          return (task.isDeleted = true);
        } else {
          return task;
        }
      });
    });
  }

  function PressEnterKeyOnInput(e) {
    if (e.key == "Enter" && inputTask != "" && inputTask.length > 1) {
      console.log(e.key);

      setTodolist((oldArray) => [
        ...oldArray,
        {
          id: todolist.length + 1,
          title: inputTask,
          isDeleted: false,
          isFinished: false,
        },
      ]);

      setInputTask("");
    }
  }

  function SetInputTaskOnChange(e) {
    let currentInput = e.target.value;

    setInputTask(currentInput);
  }

  function OnCLickDarkLightTheme(){
    if(theme == 'dark'){
      setTheme('light');
    }
    else{
      setTheme('dark');
    }
  }

  return (
    <div className="w-[90%] mr-auto ml-auto text-white flex flex-col justify-center items-center gap-5 translate-y-[-150px] md:w-[700px] md:translate-y-[-200px]">
      <div className=" flex justify-between items-center w-full">
        <p className=" text-3xl font-bold tracking-widest">T O D O</p>

        <div  className="w-6 h-6 cursor-pointer relative">
          <img className={`w-full h-full cursor-pointer absolute top-0 left-0 duration-500 ${theme != 'dark' ? 'opacity-1000' : 'opacity-0'}`} src={moon} alt="" onClick={OnCLickDarkLightTheme}/>
          <img className={`w-full h-full cursor-pointer absolute top-0 left-0 duration-500 ${theme == 'dark' ? 'opacity-100' : 'opacity-0'}`} src={sun} alt="" onClick={OnCLickDarkLightTheme}/>
        </div>
      </div>

      <div className="w-full flex items-center bg-[#25273c] text-white rounded-md pl-3">
        <div>
          <div className="w-6 h-6 bg-transparent rounded-full border-[2px] border-[#323449]"></div>
        </div>
        <input
          className="w-full bg-transparent pt-5 pb-5 pr-7 pl-3 border-none outline-none"
          type="text"
          placeholder="Add new task"
          value={inputTask}
          onKeyDown={PressEnterKeyOnInput}
          onChange={SetInputTaskOnChange}
        />
      </div>

      <div className="w-full rounded-md overflow-hidden flex flex-col divide-y divide-[#36384d]">
        {activeState == 1 && todolist
          ? todolist
              .filter((t) => {
                return t.isDeleted == false;
              })
              .map((t) => {
                return (
                  <SingleTask
                    key={t.id}
                    title={t.title}
                    id={t.id}
                    isChecked={t.isFinished}
                    setTodo={setTodolist}
                  />
                );
              })
          : null}

        {activeState == 2 && todolist
          ? todolist
              .filter((t) => {
                return t.isFinished == false && t.isDeleted == false;
              })
              .map((t) => {
                return (
                  <SingleTask
                    key={t.id}
                    title={t.title}
                    id={t.id}
                    isChecked={t.isFinished}
                    setTodo={setTodolist}
                  />
                );
              })
          : null}

        {activeState == 3 && todolist
          ? todolist
              .filter((t) => {
                return t.isFinished == true && t.isDeleted == false;
              })
              .map((t) => {
                return (
                  <SingleTask
                    key={t.id}
                    title={t.title}
                    id={t.id}
                    isChecked={t.isFinished}
                    setTodo={setTodolist}
                  />
                );
              })
          : null}

        <div className="w-full flex justify-between items-center bg-[#25273c] text-[#51526e] pt-5 pb-5 pl-3 pr-5 shadow-2xl">
          <p className=" tracking-widest text-[14px]">{filtered} items left</p>

          <div className=" hidden md:flex justify-center items-center gap-5 bg-[#25273c] text-[#4c4e63] ">
            <p
              onClick={() => {
                setActiveState(1);
              }}
              className={`tracking-widest cursor-pointer text-[16px] ${
                activeState == 1
                  ? "text-[#4d7ad2] hover:text-[#4d7ad2]"
                  : "hover:text-white"
              }`}
            >
              All
            </p>
            <p
              onClick={() => {
                setActiveState(2);
              }}
              className={`tracking-widest cursor-pointer text-[16px] ${
                activeState == 2
                  ? "text-[#4d7ad2] hover:text-[#4d7ad2]"
                  : "hover:text-white"
              }`}
            >
              Active
            </p>
            <p
              onClick={() => {
                setActiveState(3);
              }}
              className={`tracking-widest cursor-pointer text-[16px] ${
                activeState == 3
                  ? "text-[#4d7ad2] hover:text-[#4d7ad2]"
                  : "hover:text-white"
              }`}
            >
              Completed
            </p>
          </div>

          <p
            className=" tracking-widest text-[14px] hover:text-white cursor-pointer"
            onClick={ClearAllCompletedTasks}
          >
            Clear Completed
          </p>
        </div>
      </div>

      <div className=" md:hidden w-full flex justify-center items-center gap-5 bg-[#25273c] text-[#4c4e63] pt-5 pb-5 pl-3 pr-5 shadow-2xl rounded-md">
        <p
          onClick={() => {
            setActiveState(1);
          }}
          className={`tracking-widest cursor-pointer text-[16px] ${
            activeState == 1
              ? "text-[#4d7ad2] hover:text-[#4d7ad2]"
              : "hover:text-white"
          }`}
        >
          All
        </p>
        <p
          onClick={() => {
            setActiveState(2);
          }}
          className={`tracking-widest cursor-pointer text-[16px] ${
            activeState == 2
              ? "text-[#4d7ad2] hover:text-[#4d7ad2]"
              : "hover:text-white"
          }`}
        >
          Active
        </p>
        <p
          onClick={() => {
            setActiveState(3);
          }}
          className={`tracking-widest cursor-pointer text-[16px] ${
            activeState == 3
              ? "text-[#4d7ad2] hover:text-[#4d7ad2]"
              : "hover:text-white"
          }`}
        >
          Completed
        </p>
      </div>

      <p className="text-[#4c4e63] mt-10 tracking-wide font-bold">
        Drag and drop to reorder the list
      </p>
    </div>
  );
};

export default TodoContainer;
