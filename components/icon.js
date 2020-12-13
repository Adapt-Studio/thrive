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
          src="/icons/open-blk.png"
          alt="Open Sign"
        />

  )
}

