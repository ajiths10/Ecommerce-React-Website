import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = (props) => {
  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPhoneNo, setPhoneNo] = useState("");

  const titlehandler = (event) => {
    setName(event.target.value.toString());
  };

  const opTexthandler = (event) => {
    setEmail(event.target.value.toString());
  };

  const datehandler = (event) => {
    setPhoneNo(event.target.value.toString());
  };

  const dataHandler = async (event) => {
    event.preventDefault();
    const userdata = {
      name: newName,
      email: newEmail,
      phoneno: newPhoneNo,
    };
    try {
      const response = await fetch(
        "https://ecommercewebsite-98a99-default-rtdb.firebaseio.com/userdata.json",
        {
          method: "POST",
          body: JSON.stringify(userdata),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setName('');
      setEmail('');
      setPhoneNo('');
      console.log(response);
    } catch (err) {
      console.log("Something went wrong!");
    }
  };

  return (
    <div className="maindiv">
      <h1>Contact Us</h1>
      <form className="mainform">
        <div>
          <label className="labelform">Name</label>
        </div>
        <div>
          <input type="text" value={newName} className="TextArea" onChange={titlehandler} />
        </div>
        <div>
          <label className="labelform">Email ID</label>
        </div>
        <div>
          <input type="email" value={newEmail} className="TextArea" onChange={opTexthandler} />
        </div>
        <div>
          <label className="labelform">Phone Number</label>
        </div>
        <div>
          <input type="number" value={newPhoneNo} className="TextArea" onChange={datehandler} />
        </div>
        <div>
          <button className="BTN" onClick={dataHandler}>
            ContactUs
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
