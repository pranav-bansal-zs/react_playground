import React, { useState } from "react";
import './Form.css';

function Form() {
  const [hasError, setHasError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submittedData, setSubmittedData] = useState(null); 
  function handleSubmit(e) {
    e.preventDefault();

    setNameError("");
    setEmailError("");
    setHasError(false); 

    if (name.trim() === "") {
      setNameError("Name cannot be empty");
      setHasError(true);
    } else if (/\d/.test(name)) {
      setNameError("Name cannot contain digits");
      setHasError(true);
    }
    if (email.trim() === "") {
      setEmailError("Email cannot be empty");
      setHasError(true);
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Invalid email format");
      setHasError(true);
    }
    if (hasError) return;
    setSubmittedData({ name, email });
    setName(name);
    setEmail(email);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        {nameError && <h5 className="error-message">{nameError}</h5>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        {emailError && <h5 className="error-message">{emailError}</h5>}

        <button type="submit" className="submit-button">Submit</button>
      </form>
      {!hasError && submittedData && (
        <div className="submitted-data">
          <h5>Form submitted successfully!</h5>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      )}
    </>
  );
}

export default Form;
