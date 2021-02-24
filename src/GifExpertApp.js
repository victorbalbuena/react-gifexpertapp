import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  // const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch']);

  // const handleAdd = () => {
  //   setcategories( ['HunterXHunter', ...categories] );
  //   setcategories( cats => [...categories, 'HunterXHunter'] );
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories= { setCategories } />
      <hr /> 

      <ol>
        {
          categories.map( (category,i) =>
           <GifGrid
            key={ category }
            category={ category } />
          )
        }
      </ol>

    </>
  )
}

// 54WSkjl5WYImmkKA7Pqpmg88r3WCyY0e