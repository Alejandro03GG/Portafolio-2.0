import React, { useState } from "react";
import { ABOUT_ME } from "../utils/data";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import ContactInfoCard from "../components/ContactInfoCard";
import { toast } from "sonner";

const ContactMe = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setStatus(toast.success("Message sent successfully!"));
      e.target.reset(); // Limpiar el formulario
    } else {
      setStatus(toast.error("Error sending message. Try again later."));
    }
  };

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
            <form className="flex flex-col" onSubmit={handleSubmit}>
              {/* Clave de Web3Forms */}
              <input type="hidden" name="access_key" value="e8ee98ef-d12c-430b-854c-11bc389d8615" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input-box"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="input-box"
                autoComplete="off"
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows={3}
                className="input-box"
                autoComplete="off"
                required
              />

              <button type="submit" className="action-btn btn-scale-anim">
                Send Message
              </button>

              {/* {status && <p className="text-white mt-2">{status}</p>} */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
