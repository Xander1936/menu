import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Set allCategories into a new array
// And with the spread operators (...) display the others categories with the ...new Set() Method
const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories);

function App() {
const [menuItems, setMenuItems] = useState(items);
const [categories, setCategories] = useState(allCategories);

const filterItems = (category) => {
  if (category === 'all') {
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
}

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  ) 
}

export default App;

// <></>
