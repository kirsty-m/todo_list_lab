import './App.css';
import React, {useState} from 'react';

function App() {

  const [items, setItems] = useState([
    {name: 'Buy Shopping', priority: 'high'},
    {name: 'Clean bathroom', priority: 'low'},
    {name: 'Car\'s MOT', priority: 'high'}
  ]);

  const itemNodes = items.map((item, index) => {
    return(
      <li key={index} className={item.priority === 'high' ? "high" : "low"}>
        {item.name}
        <span>{item.priority}</span>
      </li>
    )
  })

  // const [newItem, setNewItem] = useState('');

  // const handleFormInput = (event) => {
    // console.log(event)
    
  // };

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items];
    let priorityValue;
    if (event.target.high.checked == true){
      priorityValue = 'high'}
    if (event.target.low.checked == true){
      priorityValue = 'low'}


    copyItems.push({name:event.target.new_item.value, priority:priorityValue});
    setItems(copyItems);


    console.log(event.target.new_item.value)
    console.log(event.target.high.checked)
    console.log(event)
    console.log(event.target.low.checked)
    

    
  }

  

  return (
    <div className="App">
      <h1>To-Do's</h1>
      <form onSubmit={saveNewItem}>
        <input type='text' id='new_item'></input>
        <input type='radio' id='high' name='priority' value='high'></input>
        <label htmlFor='high'>High</label>
        <input type='radio' id='low' name='priority' value='low'></input>
        <label htmlFor='low'>Low</label>
        <button type='submit'>Save Item</button>
      </form>

      <ul id='to-do-list'>
        {itemNodes}
      </ul>
      
    </div>
  );

  
};

export default App;
