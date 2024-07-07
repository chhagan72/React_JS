import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/"><button>Home</button></Link></li>
                    <li><Link to="/Login"><button>Login</button></Link></li>
                    <li><Link to="/About"><button>About Us</button></Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Navbar