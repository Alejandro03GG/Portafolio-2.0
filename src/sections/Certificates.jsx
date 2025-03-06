import React from "react";
import { CERTIFICATES } from "../utils/data";
import CertificateCard from "../components/CertificateCard";

const Certificates = () => {
  return (
    <section id="certificates" className="text-[#EAEAEA] mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Certificates</h4>
          <p className="text-white text-sm text-center mt-4 leading-6">
            My educational journey and professional development through various platforms and technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {CERTIFICATES.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              title={certificate.title}
              platform={certificate.platform}
              description={certificate.description}
              link={certificate.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
