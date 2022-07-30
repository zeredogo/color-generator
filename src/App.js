import React, { useState } from 'react';
import SingleColor from './SingleColor';
import './App.css';
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
          />
        </form>
        <button className=''
      </section>
      <section className='colors'>
        
      </section>
    </>    
  );
}

export default App;
