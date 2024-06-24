import React, { useEffect, useState } from 'react';

const Practice = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then((res) => {
        let a = res.recipes.map((recipe) => {
          return {
            ...recipe,
            like: 0
          };
        });
        setData(a);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleLike = (recipe) => {
    console.log(recipe);
    let updatedData = data.map((item) => {
      if (recipe.id === item.id) {
        return {
          ...item,
          like: item.like + 1
        };
      }
      return item;
    });
    setData(updatedData);
  };

  return (
    <>
      {data?.map((item) => (
        <div key={item.id} style={{ border: "2px solid black", margin: "10px", padding: "10px" }}>
          <p>{item.caloriesPerServing}</p>
          <p>{item.name}</p>
          <button onClick={() => handleLike(item)}>{item.like}</button>
        </div>
      ))}
    </>
  );
}

export default Practice;