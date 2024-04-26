import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "Renu",
    email: "",
    password: "",
  });

  const changeValue = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log("Data", e);
  };

  const displayData = async (e) => {
    e.preventDefault();
    const response = await fetch("/submit", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData, response);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl p-4 m-4 text-center">Contact Us</h1>
      <form id="myForm" className="m-auto text-center" onSubmit={displayData}>
        <div className="mb-4">
          <label htmlFor="username">Username:</label>
          <input
            className="border border-black m-auto p-2"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onInput={(e) => changeValue(e)}
            required
          />
        </div>
        <div className=" mb-4">
          <label htmlFor="email">Email:</label>
          <input
            className="border border-black m-auto p-2"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onInput={(e) => changeValue(e)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input
            className="border border-black m-auto p-2"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onInput={(e) => changeValue(e)}
            required
          />
        </div>
        <button
          className="border border-black rounded-lg p-2 m-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
