import React, { useState, useEffect, useRef } from 'react';
import '../src/App.css'
import './index.css';

function App() {

  const [list, setlist] = useState(JSON.parse(localStorage.getItem('save')));
  const inputref = useRef();




  // useEffect(() => {
  //   localStorage.setItem('save', JSON.stringify(list));
  // }, [setlist]);




  const additem = () => {
    const text = inputref.current.value;
    const newitem = { completed: false, text };

    inputref.current.value = '';

    setlist([...list, newitem]);

  };




  const itemdone = (i) => {
    const newtodos = [...list];
    newtodos[i].completed = !newtodos[i].completed;
    setlist(newtodos);


  };

  const DeleteLi = (i) => {
    const newtodos = [...list];
    newtodos.splice(i, 1);
    setlist(newtodos);


  }

  useEffect(() => {
    localStorage.setItem('save', JSON.stringify(list));
  }, [list]);




  return (
    <div className="App">
      <div className='container'>
        <div className="todo-app">
          <div className="app-title">
            <h2>To-do app</h2>
            <i className="fa-solid fa-book-bookmark"></i>
          </div>
          <form>
            <div className="row">
              <input type="text"
                ref={inputref}
                placeholder="add your tasks" required autoFocus />
              <button onClick={additem}>Add</button>
            </div>
            <ul id="list-container">
              {list.map(({ text, completed }, i) => {
                return (
                  <div key={i}> {/* Move the key prop to the wrapping div */}
                    <li className={completed ? 'done' : null} onClick={() => itemdone(i)} >{text}</li>
                    <span onClick={() => DeleteLi(i)} className='X' >X</span>
                  </div>
                )
              })}
            </ul>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
