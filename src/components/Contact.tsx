"use client";

import React, { useState } from "react";
import { BackgroundLines } from "./ui/background-lines";

enum FormStatus {
  Idle = "IDLE",
  Sending = "SENDING",
  Success = "SUCCESS",
  Error = "ERROR",
}

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>(FormStatus.Idle);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e.target.value);
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.Sending);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus(FormStatus.Success);
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus(FormStatus.Error);
    }
  };

  const renderStatusMessage = () => {
    switch (status) {
      case FormStatus.Sending:
        return <p className="mt-4 text-sm text-gray-400">Sending...</p>;
      case FormStatus.Success:
        return (
          <p className="mt-4 text-sm text-green-400">
            Message sent successfully!
          </p>
        );
      case FormStatus.Error:
        return (
          <p className="mt-4 text-sm text-red-400">
            Failed to send message. Please try again.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id="contact"
      className="w-full  min-h-[80vh] bg-black text-white flex items-center justify-center  md:px-20 mb-14"
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-12 ">
        {/* Left text section */}
        <div className="relative flex-1 flex flex-col justify-center h-[60vh]">
          <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-black">
            <h2 className="text-3xl font-bold mb-6 ">Let’s Connect</h2>
            <p className="text-gray-300 text-lg leading-relaxed ">
              We are happy to assist you with any questions about our
              technology, pricing plans, and custom contact options.
            </p>
          </BackgroundLines>
        </div>

        {/* Right form section */}
        <div className="flex-1 bg-[#0f0f0f] p-8 rounded-2xl shadow-lg  backdrop-blur-md">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-[#19E09A] outline-none text-white"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-[#19E09A] outline-none text-white"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-600 focus:border-[#19E09A] outline-none text-white"
            ></textarea>
            <button
              type="submit"
              className={`bg-[#19E09A] disabled:opacity-20 disabled:cursor-not-allowed text-black py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 cursor-pointer `}
              disabled={status === FormStatus.Sending}
            >
              Send Message
            </button>
          </form>
           {renderStatusMessage()}
        </div>
      </div>
    </div>
  );
};

export default Contact;
