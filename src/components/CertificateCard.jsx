import React from "react";

const CertificateCard = ({ title, platform, description, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#000000] rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-primary text-lg font-medium mb-2">{title}</h3>
        <span className="text-secondary text-sm mb-3">{platform}</span>
        <p className="text-[#EAEAEA] text-sm flex-grow">{description}</p>
      </div>
    </a>
  );
};

export default CertificateCard;
