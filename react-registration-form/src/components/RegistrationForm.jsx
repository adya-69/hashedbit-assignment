import React, { useState } from 'react';
import Input from './input';

function RegistrationForm() {
  const [formData, setFormData] = useState({ name: '', email: '', address: '', password: '', mobile: '' });
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.name === "" || formData.email === "" || formData.password === "") {
      setOutput("Name or Email or Password Can't be Empty")
    }
    else {
      setOutput(`Name = ${formData.name}\nEmail = ${formData.email}\nPassword = Hidden \nAddress = ${formData.address}\nPhone No. = ${formData.mobile}`);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className='form-cont' >
        <h2>Registration Form</h2>
        <Input
         label="Name = "
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br/>
        <Input
          label="Email = "
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br/>
        <Input
          label="Password = "
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br/>
        <Input
          label="Address = "
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange} 
         />
         <br/>
        <Input
          label="Mobile = "
          type="number"
          name="mobile"
          value={formData.number}
          onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
      <p>Form Submitted: <pre className='output'>{output}</pre></p>
    </div>
  );
}

export default RegistrationForm;