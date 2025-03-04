import React from "react";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-[#000000] rounded border border-[#3D4A5D] px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-primary flex items-center justify-center bg-gradient-to-b from-[#7fbafa] to-[#72b4fc] rounded-lg">
        {icon}
      </div>

      <p className="text-white text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default ContactInfoCard;
