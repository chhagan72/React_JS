import React, { useState } from 'react';
import './createuser.css';
import axios from 'axios';
// import './Node.js'

const CreateUser = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    
    try {
      const response = await axios.post('http://localhost/api/user/submit', formData);
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key.replace('_', ' ').toUpperCase()}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
