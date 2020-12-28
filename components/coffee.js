import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
export default function CoffeeIcon({ text }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <picture>
      <source
        srcset="icons/coffee-dark.png"
        media="(prefers-color-scheme: dark)"
      />
      <source
        srcset="icons/coffee-light.png"
        media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
      />
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
        className="w-36 my-16 md:-my-16 md:ml-96 md:-mr-56"
        src="/icons/coffee-light.png"
        alt="Coffee Icon"
      />
    </picture>

  )
}





