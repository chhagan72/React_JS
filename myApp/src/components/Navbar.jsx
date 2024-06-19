import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import "./Navbar.css"

const Navbar = () => {
    const amount = useSelector(state => state.amount)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Mini Bank of ck</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                <a className="nav-link" href="./About">About Us</a>
            </div>
        </div>
        <div className="amount">
        <button className='btn btn-primary p-3' >Your amount {amount}</button>
        </div>
    </div>
</nav>
  )
}

export default Navbar