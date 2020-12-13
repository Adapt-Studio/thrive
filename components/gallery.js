import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"
import GalleryContent from "./gallerycontent"
export default function Gallery() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
      <div className="container">
        <GalleryContent />
        <style jsx>{`
          @media (min-width: 1023px) {
            .container {
              width: 400px;
              height: 400px;
            }
          }
          @media (min-width: 1280px) {
            .container {
              width: 550px;
              height: 550px;
            }
          }
          @media (min-width: 1536px) {
            .container {
              width: 700px;
              height: 700px;
            }
          }
        `}</style>
      </div>
  )
}
