import axios from "axios";
import React, { useState } from "react";

function AxiosPost() {
  const UserData = { fname: "", lname: "" };
  const [Data, setData] = useState(UserData);
  //SENDING DATA TO SERVER
  const sendData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", Data)
      .then((responce) => console.log(responce))
      .catch((error) => console.log(error));
  };

  // UPDATE DATA TO SERVER
  const updateData = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/users/1", Data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  //DELETE DATA TO SERVER
  const deleteData = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((responce) => console.log(responce))
      .catch((error) => console.log(error));
  };

  // UPDATE STATE
  function handleEvent(e) {
    e.preventDefault();
    setData({ ...Data, [e.target.name]: e.target.value });
  }
  console.log(Data);

  return (
    <div>
      <div>
        <label htmlFor="fname">First Name : </label>
        <input
          type="text"
          placeholder="First Name"
          name="fname"
          onInput={(e) => {
            handleEvent(e);
            console.log(e.target.value);
          }}
        />
        <br />
        <br />

        <label htmlFor="lname">Last Name : </label>
        <input
          type="text"
          placeholder="Last Name"
          name="lname"
          onInput={(e) => handleEvent(e)}
        />
        <br />
        <br />
        <button onClick={(e) => sendData(e)}>Submit</button>
        <button onClick={(e) => updateData(e)}>Update</button>
        <button onClick={(e) => deleteData(e)}>Delete</button>
      </div>
    </div>
  );
}

export default AxiosPost;
