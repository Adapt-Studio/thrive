import Image from "next/image"
import { motion } from "framer-motion"
export default function Header() {
  return (
    <motion.header
      animate={{
        y: [-50, 0],
        opacity: [0, 1],
      }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center w-screen h-32 text-2xl bg-white md:h-24 md:items-end md:flex-row justify-evenly font-head md:pb-5 dark:bg-black"
    >
      <nav className="flex items-end hidden -mr-24 justify-evenly space-x-24 md:block">
        <a className="hover:text-green-200 dark:hover:text-white dark:text-green-200" href="#home">
          Home
          </a>
        <a className="hover:text-green-200 dark:hover:text-white dark:text-green-200" href="#food">
          Food
          </a>
      </nav>
      <a href="/">
        <picture>
          <source
            srcset="icons/logo-dark.png"
            media="(prefers-color-scheme: dark)"
          />
          <source
            srcset="icons/logo-light.png"
            media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
          />
          <img
            id="logo"
            src="/icons/logo-light.png"
            alt="Logo"
          />
        </picture>
      </a>
      <nav className="flex items-end hidden -ml-24 justify-evenly space-x-24 md:block">
        <a className="hover:text-green-200 dark:hover:text-white dark:text-green-200" href="#order">
          Order
          </a>
        <a className="hover:text-green-200 dark:hover:text-white dark:text-green-200" href="#contact">
          Contact
          </a>
      </nav>
      <nav className="flex items-center justify-center w-screen pt-4 md:hidden space-x-8">
        <a href="#home">Home</a>
        <a href="#food">Food</a>
        <a href="#order">Order</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  )
}
