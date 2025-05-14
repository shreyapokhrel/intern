import { useState, useEffect, useLayoutEffect } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [person, setPerson] = useState("");


  useEffect(() => {
    if (isSubmitted) {
      console.log("Form Submitted with:", person);
    }
  }, [person, isSubmitted]); 

  
  useLayoutEffect(() => {
    console.log("Layout effect triggered before the paint");
  }, []); 

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    setPerson(`${name.firstName} ${name.lastName}`);
  }

  function handleChange(e) {
    const { name: fieldName, value } = e.target;
    setName((prev) => ({ ...prev, [fieldName]: value }));
    setIsSubmitted(false); 
  }

  return (
    <div>
      <p>
        {name.firstName || "N/A"} - {name.lastName || "N/A"}
      </p>
      <p>first: {name.firstName || "N/A"}</p>
      <p>
        last: {name.firstName || "N/A"}-{name.lastName || "N/A"}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          onChange={handleChange}
          type="text"
          value={name.firstName}
          placeholder="First Name"
        />

        <input
          name="lastName"
          onChange={handleChange}
          type="text"
          value={name.lastName}
          placeholder="Last Name"
        />

        <button type="submit" disabled={isSubmitted}>
          Add
        </button>
      </form>

      {person && <p>person: {person}</p>}
    </div>
  );
}
