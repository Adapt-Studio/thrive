import GalleryContent from "./gallerycontent"
export default function Gallery() {
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
