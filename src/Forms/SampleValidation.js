import React, { useState } from 'react';

const Validation = () => {
  
  const [fields, setFields] = useState({
    firstName: '',
    emailAddress: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    firstName: '',
    emailAddress: '',
    password: ''
  });
    const [cityMsg, setCityMsg] = useState('');

  const validate = (name, value) => {
    switch (name) {
        case "firstName":
            if (!value) {
                return "First name is Required";
            } else if(!value.match(/^[a-zA-Z]+$/g, ' ')){
                return "Please enter valid first name";
            } else {
                return "";
            }
        case "emailAddress":
            if (!value) {
            return "Email is Required";
            } else if (
            !value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            ) {
            return "Enter a valid email address";
            } else {
            return "";
            }
        case "password":
            if (!value) {
            return "Password is Required";
            } else if (value.length < 8 || value.length > 15) {
            return "Please fill at least 8 character";
            } else if (!value.match(/[a-z]/g)) {
            return "Please enter at least lower character.";
            } else if (!value.match(/[A-Z]/g)) {
            return "Please enter at least upper character.";
            } else if (!value.match(/[0-9]/g)) {
            return "Please enter at least one digit.";
            } else {
            return "";
            }
        default: {
            return "";
        }
    }
  };
  function VerifyCity(e){
    if(e.target.value=="notcity") {
        setCityMsg('Please Select a City');
    } else {
        setCityMsg('');
    }
}

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate(name, value)
    }));
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      if (fields.firstName && fields.emailAddress && fields.password) {
        const data = {
          firstName: fields.firstName,
          email: fields.emailAddress,
          password: fields.password
        };
        // window.alert('submit success', JSON.stringify(data));
        console.log('----data----', data);
      }
    }
  };

  return (
    <>
    <div>
        <div >
            <h2>Form_Validation</h2>
        </div>
      <div className="container-fluid mt-3">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              type="text"
              name="firstName"
              value={fields.firstName}
              onChange={handleUserInput}
              placeholder="First Name"
              className='form-control w-25'
             
            />
            <span className="text-danger">{errors.firstName}</span>
          </div>

          <div className="mt-2">
            <input
              type="text"
              placeholder="Enter email address"
              name="emailAddress"
              value={fields.emailAddress}
              onChange={handleUserInput}
              className='form-control w-25' 
            />
            <span className="text-danger">{errors.emailAddress}</span>
          </div>

          <div className="mt-2">
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={fields.password}
              onChange={handleUserInput}
              className='form-control w-25'
            />
            <span className="text-danger">{errors.password}</span>
          </div>
          <div  className="mt-2">
          <select onChange={VerifyCity}>
                        <option value="notcity">Select Your City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyd">Hyd</option>
          </select>
          </div>
          <div className='mt-2'>
            <button  type="submit" className="btn btn-success">
              Register now
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Validation;
