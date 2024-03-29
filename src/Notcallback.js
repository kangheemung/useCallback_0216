import React, { useState } from 'react';

const Item = ({ name }) => {
    return (
      <div className="form-group">
        <label className="col-xs-4 control-label">{name}</label>
        <div className="col-xs-8">
          <input type='text' className='form-control' />
        </div>
      </div>
    );
  };

  function Notcallback() {
    const [list, setList] = useState([
      { name: 'Foo1444610101010', id: 1444610101010 },
      { name: 'Bar1444600000000', id: 1444600000000 }
    ]);

    const userInput = () => {
      const firstItems = Array.from(document.querySelectorAll('.form-group:first-child input'));
      firstItems.forEach((item) => item.value = 'It is ' + (new Date()).toTimeString());
    };

    const addItem = () => {
      const id = +new Date();
      setList([{ name: 'Baz' + id, id }, ...list]);
    };

  return (
    <div>
        <p>==================================</p>
        <p>useStateのみ使用</p>
      <b>How to use:</b> First write something in the inputs
      (or <a href='#' onClick={(e) => { e.preventDefault(); userInput(); }}>simulate it</a>).
      Then hit <em>Add item</em> and see what happens…
      <hr />
      <button className='btn btn-primary' onClick={addItem}>
        <b>Add item</b> to the beginning of the list
      </button>

      <h3>Dangerous <code>key=index</code></h3>
      <form className="form-horizontal">
          {list.map((todo, index) =>
            <Item {...todo} key={index} />
          )}
      </form>

      <h3>Better <code>key=id</code></h3>
      <form className="form-horizontal">
          {list.map((todo) =>
            <Item {...todo} key={todo.id} />
          )}
      </form>

      <hr />
      <a href='https://medium.com/p/e0349aece318'>&laquo; Back to the article</a>.
    </div>
  )
}

export default Notcallback
