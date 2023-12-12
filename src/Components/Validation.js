// Import necessary React modules
import React, { useState } from 'react';
// import './style.css'; // Make sure to import your stylesheet

// Regular expression for email validation
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Validation = () => {
  // State to manage form values and errors
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
    submit: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [`${name}Error`]: '' });
  };

  // Function to validate name
  const validateName = () => {
    const { name } = formData;
    setErrors({
      ...errors,
      nameError:
        name.length === 0
          ? 'Name is required'
          : !name.match(/[a-zA-Z]+ [a-zA-Z]+/)
          ? 'Write last name'
          : '',
    });
  };

  // Function to validate phone number
  const validatePhone = () => {
    const { number } = formData;
    setErrors({
      ...errors,
      numberError:
        number.length === 0
          ? 'Number is required'
          : number.match(/[a-zA-Z]+/)
          ? 'Only digits please'
          : number.length !== 10
          ? 'Phone number should be 10 digits'
          : '',
    });
  };

  // Function to validate email
  const validateEmail = () => {
    const { email } = formData;
    setErrors({
      ...errors,
      emailError:
        email.length === 0
          ? 'Email is required'
          : !emailRegex.test(email)
          ? 'Invalid email'
          : '',
    });
  };

  // Function to validate message
  const validateMessage = () => {
    const { message } = formData;
    const required = 30;
    const left = required - message.length;
    setErrors({
      ...errors,
      messageError: left > 0 ? `${left} characters left` : '',
    });
  };

  // Function to validate the entire form
  const validateForm = () => {
    const { name, number, email, message } = formData;

    validateName();
    validatePhone();
    validateEmail();
    validateMessage();

    if (!name || !number || !email || !message) {
      setErrors({ ...errors, submitError: 'Please fix errors to submit' });
      setTimeout(() => setErrors({ ...errors, submitError: '' }), 3000);
      return false;   
    }

    return true;
  };

  return (
    <div className="container w-25">
      <h1 className='bg bg-info rounded text-center'>User Form</h1>
      <form>
        <div className="formItems">
          <input
            className='form-control'
            type="text"
            placeholder="Fullname"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={validateName}
          />
          <p className="text-danger">{errors.nameError}</p>
        </div>

        <div className="formItems">
          <input
           className='form-control'
            type="text"
            placeholder="Mobile Number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            onBlur={validatePhone}
          />
          <p className="text-danger">{errors.numberError}</p>
        </div>

        <div className="formItems">
          <input
           className='form-control'
            type="email"
            placeholder="Email Id"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateEmail}
          />
          <p className="text-danger">{errors.emailError}</p>
        </div>

        <div className="formItems">
          <textarea
          className='form-control'
            name="message"
            rows="4"
            placeholder="Message..."
            value={formData.message}
            onChange={handleInputChange}
            onBlur={validateMessage}
          ></textarea>
          <p className="error-textarea">{errors.messageError}</p>
        </div>

        <button className='btn btn-primary' onClick={() => validateForm()}>Submit</button>
        <p className="error" id="submit-error">
          {errors.submitError}
        </p>
      </form>
      <footer className='text-danger'>By Manchala</footer>
    </div>
  );
};

export default Validation;
