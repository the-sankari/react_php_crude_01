import { useState } from "react";

export default function CreateUser() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <div>
      <h2>Create User</h2>
      <form
        className="container "
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id=""
            aria-describedby="emailHelpId"
            placeholder="abc@mail.com"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id=""
            className="form-control"
            placeholder=""
            aria-describedby="helpId"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Save
        </button>
      </form>
    </div>
  );
}
