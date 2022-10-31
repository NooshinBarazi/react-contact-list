import { useEffect, useState } from "react";
import getOneContact from "../services/getOneContact";
import PutContact from "../services/putContact";

const EditContact = ({ history, match }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const id = match.params.id;

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async(e) => {
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory !");
      return;
    }
    e.preventDefault();
    await PutContact(id,contact);
    history.push("/");
  };

  useEffect(() => {
    getOneContact(id)
      .then(res => setContact({ name: res.data.name, email: res.data.email }))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="contactForm">
      <h3>Add Contact</h3>
      <form  onSubmit={submitForm}>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditContact;
