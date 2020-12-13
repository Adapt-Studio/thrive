import GhostBtn from "./ghostbtn"
import { motion } from "framer-motion"
export default function Hero() {
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-evenly">
      <div className="flex items-center justify-evenly space-x-4">
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://goodeats.io/cafethrivesouthampton"
        >
          <motion.div
            animate={{
              scale: [0, 1],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              className="delivery"
              src="/delivery/thrive-collect.png"
              alt="Thrive Collect"
            />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://deliveroo.co.uk/menu/southampton/southampton-city-centre/thrive-to-go"
        >
          <motion.div
            animate={{
              scale: [0, 1],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              className="delivery"
              src="/delivery/deliveroo.png"
              alt="Deliveroo Logo"
            />
          </motion.div>
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.ubereats.com/gb/portsmouth/food-delivery/cafe-thrive/ZfYxc2ObQamnhLKDsarq2A?utm_source=google&utm_medium=organic&utm_campaign=place-action-link"
        >
          <motion.div
            animate={{
              scale: [0, 1],
              opacity: [0, 1],
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              className="delivery"
              src="/delivery/uber.png"
              alt="Uber Logo"
            />
          </motion.div>
        </a>
      </div>
      <GhostBtn
        text="View Our Menu"
        url="https://cafethrive.co.uk/Content/files/menus/Southampton%20Thrive%20Menu.pdf"
      />
    </div>
  )
}
