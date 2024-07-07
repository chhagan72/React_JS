// import './App.css';
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:  <><Navbar/><Home /></>,
    },
    {
      path: 'Login',
      element:  <><Navbar/><Login /></>,
    },
    {
      path: '/About',
      element:  <><Navbar/><About /></>,
    }
  ])
  return (
    <div className="App">
      <h1>This is a Router practice</h1>
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
