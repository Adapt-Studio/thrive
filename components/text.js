
  import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
export default function Text() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (

          <motion.div 
                      ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 10 },
          }}
            transition={{ duration: 0.4 }}
        className="flex flex-col mt-8 text-xl leading-relaxed text-white space-y-6 md:w-11/12 md:w-96 font-body md:mt-0"
          >

            <p>
              We’re a small business based in Southampton who believe good food
              shouldn’t cost the Earth.
            </p>

            <p>
              Our entire menu is plant based with plenty of gluten free and soy
              free options.
            </p>

            <p>
              All of our tea and coffee is Fairtrade, Organic and Rainforest
              Alliance Certified. We only use compostable, plant based take away
              cup and containers.
            </p>
        </motion.div>
  )
}


