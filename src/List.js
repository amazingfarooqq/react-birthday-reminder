import React from 'react';

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map(person => {
        const { id, name, age, image } = person
        return <article key={id} className="person">
          <img width="105px" src={image} alt="" />
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            <button className='remove' onClick={() => removePerson(id)}>Remove</button>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
