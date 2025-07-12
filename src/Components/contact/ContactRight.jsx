import React from "react";
import ContactSocial from "./ContactSocial";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import emailImage from "/images/email-image.png"

const ContactRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src={emailImage}
        alt="email image"
        className="max-w-[100px]"
      />
      <div className="flex flex-col gap-4">
        {/* email address */}
        <div className="flex gap-4 items-center justify-start">
          <HiOutlineMail className="text-3xl" />
          <p>dmyounus77@gmail.com</p>
        </div>

        {/* phone number */}
        <div className="flex gap-4 items-center justify-start">
          <FiPhone className="text-3xl" />
          <p>+880 1866177468 </p>
        </div>

        {/* location */}
        <div className="flex gap-4 items-center justify-start">
          <IoLocationOutline className="text-3xl" />
          <p>Feni, Chattogram, Bangladesh</p>
        </div>
      </div>
      <ContactSocial />
    </div>
  );
};

export default ContactRight;
