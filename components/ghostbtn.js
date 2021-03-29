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
      <style jsx>{`
          button {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          }
          @media (prefers-color-scheme: dark) {
             button {
              box-shadow: 2px 2px rgba(255,255,255,0.6)
            }
          }
        `}</style>
    </a>
  )
}
