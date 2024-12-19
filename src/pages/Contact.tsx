import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../components/Button";
import HeaderBanner from "../components/HeaderBanner";

interface ContactProps {
  selectedColor:
    | "violet"
    | "red"
    | "purple"
    | "blue"
    | "amber"
    | "pink"
    | "lime"
    | "orange"
    | "green"
    | "yellow"
    | null;
}

const Contact: React.FC<ContactProps> = ({ selectedColor }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(import.meta.env.VITE_YOUR_SERVICE_ID);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID as string,
        import.meta.env.VITE_YOUR_TEMPLATE_ID as string,
        formRef.current!,
        import.meta.env.VITE_YOUR_USER_ID
      );

      setMessage("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      setMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      formRef.current?.reset();
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Section Title */}
      <HeaderBanner
        titlePart1="Get in"
        titlePart2="Touch"
        backgroundText="Contact"
        selectedColor={selectedColor || "yellow"}
      />

      <div className="flex items-center pt-20 sm:pt-0">
        <div className="xl:max-w-[1075px] lg:max-w-[885px] md:max-w-[calc(100% - 195px)] sm:max-w-[720px] mx-auto w-full px-7">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side */}
            <div className="w-full lg:w-1/3">
              <h3 className="text-2xl font-bold uppercase mb-4">
                Don't be shy!
              </h3>
              <p className="text-gray-400 text-base mb-6">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas, or opportunities to be
                part of your visions.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div
                  className={`flex items-center gap-4 text-${selectedColor}-500`}
                >
                  <FaEnvelopeOpen size={35} />
                  <div>
                    <span className="block uppercase text-gray-500 text-sm">
                      Mail Me
                    </span>
                    <span className="text-base font-bold dark:text-white text-gray-500">
                      ouda.yousef@gmail.com
                    </span>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-4 text-${selectedColor}-500`}
                >
                  <FaLocationDot size={40} />
                  <div>
                    <span className="block uppercase text-gray-500 text-sm">
                      Location
                    </span>
                    <span className="text-base font-bold dark:text-white text-gray-500">
                      Ontario, Canada
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/yousef.ouda.31/"
                  target="_blank"
                  className={`w-10 h-10 dark:bg-gray-800 bg-gray-200 flex items-center justify-center rounded-full hover:bg-${selectedColor}-500 hover:text-white dark:hover:bg-${selectedColor}-500 dark:hover:text-white transition`}
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/yousef-ouda"
                  target="_blank"
                  className={`w-10 h-10 dark:bg-gray-800 bg-gray-200 flex items-center justify-center rounded-full hover:bg-${selectedColor}-500 hover:text-white dark:hover:bg-${selectedColor}-500 dark:hover:text-white transition`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/yousefouda_/"
                  target="_blank"
                  className={`w-10 h-10 dark:bg-gray-800 bg-gray-200 flex items-center justify-center rounded-full hover:bg-${selectedColor}-500 hover:text-white dark:hover:bg-${selectedColor}-500 dark:hover:text-white transition`}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/youda97"
                  target="_blank"
                  className={`w-10 h-10 dark:bg-gray-800 bg-gray-200 flex items-center justify-center rounded-full hover:bg-${selectedColor}-500 hover:text-white dark:hover:bg-${selectedColor}-500 dark:hover:text-white transition`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-2/3">
              <form ref={formRef} className="space-y-6" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className={`w-full dark:bg-gray-800 bg-white placeholder-gray-500 p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-${selectedColor}-500 focus:outline-none`}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className={`w-full dark:bg-gray-800 bg-white placeholder-gray-500 p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-${selectedColor}-500 focus:outline-none`}
                  />
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Your Subject"
                    className={`w-full dark:bg-gray-800 bg-white placeholder-gray-500 p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-${selectedColor}-500 focus:outline-none`}
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  required
                  className={`w-full dark:bg-gray-800 bg-white placeholder-gray-500 p-4 rounded-lg border border-gray-700 focus:ring-2 focus:ring-${selectedColor}-500 focus:outline-none h-32`}
                ></textarea>
                <Button
                  label={isSubmitting ? "Sending..." : "Send Message"}
                  icon={<FaPaperPlane />}
                  selectedColor={selectedColor}
                  onClick={() => {}}
                />
              </form>
              <div className="w-full px-4 sm:px-0">
                <span className="h-0 text-centerrounded-30 block  mt-7 mb-14">
                  {message}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
