import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListUser from './components/ListUser'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'

function App() {
  return (
    <>
      {/* <Api/> */}

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/"><button>List Users</button></Link></li>
            <li><Link to="/user/create"><button>Create Users</button></Link></li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path='user/create' element={<CreateUser />} />
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
