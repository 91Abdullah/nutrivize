import { useForm, ValidationError } from '@formspree/react'
export default function ContactForm() {

  const [state, handleSubmit] = useForm("mbjeowar");
  if (state.succeeded) {
    return <p className="text-6xl">Thanks for contacting us!</p>;
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="pb-10">
        <span className="text-6xl border-b-4 border-pink-500">Contact Us</span>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
          address</label>
        <input name="email" type="email" id="email" className="bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
        <textarea name="message" className="bg-gray-50 border border-pink-300 text-gray-900 text-sm rounded-l focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button disabled={state.submitting} type="submit" className="text-white bg-pink-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  )
}