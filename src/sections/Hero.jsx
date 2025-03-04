import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8 ">
      <div className="flex flex-col lg:flex-row  items-center justify-center mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-center mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-[#EAEAEA]">
            👋Hi, I'm Alejandro Hernández Lara
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leding-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent ">
            Developer in training | Creating efficient solutions
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4 text-[#EAEAEA]">
            I'm a passionte Frontent Developer creating responsive, accesible,
            and dynamic web experiences using React and TailwindCSS
          </p>

          <div className="flex flex-col items-center justify-center lg:justify-start md:mt-6">
            <button
              className="flex-1 md:flex-none action-btn btn-scale-anim"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Alejandro Hernández Lara CV.pdf";
                link.download = "Alejandro Hernández Lara CV.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
