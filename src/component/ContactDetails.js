import { Link } from "react-router-dom";
import deleteContact from "../services/deleteContact";
import profileImg from "../images/profile.jfif";

const ContactDetails = ({ location, match, history }) => {
  const id = match.params.id;
  const { contact } = location.state;

  const removeHandler = async (id) => {
    try {
      await deleteContact(id);
      //   const filterdContact = contacts.filter((contact) => contact.id !== id);
      //   setContacts(filterdContact);
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className="contactDetailes">
      <h3>Contact Details</h3>
      <img src={profileImg} alt="profile-img" />
      <span>{contact.name}</span>
      <span>{contact.email}</span>
     <div>
     <Link to={`/edit/${id}`}>
        <button className="editBtn">Edit</button>
      </Link>
      <button className="removeBtn" onClick={() => removeHandler(id)}>
        Delete
      </button>
     </div>
    </div>
  );
};

export default ContactDetails;
