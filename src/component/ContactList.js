import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getContacts from "../services/getContacts";
import profileImg from "../images/profile.jfif";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const filterContacts = allContacts.filter((c) => {
      return c.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setContacts(filterContacts);
  };

  useEffect(() => {
    getContacts()
      .then((res) => {
        setContacts(res.data);
        setAllContacts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="listHeader">
        <h3>Contact Manager</h3>
        <input
          type="serach"
          placeholder="Search"
          value={searchTerm}
          onChange={searchHandler}
        />
        <Link to="/add">
          <button>Add New Contact</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        return (
          <Link
            to={{
              pathname: `/user/${contact.id}`,
              state: { contact: contact },
            }}
            key={contact.id}
          >
            <div className="contactList">
                <img src={profileImg} alt="profile-img" />
                <p>{contact.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ContactList;
