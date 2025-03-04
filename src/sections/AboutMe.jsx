import React from "react";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-10">
      <div className="flex items-start justify-center">
        <div className="flex-1">
          <h4 className="lg:block section-title text-center ">About Me</h4>

          <p className="text-[#EAEAEA] text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}

            <div className="flex gap-4 mt-6">
              {ABOUT_ME.socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  className="cursor-pointer group"
                >
                  <item.icon className="text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
                </a>
              ))}
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
