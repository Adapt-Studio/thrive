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
          button {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          }
          @media (prefers-color-scheme: dark) {
             button {
              box-shadow: 2px 2px rgba(255,255,255,0.6)
            }
          }
        `}</style>
      </motion.button>
    </a>
  )
}
