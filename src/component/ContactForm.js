import { useState } from "react";
import PostContact from "../services/postContact";


const ContactForm = ({history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async(e) => {
      if (!contact.name || !contact.email) {
        alert("all fields are mandatory !");
        return;
      }
      e.preventDefault();
      await PostContact(contact)
      setContact({ name: "", email: "" });
      history.push("/");
  };

  return (
    <div className="contactForm" >
      <h3>Add Contact</h3>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={changeHandler}
          value={contact.name}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={changeHandler}
          value={contact.email}
        />
        <button type="submit" className="addBtn">Add</button>
      </form>
    </div>
  );
};

export default ContactForm;
