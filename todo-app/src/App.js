
import TodoContainer from "./TodoContainer";
import React, { useEffect, useState } from "react";


function App() {

  const [darkMode, setDarkMode] = useState(true);

  function OnCLickDarkLightTheme(){
    if(darkMode){
      setDarkMode(false);
    }
    else{
      setDarkMode(true);
    }
  }

  return (
    <div className={`relative w-full min-h-[100vh] bg-white ${darkMode ? 'dark' : ''} dark:bg-[#181824]`}>
       <header className={`head-img min-h-[200px] md:min-h-[250px] w-full ${darkMode ? '' : 'light-img'}`}>

       </header>

       <TodoContainer darkThemeHandler={OnCLickDarkLightTheme}/>
    </div>
  );
}

export default App;
