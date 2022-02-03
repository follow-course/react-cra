import './App.css';
import { useState } from 'react';
import Title from './components/Title';

function App() {

  const [name, setName] = useState('Maria');
  const [events, setEvents] = useState([
    {title: 'Title one', id: 1},
    {title: 'Title two', id: 2},
    {title: 'Title three', id: 3},
  ]);
  const [showEvents, setShowEvents] = useState(true);

  const handleClick = () => {
    setName('Ifeoma');
  }

  const handleEventDeleteClick = (id) => {
    // setEvents(events.filter((event) => {
    //     return id !== event.id;
    // }));
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  }

  return (
    <div className="App">
      <Title />
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>
      <hr />
      {showEvents && (
        <div>
          <button onClick={() => {setShowEvents(false)}}>Hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => {setShowEvents(true)}}>Show events</button>
        </div>
      )}
      {showEvents && events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => {handleEventDeleteClick(event.id)}}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
