import { useState } from "react";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform form submission logic here
    // For demonstration purposes, just showing the alert
    setShowAlert(true);
  };

  return (
    <div>
      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-white sm:text-xl">
            Got a Question ?
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xl font-medium text-white dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-opacity-50 bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-opacity-50 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="sample@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-xl font-medium text-white dark:text-white"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-opacity-50 bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-opacity-50 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let me know how I can help you"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-xl font-medium text-white dark:text-white"
              >
                Your message
              </label>
              <textarea
                id="message"
                className="shadow-sm bg-opacity-50 bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-opacity-50 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Leave a comment..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white sm:w-fit hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-100 dark:hover:bg-gray-300 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </div>
          </form>
          {showAlert && (
            <div className="mt-4">
              <Alert variant="filled" severity="success">
                Message Sent
              </Alert>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
