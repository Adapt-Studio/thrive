        import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
export default function CoffeeIcon({text}) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          transition={{ duration: 0.4 }}
          id="coffee"
          className="self-end mr-32 md:-my-16 w-36"
          src="/icons/coffee-blk.png"
          alt="Coffee Icon"
        />
  )
}





