import { motion } from "framer-motion"
export default function GhostBtn(props) {
  return (
    <a rel="noopener noreferrer" target="_blank" href={props.url}>
      {" "}
      <motion.button
        animate={{
          y: [50, 0],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.4 }}
        className="px-8 py-4 text-2xl text-green-200 bg-white dark:bg-black rounded-md font-head hover:bg-green-200 hover:text-white dark:hover:text-white dark:hover:bg-green-200"
      >
        {props.text}
      </motion.button>
    </a>
  )
}
