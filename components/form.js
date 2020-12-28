export default function Form() {
  return (
    <form className="form w-96 flex flex-col items-center space-y-4 text-white">
      <input
        className="py-2 placeholder-white"
        type="name"
        name="name"
        placeholder="Name"
      />
      <input
        className="py-2 placeholder-white"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="py-2 placeholder-white"
        type="number"
        name="phone"
        placeholder="Phone Number"
      />
      <textarea
        className="h-24 placeholder-white"
        name="message"
        placeholder="Message"
      />
      <button
        type="submit"
        className="px-16 py-4 text-2xl text-white bg-green-200 shadow-md dark:text-black hover:text-black dark:hover:text-white rounded-md font-head"
      >
        Send
      </button>
    </form>
  )
}
