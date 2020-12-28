import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
export default function Button(props) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <a href={props.url}>
      <motion.button
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.4 }}
        className="px-8 py-4 text-2xl text-white bg-green-200 shadow-md dark:text-black hover:text-black dark:hover:text-white font-head rounded-md"
      >
        {props.text}
        <style jsx>{`
          @media (prefers-color-scheme: dark) {
            button {
              box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.6);
            }
          }
        `}</style>
      </motion.button>
    </a>
  )
}
