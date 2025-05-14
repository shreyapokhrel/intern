/* import { useState } from "react";
export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    //setName(e.target.value);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />
        <button onClick={(e)=>handleSubmit(e)}>Add</button>
      </form>
    </div>
  );
}
 */

import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [person, setPerson] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    setPerson(`${name.firstName} ${name.lastName}`);
  }

  function handleChange(e) {
    const { name: fieldName, value } = e.target;
    setName((prev) => ({ ...prev, [fieldName]: value }));
    setIsSubmitted(false); // Re-enable button on input change
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
