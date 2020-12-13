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
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://deliveroo.co.uk/menu/southampton/southampton-city-centre/thrive-to-go"
          >
            <motion.img
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={{
                visible: { opacity: 1, rotate: 0 },
                hidden: { opacity: 0, rotate: -40 },
              }}
              transition={{ duration: 0.6 }}
              className="delivery"
              src="/delivery/deliveroo-sm.png"
              alt="Deliveroo"
            />
          </a>

  )
}







