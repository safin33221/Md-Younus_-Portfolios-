import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      {/* linkedin */}
      <div className="text-2xl h-12 w-12 border border-amber-500 text-amber-500 rounded-full p-3 flex items-center justify-center ">
        <a href="#" className="cursor-pointer">
          <FaLinkedinIn />
        </a>
      </div>

      {/* github */}
      <div className="text-2xl h-12 w-12 border border-amber-500 text-amber-500 rounded-full p-3 flex items-center justify-center ">
        <a href="#" className="cursor-pointer">
          <FiFacebook />
        </a>
      </div>

      {/* instagram */}
      <div className="text-2xl h-12 w-12 border border-amber-500 text-amber-500 rounded-full p-3 flex items-center justify-center ">
        <a href="#" className="cursor-pointer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactSocial;
