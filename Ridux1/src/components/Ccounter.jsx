import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './redux/counter/counterSlice'

const Ccounter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div classNameName='container-fluid'>
            <div className="card" style={{width: 250}}>
                <img src="https://imgs.search.brave.com/RR7MWUNlX8IwL21AsO9CxVxXYOQ7mCOh8vjw6vPmFYM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y291bnR0aGluZ3Mu/Y29tL3dlYnNpdGVz/dGF0aWNmaWxlcy9J/bWFnZXMvd2Vic2l0/ZS9uZXdfZGVzaWdu/L3VzZXM0LmpwZw" className="card-img-top" alt="https://imgs.search.brave.com/RR7MWUNlX8IwL21AsO9CxVxXYOQ7mCOh8vjw6vPmFYM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y291bnR0aGluZ3Mu/Y29tL3dlYnNpdGVz/dGF0aWNmaWxlcy9J/bWFnZXMvd2Vic2l0/ZS9uZXdfZGVzaWdu/L3VzZXM0LmpwZw" />
                <div className="card-body">
                    <h5 className="card-title">Counter</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className='btn'>{count}</button><br />
                    <a href="#" className="btn btn-primary"  onClick={() => dispatch(increment())}>Like</a>
                </div>
            </div>
        </div>
    )
}

export default Ccounter