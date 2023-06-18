

import React from 'react';

import { TodoProvider } from './TodoContext/TodoContext';

import { AppUI } from './AppUI/AppUI';

/* const taskItems = [
  {text:"Aprender React",completed:true},
  {text:"Conseguir trabajo",completed:false},
  {text:"Decir PLATZI SE PAGA SOLO",completed:false}
] */

function App() {

  return (
    /* <div className="App"> */
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    /*</div>*/
  );
}

export default App;
