export default function Form(formHandler, formData) {
  return (
    <form className="container" onChange={formHandler}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="FirstName"
          name="firstName"
          value={formData.firstName}
        />
        <label htmlFor="floatingInput">First Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="last_name"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
        />
        <label htmlFor="last_name">Last Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          name="email"
          value={formData.email}
        />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="name@example.com"
          name="phone"
          value={formData.phone}
        />
        <label htmlFor="phone">Phone</label>
      </div>
    </form>
  );
}
