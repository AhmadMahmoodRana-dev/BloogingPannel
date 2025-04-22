import React from "react";
import { FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import darkTheme from "../../colors/theme";
import Navbar from "../../components/Navbar";
import { MdArrowOutward } from "react-icons/md";
import Landing from "../../components/Landing";

export default function ContactUs() {
  return (
    <div
      style={{ backgroundColor: darkTheme.colors.background }}
      className="text-white min-h-screen font-sans"
    >
      <Navbar />
      {/* Top Contact Info */}
      <div
        style={{ borderColor: darkTheme.colors.border }}
        className="grid grid-cols-1 md:grid-cols-4 border-b text-sm"
      >
        {/* FIRST */}
        <div className="py-8 md:py-10 flex flex-col justify-center items-center border-b md:border-b-0">
          <div className="w-full px-4">
            <h3 className="font-semibold mb-2 text-lg">General Inquiries</h3>
            <p
              style={{
                backgroundColor: darkTheme.colors.cardBackground,
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textSecondary,
              }}
              className="flex gap-3 justify-between items-center p-4 my-3 rounded-md border"
            >
              contact@ai-podcasts.com
              <MdArrowOutward size={20} color="#ffd11a" />
            </p>
            <p
              style={{
                backgroundColor: darkTheme.colors.cardBackground,
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textSecondary,
              }}
              className="flex gap-3 justify-between items-center p-4 rounded-md border"
            >
              +1 (123) 456-7890
              <MdArrowOutward size={20} color="#ffd11a" />
            </p>
          </div>
        </div>
        {/* SECOND */}
        <div
          style={{ borderColor: darkTheme.colors.border }}
          className="py-8 md:py-10 border-b md:border-l md:border-b-0 flex flex-col justify-center items-center"
        >
          <div className="w-full px-4">
            <h3 className="font-semibold mb-2 text-lg">Technical Support</h3>
            <p
              style={{
                backgroundColor: darkTheme.colors.cardBackground,
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textSecondary,
              }}
              className="flex gap-3 justify-between items-center p-4 my-3 rounded-md border"
            >
              contact@ai-podcasts.com
              <MdArrowOutward size={20} color="#ffd11a" />
            </p>
            <p
              style={{
                backgroundColor: darkTheme.colors.cardBackground,
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textSecondary,
              }}
              className="flex gap-3 justify-between items-center p-4 rounded-md border"
            >
              +1 (123) 456-7890
              <MdArrowOutward size={20} color="#ffd11a" />
            </p>
          </div>
        </div>
        {/* THIRD */}
        <div
          style={{ borderColor: darkTheme.colors.border }}
          className="py-8 md:py-10 border-b md:border-l md:border-b-0 flex flex-col justify-center items-center"
        >
          <div className="w-full px-4">
            <h3 className="font-semibold mb-2 text-lg">Our Office</h3>
            <p
              style={{
                backgroundColor: darkTheme.colors.cardBackground,
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textSecondary,
              }}
              className="flex gap-3 justify-between items-center p-4 my-3 rounded-md border"
            >
              Address: 123 AI Tech Avenue, Techville, 54321{" "}
              <MdArrowOutward size={20} color="#ffd11a" />
            </p>
            <p
              style={{
                backgroundColor: darkTheme.colors.cardBackground,
                borderColor: darkTheme.colors.border,
                color: darkTheme.colors.textSecondary,
              }}
              className="flex gap-3 justify-between items-center p-4 rounded-md border"
            >
              Get Directions <MdArrowOutward size={20} color="#ffd11a" />
            </p>
          </div>
        </div>
        {/* FOURTH */}
        <div
          style={{ borderColor: darkTheme.colors.border }}
          className="py-8 md:py-10 border-b md:border-l md:border-b-0 flex flex-col"
        >
          <div className="w-full px-4">
            <h3 className="font-semibold mb-2 text-lg">Connect With Us</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <p
                style={{
                  backgroundColor: darkTheme.colors.cardBackground,
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textSecondary,
                }}
                className="flex justify-center items-center p-3 rounded-md border"
              >
                <FaTwitter size={20} color="#fff" />
              </p>
              <p
                style={{
                  backgroundColor: darkTheme.colors.cardBackground,
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textSecondary,
                }}
                className="flex justify-center items-center p-3 rounded-md border"
              >
                <FaYoutube size={20} color="#fff" />
              </p>
              <p
                style={{
                  backgroundColor: darkTheme.colors.cardBackground,
                  borderColor: darkTheme.colors.border,
                  color: darkTheme.colors.textSecondary,
                }}
                className="flex justify-center items-center p-3 rounded-md border"
              >
                <FaLinkedin size={20} color="#fff" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
        <div className="md:pr-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Get in Touch with AI Podcasts
          </h2>
          <p className="text-gray-400 mb-6 md:hidden">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              style={{ backgroundColor: darkTheme.colors.cardBackground }}
              type="text"
              placeholder="First Name"
              className="p-3  rounded w-full"
            />
            <input
              style={{ backgroundColor: darkTheme.colors.cardBackground }}
              type="text"
              placeholder="Last Name"
              className="p-3  rounded w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              style={{ backgroundColor: darkTheme.colors.cardBackground }}
              type="email"
              placeholder="Email Address"
              className="p-3  rounded w-full"
            />
            <input
              style={{ backgroundColor: darkTheme.colors.cardBackground }}
              type="tel"
              placeholder="Phone Number"
              className="p-3  rounded w-full"
            />
          </div>
          <textarea
            style={{ backgroundColor: darkTheme.colors.cardBackground }}
            placeholder="Your Message"
            rows={5}
            className="w-full p-3  rounded"
          />
          <div className="flex items-center text-sm">
            <input
              style={{ backgroundColor: darkTheme.colors.cardBackground }}
              type="checkbox"
              className="mr-2"
            />
            <label>I agree with Terms of Use and Privacy Policy</label>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-400 w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div
        style={{ backgroundColor: darkTheme.colors.cardBackground }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10"
      >
        <div className="md:pr-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">
            Frequently Asked Questions
          </h3>
          <p className="mb-4 text-gray-400 text-sm md:text-base">
            If your question isn't answered here, feel free to contact us
            directly.
          </p>
          <button
            style={{ backgroundColor: darkTheme.colors.background }}
            className="text-yellow-500 px-4 py-2 rounded text-sm md:text-base"
          >
            Ask Question →
          </button>
        </div>
        <div className="space-y-3">
          <details
            style={{ backgroundColor: darkTheme.colors.background }}
            className="rounded p-4"
          >
            <summary className="cursor-pointer font-medium text-sm md:text-base">
              What is AI?
            </summary>
            <p className="mt-2 text-sm text-gray-300">
              AI stands for Artificial Intelligence, which refers to the
              simulation of human intelligence in machines...
            </p>
          </details>
          <details
            style={{ backgroundColor: darkTheme.colors.background }}
            className="rounded p-4"
          >
            <summary className="cursor-pointer font-medium text-sm md:text-base">
              How can I listen to your podcasts?
            </summary>
            <p className="mt-2 text-sm text-gray-300">
              You can listen on Spotify, Apple Podcasts, and our website.
            </p>
          </details>
        </div>
      </div>
      <Landing/>
    </div>
  );
}
