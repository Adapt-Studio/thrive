import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
export default function Icon() {
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
        srcset="icons/open-dark.png"
        media="(prefers-color-scheme: dark)"
      />
      <source
        srcset="icons/open-light.png"
        media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
      />
      <motion.img
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 0 },
          hidden: { opacity: 0, rotate: -40 }
        }}
        transition={{ duration: 0.6 }}
        className="w-32 h-24 mx-auto mb-8 md:mb-0"
        src="/icons/open-light.png"
        alt="Open Sign"
      />
    </picture>

  )
}

