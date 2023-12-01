// Contact page
// Used the sendContact function to send it to the API

"use client";
import { useState } from "react";
import { sendContact } from "@/lib/send-contact";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: any; preventDefault: () => void }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const onSubmit = async (e: { target: any; preventDefault: () => void }) => {
    e.preventDefault();
    sendContact({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    router.push("/");
  };
  return (
    <div>
      <div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col p-5 my-10 max-w-2xl mx-auto mb-10"
        >
          <h3 className="text-3xl font-bold">Have a message for us?</h3>
          <hr className="py-3 mt-2" />
          <label className="block mb-5">
            <span>Name</span>
            <input
              name="name"
              className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
              placeholder="John Doe"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-5">
            <span>Email</span>
            <input
              name="email"
              className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
              placeholder="johndoe@gmail.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-5">
            <span>Message</span>
            <textarea
              name="message"
              className="shadow border border-b-gray-200 bg-transparent rounded py-2 px-3 form-input mt-1 block w-full"
              placeholder="Your message"
              rows={8}
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          <input
            type="submit"
            className="shadow bg-sky-700 hover:bg-sky-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
