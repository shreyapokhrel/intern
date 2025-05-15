import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [people, setPeople] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName } = name;

    if (firstName.trim() && lastName.trim()) {
      const fullName = `${firstName.trim()} ${lastName.trim()}`;
      setPeople((prevPeople) => [...prevPeople, fullName]);
      setName({ firstName: "", lastName: "" });
    }
  }

  function handleChange(e) {
    const { name: fieldName, value } = e.target;
    setName((prev) => ({ ...prev, [fieldName]: value }));
  }

  const isFormValid =
    name.firstName.trim() !== "" && name.lastName.trim() !== "";

  return (
    <div>
      <p>
        {name.firstName} - {name.lastName}
      </p>
      <p>first: {name.firstName}</p>
      <p>last: {name.lastName}</p>

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
        <button type="submit" disabled={!isFormValid}>
          Add
        </button>
      </form>

      {people.length > 0 && (
        <div>
          <p>People:</p>
          <ul>
            {people.map((person, index) => (
              <li key={index}>{person}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
