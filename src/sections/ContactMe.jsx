import React from "react";
import { ABOUT_ME } from "../utils/data";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import ContactInfoCard from "../components/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard
              icon={<IoPhonePortraitOutline />}
              text={ABOUT_ME.phone}
            />
          </div>
          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Contact Form
            </h5>
            <form className="flex flex-col">
              <input
                type="text"
                name="fullname"
                placeholder="Your Name"
                id=""
                className="input-box"
                autoComplete="off"
              />

              <input
                type="text"
                name="email"
                placeholder="you@example.com"
                id=""
                className="input-box"
                autoComplete="off"
              />

              <textarea
                type="text"
                name="message"
                placeholder="Write your message..."
                id=""
                rows={3}
                className="input-box"
                autoComplete="off"
              />
              <button className="action-btn btn-scale-anim">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
