export default function Form() {
  return (
    <form className=".form w-96 flex flex-col items-center space-y-4 text-white">
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
        className="bg-green-200 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md shadow-md font-head text-2xl px-16 py-4"
      >
        Send
      </button>
    </form>
  );
}
