import React from "react";
import ContactForm from "./ContactForm";

const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-amber-500 text-3xl mb-4">Get In Touch</h2>
        <p>
          Feel free to reach out if you’d like to collaborate
          <br />
          you are just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactLeft;
