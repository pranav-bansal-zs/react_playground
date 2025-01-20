import { useState } from "react";

function Form(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameerror, setNameError] = useState("");
  const [emailerror, setEmailError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if(name === ""){
        setNameError("name cannot be empty")
    }
    if(/\d/.test(name)){
        setNameError("name cannot contains digits")
    }
    if(email=== ""){
        setEmailError("email cannot be empty")
    }
    return ;
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        {nameerror && <h5 style={{ color: "red" }}>{nameerror}</h5>}

        <label>Address</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         {emailerror && <h5 style={{ color: "red" }}>{emailerror}</h5>}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}


export default Form;
