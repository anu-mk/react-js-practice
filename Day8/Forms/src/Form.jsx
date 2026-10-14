import React, { useState } from "react";

const Form = () => {
  let [data, setFormData] = useState({
    Fname: "",
    Lname: "",
    username: "",
    password: "",
    date: "",
    gender: "",
    Contact: "",
    city: "",
    skills: [],
  });
  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({
      ...data,
      [name]: value,
    });
  }
  function handleSkills(e) {
    let { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...data,
        skills: [...data.skills, value],
      });
    } else {
      setFormData({
        ...data,
        skills: data.skills.filter((skill) => skill !== value),
      });
    }
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
          <label htmlFor="name">Fname:</label>
          <input
            type="text"
            id="name"
            name="Fname"
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="lname">Lname:</label>
          <input
            type="text"
            id="lname"
            name="Lname"
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="username">Username:</label>
          <input
            type="email"
            id="username"
            name="username"
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id=""
            name="date"
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="gender">Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <br />
          <br />
          <label htmlFor="Contact">Contact:</label>
          <input
            type="tel"
            id="Contact"
            name="Contact"
            maxLength="10"
            minLength="10"
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="city">City:</label>
          <select id="city" name="city" required onChange={handleChange}>
            <option value="">Select a city</option>
            <option value="Dvg">Dvg</option>
            <option value="Blgr">Blgr</option>
            <option value="chicago">Chicago</option>
          </select>
          <br />
          <br />
          <label htmlFor="skills">Skills:</label>
          <input
            type="checkbox"
            id="skills"
            name="skills"
            value="HTML"
            onChange={handleChange}
          />
          <label htmlFor="skills">HTML</label>
          <input
            type="checkbox"
            id="skills"
            name="skills"
            value="CSS"
            onChange={handleChange}
          />
          <label htmlFor="skills">CSS</label>
          <input
            type="checkbox"
            id="skills"
            name="skills"
            value="JS"
            onChange={handleChange}
          />
          <label htmlFor="skills">JS</label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
