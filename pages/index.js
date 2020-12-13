import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Icon from '../components/icon'
import Gallery from "../components/gallery"
import Text from '../components/text'
import Title from '../components/title'
import Sub from '../components/subhead'
import CoffeeIcon from '../components/coffee'
import Deliveroo from '../components/deliveroo'
import Uber from '../components/uber'
import Button from "../components/button"
import Map from "../components/map"
import Form from "../components/form"
export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Layout>
      <Hero />
      <section id="food" className="w-screen py-8 bg-green-100 md:h-screen">
        <Icon />
        <div className="flex flex-col items-center justify-center w-5/6 mx-auto font-thin md:flex-row md:h-5/6 md:space-x-16">
          <Gallery />
          <Text/>
        </div>
      </section>
      <section
        id="order"
        className="relative flex flex-col items-center w-screen h-screen text-center justify-evenly md:text-left"
      >
        <div className="flex flex-col items-center text-center space-y-8">
          <Title text="Feeling Hungry Yet"/>
          <Sub text="We offer delivery + click and collect!"/>
          <Button
            text="Order Here"
            url="https://goodeats.io/cafethrivesouthampton"
          />
        </div>
        <CoffeeIcon/>

        <div className="flex items-center space-x-3">
          <Deliveroo/>
          <Uber/>
        </div>
      </section>
      <section
        id="times"
        className="flex flex-col items-center w-screen h-screen text-white bg-green-100 dark:text-black justify-evenly"
      >
        <div className="flex flex-col items-center font-thin space-y-4 font-body">
          <motion.h1
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-5xl text-center"
          >
            Our Opening Times
          </motion.h1>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            (During Covid-19)
          </motion.p>
        </div>
        <ul className="text-lg font-thin text-center space-y-4 font-body">
          <motion.li
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 5 },
            }}
            transition={{ duration: 0.4 }}
          >
            Monday: 12:00pm to 8pm
          </motion.li>
          <motion.li
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 5 },
            }}
            transition={{ duration: 0.4 }}
          >
            Tuesday: 12:00pm to 8pm
          </motion.li>
          <motion.li
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 5 },
            }}
            transition={{ duration: 0.4 }}
          >
            Wednesday: 12:00pm to 8pm
          </motion.li>
          <motion.li
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 5 },
            }}
            transition={{ duration: 0.4 }}
          >
            Thursday: 12:00pm to 8pm
          </motion.li>
          <motion.li
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 5 },
            }}
            transition={{ duration: 0.4 }}
          >
            Friday: 12:00pm to 9pm
          </motion.li>
          <motion.li
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 5 },
            }}
            transition={{ duration: 0.4 }}
          >
            Saturday: 11:00pm to 9pm
          </motion.li>
          <motion.li
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 5 },
            }}
            transition={{ duration: 0.4 }}
          >
            Sunday: 11:00pm to 8pm
          </motion.li>
        </ul>
      </section>
      <Map />
      <section
        id="contact"
        className="flex flex-col items-center w-screen h-screen text-white bg-green-100 justify-evenly"
      >
        <h1 className="text-5xl">Contact Us</h1>
        <Form />
      </section>
    </Layout>
  )
}
