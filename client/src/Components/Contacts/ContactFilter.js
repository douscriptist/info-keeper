import React, { useContext, useRef, useEffect, useState } from 'react';
import ContactContext from "../../Context/Contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  
  const [header, setHeader] = useState(" ");

  const { filterContacts, clearFilter, filtered } = contactContext;

  const input = useRef("");

  useEffect(() => {
    if(filtered === null) {
      input.current.value = "";
    }
  }, [contactContext, filtered]);

  const handleChange = e => {
    if(input.current.value.trim() !== "") {
      filterContacts(e.target.value);
      setHeader(e.target.value);
    }
    else {
      clearFilter();
    }
  }

  return (
    <form>
      <h2 className={filtered ? "text-purple" : "text-primary"}>{filtered ? `Filter: ${header}` : "Contacts"} </h2>
      <input
        ref={input}
        placeholder="Filter Contacts..."
        onChange={handleChange}
        type="text" />
    </form>
  )
}

export default ContactFilter;
