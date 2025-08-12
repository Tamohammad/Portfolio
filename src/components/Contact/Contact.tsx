import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

const email = "mohammadtakta120@gmail.com";

function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget; // ذخیره ارجاع به فرم

    const formData = new FormData(form);

    formData.append("access_key", "7d086d49-f8ca-468a-9ae5-09e318a4ac5e");
    formData.set("botcheck", "");

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        form.reset(); // استفاده از ارجاع فرم ذخیره شده
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("An error occurred", error);
      toast.error("An error occurred, please try again later");
    }
    setLoading(false);
  };

  return (
    <section id="contact">
      <div
        className="animate-fadeIn animation-delay-2 mx-auto p-6 md:px-10 py-14 max-w-4xl 
                   bg-gradient-to-tr from-[#0B1D2F] to-[#134E48]
                   rounded-tl-[20px] rounded-br-[20px] rounded-tr-[50px] rounded-bl-[50px] contact-shadow"
      >
        <h2 className="mb-10 text-3xl font-bold md:mt-0 md:text-4xl text-center relative text-white">
          Contact
          <hr
            className="w-12 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-[54px]
                       md:mt-1 md:w-14 md:-translate-x-[65px]"
          />
        </h2>
        <div className="flex flex-col items-center md:flex-row md:items-start md:px-10 text-white">
          <div className="md:w-2/5 mb-8 text-center md:text-left md:pr-10 md:mr-4">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              I'm available for full time opportunities
            </h3>
            <p>
              Feel free to directly contact me via{" "}
              <a
                href={`mailto:${email}`}
                className="hover:text-secondary transition-colors underline"
              >
                Email
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/in/mohammad-ahmadi-9b7397362"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors underline"
              >
                Linkedin
              </a>
            </p>
          </div>

          <div className="md:w-3/5 w-full">
            <form onSubmit={onSubmitForm} className="flex flex-col gap-4">
              <input
                type="hidden"
                name="subject"
                value="New Submission From Contact Form. Please check your email."
              />
              <input type="hidden" name="botcheck" value="" />

              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600
             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
             focus:outline-none focus:ring-2 focus:ring-teal-600"
              />

              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600
             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
             focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
              <Textarea
                name="message"
                placeholder="Message"
                required
                className="px-4 py-2 rounded-md border border-gray-400 dark:border-gray-600
             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
             focus:outline-none focus:ring-2 focus:ring-teal-600"
              />

              <Button
                variant="secondary"
                type="submit"
                className="relative bg-teal-700 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg shadow transition"
                disabled={loading}
              >
                Submit {loading && <Spinner />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
