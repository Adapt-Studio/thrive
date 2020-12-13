import Image from "next/image"
import Headroom from 'react-headroom'
import ScrollAnimation from 'react-animate-on-scroll';
export default function () {
  return (
    <Headroom>
      <header className="flex flex-col items-center w-screen h-32 text-2xl bg-white md:h-24 md:items-end md:flex-row justify-evenly font-head md:pb-5">
      <nav className="flex items-end hidden -mr-24 justify-evenly space-x-24 md:block">
        <a className="hover:text-green-200" href="#home">
          Home
        </a>
        <a className="hover:text-green-200" href="#food">
          Food
        </a>
      </nav>
      <a href="/">
      <Image
        src="/icons/logo.png"
        alt="Cafe Thrive Logo"
        width={200}
        height={60}
      />
      </a>
      <nav className="flex items-end hidden -ml-24 justify-evenly space-x-24 md:block">
        <a className="hover:text-green-200" href="#order">
          Order
        </a>
        <a className="hover:text-green-200" href="#contact">
          Contact
        </a>
      </nav>
      <nav className="flex items-center justify-center w-screen pt-4 md:hidden space-x-8">
        <a href="#home">Home</a>
        <a href="#food">Food</a>
        <a href="#order">Order</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    </Headroom>
  )
}
