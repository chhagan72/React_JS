import React from 'react'
import { useState, useEffect } from 'react'

const FoodList = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => {
                  if (!response.ok) {
                  throw new error("The newtwork response are not ok")

                }
                return response.json();
            })
            .then(data => {
                setMeals(data.meals);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            <div className="mealList">
                <h1>Meal List</h1>
                <ul style={
                    { listStyle: "number", border: "2px solid black"}
                }>
                    {/* {meals.map(meal => */}
                    {meals && meals.map(meal =>
                        <li style={
                            {  border: "2px solid black"}
                        } key={meal.idMeal}>{meal.strMeal}</li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default FoodList