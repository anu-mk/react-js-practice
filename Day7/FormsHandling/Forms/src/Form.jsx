import React, { useState } from "react";

const Form = () => {
  let [data, Formdata] = useState({
    username: "",
    password: "",
  });
  function handleChange(e) {
    let { name, value } = e.target;
    Formdata({
      ...data,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form</legend>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="username"
            onChange={handleChange}
          ></input>
          <br />
          <br />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          ></input>
          <br />
          <br />
          <button>Submit:</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
