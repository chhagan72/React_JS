import React, { useState } from 'react';
import "./registration.css"

const RegistrationForm = () => {
    const [name1, setName]=useState("")
    const [email1, setEmail]=useState("")
    const [password1, setPassword]=useState("")


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.username) formErrors.username = 'Username is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!formData.password) formErrors.password = 'Password is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Form is valid, proceed with submission
            console.log('Form Data:', formData);
            setSubmitted(true);
            // You can send formData to your server here
        } else {
            setErrors(formErrors);
        }
    };
    const collectionData=()=>{
        console.warn(name1, email1, password1);
        const result = fetch(' ')
    }

    return (
        <div className="registration-form">
            <h2>Register</h2>
            {submitted && <p className="success-message">Registration successful!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
