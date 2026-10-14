import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
        <fieldset>
          <legend>Form</legend>
          <label for="username">Username:</label>
          <input type="text" placeholder="Enter your name" required></input>
          <br></br>
          <label for="pass">Password:</label>
          <input
            type="password"
            id="pass"
            placeholder="Enter your password"
            required
          ></input>
          <br />
          <br></br>
          <label for="contact no">ContactNo:</label>
          <button type="submit">submit:</button>
        </fieldset>
      </form>
    </div>
    
  );
};

export default LoginForm;
