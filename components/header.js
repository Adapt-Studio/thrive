import Image from "next/image";
export default function () {
  return (
    <header className="w-screen h-24 flex justify-evenly items-end font-head text-2xl">
      <nav className="flex justify-evenly items-end space-x-24 -mr-24">
        <a className="hover:text-green-200" href="#home">
          Home
        </a>
        <a className="hover:text-green-200" href="#food">
          Food
        </a>
      </nav>
      <Image
        src="/icons/logo.png"
        alt="Cafe Thrive Logo"
        width={200}
        height={60}
      />
      <nav className="flex justify-evenly items-end space-x-24 -ml-24">
        <a className="hover:text-green-200" href="#order">
          Order
        </a>
        <a className="hover:text-green-200" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
