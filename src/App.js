import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [people, setPeople] = useState(data)


  const removePerson = (id) => {
    let filter = people.filter(item => item.id !== id)
    setPeople(filter)
  }


  return (
    <main>
      <section className='container'>
        <h3> {people.length} Birthdays Today</h3>
        <List people={people} setPeople={setPeople}  removePerson={removePerson}/>
        <button onClick={() => setPeople([])}>Clear list</button>
        <button onClick={() => setPeople(data)}>Refresh</button>
      </section>
    </main>
  );

}

export default App;
